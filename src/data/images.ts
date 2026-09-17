import type { ImageMetadata } from 'astro';

/*
 * Image registry. Product cards must use a matching product asset. A missing
 * product image never falls back to an unrelated category image.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{png,jpg,jpeg,webp}',
  { eager: true },
);
const byName = (name: string) =>
  Object.entries(files).find(([path]) =>
    path.split('/').pop()!.startsWith(`${name}.`),
  )?.[1].default;

export const slots = {
  hero: { file: 'hero-bisinna-original' },
  heroPortrait: { file: 'hero-portrait' },
  kitFeatured: { file: 'kit-value-v4', fallback: 'high-country-camp' },
  kitStarter: { file: 'kit-starter-v4' },
  kitsPage: { file: 'high-country-camp' },
  recommender: { file: 'tasmania-boardwalk' },
  shelter: { file: 'shelter', fallback: 'high-country-camp' },
  sleep: { file: 'sleep' },
  packs: { file: 'packs', fallback: 'eucalyptus-trail' },
  cooking: { file: 'cooking' },
  guideFirstOvernight: { file: 'eucalyptus-trail' },
  guideSleepingBag: { file: 'guide-sleeping-bag' },
  guideMat: { file: 'guide-mat' },
  guideTent: { file: 'shelter', fallback: 'high-country-camp' },
  learnPage: { file: 'tasmania-boardwalk' },
  about: { file: 'eucalyptus-trail' },
} as const;

export type SlotName = keyof typeof slots;

/** Product photos follow the naming convention product-<product id>. */
export const getProductPhoto = (id: string) => byName(`product-${id}`);

export const getPhoto = (slot: SlotName) => {
  const s = slots[slot] as { file: string; fallback?: string };
  return byName(s.file) ?? (s.fallback ? byName(s.fallback) : undefined);
};
