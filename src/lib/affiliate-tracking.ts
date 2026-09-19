import type { Offer } from '../data/offers';

export type AffiliateContext = {
  productSlug: string;
  sourceSurface: string;
  sourceId?: string;
  placement: string;
  kitId?: string;
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

export function buildTrackedMerchantUrl(
  offer: Offer,
  context: AffiliateContext,
): { url: string; trackingKey: string } {
  const trackingKey = makeAffiliateTrackingKey(context);
  if (!offer.tracking || offer.tracking.mode === 'none') {
    return { url: offer.url, trackingKey };
  }

  const url = new URL(offer.url);
  url.searchParams.set(offer.tracking.param, trackingKey);
  return { url: url.toString(), trackingKey };
}
