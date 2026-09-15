export type Category =
  'Shelter' | 'Sleep' | 'Packs' | 'Cooking' | 'Accessories';
export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  weight: number;
  summary: string;
  note?: string;
  /** Who it suits, in plain language. */
  goodFor?: string;
  /** One translated technical figure, e.g. R-value plus what it means. */
  keyFact?: { label: string; meaning: string };
};

export const products: Product[] = [
  {
    id: 'ridge-2p',
    name: 'Ridge 2P Shelter',
    category: 'Shelter',
    price: 169,
    weight: 1850,
    summary:
      'A straightforward two-person shelter with space for a forgiving first setup.',
  },
  {
    id: 'valley-2p',
    name: 'Valley 2P Shelter',
    category: 'Shelter',
    price: 229,
    weight: 1540,
    summary:
      'A lighter shelter option that keeps setup simple and gives useful headroom.',
  },
  {
    id: 'range-2p',
    name: 'Range 2P Shelter',
    category: 'Shelter',
    price: 329,
    weight: 1280,
    summary:
      'A lower-weight demo shelter for hikers putting more budget into pack weight.',
  },
  {
    id: 'trail-5',
    name: 'Trail 5° Sleeping Bag',
    category: 'Sleep',
    price: 129,
    weight: 1180,
    summary: 'A simple synthetic sleep option for mild conditions.',
    note: 'Temperature figures are demo data, not tested ratings.',
  },
  {
    id: 'summit-2',
    name: 'Summit 2° Sleeping Bag',
    category: 'Sleep',
    price: 179,
    weight: 970,
    summary: 'A lighter three-season demo option with more warmth allowance.',
    note: 'Temperature figures are demo data, not tested ratings.',
  },
  {
    id: 'alpine-5',
    name: 'Alpine -5° Sleeping Bag',
    category: 'Sleep',
    price: 259,
    weight: 1120,
    summary:
      'A winter-oriented placeholder showing how colder trips change a budget.',
    note: 'Temperature figures are demo data, not tested ratings.',
  },
  {
    id: 'mat-r3',
    name: 'TrailMat R3.0',
    category: 'Sleep',
    price: 79,
    weight: 520,
    summary: 'An entry mat placeholder aimed at mild overnight conditions.',
    note: 'R-value is demo data, not a tested rating.',
  },
  {
    id: 'mat-r4',
    name: 'ComfortMat R4.2',
    category: 'Sleep',
    price: 119,
    weight: 480,
    summary: 'A warmer, lower-weight placeholder for broader three-season use.',
    note: 'R-value is demo data, not a tested rating.',
  },
  {
    id: 'mat-r55',
    name: 'AlpineMat R5.5',
    category: 'Sleep',
    price: 149,
    weight: 510,
    summary: 'A higher-insulation demo mat for colder-weather kit choices.',
    note: 'R-value is demo data, not a tested rating.',
  },
  {
    id: 'trek-55',
    name: 'Trek 55 Pack',
    category: 'Packs',
    price: 139,
    weight: 1580,
    summary:
      'A forgiving pack size for beginners still learning what they use.',
  },
  {
    id: 'path-50',
    name: 'Path 50 Pack',
    category: 'Packs',
    price: 219,
    weight: 1190,
    summary: 'A lighter all-round pack with sensible room for first-trip gear.',
  },
  {
    id: 'line-45',
    name: 'Line 45 Pack',
    category: 'Packs',
    price: 299,
    weight: 920,
    summary: 'A lower-weight placeholder for more deliberate packers.',
  },
  {
    id: 'cook-basic',
    name: 'Solo Cook Set',
    category: 'Cooking',
    price: 55,
    weight: 340,
    summary: 'A simple stove-and-pot allowance for overnight meals.',
  },
  {
    id: 'cook-light',
    name: 'Light Cook Set',
    category: 'Cooking',
    price: 69,
    weight: 250,
    summary: 'A lighter cooking placeholder with less bulk.',
  },
  {
    id: 'cook-compact',
    name: 'Compact Cook Set',
    category: 'Cooking',
    price: 99,
    weight: 205,
    summary: 'A compact demo setup for a more weight-conscious kit.',
  },
  {
    id: 'essentials-basic',
    name: 'Essentials Pack Basic',
    category: 'Accessories',
    price: 39,
    weight: 250,
    summary: 'Headlamp, basic first-aid kit and repair tape.',
  },
  {
    id: 'essentials-light',
    name: 'Essentials Pack Light',
    category: 'Accessories',
    price: 79,
    weight: 360,
    summary: 'Brighter headlamp, first aid, repair kit and dry bags.',
  },
  {
    id: 'essentials-plus',
    name: 'Essentials Pack Plus',
    category: 'Accessories',
    price: 139,
    weight: 520,
    summary: 'Everything in Light, plus a squeeze water filter and trowel.',
  },
];

const details: Record<string, Pick<Product, 'goodFor' | 'keyFact'>> = {
  'ridge-2p': { goodFor: 'First trips and budget-conscious hikers' },
  'valley-2p': { goodFor: 'Regular weekends with a friend' },
  'range-2p': { goodFor: 'Hikers ready to carry less' },
  'trail-5': {
    goodFor: 'Summer and mild nights',
    keyFact: { label: 'Comfort 5°C', meaning: 'Warm-weather trips' },
  },
  'summit-2': {
    goodFor: 'Most three-season trips',
    keyFact: { label: 'Comfort 2°C', meaning: 'Cool spring and autumn nights' },
  },
  'alpine-5': {
    goodFor: 'Alpine and colder trips',
    keyFact: { label: 'Comfort -5°C', meaning: 'Frosty alpine nights' },
  },
  'mat-r3': {
    goodFor: 'Mild first overnights',
    keyFact: { label: 'R-value 3.0', meaning: 'Suitable for mild conditions' },
  },
  'mat-r4': {
    goodFor: 'Cool three-season trips',
    keyFact: {
      label: 'R-value 4.2',
      meaning: 'Suitable for cool three-season trips',
    },
  },
  'mat-r55': {
    goodFor: 'Cold ground and shoulder seasons',
    keyFact: { label: 'R-value 5.5', meaning: 'Suitable for cold nights' },
  },
  'trek-55': { goodFor: 'Bulkier budget gear' },
  'path-50': { goodFor: 'Most first overnight kits' },
  'line-45': { goodFor: 'Compact, lighter kits' },
  'cook-basic': { goodFor: 'Hot dinners and a morning coffee' },
  'cook-light': { goodFor: 'Saving bulk in a lighter kit' },
  'cook-compact': { goodFor: 'Weight-conscious packers' },
  'essentials-basic': { goodFor: 'Every first overnight kit' },
  'essentials-light': { goodFor: 'Wet weather and regular weekends' },
  'essentials-plus': { goodFor: 'Remote trips with creek water' },
};
for (const p of products) Object.assign(p, details[p.id]);

export const formatWeight = (g: number) =>
  g >= 1000 ? `${(g / 1000).toFixed(2)} kg` : `${g} g`;

export const productById = Object.fromEntries(
  products.map((p) => [p.id, p]),
) as Record<string, Product>;
export const categories = [
  {
    name: 'Shelter',
    id: 'shelter',
    kicker: 'Keep weather out',
    copy: 'Tents explained by space, weight, weather use and setup complexity.',
  },
  {
    name: 'Sleep',
    id: 'sleep',
    kicker: 'Stay warm enough',
    copy: 'Sleeping bags and mats without making ratings feel mysterious.',
  },
  {
    name: 'Packs',
    id: 'packs',
    kicker: 'Carry what matters',
    copy: 'Enough volume for learning without unnecessary bulk.',
  },
  {
    name: 'Cooking & accessories',
    id: 'cooking-accessories',
    kicker: 'Finish the setup',
    copy: 'Useful smaller pieces without buying every gadget.',
  },
] as const;
