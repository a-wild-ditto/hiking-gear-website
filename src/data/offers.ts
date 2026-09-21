/*
 * Merchant offers, kept separate from product identity. A product page shows
 * whatever offers exist for its slug. No offer = a neutral "no link yet" state.
 *
 * Only add `affiliate: true` once a real affiliate relationship exists; the
 * page then shows the affiliate disclosure next to the link.
 *
 * Declaration order is significant: `offersFor` preserves it, and the first
 * applicable offer becomes the primary buy link. Put the preferred merchant
 * first and any alternative below it.
 *
 * Amazon URLs are stored as clean canonical product URLs
 * (https://www.amazon.com.au/dp/<ASIN>) with no `tag`. The Associates
 * tracking ID is added at render time by `buildAffiliateUrl` in
 * ../lib/affiliate-tracking.ts, which picks the ID for the surface the link
 * appears on. Never hard-code a `tag` here.
 */
export type AffiliateTracking =
  { mode: 'none' } | { mode: 'query-param'; param: string };

export type Offer = {
  productSlug: string;
  merchant: string;
  url: string;
  affiliate: boolean;
  tracking?: AffiliateTracking;
  /**
   * Restricts this offer to the catalog product ids it may serve as a buy
   * link. Undefined means every catalog item pointing at this product page.
   * An empty list means the offer appears only on the review page, which is
   * what we want when a kit row's displayed price and weight were recorded
   * from a different merchant's listing.
   */
  catalogIds?: string[];
  /**
   * Short label for a buyer-selectable variant of the same listing family,
   * for example tent capacity. When a product page has more than one offer
   * carrying a label, the page renders a choice between them and defaults to
   * the first one listed. Leave undefined for a product with a single offer.
   */
  variantLabel?: string;
  /**
   * Price recorded from this listing on `checkedOn`, shown beside the link
   * when the offer is listed as an alternative. A dated snapshot, never
   * presented as a live price.
   */
  recordedPriceAud?: number;
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
  // AliExpress is listed first: the Value kit price was recorded from it, so
  // the kit row leads with it. The Amazon offers follow, one per capacity,
  // each scoped to its catalog id so a kit row only offers the capacity that
  // kit recommends.
  {
    productSlug: 'naturehike-cloud-up-tent',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3nDPKip',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'naturehike-cloud-up-tent',
    merchant: 'Amazon Australia',
    url: 'https://www.amazon.com.au/dp/B0DPFK6LPJ',
    affiliate: true,
    recordedPriceAud: 229,
    catalogIds: ['cloud-up-2p'],
    variantLabel: '2 person',
    checkedOn: '2026-09-21',
  },
  {
    productSlug: 'naturehike-cloud-up-tent',
    merchant: 'Amazon Australia',
    url: 'https://www.amazon.com.au/dp/B0FXGHX1PL',
    affiliate: true,
    recordedPriceAud: 149,
    // Forest Green, 20D nylon. Offered beneath AliExpress on the Value kit
    // row and on the review page.
    catalogIds: ['cloud-up-1p'],
    variantLabel: '1 person',
    checkedOn: '2026-09-21',
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
  // AliExpress is listed first: it is the cheaper listing and the one the
  // kit price was recorded from, so the kit row leads with it.
  {
    productSlug: 'naturehike-rock-60-5',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4V1qZBr',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  // ASIN B08PV3XF4H is the Grey 60+5L variant under parent B0GWHG65BL, with
  // manufacturer reference NH19BP095, which matches the model code on the
  // product page. Checked 2026-09-21. Do not use B0G3P2ZNSV: despite a
  // listing title that says "ROCK Series 60+5L", that ASIN resolves to the
  // 45 L pack.
  {
    productSlug: 'naturehike-rock-60-5',
    merchant: 'Amazon Australia',
    url: 'https://www.amazon.com.au/dp/B08PV3XF4H',
    affiliate: true,
    recordedPriceAud: 119,
    checkedOn: '2026-09-21',
  },
  {
    productSlug: 'aluminium-cookware-set',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c4UsxZTB',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
  {
    productSlug: 'trekology-aluft-2-0-pillow',
    merchant: 'Amazon Australia',
    url: 'https://www.amazon.com.au/dp/B07MG5YCHJ',
    affiliate: true,
    checkedOn: '2026-09-21',
  },
  {
    productSlug: 'nyxia-35l-rain-cover',
    merchant: 'AliExpress',
    url: 'https://s.click.aliexpress.com/e/_c3ng9hop',
    affiliate: true,
    checkedOn: '2026-09-16',
  },
];

/** Every offer for a product page, preferred merchant first. */
export const offersFor = (slug: string) =>
  offers.filter((o) => o.productSlug === slug);

/**
 * Offers usable for one catalog item. Variant-scoped offers are excluded
 * unless they name this catalog id, so a kit row never links to a variant we
 * did not recommend there.
 */
export const offersForCatalogItem = (slug: string, catalogId: string) =>
  offersFor(slug).filter(
    (o) => !o.catalogIds || o.catalogIds.includes(catalogId),
  );
