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
    url: 'https://www.aliexpress.com/w/wholesale-bisinna-2-person-tent.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'bisinna-1-8kg-sleeping-bag',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-bisinna-sleeping-bag.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'foil-egg-crate-foam-pad',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-folding-egg-crate-foam-sleeping-mat.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'bisinna-25-10-backpack',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-bisinna-25%2B10l-backpack.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-cloud-up-tent',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-naturehike-cloud-up-tent.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: '400g-down-envelope-sleeping-bag',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/item/1005010759344924.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-tuye-r3-5',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-naturehike-tuye-r3.5-mat.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-rock-60-5',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-naturehike-rock-60%2B5l-backpack.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'aluminium-cookware-set',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-aluminium-camping-cookware-set.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'memory-foam-camping-pillow',
    merchant: 'AliExpress',
    url: 'https://www.aliexpress.com/w/wholesale-niofeel-memory-foam-camping-pillow.html',
    affiliate: false,
    checkedOn: '2026-09-16',
  },
];

export const offersFor = (slug: string) =>
  offers.filter((o) => o.productSlug === slug);
