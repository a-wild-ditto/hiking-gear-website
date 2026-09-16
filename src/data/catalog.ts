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
  /** Detailed research page for real products. */
  reviewSlug?: string;
  /** Short, evidence-aware copy used in starter-kit detail dialogs. */
  kitDetail?: {
    headline: string;
    paragraphs: string[];
    specs: string[];
    caveat: string;
  };
};

export const products: Product[] = [
  {
    id: 'bisinna-2p',
    name: 'BISINNA 2-Person Tent',
    category: 'Shelter',
    price: 100,
    weight: 2160,
    summary:
      'A conventional freestanding double-wall tent at a low entry price.',
    goodFor: 'Budget-focused first overnights',
    reviewSlug: 'bisinna-2-person-tent',
    kitDetail: {
      headline: 'A familiar tent layout for a first overnight',
      paragraphs: [
        'This freestanding, double-wall tent uses two crossing poles, two doors and two vestibules. The claimed packed weight is about 2.16 kg.',
        'That conventional design should be easier for a beginner to understand and pitch than many low-cost alternatives.',
      ],
      specs: [
        'Two-person dome',
        'Two doors and vestibules',
        'About 2.16 kg claimed',
      ],
      caveat:
        'The waterproof rating is a seller claim, and a similar polyester version struggled in sustained heavy rain.',
    },
  },
  {
    id: 'bisinna-bag-18',
    name: 'BISINNA 1.8 kg Sleeping Bag',
    category: 'Sleep',
    price: 60,
    weight: 1800,
    summary:
      'A roomy synthetic bag for mild trips, with an unverified 5°C listing figure.',
    goodFor: 'Mild nights where price matters most',
    reviewSlug: 'bisinna-1-8kg-sleeping-bag',
    keyFact: {
      label: '5°C listing claim',
      meaning: 'Not a verified comfort rating',
    },
    kitDetail: {
      headline: 'A simple sleep option for mild nights',
      paragraphs: [
        'At a listed 1.8 kg, this is the heavier, straightforward sleeping-bag choice in the kit.',
        'It makes most sense for mild-weather trips where low cost matters more than compact packing.',
      ],
      specs: [
        'Listed weight: 1.8 kg',
        'Synthetic insulation',
        'Roomy rectangular shape',
      ],
      caveat:
        'No EN or ISO temperature test has been identified. Treat 5°C as an unverified limit, not a comfort promise.',
    },
  },
  {
    id: 'foil-foam-pad',
    name: 'Foil Egg-Crate Foam Mat',
    category: 'Sleep',
    price: 17,
    weight: 330,
    summary: 'A simple folding mat that cannot puncture or deflate.',
    goodFor: 'Reliable, low-cost first trips',
    reviewSlug: 'foil-egg-crate-foam-pad',
    kitDetail: {
      headline: 'Simple, puncture-proof insulation',
      paragraphs: [
        'This folding foam mat is listed at 186 × 56 × 2 cm and about 330 g.',
        'It needs no pump, cannot deflate overnight and trades compact packing for dependable simplicity.',
      ],
      specs: [
        '186 × 56 × 2 cm listed',
        'About 330 g claimed',
        'Claimed R-value 2.5',
      ],
      caveat:
        'The R-value is not backed by an ASTM test, and the folded mat is bulky outside a pack.',
    },
  },
  {
    id: 'bisinna-pack-35',
    name: 'BISINNA 25+10L Pack',
    category: 'Packs',
    price: 48,
    weight: 580,
    summary: 'A very light frameless roll-top for an already compact kit.',
    goodFor: 'Carefully packed lighter loads',
    reviewSlug: 'bisinna-25-10-backpack',
    kitDetail: {
      headline: 'A very light pack for a genuinely light kit',
      paragraphs: [
        'This frameless roll-top combines a 25 L body with a claimed 10 L extension and weighs about 580 g.',
        'It suits a compact kit where every major item is already small and light.',
      ],
      specs: [
        '25 L + 10 L extension',
        'About 580 g claimed',
        'Frameless roll-top',
      ],
      caveat:
        'Owner reports suggest comfort falls away around 8–10 kg; that is not a tested load limit.',
    },
  },
  {
    id: 'cloud-up-1p',
    name: 'Naturehike Cloud Up 1P',
    category: 'Shelter',
    price: 163,
    weight: 1490,
    summary: 'The solo option from a well-documented budget tent family.',
    goodFor: 'Solo hikers prioritising lower carried weight',
    reviewSlug: 'naturehike-cloud-up-tent',
    kitDetail: {
      headline: 'The lower-weight Cloud Up for solo trips',
      paragraphs: [
        'The 1P gives one hiker a conventional double-wall shelter without paying for unused floor space.',
        'Its listing weight is 1.49 kg, although Naturehike publishes different figures for current variants.',
      ],
      specs: [
        'One-person capacity',
        'Double-wall design',
        '1.49 kg listing claim',
      ],
      caveat:
        'Cloud Up generations differ in fabric and included weight. Check the detailed review before comparing variants.',
    },
  },
  {
    id: 'cloud-up-2p',
    name: 'Naturehike Cloud Up Pro 2P',
    category: 'Shelter',
    price: 217,
    weight: 1750,
    summary: 'A two-person Cloud Up option for hikers sharing shelter duties.',
    goodFor: 'Duo trips or solo hikers wanting more room',
    reviewSlug: 'naturehike-cloud-up-tent',
    kitDetail: {
      headline: 'Shared shelter space for two hikers',
      paragraphs: [
        'The 2P is the practical Cloud Up choice for two hikers sharing shelter duties.',
        'It also gives a solo hiker more room, with a higher price and carried weight than the 1P.',
      ],
      specs: [
        'Two-person capacity',
        'Double-wall design',
        '1.75 kg listing claim',
      ],
      caveat:
        'Independent reports describe the two-person interior as tight, and current official weights conflict with the listing.',
    },
  },
  {
    id: 'down-bag-400',
    name: '400 g Down Envelope Bag',
    category: 'Sleep',
    price: 86,
    weight: 725,
    summary:
      'A light down bag candidate with unresolved fill and temperature claims.',
    goodFor: 'Weight-conscious mild-weather experiments',
    reviewSlug: '400g-down-envelope-sleeping-bag',
    kitDetail: {
      headline: 'Low claimed weight, with important questions attached',
      paragraphs: [
        'This rectangular bag is listed with 400 g of goose down fill and a total bag weight around 725 g.',
        'If those figures prove accurate, it could reduce sleep-system bulk without the usual premium price.',
      ],
      specs: [
        '400 g fill claimed',
        'About 725 g bag weight',
        'About 200 × 73 cm',
      ],
      caveat:
        'Fill content and temperature claims conflict across listings. We are not assigning it a temperature rating.',
    },
  },
  {
    id: 'tuye-r35',
    name: 'Naturehike TuYe R3.5 Mat',
    category: 'Sleep',
    price: 95,
    weight: 490,
    summary: 'A compact insulated inflatable mat for broader three-season use.',
    goodFor: 'Cooler trips and compact packing',
    reviewSlug: 'naturehike-tuye-r3-5',
    keyFact: {
      label: 'R-value 3.5 claimed',
      meaning: 'Manufacturer rating, test standard unstated',
    },
    kitDetail: {
      headline: 'More ground insulation for cooler trips',
      paragraphs: [
        'The mummy version is listed at R3.5, 183 × 58 × 7 cm and about 490 g.',
        'It offers a much smaller packed size than foam while adding claimed ground insulation for cooler nights.',
      ],
      specs: ['R3.5 claimed', '183 × 58 × 7 cm', 'About 490 g claimed'],
      caveat:
        'Naturehike does not identify an ASTM test on the product page, and owner measurements vary.',
    },
  },
  {
    id: 'rock-60-5',
    name: 'Naturehike Rock 60+5L Pack',
    category: 'Packs',
    price: 69,
    weight: 1160,
    summary:
      'A framed, high-volume pack with room for a forgiving first setup.',
    goodFor: 'Beginners still learning how compactly they pack',
    reviewSlug: 'naturehike-rock-60-5',
    kitDetail: {
      headline: 'Plenty of room without a heavyweight pack',
      paragraphs: [
        'The Rock combines a claimed 60+5 L capacity with an aluminium frame and included rain cover.',
        'Its forgiving volume suits beginners carrying a full overnight setup.',
      ],
      specs: ['60+5 L claimed', 'About 1.16 kg listed', 'Frame and rain cover'],
      caveat:
        'The back length is fixed and fairly long, and one test measured less usable volume than the label suggests.',
    },
  },
  {
    id: 'cookware-aluminium',
    name: 'Aluminium Cookware Set',
    category: 'Cooking',
    price: 37,
    weight: 0,
    summary: 'A generic nested pot set for simple camp meals and hot drinks.',
    goodFor: 'Optional cooking setup',
    reviewSlug: 'aluminium-cookware-set',
    kitDetail: {
      headline: 'Straightforward cookware for camp meals',
      paragraphs: [
        'This aluminium set covers the basic cooking role without tying the kit to a specialised system.',
        'It is an optional add-on for hikers who want hot meals or morning coffee.',
      ],
      specs: [
        'Aluminium construction',
        'Nested multi-piece set',
        'For basic camp meals',
      ],
      caveat:
        'Weight, capacities, coating and included pieces still need to be confirmed from the exact listing.',
    },
  },
  {
    id: 'memory-foam-pillow',
    name: 'Memory-Foam Camping Pillow',
    category: 'Accessories',
    price: 19,
    weight: 500,
    summary:
      'A compressible foam pillow for hikers prioritising sleep comfort.',
    goodFor: 'Optional comfort add-on',
    reviewSlug: 'memory-foam-camping-pillow',
    kitDetail: {
      headline: 'Extra comfort when sleep matters more than grams',
      paragraphs: [
        'This compressible pillow uses slow-rebound memory foam with a removable cover.',
        'It suits beginners who dislike the firmness or movement of inflatable pillows.',
      ],
      specs: [
        'About 38 × 25 × 10 cm',
        'Slow-rebound memory foam',
        'Removable cover',
      ],
      caveat:
        'A same-design review puts it near 500 g, and the unbranded unit has not yet been confirmed as identical.',
    },
  },
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
