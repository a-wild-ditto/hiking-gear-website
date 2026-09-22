import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-tuye-r3-5',
  imageId: 'naturehike-r3-5-v2-australian',
  name: 'Naturehike R3.5 Inflatable Sleeping Mat',
  seoTitle: 'Naturehike R3.5 Sleeping Mat: Light Insulated Budget Mat',
  listingRating: {
    stars: 4.9,
    reviews: 130,
    sold: 800,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The marketplace listing identifies an olive Naturehike R3.5 mummy-shaped mat, 183 × 58 cm, at approximately 440 g. It closely matches Naturehike’s TuYe mummy mat, which is listed at about 490 g.',
  category: 'Sleep',
  tags: ['Value kit mat'],
  pricePaidAud: 85.99,
  pricedOn: '2026-09-16',
  summary:
    'A 440 g insulated inflatable mat with a claimed R 3.5 that packs to about 10 × 18 cm, for about A$86.',
  metaDescription:
    'Naturehike R3.5 sleeping mat: a 440 g insulated mat rated 4.9 from 130 reviews, with owner comfort reports and what to know before buying.',
  question:
    'Does the Naturehike R3.5 provide dependable three-season insulation and comfort without losing air or measuring materially smaller than advertised?',
  whyWeChoseIt: [
    'A sleeping mat is part of your insulation, not just padding. The olive mummy mat claims R 3.5 and about 440 g, and it packs small, for A$85.99.',
    'Naturehike publishes similar TuYe mummy-mat specifications, while owners report variation in inflated dimensions and occasional air loss. Owners describe it as comfortable, and on colder nights you can add the foam mat underneath for extra insulation.',
  ],
  specs: [
    {
      label: 'Listing variant',
      value: 'Mummy, approximately 183 × 58 × 7 cm',
      status: 'seller-claim',
      note: 'The exact TuYe model and size designation are not established by this listing; confirm the delivered label.',
      sourceIds: ['marketplace-listing'],
    },
    {
      label: 'Claimed R-value',
      value: 'R 3.5',
      status: 'seller-claim',
      note: 'The listing and similar Naturehike TuYe pages show R 3.5. Not ASTM F3340 tested.',
      sourceIds: [
        'marketplace-listing',
        'naturehike-global',
        'naturehike-japan',
      ],
    },
    {
      label: 'Temperature guidance',
      value: 'Suitable above −6°C claimed',
      status: 'manufacturer',
      note: 'Naturehike’s own guidance; a rough figure, not a guarantee.',
      sourceIds: ['naturehike-global'],
    },
    {
      label: 'Dimensions and weight',
      value: 'Approximately 183 × 58 cm and 440 g claimed',
      status: 'seller-claim',
      note: 'The updated listing supplies the 440 g figure. Manufacturer pages show approximately 490 g, while one owner measured smaller inflated dimensions. Accessory weight is additional.',
    },
    {
      label: 'Packed size',
      value: 'Approximately 10 × 10 × 18 cm claimed',
      status: 'manufacturer',
      note: 'The marketplace listing simplifies this to about 10 × 18 cm; one owner measured about 9 × 19 cm.',
      sourceIds: ['naturehike-global', 'naturehike-japan', 'rl-forum'],
    },
    {
      label: 'Material and construction',
      value:
        'Naturehike TuYe: 20D nylon laminated with TPU; five-layer construction including aluminium film claimed',
      status: 'manufacturer',
      sourceIds: ['naturehike-global', 'naturehike-japan'],
    },
    {
      label: 'Included',
      value: 'Naturehike TuYe: inflation bag and storage sack listed',
      status: 'manufacturer',
      note: 'Check what arrives with the marketplace mat. One TuYe owner measured the accessories at about 60-64 g.',
      sourceIds: ['naturehike-global', 'naturehike-japan', 'rl-forum'],
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Naturehike’s published specs, owner measurements and overnight reports on the matching TuYe mat give a useful picture. Like most budget mats, the R-value isn’t ASTM-tested.',
  sources: [
    {
      id: 'marketplace-listing',
      title: 'Naturehike R3.5 AliExpress marketplace listing',
      publisher: 'AliExpress',
      kind: 'listing',
      relation: 'seller-claim',
      summary:
        'Marketplace listing showing the olive mummy mat at 183 × 58 cm, approximately 440 g, R 3.5, A$85.99, 4.9 stars from 130 reviews and 800+ sold.',
    },
    {
      id: 'naturehike-global',
      title: 'TuYe R3.5 Ultralight Inflatable Pad',
      publisher: 'Naturehike',
      url: 'https://www.naturehike.com/products/tuye-r3-5-ultralight-inflatable-pad',
      kind: 'manufacturer',
      relation: 'similar-design',
      summary:
        'Current manufacturer page specifying R 3.5, 20D nylon/TPU, 7 cm thickness, a 183 × 58 cm mummy variant around 490 g and packed dimensions around 18 × 10 × 10 cm. No R-value test report is identified.',
    },
    {
      id: 'naturehike-japan',
      title: 'Naturehike R3.5 Air Mat',
      publisher: 'Naturehike Japan',
      url: 'https://naturehike.co.jp/products/cnh22dz018',
      kind: 'manufacturer',
      relation: 'similar-design',
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
      relation: 'similar-design',
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
      relation: 'similar-design',
      summary:
        'Seller-hosted customer feedback including a report of six weeks of use and good side-sleeping comfort. Useful anecdotal evidence, not controlled testing.',
    },
  ],
  positives: [
    {
      text: 'The updated listing’s claimed 440 g weight and small packed size are attractive for an insulated three-season mat.',
      sourceIds: ['marketplace-listing'],
    },
    {
      text: 'Owners of the similar Naturehike R3.5 mat describe it as comfortable, including for side sleeping.',
      sourceIds: ['rl-forum', 'naturehike-za-reviews'],
    },
  ],
  negatives: [
    {
      text: 'An owner of a similar Naturehike R3.5 mat measured it shorter, narrower and thinner than the nominal dimensions.',
      sourceIds: ['rl-forum'],
    },
    {
      text: 'An owner of a similar Naturehike R3.5 mat reported slow leakage after about twenty nights and suspected the valve.',
      sourceIds: ['rl-forum'],
    },
  ],
  thingsToKnow: [
    'Treat the listing’s −6°C guidance as a rough manufacturer figure. For colder winter nights, add the foam mat underneath. Not intended for alpine or snow trips.',
    'If the delivered mat includes an inflation bag, use it rather than your breath to reduce moisture inside the mat.',
    'Can be combined with the foil egg-crate foam mat underneath for more comfort and puncture resistance.',
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
