/*
 * Product detail pages: research records for real products Bush Gums has
 * bought or reviewed. Product identity lives here; where to buy lives in
 * ../offers.ts so a product can move merchant (marketplace → retailer →
 * Bush Gums stock) without its page being rewritten.
 */
import type { Category } from '../catalog';

/** How a source relates to the unit we actually bought. */
export type EvidenceRelation =
  | 'exact-product'
  | 'exact-model'
  | 'same-design'
  | 'similar-design'
  | 'seller-claim';

/** Where a specification figure comes from. This is provenance, not quality. */
export type SpecStatus =
  | 'measured' // measured by Bush Gums on our unit
  | 'manufacturer'
  | 'retailer'
  | 'corroborated' // several independent sources agree
  | 'same-design' // from an apparently identical design, not our unit
  | 'seller-claim'
  | 'to-verify'; // no reliable figure yet

export type SpecEntry = {
  label: string;
  value: string;
  status: SpecStatus;
  note?: string;
  sourceIds?: string[];
};

export type SourceKind =
  | 'written-review'
  | 'forum'
  | 'video'
  | 'blog'
  | 'listing'
  | 'retailer'
  | 'manufacturer';

export type Source = {
  id: string;
  title: string;
  publisher: string;
  /** Public URL, when one exists. Marketplace listings often have none we can link. */
  url?: string;
  kind: SourceKind;
  relation: EvidenceRelation;
  /** What the source actually says, in our words. */
  summary: string;
  /** Short verbatim quote, only when genuinely informative. */
  quote?: string;
  /** English translation of the quote, when supplied. */
  quoteTranslation?: string;
  /** BCP 47 language tag for the original quote or title. */
  lang?: string;
  language?: string;
};

export type Finding = { text: string; sourceIds: string[] };

export type Coverage = 'strong' | 'moderate' | 'limited';

export type ReviewStatus =
  | { state: 'ordered'; orderedOn?: string }
  | { state: 'testing'; startedOn?: string }
  | {
      state: 'published';
      publishedOn: string;
      verdict: string;
      /** Set only after the published field review supports an editorial verdict. */
      recommendation?: 'recommended' | 'not-recommended';
      bestFor: string;
      notFor: string;
      conditions: string;
      notes: string[];
    };

export type ProductPage = {
  slug: string;
  /** Matches product-<imageId> in src/assets/images when a photo exists. */
  imageId: string;
  name: string;
  /** Short, honest identity caveat, e.g. unbranded marketplace listing. */
  identityNote?: string;
  category: Category;
  /** Flexible role labels, e.g. "Value shelter candidate". Not kit tiers. */
  tags: string[];
  pricePaidAud: number;
  /** ISO date the recorded price was current. */
  pricedOn: string;
  /** Rating on the marketplace listing we bought from. Context, not evidence. */
  listingRating?: {
    stars: number;
    reviews: number;
    sold?: number;
    merchant: string;
    checkedOn: string;
  };
  /** One-line positioning for hero, cards and meta description. */
  summary: string;
  /** Search title when the useful query differs from the product name. */
  seoTitle?: string;
  metaDescription: string;
  /** Key question the page and our testing are built around. */
  question: string;
  whyWeChoseIt: string[];
  /** An independently produced video review, embedded below "Why we chose it". */
  externalReview?: {
    /** YouTube video id, embedded via youtube-nocookie.com. */
    videoId: string;
    /** Used as the iframe title for screen readers; the embed shows its own. */
    title: string;
    /** Shown above the video only where the match to our unit needs a caveat. */
    note?: string;
  };
  specs: SpecEntry[];
  coverage: Coverage;
  coverageNote: string;
  sources: Source[];
  positives: Finding[];
  negatives: Finding[];
  watching: string[];
  /** Practical buyer advice shown in the Things to know section. */
  thingsToKnow?: string[];
  /** A short buyer explanation where a product needs more than a trade-off bullet. */
  buyerContext?: { heading: string; paragraphs: string[] };
  testPlan: string[];
  review: ReviewStatus;
  /** ISO date the research was last checked. */
  researchedOn: string;
};
