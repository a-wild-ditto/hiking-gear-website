export type AnalyticsEvent =
  | 'session_start'
  | 'page_view'
  | 'kit_cta_click'
  | 'product_click'
  | 'merchant_click'
  | 'builder_start'
  | 'builder_answer'
  | 'builder_result'
  | 'builder_result_click'
  | 'retailer_comparison_open';

type SourceSurface =
  'home' | 'kit' | 'gear' | 'guide' | 'builder' | 'navigation' | 'other';

export type AnalyticsContext = {
  productSlug?: string;
  kitId?: 'starter' | 'value';
  placement?: string;
  sourceSurface?: SourceSurface;
  sourceId?: string;
  merchant?: string;
  affiliate?: boolean;
  affiliateTrackingKey?: string;
  builderResult?: 'starter' | 'value' | 'no_match';
  questionKey?:
    'location' | 'season' | 'people' | 'budget' | 'priority' | 'experience';
  answerValue?: string;
  stepNumber?: number;
  builderAttemptNumber?: number;
};

type Acquisition = {
  landingPath: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  referrerDomain: string;
};

type JourneyContext = {
  targetPath: string;
  productSlug?: string;
  kitId?: 'starter' | 'value';
  sourceSurface: SourceSurface;
  sourceId?: string;
  placement?: string;
  createdAt: number;
};

const keys = {
  session: 'bg_session_id_v1',
  sequence: 'bg_event_sequence_v1',
  acquisition: 'bg_acquisition_v1',
  journey: 'bg_journey_v1',
  attemptCounter: 'bg_builder_attempt_counter_v1',
  latestAttempt: 'bg_latest_completed_builder_attempt_v1',
  startedAttempt: 'bg_current_builder_attempt_v1',
  sessionStarted: 'bg_session_started_v1',
} as const;

const memoryStorage = new Map<string, string>();
const safeStorage = {
  get(key: string) {
    try {
      return sessionStorage.getItem(key) ?? memoryStorage.get(key) ?? null;
    } catch {
      return memoryStorage.get(key) ?? null;
    }
  },
  set(key: string, value: string) {
    memoryStorage.set(key, value);
    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key: string) {
    memoryStorage.delete(key);
    try {
      sessionStorage.removeItem(key);
    } catch {
      // Analytics must fail open when storage is unavailable.
    }
  },
};

const clean = (value: string, lowercase = false) => {
  const cleaned = value
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, 100);
  return lowercase ? cleaned.toLowerCase() : cleaned;
};

const pathnameOnly = (value: string) => {
  try {
    return new URL(value, location.origin).pathname.slice(0, 500) || '/';
  } catch {
    return '/';
  }
};

const classifyReferrer = (hostname: string) => {
  const host = hostname.toLowerCase().replace(/^www\./, '');
  if (!host) return { source: 'direct', medium: 'none' };
  if (/^(google\.|bing\.|duckduckgo\.|search\.yahoo\.)/.test(host)) {
    return { source: host.split('.')[0], medium: 'organic' };
  }
  if (host.endsWith('youtube.com') || host === 'youtu.be')
    return { source: 'youtube', medium: 'referral' };
  for (const social of ['instagram', 'facebook', 'tiktok', 'reddit']) {
    if (host.includes(`${social}.`))
      return { source: social, medium: 'social' };
  }
  return { source: host.slice(0, 100), medium: 'referral' };
};

const getAcquisition = (): Acquisition => {
  const stored = safeStorage.get(keys.acquisition);
  if (stored) {
    try {
      return JSON.parse(stored) as Acquisition;
    } catch {
      safeStorage.remove(keys.acquisition);
    }
  }

  const params = new URLSearchParams(location.search);
  const source = clean(params.get('utm_source') ?? '', true);
  const medium = clean(params.get('utm_medium') ?? '', true);
  let referrerDomain = '';
  try {
    const referrer = document.referrer ? new URL(document.referrer) : null;
    if (referrer && referrer.origin !== location.origin) {
      referrerDomain = clean(referrer.hostname, true);
    }
  } catch {
    // An invalid referrer is treated as direct traffic.
  }
  const classified = classifyReferrer(referrerDomain);
  const acquisition: Acquisition = {
    landingPath: location.pathname,
    source: source || classified.source,
    medium: medium || (source ? 'unknown' : classified.medium),
    campaign: clean(params.get('utm_campaign') ?? ''),
    content: clean(params.get('utm_content') ?? ''),
    referrerDomain,
  };
  safeStorage.set(keys.acquisition, JSON.stringify(acquisition));
  return acquisition;
};

const getSessionId = () => {
  const existing = safeStorage.get(keys.session);
  if (existing) return existing;
  const id = crypto.randomUUID();
  safeStorage.set(keys.session, id);
  return id;
};

const nextSequence = () => {
  const current = Number(safeStorage.get(keys.sequence) ?? '0');
  const next = Number.isSafeInteger(current) && current >= 0 ? current + 1 : 1;
  safeStorage.set(keys.sequence, String(next));
  return next;
};

const currentSurface = (): {
  sourceSurface: SourceSurface;
  sourceId?: string;
} => {
  const parts = location.pathname.split('/').filter(Boolean);
  if (location.pathname === '/') return { sourceSurface: 'home' };
  if (parts[0] === 'gear') return { sourceSurface: 'gear', sourceId: parts[1] };
  if (parts[0] === 'guides')
    return { sourceSurface: 'guide', sourceId: parts[1] };
  if (parts[0] === 'build-my-kit') return { sourceSurface: 'builder' };
  return { sourceSurface: 'other' };
};

const applicableJourney = (): Partial<JourneyContext> => {
  const stored = safeStorage.get(keys.journey);
  if (!stored) return {};
  try {
    const journey = JSON.parse(stored) as JourneyContext;
    if (
      Date.now() - journey.createdAt > 30 * 60 * 1000 ||
      journey.targetPath !== location.pathname
    ) {
      safeStorage.remove(keys.journey);
      return {};
    }
    return {
      productSlug: journey.productSlug,
      kitId: journey.kitId,
      sourceSurface: journey.sourceSurface,
      sourceId: journey.sourceId,
      placement: journey.placement,
    };
  } catch {
    safeStorage.remove(keys.journey);
    return {};
  }
};

const privacyOptOut = () =>
  navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true;

export const track = (
  event: AnalyticsEvent,
  context: AnalyticsContext = {},
) => {
  if (privacyOptOut()) return;
  try {
    const acquisition = getAcquisition();
    const journey = applicableJourney();
    const latestAttempt = Number(safeStorage.get(keys.latestAttempt) ?? '0');
    const journeyEvents: AnalyticsEvent[] = ['page_view', 'merchant_click'];
    const useJourney = journeyEvents.includes(event);
    const payload = {
      version: 1 as const,
      event,
      sessionId: getSessionId(),
      sequence: nextSequence(),
      path: location.pathname,
      ...acquisition,
      ...currentSurface(),
      ...(latestAttempt > 0 ? { builderAttemptNumber: latestAttempt } : {}),
      ...context,
      ...(useJourney
        ? {
            productSlug: journey.productSlug ?? context.productSlug,
            kitId: journey.kitId ?? context.kitId,
            sourceSurface: journey.sourceSurface ?? context.sourceSurface,
            sourceId: journey.sourceId ?? context.sourceId,
            placement:
              event === 'page_view'
                ? (journey.placement ?? context.placement)
                : context.placement,
          }
        : {}),
    };
    void fetch('/api/analytics', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'same-origin',
    }).catch(() => {});
  } catch {
    // Analytics never interrupts navigation or questionnaire use.
  }
};

export const beginBuilderAttempt = () => {
  const active = Number(safeStorage.get(keys.startedAttempt) ?? '0');
  if (active > 0) return active;
  const previous = Number(safeStorage.get(keys.attemptCounter) ?? '0');
  const attempt =
    Number.isSafeInteger(previous) && previous >= 0 ? previous + 1 : 1;
  safeStorage.set(keys.attemptCounter, String(attempt));
  safeStorage.set(keys.startedAttempt, String(attempt));
  track('builder_start', { builderAttemptNumber: attempt });
  return attempt;
};

export const completeBuilderAttempt = (attempt: number) => {
  safeStorage.set(keys.latestAttempt, String(attempt));
  safeStorage.remove(keys.startedAttempt);
};

export const resetBuilderAttempt = () =>
  safeStorage.remove(keys.startedAttempt);

window.bushGumsAnalytics = {
  track,
  beginBuilderAttempt,
  completeBuilderAttempt,
  resetBuilderAttempt,
};

const autoContext = () => {
  const surface = currentSurface();
  const productMatch = location.pathname.match(/^\/gear\/([^/]+)\/?$/);
  return {
    ...surface,
    ...(productMatch ? { productSlug: productMatch[1] } : {}),
  };
};

document.addEventListener('click', (event) => {
  const target =
    event.target instanceof Element ? event.target.closest('a') : null;
  if (!(target instanceof HTMLAnchorElement)) return;
  const namedEvent = target.dataset.analyticsEvent as
    AnalyticsEvent | undefined;
  const productMatch = pathnameOnly(target.href).match(/^\/gear\/([^/]+)\/?$/);
  const eventName = namedEvent ?? (productMatch ? 'product_click' : undefined);
  if (!eventName) return;

  const base = currentSurface();
  const defaultPlacement =
    base.sourceSurface === 'guide'
      ? 'guide_inline'
      : base.sourceSurface === 'home'
        ? 'home_kit_table'
        : base.sourceSurface === 'gear'
          ? 'gear_index'
          : 'other';
  const context: AnalyticsContext = {
    ...(productMatch ? { productSlug: productMatch[1] } : {}),
    ...(target.dataset.productSlug
      ? { productSlug: target.dataset.productSlug }
      : {}),
    ...(target.dataset.kitId
      ? { kitId: target.dataset.kitId as 'starter' | 'value' }
      : {}),
    placement: target.dataset.placement ?? defaultPlacement,
    ...(target.dataset.sourceSurface
      ? { sourceSurface: target.dataset.sourceSurface as SourceSurface }
      : eventName === 'product_click'
        ? { sourceSurface: base.sourceSurface }
        : {}),
    ...(target.dataset.sourceId
      ? { sourceId: target.dataset.sourceId }
      : eventName === 'product_click' && base.sourceId
        ? { sourceId: base.sourceId }
        : {}),
    ...(target.dataset.merchant ? { merchant: target.dataset.merchant } : {}),
    ...(target.dataset.affiliate
      ? { affiliate: target.dataset.affiliate === 'true' }
      : {}),
    ...(target.dataset.affiliateTrackingKey
      ? { affiliateTrackingKey: target.dataset.affiliateTrackingKey }
      : {}),
    ...(target.dataset.builderResult
      ? {
          builderResult: target.dataset.builderResult as
            'starter' | 'value' | 'no_match',
        }
      : {}),
  };
  track(eventName, context);
  if (eventName === 'product_click' || eventName === 'builder_result_click') {
    const journey: JourneyContext = {
      targetPath: pathnameOnly(target.href),
      productSlug: context.productSlug,
      kitId: context.kitId,
      sourceSurface: context.sourceSurface ?? base.sourceSurface,
      sourceId: context.sourceId ?? base.sourceId,
      placement: context.placement,
      createdAt: Date.now(),
    };
    safeStorage.set(keys.journey, JSON.stringify(journey));
  }
});

if (!safeStorage.get(keys.sessionStarted)) {
  safeStorage.set(keys.sessionStarted, '1');
  track('session_start', autoContext());
}
track('page_view', autoContext());

const comparison = document.querySelector<HTMLDetailsElement>(
  '[data-retailer-comparison]',
);
let comparisonTracked = false;
comparison?.addEventListener('toggle', () => {
  if (!comparison.open || comparisonTracked) return;
  comparisonTracked = true;
  track('retailer_comparison_open', {
    sourceSurface: 'home',
    sourceId: 'traditional-retailer-comparison',
    placement: 'kit_comparison',
  });
});
