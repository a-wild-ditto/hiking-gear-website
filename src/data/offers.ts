/*
 * Merchant offers, kept separate from product identity. A product page shows
 * whatever offers exist for its slug. No offer = a neutral "no link yet" state.
 *
 * Only add `affiliate: true` once a real affiliate relationship exists; the
 * page then shows the affiliate disclosure next to the link.
 */
export type Offer = {
  productSlug: string;
  merchant: string;
  url: string;
  affiliate: boolean;
  /** Human-readable price note; never presented as a live price. */
  priceNote?: string;
  checkedOn?: string;
};

export const offers: Offer[] = [
  {
    productSlug: 'bisinna-2-person-tent',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3AbGxtj',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'bisinna-1-8kg-sleeping-bag',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3eqyiXj',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'foil-egg-crate-foam-pad',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3xPX2G5',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'bisinna-25-10-backpack',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4pFJBWd',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-cloud-up-tent',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3nDPKip',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: '400g-down-envelope-sleeping-bag',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c37ZYszr',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-tuye-r3-5',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4Vyn6zJ',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-rock-60-5',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4V1qZBr',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'aluminium-cookware-set',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4UsxZTB',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'memory-foam-camping-pillow',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4kxPWhR',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'nyxia-35l-rain-cover',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3ng9hop',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
];

export const offersFor = (slug: string) =>
  offers.filter((o) => o.productSlug === slug);
