import type { Offer } from '../data/offers';
import {
  AMAZON_TAG_PARAM,
  AMAZON_TRACKING_IDS,
  type AmazonContext,
} from '../config/affiliate.ts';

export type AffiliateContext = {
  productSlug: string;
  sourceSurface: string;
  sourceId?: string;
  placement: string;
  kitId?: string;
  /**
   * Which Amazon Associates tracking ID this link should carry. Only used for
   * Amazon URLs; other merchants ignore it.
   */
  amazonContext?: AmazonContext;
};

const cleanPart = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

export function makeAffiliateTrackingKey(context: AffiliateContext): string {
  if (
    context.sourceSurface === 'gear' &&
    context.placement === 'product_buy_primary'
  ) {
    return `bg1_product_${cleanPart(context.productSlug)}_primary`;
  }

  return [
    'bg1',
    cleanPart(context.sourceSurface),
    cleanPart(context.sourceId ?? context.kitId ?? context.productSlug),
    cleanPart(context.placement),
  ]
    .filter(Boolean)
    .join('_')
    .slice(0, 100);
}

const parseUrl = (url: string): URL | undefined => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
      ? parsed
      : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Amazon storefronts only, as an explicit allowlist of real marketplace
 * domains. A pattern such as `amazon.<any tld>` would also match unrelated
 * domains like amazon.dev or amazon.zip, which must never receive a Bush Gums
 * tag. Subdomains are allowed (smile.amazon.com.au), but the leading dot
 * boundary means media-amazon.com, amazonaws.com and lookalike hosts such as
 * amazon.com.au.example.com are all rejected.
 */
const AMAZON_DOMAINS = [
  'amazon.com.au',
  'amazon.com',
  'amazon.co.uk',
  'amazon.co.jp',
  'amazon.com.br',
  'amazon.com.mx',
  'amazon.com.tr',
  'amazon.ca',
  'amazon.de',
  'amazon.fr',
  'amazon.it',
  'amazon.es',
  'amazon.nl',
  'amazon.se',
  'amazon.pl',
  'amazon.ie',
  'amazon.be',
  'amazon.in',
  'amazon.sg',
  'amazon.ae',
  'amazon.sa',
  'amazon.eg',
] as const;

const isAmazonHostname = (hostname: string) => {
  const host = hostname.toLowerCase().replace(/\.$/, '');
  return AMAZON_DOMAINS.some(
    (domain) => host === domain || host.endsWith(`.${domain}`),
  );
};

export function isAmazonUrl(url: string): boolean {
  const parsed = parseUrl(url);
  return parsed ? isAmazonHostname(parsed.hostname) : false;
}

/**
 * Search, session and SiteStripe parameters Amazon adds to a copied URL. None
 * of them are needed to reach an ASIN product page, and keeping them risks
 * landing a visitor on a search result rather than the product we recommend.
 *
 * Deliberately narrow. Parameters that can select a variation, a seller or a
 * specific offer (`th`, `psc`, `smid`, `content-id`, `_encoding`) are NOT
 * listed. Naturehike and similar listings are often multi-variant, so
 * dropping those could send a visitor to a different version of the product.
 */
const AMAZON_NOISE_PARAMS = new Set([
  'crid',
  'dib',
  'dib_tag',
  'keywords',
  'qid',
  'sprefix',
  'sr',
  'ref',
  'ref_',
  'linkcode',
  'linkid',
]);

const ASIN_IN_PATH =
  /\/(?:dp|gp\/product|gp\/aw\/d|dp\/product|gp\/offer-listing)\/([A-Z0-9]{10})(?:[/?#]|$)/;

/** The ASIN of an Amazon product URL, when one can be read confidently. */
export function extractAmazonAsin(url: string): string | undefined {
  const parsed = parseUrl(url);
  if (!parsed || !isAmazonHostname(parsed.hostname)) return undefined;
  return ASIN_IN_PATH.exec(parsed.pathname)?.[1];
}

/**
 * Reduce an Amazon product URL to https://<host>/dp/<ASIN>.
 *
 * A URL whose ASIN cannot be read is returned untouched, so a valid but
 * unusual product or variant link keeps working. Query parameters that are
 * not known Amazon search/session noise are preserved, and the fragment is
 * always preserved.
 */
export function canonicaliseAmazonUrl(url: string): string {
  const parsed = parseUrl(url);
  if (!parsed) return url;
  const asin = extractAmazonAsin(url);
  if (!asin) return url;

  const canonical = new URL(`${parsed.origin}/dp/${asin}`);
  for (const [key, value] of parsed.searchParams) {
    if (!AMAZON_NOISE_PARAMS.has(key.toLowerCase())) {
      canonical.searchParams.append(key, value);
    }
  }
  canonical.hash = parsed.hash;
  return canonical.toString();
}

export type BuildAffiliateUrlInput = {
  url: string;
  /** Where the link appears. Selects the Amazon Associates tracking ID. */
  context?: AmazonContext;
};

export type BuiltAffiliateUrl = {
  url: string;
  /** The exact Associates tag written into the URL, for Amazon links only. */
  amazonTrackingId?: string;
};

/**
 * Apply Bush Gums affiliate parameters to an outbound merchant URL.
 *
 * Amazon URLs are canonicalised to /dp/<ASIN> where that is safe, then given
 * the tracking ID for the context they appear in, replacing any existing tag
 * so a link can never carry two of them. Every other retailer, including
 * AliExpress and Bunnings, is returned unchanged: Amazon parameters must
 * never be written onto a non-Amazon URL. A malformed or empty URL is
 * returned unchanged rather than throwing, so a bad data entry degrades to an
 * untagged link instead of a broken page.
 */
export function buildAffiliateUrl({
  url,
  context,
}: BuildAffiliateUrlInput): BuiltAffiliateUrl {
  if (!isAmazonUrl(url) || !context) return { url };

  const amazonTrackingId = AMAZON_TRACKING_IDS[context];
  if (!amazonTrackingId) return { url };

  const canonical = parseUrl(canonicaliseAmazonUrl(url));
  if (!canonical) return { url };
  canonical.searchParams.set(AMAZON_TAG_PARAM, amazonTrackingId);
  return { url: canonical.toString(), amazonTrackingId };
}

export function buildTrackedMerchantUrl(
  offer: Offer,
  context: AffiliateContext,
): { url: string; trackingKey: string; amazonTrackingId?: string } {
  if (isAmazonUrl(offer.url)) {
    const built = buildAffiliateUrl({
      url: offer.url,
      context: context.amazonContext,
    });
    // For Amazon the Associates tag is the only attribution Amazon accepts,
    // so it is also the tracking key we record against the click.
    return {
      url: built.url,
      trackingKey: built.amazonTrackingId ?? makeAffiliateTrackingKey(context),
      amazonTrackingId: built.amazonTrackingId,
    };
  }

  const trackingKey = makeAffiliateTrackingKey(context);
  if (!offer.tracking || offer.tracking.mode === 'none') {
    return { url: offer.url, trackingKey };
  }

  const parsed = parseUrl(offer.url);
  if (!parsed) return { url: offer.url, trackingKey };
  parsed.searchParams.set(offer.tracking.param, trackingKey);
  return { url: parsed.toString(), trackingKey };
}
