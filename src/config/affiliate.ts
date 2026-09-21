/*
 * Central affiliate configuration.
 *
 * Amazon Associates tracking IDs are public values: they appear in every
 * outbound affiliate URL, so they live in source control rather than in
 * environment configuration or secrets.
 *
 * One tracking ID per place a product link can appear, so Amazon Associates
 * reporting can separate landing-page kit demand from gear review demand.
 * Only the contexts that exist on the site today are listed here. Do not add
 * speculative contexts; add one when a real new surface ships.
 */
export type AmazonContext = 'kit' | 'gear-detail';

export const AMAZON_TRACKING_IDS: Record<AmazonContext, string> = {
  /** Landing page kit section links. */
  kit: 'bushgums-kit-22',
  /** Gear detail / review page links. */
  'gear-detail': 'bushgums-gear-22',
};

/** Query parameter Amazon Associates uses to attribute a click. */
export const AMAZON_TAG_PARAM = 'tag';

/**
 * Amazon storefront we link to. Kept separate from URL parsing so a URL on a
 * different Amazon domain is still recognised as Amazon.
 */
export const AMAZON_DEFAULT_HOST = 'www.amazon.com.au';
