import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-tuye-r3-5',
  imageId: 'naturehike-tuye-r3-5-mummy',
  name: 'Naturehike TuYe R3.5 Inflatable Sleeping Mat',
  listingRating: {
    stars: 4,
    reviews: 4,
    sold: 27,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The supplied listing screenshot shows the mummy-shaped 183 × 58 × 7 cm variant at approximately 490 g, packed to about 10 × 18 cm. Naturehike’s current global page calls the range TuYe R3.5 and matches the 490 g figure. Size names and weights vary between regional pages and older listings, so confirm the delivered SKU.',
  category: 'Sleep',
  tags: ['Value insulated-mat candidate'],
  pricePaidAud: 95.21,
  summary:
    'A compact insulated mat claiming R 3.5 at about 490 g. The key questions are whether its dimensions, insulation and overnight air retention match the listing.',
  metaDescription:
    'Research on the Naturehike TuYe R3.5 sleeping mat: manufacturer specifications, owner measurements, air-retention concerns and our test plan.',
  question:
    'Does the Naturehike R3.5 provide dependable three-season insulation and comfort without losing air or measuring materially smaller than advertised?',
  whyWeChoseIt: [
    'A sleeping mat is part of the insulation system, and an insulated mat around 490 g could give beginners a useful balance of price, packed size and three-season warmth.',
    'Naturehike does not identify an ASTM F3340 test or publish a laboratory report on the product page. Owner reports also vary on dimensions, weight and long-term valve performance.',
  ],
  specs: [
    {
      label: 'Listing variant',
      value: 'Mummy, approximately 183 × 58 × 7 cm',
      status: 'seller-claim',
      note: 'Likely the current Standard Single Mummy or Mummy Large variant; confirm the delivered size designation.',
      sourceIds: ['naturehike-global', 'naturehike-japan'],
    },
    {
      label: 'Claimed R-value',
      value: 'R 3.5',
      status: 'manufacturer',
      note: 'No ASTM F3340 test standard or laboratory report is identified. Treat this as a manufacturer claim.',
      sourceIds: ['naturehike-global', 'naturehike-japan'],
    },
    {
      label: 'Temperature guidance',
      value: 'Suitable above −6°C claimed',
      status: 'manufacturer',
      note: 'Not a comfort guarantee or verified safe-use threshold.',
      sourceIds: ['naturehike-global'],
    },
    {
      label: 'Dimensions and weight',
      value: 'Approximately 183 × 58 × 7 cm and 490 g claimed',
      status: 'manufacturer',
      note: 'One owner measured about 175 × 54 × 6.5 cm inflated. Accessory weight is additional.',
      sourceIds: ['naturehike-global', 'naturehike-japan', 'rl-forum'],
    },
    {
      label: 'Packed size',
      value: 'Approximately 10 × 10 × 18 cm claimed',
      status: 'manufacturer',
      note: 'The screenshot simplifies this to about 10 × 18 cm; one owner measured about 9 × 19 cm.',
      sourceIds: ['naturehike-global', 'naturehike-japan', 'rl-forum'],
    },
    {
      label: 'Material and construction',
      value:
        '20D nylon laminated with TPU; five-layer construction including aluminium film claimed',
      status: 'manufacturer',
      sourceIds: ['naturehike-global', 'naturehike-japan'],
    },
    {
      label: 'Included',
      value: 'Inflation bag and storage sack',
      status: 'manufacturer',
      note: 'One owner measured the accessories at about 60–64 g.',
      sourceIds: ['naturehike-global', 'naturehike-japan', 'rl-forum'],
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Official dimensions and materials are available, with useful owner measurements and overnight reports. Evidence is mostly observational, and no ASTM R-value report was found.',
  sources: [
    {
      id: 'naturehike-global',
      title: 'TuYe R3.5 Ultralight Inflatable Pad',
      publisher: 'Naturehike',
      url: 'https://www.naturehike.com/products/tuye-r3-5-ultralight-inflatable-pad',
      kind: 'manufacturer',
      relation: 'exact-model',
      summary:
        'Current manufacturer page specifying R 3.5, 20D nylon/TPU, 7 cm thickness, a 183 × 58 cm mummy variant around 490 g and packed dimensions around 18 × 10 × 10 cm. No R-value test report is identified.',
    },
    {
      id: 'naturehike-japan',
      title: 'Naturehike R3.5 Air Mat',
      publisher: 'Naturehike Japan',
      url: 'https://naturehike.co.jp/products/cnh22dz018',
      kind: 'manufacturer',
      relation: 'exact-model',
      lang: 'ja',
      summary:
        'Regional manufacturer page matching the 183 × 58 cm mummy mat at approximately 490 g and 10 × 10 × 18 cm packed.',
    },
    {
      id: 'rl-forum',
      title: 'Nouveau matelas NatureHike 3.5 et 5.8 RValue',
      publisher: 'Randonner Léger forum',
      url: 'https://www.randonner-leger.org/forum/viewtopic.php?id=42124',
      kind: 'forum',
      relation: 'exact-model',
      lang: 'fr',
      summary:
        'Owner thread with weights, inflated measurements and overnight reports. One nominal 183 × 58 cm mat measured roughly 175 × 54 × 6.5 cm and another owner reported slow air loss after about twenty nights.',
    },
    {
      id: 'naturehike-za-reviews',
      title: 'R3.5 Ultralight Sleeping Pad',
      publisher: 'Naturehike South Africa',
      url: 'https://www.naturehike.co.za/products/r3-5-ultralight-sleeping-pad',
      kind: 'retailer',
      relation: 'exact-model',
      summary:
        'Seller-hosted customer feedback including a report of six weeks of use and good side-sleeping comfort. Useful anecdotal evidence, not controlled testing.',
    },
  ],
  positives: [
    {
      text: 'The claimed 490 g weight and small packed size are attractive for an insulated three-season mat.',
      sourceIds: ['naturehike-global', 'naturehike-japan'],
    },
    {
      text: 'Owners generally describe it as comfortable, including for side sleeping.',
      sourceIds: ['rl-forum', 'naturehike-za-reviews'],
    },
    {
      text: 'The supplied inflation bag avoids introducing breath moisture and makes inflation easier.',
      sourceIds: ['naturehike-global', 'rl-forum'],
    },
  ],
  negatives: [
    {
      text: 'The R 3.5 claim is not supported by an identified ASTM F3340 test or independent report.',
      sourceIds: ['naturehike-global'],
    },
    {
      text: 'At least one owner measured the inflated mat shorter, narrower and thinner than the nominal dimensions.',
      sourceIds: ['rl-forum'],
    },
    {
      text: 'An owner reported slow leakage after about twenty nights and suspected the valve.',
      sourceIds: ['rl-forum'],
    },
  ],
  watching: [
    'Exact SKU, size designation, bag-only weight and total carried weight with accessories.',
    'Inflated dimensions, pressure retention, valve sealing and weld durability.',
    'Whether hips or shoulders bottom out at a comfortable inflation pressure.',
    'The −6°C statement is manufacturer guidance, not a verified safe-use threshold.',
  ],
  testPlan: [
    'Record the SKU, size, materials, R-value wording and care instructions from the packaging.',
    'Weigh the mat, storage sack, inflation bag and complete carried system; measure flat, inflated and packed dimensions.',
    'Time inflation and deflation and repeat overnight leak checks after multiple cycles.',
    'Inspect valve, welds and edges; test back- and side-sleeping comfort.',
    'Compare perceived insulation with a mat carrying a published ASTM F3340 rating, without deriving a replacement R-value.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
