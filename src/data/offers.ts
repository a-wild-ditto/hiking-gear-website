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

export const offers: Offer[] = [];

export const offersFor = (slug: string) =>
  offers.filter((o) => o.productSlug === slug);
