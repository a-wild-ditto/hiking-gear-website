import { productById } from './catalog';
export type KitId = 'starter' | 'value';
export type Kit = {
  id: KitId;
  name: string;
  /** Derived from the products below; never set by hand. */
  price: number;
  label: string;
  summary: string;
  bestFor: string;
  advantage: string;
  productIds: string[];
};
const kitData: Omit<Kit, 'price'>[] = [
  {
    id: 'starter',
    name: 'Starter',
    label: 'Keep the spend sensible',
    summary:
      'A straightforward first setup that prioritises essentials and accepts a little extra weight.',
    bestFor: "Exploring the bush shouldn't break the bank.",
    advantage: 'Lowest outlay for a complete setup that works.',
    productIds: [
      'bisinna-2p',
      'bisinna-bag-18',
      'foil-foam-pad',
      'bisinna-pack-35',
    ],
  },
  {
    id: 'value',
    name: 'Value',
    label: 'Our balanced starting point',
    summary: 'The best value gear curated to suit the Australian outdoors',
    bestFor: 'Regular three-season weekends',
    advantage:
      'Casual hikers get 80% of the performance of premium equipment for a fraction of the price.',
    productIds: ['cloud-up-1p', 'down-bag-400', 'tuye-r35', 'rock-60-5'],
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

export const optionalAddonIds = ['cookware-aluminium', 'memory-foam-pillow'];
