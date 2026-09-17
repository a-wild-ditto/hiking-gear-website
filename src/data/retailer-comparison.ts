export type ComparisonSide = 'Bush Gums' | 'Anaconda';

export type ComparisonRow = {
  category: 'Shelter' | 'Sleeping bag' | 'Sleeping mat' | 'Pack';
  side: ComparisonSide;
  productName: string;
  priceAud: number;
  priceType: string;
  weightGrams: number;
  weightBasis: string;
  weightStatus:
    'manufacturer' | 'retailer' | 'seller-claim' | 'comparison-estimate';
  sourceUrl: string;
  checkedOn: string;
  note: string;
};

export const comparisonCheckedOn = '2026-09-17';

/** Row-level data for the Value-kit category comparison. */
export const comparisonRows: ComparisonRow[] = [
  {
    category: 'Shelter',
    side: 'Bush Gums',
    productName: 'Naturehike Cloud Up Pro 1P',
    priceAud: 205,
    priceType: 'Price recorded',
    weightGrams: 1390,
    weightBasis:
      'Seller-listed minimum package weight, estimated carried figure',
    weightStatus: 'seller-claim',
    sourceUrl: '/gear/naturehike-cloud-up-tent/',
    checkedOn: comparisonCheckedOn,
    note: 'The 1,230 g listing figure excludes accessories. The comparison uses the approved 1,390 g carried estimate, and neither figure has been independently measured.',
  },
  {
    category: 'Sleeping bag',
    side: 'Bush Gums',
    productName: '400 g Down Envelope Sleeping Bag',
    priceAud: 86,
    priceType: 'Price recorded',
    weightGrams: 800,
    weightBasis: 'Seller-claimed bag plus stuff-sack weight',
    weightStatus: 'seller-claim',
    sourceUrl: '/gear/400g-down-envelope-sleeping-bag/',
    checkedOn: comparisonCheckedOn,
    note: 'The listed weight comes from the seller. Bush Gums is not assigning this bag a temperature rating.',
  },
  {
    category: 'Sleeping mat',
    side: 'Bush Gums',
    productName: 'Naturehike TuYe R3.5 Mat, regular mummy',
    priceAud: 86,
    priceType: 'Price recorded',
    weightGrams: 450,
    weightBasis: 'Seller-listed mat weight, estimated carried figure',
    weightStatus: 'seller-claim',
    sourceUrl: '/gear/naturehike-tuye-r3-5/',
    checkedOn: comparisonCheckedOn,
    note: 'The listing shows about 440 g. The comparison uses the approved 450 g carried estimate.',
  },
  {
    category: 'Pack',
    side: 'Bush Gums',
    productName: 'Naturehike Rock 60+5L Pack, standard version',
    priceAud: 69,
    priceType: 'Price recorded',
    weightGrams: 1160,
    weightBasis: 'Manufacturer-listed pack weight',
    weightStatus: 'manufacturer',
    sourceUrl: '/gear/naturehike-rock-60-5/',
    checkedOn: comparisonCheckedOn,
    note: 'The standard-version listing weight includes the stated rain cover.',
  },
  {
    category: 'Shelter',
    side: 'Anaconda',
    productName: 'Mountain Designs Monoline 1 Person Hike Tent',
    priceAud: 179,
    priceType: 'Club price',
    weightGrams: 1710,
    weightBasis:
      'Retained comparison estimate; retailer page did not expose weight',
    weightStatus: 'comparison-estimate',
    sourceUrl:
      'https://www.anacondastores.com/en-au/p/mountain-designs-monoline-1-person-hike-tent',
    checkedOn: comparisonCheckedOn,
    note: 'The current official page shows the A$179 Club price. Its accessible page text did not expose a weight field, so the approved 1,710 g figure is retained as a comparison estimate, not a verified measurement.',
  },
  {
    category: 'Sleeping bag',
    side: 'Anaconda',
    productName: 'Mountain Designs Capsule 300 Down Sleeping Bag',
    priceAud: 189,
    priceType: 'Advertised sale price',
    weightGrams: 990,
    weightBasis: 'Retailer-listed product weight',
    weightStatus: 'retailer',
    sourceUrl:
      'https://www.anacondastores.com/en-au/p/mountain-designs-capsule-300-2c-limit-rating-down-sleeping-bag',
    checkedOn: comparisonCheckedOn,
    note: 'The current official page shows A$189, 0.99 kg, 7°C comfort and 2°C limit ratings.',
  },
  {
    category: 'Sleeping mat',
    side: 'Anaconda',
    productName: 'Sea to Summit Ultralight XR Insulated Mat, Regular',
    priceAud: 189,
    priceType: 'Advertised sale price',
    weightGrams: 464,
    weightBasis:
      'Manufacturer packed-weight figure, not independently measured',
    weightStatus: 'manufacturer',
    sourceUrl:
      'https://www.anacondastores.com/en-au/p/sea-to-summit-ultralight-xr-insulated-mat/90260560',
    checkedOn: comparisonCheckedOn,
    note: 'The current official page shows A$189 for the regular variant. The approved 464 g packed weight is retained as the listed regular-variant figure, not an independent measurement.',
  },
  {
    category: 'Pack',
    side: 'Anaconda',
    productName: 'Mountain Designs Vallo Hike Pack 60L',
    priceAud: 119,
    priceType: 'Advertised sale price',
    weightGrams: 1650,
    weightBasis:
      'Retained comparison estimate; retailer page did not expose weight',
    weightStatus: 'comparison-estimate',
    sourceUrl:
      'https://www.anacondastores.com/en-au/p/mountain-designs-vallo-hike-pack-60l',
    checkedOn: comparisonCheckedOn,
    note: 'The current official page shows A$119. The approved 1,650 g figure is retained as a comparison estimate because the weight field was not independently verified.',
  },
];

const sum = (side: ComparisonSide, key: 'priceAud' | 'weightGrams') =>
  comparisonRows
    .filter((row) => row.side === side)
    .reduce((total, row) => total + row[key], 0);

export const bushGumsRows = comparisonRows.filter(
  (row) => row.side === 'Bush Gums',
);
export const anacondaRows = comparisonRows.filter(
  (row) => row.side === 'Anaconda',
);
export const comparison = {
  bushGums: {
    priceAud: sum('Bush Gums', 'priceAud'),
    weightGrams: sum('Bush Gums', 'weightGrams'),
  },
  anaconda: {
    priceAud: sum('Anaconda', 'priceAud'),
    weightGrams: sum('Anaconda', 'weightGrams'),
  },
};
export const savings = {
  priceAud: comparison.anaconda.priceAud - comparison.bushGums.priceAud,
  pricePercent: Math.round(
    ((comparison.anaconda.priceAud - comparison.bushGums.priceAud) /
      comparison.anaconda.priceAud) *
      100,
  ),
  weightGrams:
    comparison.anaconda.weightGrams - comparison.bushGums.weightGrams,
  weightPercent: Math.round(
    ((comparison.anaconda.weightGrams - comparison.bushGums.weightGrams) /
      comparison.anaconda.weightGrams) *
      100,
  ),
};

export const formatAud = (amount: number) =>
  `A$${amount.toLocaleString('en-AU')}`;
export const formatKg = (grams: number, digits = 2) =>
  `${(grams / 1000).toFixed(digits)} kg`;
