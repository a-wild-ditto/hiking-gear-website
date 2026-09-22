export type Category =
  'Shelter' | 'Sleep' | 'Packs' | 'Cooking' | 'Accessories';

export type WeightStatus =
  'measured' | 'manufacturer' | 'retailer' | 'seller-claim' | 'unknown';

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  weightGrams?: number;
  carriedWeightGrams?: number;
  weightStatus: WeightStatus;
  weightBasis: string;
  summary: string;
  goodFor?: string;
  /** Included pieces, listed under the name in kit tables. */
  components?: string[];
  keyFact?: { label: string; meaning: string };
  reviewSlug?: string;
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
    weightGrams: 2160,
    carriedWeightGrams: 2160,
    weightStatus: 'seller-claim',
    weightBasis: 'Listing packed weight',
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
        'Best for light to moderate rain; an independent test of the same fabric found the fly wet out in heavy rain.',
    },
  },
  {
    id: 'bisinna-bag-18',
    name: 'BISINNA Sleeping Bag',
    category: 'Sleep',
    price: 53,
    weightGrams: 1600,
    carriedWeightGrams: 1600,
    weightStatus: 'seller-claim',
    weightBasis: 'Listing weight',
    summary:
      'A roomy synthetic bag for mild trips, with an unverified 13°C comfort claim.',
    goodFor: 'Mild nights where price matters most',
    reviewSlug: 'bisinna-1-8kg-sleeping-bag',
    keyFact: {
      label: '13°C comfort claim',
      meaning: 'Seller claim; not independently tested',
    },
    kitDetail: {
      headline: 'A simple sleep option for mild nights',
      paragraphs: [
        'At a listed 1.6 kg, this is the heavier, straightforward sleeping-bag choice in the kit.',
        'It makes most sense for mild-weather trips where low cost matters more than compact packing.',
      ],
      specs: [
        'Listed weight: 1.6 kg',
        'Synthetic insulation',
        'Roomy rectangular shape',
      ],
      caveat:
        'No EN or ISO temperature test has been identified. Treat 13°C as an unverified seller claim, not a comfort promise.',
    },
  },
  {
    id: 'foil-foam-pad',
    name: 'Foil Egg-Crate Foam Mat',
    category: 'Sleep',
    price: 17,
    weightGrams: 330,
    carriedWeightGrams: 330,
    weightStatus: 'seller-claim',
    weightBasis: 'Listing weight',
    summary: 'An ultralight folding mat that cannot puncture or deflate.',
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
        'Bulky when folded.',
    },
  },
  {
    id: 'bisinna-pack-35',
    name: 'BISINNA 25+10L Pack',
    category: 'Packs',
    price: 48,
    weightGrams: 580,
    carriedWeightGrams: 580,
    weightStatus: 'seller-claim',
    weightBasis: 'Listing weight',
    summary: 'An ultralight frameless roll-top with plenty of external attachment points.',
    goodFor: 'Light overnight kits, with bulky gear strapped outside',
    reviewSlug: 'bisinna-25-10-backpack',
    kitDetail: {
      headline: 'A very light pack with room to strap gear outside',
      paragraphs: [
        'This frameless roll-top combines a 25 L body with a claimed 10 L extension and weighs about 580 g.',
        'It is made from 40D ripstop nylon, and its attachment points let a foam mat or other bulky items ride on the outside.',
      ],
      specs: [
        '25 L + 10 L extension',
        'About 580 g claimed',
        'Frameless roll-top',
      ],
      caveat:
        'Owner reports suggest comfort falls away around 8 to 10 kg; that is not a tested load limit.',
    },
  },
  {
    id: 'cloud-up-1p',
    name: 'Naturehike Cloud Up Pro 1P',
    category: 'Shelter',
    // Recorded from the Amazon Australia 1P listing (ASIN B0FXGHX1PL, Forest
    // Green, 20D nylon) on 2026-09-21. It is the cheapest listing, so the kit
    // links to it first, with AliExpress (A$204.88 on 2026-09-16) beneath.
    price: 149,
    weightGrams: 1230,
    carriedWeightGrams: 1390,
    weightStatus: 'seller-claim',
    weightBasis:
      'Estimated carried weight from seller-listed minimum package figure',
    summary: 'The solo option from a well-documented budget tent family.',
    goodFor: 'Solo hikers prioritising lower carried weight',
    reviewSlug: 'naturehike-cloud-up-tent',
    kitDetail: {
      headline: 'The lower-weight Cloud Up for solo trips',
      paragraphs: [
        'The 1P gives one hiker a conventional double-wall shelter without paying for unused floor space.',
        'The listing claims 1.23 kg excluding accessories. We use an estimated 1.39 kg carried figure for the kit total.',
      ],
      specs: [
        'One-person capacity',
        'Double-wall design',
        '1.23 kg excluding accessories',
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
    weightGrams: 1750,
    carriedWeightGrams: 1910,
    weightStatus: 'manufacturer',
    weightBasis:
      'Estimated carried weight from listing figure plus accessories',
    summary: 'A two-person Cloud Up option for hikers sharing shelter duties.',
    goodFor: 'Duo trips or solo hikers wanting more room',
    reviewSlug: 'naturehike-cloud-up-tent',
  },
  {
    id: 'down-bag-400',
    name: '400 g Down Envelope Sleeping Bag',
    category: 'Sleep',
    price: 86,
    weightGrams: 725,
    carriedWeightGrams: 800,
    weightStatus: 'seller-claim',
    weightBasis: 'Seller-claimed bag plus stuff sack estimate',
    summary:
      'A near-ultralight, low-cost down bag, perfect for most Australian conditions outside alpine areas.',
    goodFor: 'Light, year-round packing outside alpine areas',
    reviewSlug: '400g-down-envelope-sleeping-bag',
    kitDetail: {
      headline: 'Light down warmth at a fraction of the usual price',
      paragraphs: [
        'This rectangular bag is listed with 400 g of goose down fill and a total bag weight around 725 g.',
        'We use approximately 800 g in the Value total to allow for the stuff sack.',
      ],
      specs: [
        '400 g fill claimed',
        'About 725 g bag weight',
        'About 200 × 73 cm',
      ],
      caveat:
        'No tested temperature rating, so rely on owner reports and pack a warm layer on colder nights.',
    },
  },
  {
    id: 'tuye-r35',
    name: 'Naturehike R3.5 Mat',
    category: 'Sleep',
    price: 86,
    weightGrams: 440,
    carriedWeightGrams: 450,
    weightStatus: 'seller-claim',
    weightBasis: 'Seller-listed mat weight plus small accessory estimate',
    summary: 'A near-ultralight insulated inflatable mat for year-round use outside alpine areas.',
    goodFor: 'Year-round trips and compact packing',
    reviewSlug: 'naturehike-tuye-r3-5',
    keyFact: {
      label: 'R-value 3.5 claimed',
      meaning: 'Seller claim, not ASTM-tested',
    },
    kitDetail: {
      headline: 'More ground insulation for cooler trips',
      paragraphs: [
        'The marketplace mummy mat is listed at R3.5, 183 × 58 cm and about 440 g. We use an estimated 450 g carried figure.',
        'It offers a much smaller packed size than foam while adding claimed ground insulation for cooler nights.',
      ],
      specs: ['R3.5 claimed', '183 × 58 cm', 'About 440 g claimed'],
      caveat:
        'Not ASTM-tested; one owner measured it slightly smaller than listed.',
    },
  },
  {
    id: 'rock-60-5',
    name: 'Naturehike Rock 60+5L Pack',
    category: 'Packs',
    // Recorded from the AliExpress listing the kit links to. The Amazon
    // Australia listing (ASIN B08PV3XF4H) was A$119 on 2026-09-21 and is
    // offered beneath it as the alternative.
    price: 69,
    weightGrams: 1160,
    carriedWeightGrams: 1160,
    weightStatus: 'manufacturer',
    weightBasis: 'Manufacturer-listed pack weight',
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
    name: 'Lightweight cookware set',
    category: 'Cooking',
    price: 56,
    weightGrams: 557,
    carriedWeightGrams: 557,
    weightStatus: 'seller-claim',
    weightBasis: 'Seller-listed set weight (WSCS-1051 listing)',
    components: [
      '1.3 L pot (12.5 x 16 cm)',
      '440 ml cup (8 x 8 cm)',
      'Folding gas stove',
      'Pot bracket',
      'Cutlery set',
    ],
    summary:
      'A nested eight-piece pot set for simple camp meals and hot drinks.',
    goodFor: 'Optional cooking setup',
    reviewSlug: 'aluminium-cookware-set',
    kitDetail: {
      headline: 'Straightforward cookware for camp meals',
      paragraphs: [
        'This Widesea set covers the basic cooking role with a 1.3 L pot, 440 ml cup or pot, burner bracket and utensils.',
        'It is an optional add-on for hikers who want hot meals or morning coffee.',
      ],
      specs: [
        'Aluminium construction',
        'WSCS-1051 eight-piece set',
        'For basic camp meals',
      ],
      caveat:
        'The 557 g weight and capacities are seller-listed figures, not Bush Gums measurements.',
    },
  },
  {
    id: 'trekology-aluft-pillow',
    name: 'Trekology Aluft 2.0 Pillow',
    category: 'Accessories',
    price: 27,
    weightGrams: 110,
    carriedWeightGrams: 110,
    weightStatus: 'manufacturer',
    weightBasis: 'Brand figure; independent testers measured 105-108 g',
    summary:
      'An inflatable pillow that packs smaller than a soft-drink can, for hikers prioritising sleep comfort.',
    goodFor: 'Optional comfort add-on',
    reviewSlug: 'trekology-aluft-2-0-pillow',
  },
  {
    id: 'jnln-rain-jacket',
    name: 'JNLN Lightweight Rain Jacket',
    category: 'Accessories',
    // AliExpress SuperDeals price of A$11.79 recorded on 2026-09-21.
    price: 12,
    weightGrams: 150,
    carriedWeightGrams: 150,
    weightStatus: 'seller-claim',
    weightBasis: 'Seller-listed jacket weight',
    summary:
      'A very light, low-cost hooded jacket for light rain, rated water repellent by the seller.',
    goodFor: 'Optional rain add-on',
    reviewSlug: 'jnln-lightweight-rain-jacket',
  },
];

export const productById = Object.fromEntries(
  products.map((p) => [p.id, p]),
) as Record<string, Product>;
export const formatWeight = (grams?: number) =>
  grams === undefined
    ? 'Not yet verified'
    : grams >= 1000
      ? `${(grams / 1000).toFixed(2)} kg`
      : `${grams} g`;
export const weightForKit = (product: Product) => product.carriedWeightGrams;

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
