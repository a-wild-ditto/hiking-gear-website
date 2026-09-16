import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'bisinna-1-8kg-sleeping-bag',
  imageId: 'bisinna-1-8kg-sleeping-bag',
  name: 'BISINNA 1.8 kg Synthetic Sleeping Bag',
  listingRating: {
    stars: 4.8,
    reviews: 88,
    sold: 408,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The purchased listing option is labelled “Standard 1.8kg LBR”. The listing diagram shows approximately 1.8 kg and 5°C, while the closest BISINNA SL010/XINLIAN documentation gives 1.9 kg, 10°C comfort and 5°C limit. Confirm the delivered label and exact variant before treating these as the same bag.',
  category: 'Sleep',
  tags: ['Value synthetic sleeping-bag candidate'],
  pricePaidAud: 59.83,
  summary:
    'A roomy synthetic bag whose listing places 5°C beside a roughly 1.8 kg weight. We need to establish what that temperature figure actually means.',
  metaDescription:
    'What we know about the BISINNA 1.8 kg synthetic sleeping bag: listing claims, related manufacturer specifications, independent observations and our test plan.',
  question:
    'Is this a practical cool-weather beginner sleeping bag, and does the listing’s 5°C figure represent a credible limit rather than a safe comfort temperature?',
  whyWeChoseIt: [
    'Synthetic insulation is inexpensive, comparatively tolerant of damp conditions and straightforward for a beginner to care for. The roomy rectangular cut also suits campers who value space over low packed weight.',
    'At roughly 1.8 kg it is a heavy backpacking sleep system, and the prominent 5°C figure is not a verified comfort rating. The related BISINNA manual calls 10°C comfort and 5°C limit.',
  ],
  specs: [
    {
      label: 'Listing variant',
      value: '“Standard 1.8kg LBR”',
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
      value: 'Approximately 1.8 kg on the purchased listing',
      status: 'seller-claim',
      note: 'El País measured a similar BISINNA bag at 1.8 kg; the closest manual specifies 1.9 kg.',
      sourceIds: ['elpais', 'bisinna-manual'],
    },
    {
      label: 'Temperature guidance',
      value:
        '5°C shown on the listing; 10°C comfort / 5°C limit for related SL010',
      status: 'seller-claim',
      note: 'No EN or ISO 23537 test was found. Do not present 5°C as a comfort rating.',
      sourceIds: ['bisinna-manual'],
    },
    {
      label: 'Dimensions',
      value: 'Approximately 220–230 × 80 cm including hood',
      status: 'corroborated',
      sourceIds: ['bisinna-manual', 'elpais'],
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
    'A BISINNA manual covers a closely related 1.9 kg SL010, and El País reports hands-on observations of what appears to be the same design. No standardised temperature test or strong long-term trail review was found for the exact 1.8 kg option.',
  sources: [
    {
      id: 'bisinna-manual',
      title: 'BISINNA Sleeping Bag Instructions',
      publisher: 'BISINNA via Amazon',
      url: 'https://m.media-amazon.com/images/I/91%2BC6PtBWQL.pdf',
      kind: 'manufacturer',
      relation: 'same-design',
      summary:
        'Instructions for model SL010/XINLIAN. They specify a rectangular polyester bag weighing 1.9 kg, with 10°C comfort and 5°C limit claims. The documented weight does not exactly match the purchased 1.8 kg option.',
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
      text: 'Approximately 1.8 kg is heavy for backpacking before packed volume is considered.',
      sourceIds: ['elpais', 'bisinna-manual'],
    },
    {
      text: 'The listing’s 5°C figure is not a verified comfort rating.',
      sourceIds: ['bisinna-manual'],
    },
  ],
  watching: [
    'Exact model label, actual bag-only weight and packed volume.',
    'Whether the supplied compression sack can be used without unreasonable effort.',
    'Loft distribution, cold spots, zip function and foot vent closure.',
    'No standardised temperature test has been found; begin field use well above 5°C with backup insulation.',
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
