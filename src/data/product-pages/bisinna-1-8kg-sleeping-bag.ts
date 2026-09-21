import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'bisinna-1-8kg-sleeping-bag',
  imageId: 'bisinna-1-6kg-sleeping-bag-australian',
  name: 'BISINNA 1.6 kg Synthetic Sleeping Bag',
  listingRating: {
    stars: 4.8,
    reviews: 196,
    sold: 1000,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The selected listing option is the orange 1.6 kg model. The marketplace listing claims a 13°C comfortable temperature, 190 × 85 cm dimensions and a 40 × 25 cm packed size. No EN or ISO 23537 result is shown, so 13°C remains an unverified seller claim.',
  category: 'Sleep',
  tags: ['Value synthetic sleeping-bag candidate'],
  pricePaidAud: 53.12,
  pricedOn: '2026-09-16',
  summary:
    'A roomy, easy-care synthetic bag for about A$53. A low-cost way to get started on mild nights.',
  metaDescription:
    'What we know about the BISINNA 1.6 kg synthetic sleeping bag: listing claims, related manufacturer specifications, independent observations and why we chose it.',
  question:
    'Is this a practical mild-weather beginner sleeping bag, and is the listing’s 13°C comfort claim credible?',
  whyWeChoseIt: [
    'Synthetic insulation is inexpensive, comparatively tolerant of damp conditions and straightforward for a beginner to care for. The roomy rectangular cut also suits campers who value space and comfort over low packed weight.',
    'At roughly 1.6 kg it is heavier than a down bag, and the listed 13°C comfort figure is a seller claim rather than a standardised rating. For mild-weather first trips, it is a low-cost way to get started without a big upfront spend.',
  ],
  specs: [
    {
      label: 'Listing variant',
      value: 'Orange 1.6 kg',
      status: 'seller-claim',
      note: 'Confirm the delivered model label, colour and zip side.',
    },
    {
      label: 'Design',
      value: 'Rectangular bag with hood, full side zip and foot opening',
      status: 'corroborated',
      sourceIds: ['bisinna-manual', 'elpais'],
    },
    {
      label: 'Weight',
      value: 'Approximately 1.6 kg on the selected listing',
      status: 'seller-claim',
      note: 'Measure the delivered bag and packed sack; related BISINNA models have different fill weights.',
      sourceIds: ['elpais', 'bisinna-manual'],
    },
    {
      label: 'Temperature guidance',
      value: '13°C comfortable temperature shown on the listing',
      status: 'seller-claim',
      note: 'No EN or ISO 23537 test was found. Treat this only as a seller claim.',
    },
    {
      label: 'Dimensions',
      value: 'Approximately 190 × 85 cm; packed size 40 × 25 cm',
      status: 'seller-claim',
    },
    {
      label: 'Shell and insulation',
      value: 'Polyester shell and polyester hollow-fibre fill claimed',
      status: 'same-design',
      note: 'Confirm the delivered label; marketplace descriptions vary.',
      sourceIds: ['bisinna-manual'],
    },
    {
      label: 'Packed size',
      value: 'Not reliably established',
      status: 'to-verify',
    },
  ],
  coverage: 'limited',
  coverageNote:
    'A BISINNA manual covers a related 1.9 kg SL010, and El País reports hands-on observations of a heavier version of this general design. Neither establishes the performance of the selected orange 1.6 kg model, and no standardised temperature test was found.',
  sources: [
    {
      id: 'bisinna-manual',
      title: 'BISINNA Sleeping Bag Instructions',
      publisher: 'BISINNA via Amazon',
      url: 'https://m.media-amazon.com/images/I/91%2BC6PtBWQL.pdf',
      kind: 'manufacturer',
      relation: 'same-design',
      summary:
        'Instructions for model SL010/XINLIAN. They specify a rectangular polyester bag weighing 1.9 kg, with 10°C comfort and 5°C limit claims. This is context for a related heavier variant, not evidence for the selected 1.6 kg bag.',
      quote:
        '1.9KG version: Comfort Temp 10°C/50°F, Temperature Limit 5°C/41°F',
    },
    {
      id: 'elpais',
      title: '¿Buscas un buen saco de dormir? Probamos tres modelos diferentes',
      publisher: 'El País Escaparate',
      url: 'https://elpais.com/escaparate/comparativas/2024-08-04/buscas-un-buen-saco-de-dormir-probamos-tres-modelos-diferentes-para-que-te-vayas-de-viaje.html',
      kind: 'written-review',
      relation: 'same-design',
      lang: 'es',
      summary:
        'Hands-on comparison measuring a BISINNA bag at about 1.8 kg and 219 × 80 cm. It was roomy and padded but bulky and difficult to return to its compression sack.',
    },
  ],
  positives: [
    {
      text: 'Roomier than a narrow mummy bag and usable as a blanket.',
      sourceIds: ['elpais', 'bisinna-manual'],
    },
    {
      text: 'Synthetic construction should be relatively straightforward for a beginner to maintain.',
      sourceIds: ['bisinna-manual'],
    },
  ],
  negatives: [
    {
      text: 'Approximately 1.6 kg is still heavy for backpacking before packed volume is considered.',
      sourceIds: ['elpais', 'bisinna-manual'],
    },
    {
      text: 'The listing’s 13°C comfort figure is not independently verified.',
      sourceIds: ['bisinna-manual'],
    },
  ],
  thingsToKnow: [
    'This gear is suitable for 3 season use but would not be recommended for winter hikes or hiking in alpine regions.',
    'Bulky when packed, so it suits a larger pack.',
    'Pair it with an insulated mat; a bag alone won’t keep you warm on cold ground.',
  ],
  watching: [
    'Exact model label, actual bag-only weight and packed volume.',
    'Whether the supplied compression sack can be used without unreasonable effort.',
    'Loft distribution, cold spots, zip function and foot vent closure.',
    'No standardised temperature test has been found; begin field use conservatively in mild conditions with backup insulation.',
  ],
  testPlan: [
    'Photograph labels and record the exact model, materials and printed temperature guidance.',
    'Weigh the bag, sack and packed system; measure internal and packed dimensions.',
    'Inspect stitching, insulation distribution, zip baffle, hood and foot opening.',
    'Compare perceived warmth with a sleeping bag carrying a published EN/ISO rating.',
    'Begin overnight testing in mild conditions and do not assign a temperature rating from informal use.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
