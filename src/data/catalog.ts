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
    id: 'headlamp',
    name: 'Trail Headlamp',
    category: 'Accessories',
    price: 29,
    weight: 90,
    summary: 'A basic lighting allowance for a practical first kit.',
  },
  {
    id: 'dry-bags',
    name: 'Dry Bag Set',
    category: 'Accessories',
    price: 35,
    weight: 120,
    summary: 'Organisation and another layer of weather protection.',
  },
  {
    id: 'rain-shell',
    name: 'Rain Shell Allowance',
    category: 'Accessories',
    price: 49,
    weight: 320,
    summary: 'A budget placeholder for a basic hiking rain shell.',
  },
  {
    id: 'water-kit',
    name: 'Water Carry Kit',
    category: 'Accessories',
    price: 59,
    weight: 180,
    summary: 'A bottle and treatment allowance for the performance kit.',
  },
  {
    id: 'essentials',
    name: 'Small Essentials Allowance',
    category: 'Accessories',
    price: 57,
    weight: 260,
    summary: 'A demo allowance for repair, hygiene and basic first-aid items.',
  },
];

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
