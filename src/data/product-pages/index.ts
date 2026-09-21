import type { ProductPage } from './types';
import bisinnaTent from './bisinna-2-person-tent';
import naturehikeRock from './naturehike-rock-60-5';
import bisinnaPack from './bisinna-25-10-backpack';
import downBag from './400g-down-envelope-sleeping-bag';
import nyxiaCover from './nyxia-35l-rain-cover';
import foamPad from './foil-egg-crate-foam-pad';
import aluftPillow from './trekology-aluft-2-0-pillow';
import bisinnaSleepingBag from './bisinna-1-8kg-sleeping-bag';
import cloudUpTent from './naturehike-cloud-up-tent';
import tuyeMat from './naturehike-tuye-r3-5';
import aluminiumCookwareSet from './aluminium-cookware-set';
import jnlnRainJacket from './jnln-lightweight-rain-jacket';

/**
 * Every researched product in the repository, including hidden ones, in
 * catalogue display order.
 */
export const allProductPages: ProductPage[] = [
  bisinnaTent,
  downBag,
  foamPad,
  naturehikeRock,
  bisinnaPack,
  nyxiaCover,
  aluftPillow,
  bisinnaSleepingBag,
  cloudUpTent,
  tuyeMat,
  aluminiumCookwareSet,
  jnlnRainJacket,
];

/**
 * Published products only. Everything public (gear pages, the gear index,
 * the sitemap and kit links) reads from this list, so a hidden product has
 * no public page.
 */
export const productPages = allProductPages.filter((p) => !p.hidden);

export const productPageBySlug = Object.fromEntries(
  productPages.map((p) => [p.slug, p]),
) as Record<string, ProductPage>;

export const productPath = (slug: string) => `/gear/${slug}/`;
