import { productById, weightForKit } from './catalog';

export type KitId = 'starter' | 'value';
export type Kit = {
  id: KitId;
  name: string;
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
      'The lowest-cost core setup in our current shortlist. Heavier and bulkier, but a practical way to try an overnight without a major upfront spend.',
    bestFor: 'Beginners prioritising the lowest recorded total',
    advantage: 'Lowest outlay for a core shelter, sleep and pack setup.',
    productIds: [
      'bisinna-2p',
      'down-bag-400',
      'foil-foam-pad',
      'bisinna-pack-35',
    ],
  },
  {
    id: 'value',
    name: 'Value',
    label: 'Our balanced starting point',
    summary:
      'The best balance of price, weight and packability in our current shortlist. Built for mild-weather overnight trips.',
    bestFor: 'Hikers prioritising a lighter, more compact setup',
    advantage:
      'Stronger value across the main shelter, sleep and carry decisions.',
    productIds: ['cloud-up-1p', 'down-bag-400', 'tuye-r35', 'rock-60-5'],
  },
];

export const kits: Kit[] = kitData.map((kit) => ({
  ...kit,
  price: kit.productIds.reduce((sum, id) => sum + productById[id].price, 0),
}));
export const kitById = Object.fromEntries(
  kits.map((kit) => [kit.id, kit]),
) as Record<KitId, Kit>;
export const getKitWeight = (kit: Kit) => {
  const weights = kit.productIds.map((id) => weightForKit(productById[id]));
  const verifiedWeights = weights.filter(
    (weight): weight is number => weight !== undefined,
  );
  if (verifiedWeights.length !== weights.length) {
    throw new Error(`Kit ${kit.id} includes a product with an unknown weight`);
  }
  return verifiedWeights.reduce((sum, weight) => sum + weight, 0);
};
export const optionalAddonIds = [
  'cookware-aluminium',
  'trekology-aluft-pillow',
  'jnln-rain-jacket',
];
