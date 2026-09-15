import { productById } from './catalog';
export type KitId = 'starter' | 'value' | 'premium';
export type Kit = {
  id: KitId;
  name: string;
  /** Derived from the products below; never set by hand. */
  price: number;
  label: string;
  summary: string;
  bestFor: string;
  advantage: string;
  compromise: string;
  productIds: string[];
};
const kitData: Omit<Kit, 'price'>[] = [
  {
    id: 'starter',
    name: 'Starter',
    label: 'Keep the spend sensible',
    summary:
      'A straightforward first setup that prioritises essentials and accepts a little extra weight.',
    bestFor: 'Mild first overnight hikes',
    advantage: 'Lowest outlay for a complete, reliable setup',
    compromise: 'Heavier and bulkier to carry',
    productIds: [
      'ridge-2p',
      'trail-5',
      'mat-r3',
      'trek-55',
      'cook-basic',
      'essentials-basic',
    ],
  },
  {
    id: 'value',
    name: 'Value',
    label: 'Our balanced starting point',
    summary:
      'Spend where it meaningfully reduces bulk and weight while keeping the kit forgiving.',
    bestFor: 'Regular three-season weekends',
    advantage: 'Noticeably lighter without a big price jump',
    compromise: 'Not built for cold alpine nights',
    productIds: [
      'valley-2p',
      'summit-2',
      'mat-r4',
      'path-50',
      'cook-light',
      'essentials-light',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    label: 'Lower weight, wider conditions',
    summary:
      'More budget directed into the core shelter, sleep system and pack.',
    bestFor: 'Frequent hiking and colder trips',
    advantage: 'Warmest sleep system and lightest carry',
    compromise: 'Costs the most up front',
    productIds: [
      'range-2p',
      'alpine-5',
      'mat-r55',
      'line-45',
      'cook-compact',
      'essentials-plus',
    ],
  },
];
export const kits: Kit[] = kitData.map((k) => ({
  ...k,
  price: k.productIds.reduce((sum, id) => sum + productById[id].price, 0),
}));
export const kitById = Object.fromEntries(kits.map((k) => [k.id, k])) as Record<
  KitId,
  Kit
>;
export const getKitWeight = (kit: Kit) =>
  kit.productIds.reduce((sum, id) => sum + productById[id].weight, 0);
