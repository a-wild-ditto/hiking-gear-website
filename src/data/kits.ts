import { productById } from './catalog';
export type KitId = 'starter' | 'lightweight' | 'performance';
export type Kit = {
  id: KitId;
  name: string;
  price: number;
  label: string;
  summary: string;
  bestFor: string;
  productIds: string[];
};
export const kits: Kit[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 600,
    label: 'Keep the spend sensible',
    summary:
      'A straightforward first setup that prioritises essentials and accepts a little extra weight.',
    bestFor: 'Mild first overnight hikes',
    productIds: [
      'ridge-2p',
      'trail-5',
      'mat-r3',
      'trek-55',
      'cook-basic',
      'headlamp',
    ],
  },
  {
    id: 'lightweight',
    name: 'Lightweight',
    price: 899,
    label: 'Our balanced starting point',
    summary:
      'Spend where it meaningfully reduces bulk and weight while keeping the kit forgiving.',
    bestFor: 'Regular three-season weekends',
    productIds: [
      'valley-2p',
      'summit-2',
      'mat-r4',
      'path-50',
      'cook-light',
      'dry-bags',
      'rain-shell',
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    price: 1300,
    label: 'Lower weight, wider conditions',
    summary:
      'More budget directed into the core shelter, sleep system and pack.',
    bestFor: 'Frequent hiking and colder trips',
    productIds: [
      'range-2p',
      'alpine-5',
      'mat-r55',
      'line-45',
      'cook-compact',
      'rain-shell',
      'water-kit',
      'essentials',
    ],
  },
];
export const kitById = Object.fromEntries(kits.map((k) => [k.id, k])) as Record<
  KitId,
  Kit
>;
export const getKitWeight = (kit: Kit) =>
  kit.productIds.reduce((sum, id) => sum + productById[id].weight, 0);
