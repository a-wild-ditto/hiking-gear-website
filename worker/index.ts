import { isAnalyticsAllowedLocation } from '../src/config/analytics.ts';

type AnalyticsEngineDataset = {
  writeDataPoint(point: {
    indexes: string[];
    blobs: string[];
    doubles: number[];
  }): void;
};

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> };
  ANALYTICS: AnalyticsEngineDataset;
};

const events = new Set([
  'session_start',
  'page_view',
  'kit_cta_click',
  'product_click',
  'merchant_click',
  'builder_start',
  'builder_answer',
  'builder_result',
  'builder_result_click',
  'retailer_comparison_open',
]);
const surfaces = new Set([
  'home',
  'kit',
  'gear',
  'guide',
  'builder',
  'navigation',
  'other',
]);
const kitIds = new Set(['starter', 'value']);
const builderResults = new Set(['starter', 'value', 'no_match']);
const answerSets: Record<string, Set<string>> = {
  location: new Set(['nsw', 'vic', 'tasmania', 'queensland', 'other']),
  season: new Set(['three-season', 'winter']),
  people: new Set(['solo', 'two']),
  budget: new Set(['under-300', '300-500', 'over-500']),
  priority: new Set(['lowest-cost', 'comfort', 'lightweight']),
  experience: new Set(['first', 'few', 'experienced']),
};
const allowedKeys = new Set([
  'version',
  'event',
  'sessionId',
  'sequence',
  'path',
  'landingPath',
  'source',
  'medium',
  'campaign',
  'content',
  'referrerDomain',
  'productSlug',
  'kitId',
  'placement',
  'sourceSurface',
  'sourceId',
  'merchant',
  'affiliate',
  'affiliateTrackingKey',
  'builderResult',
  'questionKey',
  'answerValue',
  'stepNumber',
  'builderAttemptNumber',
]);

const text = (value: unknown, max = 100) =>
  typeof value === 'string'
    ? value
        .replace(/[\u0000-\u001f\u007f]/g, '')
        .trim()
        .slice(0, max)
    : '';
const isPath = (value: unknown) => {
  if (typeof value !== 'string' || !value.startsWith('/') || value.length > 500)
    return false;
  return !/[?#\u0000-\u001f\u007f]/.test(value) && !value.startsWith('//');
};
const isPositiveInt = (value: unknown, max = 1_000_000) =>
  Number.isInteger(value) && Number(value) > 0 && Number(value) <= max;
const has = (body: Record<string, unknown>, key: string) =>
  body[key] !== undefined && body[key] !== '';

function validEvent(body: Record<string, unknown>) {
  if (body.version !== 1 || !events.has(text(body.event))) return false;
  if (
    typeof body.sessionId !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      body.sessionId,
    ) ||
    !isPositiveInt(body.sequence) ||
    !isPath(body.path) ||
    !isPath(body.landingPath) ||
    !text(body.source) ||
    !text(body.medium)
  )
    return false;
  if (has(body, 'kitId') && !kitIds.has(text(body.kitId))) return false;
  if (has(body, 'sourceSurface') && !surfaces.has(text(body.sourceSurface)))
    return false;
  if (
    has(body, 'builderResult') &&
    !builderResults.has(text(body.builderResult))
  )
    return false;
  if (
    has(body, 'builderAttemptNumber') &&
    !isPositiveInt(body.builderAttemptNumber, 10_000)
  )
    return false;

  const event = text(body.event);
  if (
    event !== 'builder_answer' &&
    (has(body, 'questionKey') ||
      has(body, 'answerValue') ||
      has(body, 'stepNumber'))
  )
    return false;
  if (event === 'kit_cta_click')
    return kitIds.has(text(body.kitId)) && Boolean(text(body.placement));
  if (event === 'product_click')
    return (
      Boolean(text(body.productSlug)) &&
      surfaces.has(text(body.sourceSurface)) &&
      Boolean(text(body.placement))
    );
  if (event === 'merchant_click')
    return (
      Boolean(text(body.productSlug)) &&
      Boolean(text(body.merchant)) &&
      typeof body.affiliate === 'boolean' &&
      Boolean(text(body.placement)) &&
      Boolean(text(body.affiliateTrackingKey))
    );
  if (event === 'builder_start')
    return isPositiveInt(body.builderAttemptNumber, 10_000);
  if (event === 'builder_answer') {
    const question = text(body.questionKey);
    return (
      Boolean(answerSets[question]?.has(text(body.answerValue))) &&
      isPositiveInt(body.stepNumber, 6) &&
      isPositiveInt(body.builderAttemptNumber, 10_000) &&
      ['step_commit', 'final_snapshot'].includes(text(body.placement))
    );
  }
  if (event === 'builder_result')
    return (
      builderResults.has(text(body.builderResult)) &&
      isPositiveInt(body.builderAttemptNumber, 10_000)
    );
  if (event === 'builder_result_click')
    return (
      builderResults.has(text(body.builderResult)) &&
      isPositiveInt(body.builderAttemptNumber, 10_000) &&
      Boolean(text(body.sourceId)) &&
      Boolean(text(body.placement))
    );
  return true;
}

export function originAllowed(request: Request) {
  const origin = request.headers.get('origin');
  const site = request.headers.get('sec-fetch-site');
  let allowedOrigin = false;
  try {
    const parsedOrigin = new URL(origin ?? '');
    allowedOrigin =
      parsedOrigin.origin === origin &&
      isAnalyticsAllowedLocation(parsedOrigin.hostname, parsedOrigin.protocol);
  } catch {
    // Missing and malformed origins are rejected.
  }
  return (
    allowedOrigin &&
    (!site || ['same-origin', 'same-site', 'none'].includes(site))
  );
}

async function analytics(request: Request, env: Env) {
  if (request.method !== 'POST') return new Response(null, { status: 405 });
  if (!originAllowed(request)) return new Response(null, { status: 403 });
  if (
    !request.headers
      .get('content-type')
      ?.toLowerCase()
      .startsWith('application/json')
  )
    return new Response(null, { status: 415 });
  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > 4096) return new Response(null, { status: 413 });

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > 4096)
    return new Response(null, { status: 413 });
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return new Response(null, { status: 400 });
  }
  if (
    !body ||
    Array.isArray(body) ||
    Object.keys(body).some((key) => !allowedKeys.has(key)) ||
    !validEvent(body)
  )
    return new Response(null, { status: 400 });

  const country = text(
    (request as Request & { cf?: { country?: string } }).cf?.country,
    2,
  ).toUpperCase();
  env.ANALYTICS.writeDataPoint({
    indexes: [text(body.sessionId, 96)],
    blobs: [
      text(body.event),
      '1',
      text(body.path, 500),
      text(body.landingPath, 500),
      text(body.source),
      text(body.medium),
      text(body.campaign),
      text(body.content),
      text(body.referrerDomain),
      text(body.productSlug),
      text(body.kitId),
      text(body.placement),
      text(body.sourceSurface),
      text(body.sourceId),
      text(body.merchant),
      text(body.builderResult),
      /^[A-Z]{2}$/.test(country) ? country : '',
      text(body.affiliateTrackingKey),
      text(body.questionKey),
      text(body.answerValue),
    ],
    doubles: [
      1,
      Number(body.stepNumber) || 0,
      body.affiliate === true ? 1 : 0,
      Number(body.sequence),
      Number(body.builderAttemptNumber) || 0,
    ],
  });
  return new Response(null, { status: 204 });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/analytics') return analytics(request, env);
    return env.ASSETS.fetch(request);
  },
};
