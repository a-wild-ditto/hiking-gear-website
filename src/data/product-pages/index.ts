import type { ProductPage } from './types';
import bisinnaTent from './bisinna-2-person-tent';
import naturehikeRock from './naturehike-rock-60-5';
import bisinnaPack from './bisinna-25-10-backpack';
import downBag from './400g-down-envelope-sleeping-bag';
import nyxiaCover from './nyxia-35l-rain-cover';
import foamPad from './foil-egg-crate-foam-pad';
import foamPillow from './memory-foam-camping-pillow';

/** Real products with detail pages, in catalogue display order. */
export const productPages: ProductPage[] = [
  bisinnaTent,
  downBag,
  foamPad,
  naturehikeRock,
  bisinnaPack,
  nyxiaCover,
  foamPillow,
];

export const productPageBySlug = Object.fromEntries(
  productPages.map((p) => [p.slug, p]),
) as Record<string, ProductPage>;

export const productPath = (slug: string) => `/gear/${slug}/`;
