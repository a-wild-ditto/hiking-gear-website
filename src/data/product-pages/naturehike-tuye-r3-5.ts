import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-tuye-r3-5',
  imageId: 'naturehike-r3-5-v2-australian',
  name: 'Naturehike R3.5 Inflatable Sleeping Mat',
  seoTitle: 'Naturehike R3.5 Sleeping Mat: TuYe Identity and Claims',
  listingRating: {
    stars: 4.9,
    reviews: 130,
    sold: 800,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The marketplace listing identifies an olive Naturehike R3.5 mummy-shaped mat, 183 × 58 cm, at approximately 440 g. It does not establish the exact TuYe model or size designation. Naturehike’s TuYe pages describe a similar mummy mat at about 490 g; confirm the delivered label before treating those specifications as applying to this unit.',
  category: 'Sleep',
  tags: ['Value insulated-mat candidate'],
  pricePaidAud: 85.99,
  pricedOn: '2026-09-16',
  summary:
    'The listing claims 440 g and R 3.5; Naturehike’s similar TuYe mummy mat is listed around 490 g. Exact model identity remains open.',
  metaDescription:
    'Naturehike R3.5 sleeping mat research: TuYe model identity, conflicting listed weights, owner measurements and the unverified insulation claim.',
  question:
    'Does the Naturehike R3.5 provide dependable three-season insulation and comfort without losing air or measuring materially smaller than advertised?',
  whyWeChoseIt: [
    'A sleeping mat is part of your insulation, not just padding. The olive mummy mat’s listing claims R 3.5, about 440 g and a compact packed size for the recorded A$85.99 price. Those are listing claims, and we have not confirmed the delivered model.',
    'Naturehike publishes similar TuYe mummy-mat specifications, while owners report variation in inflated dimensions and occasional air loss. We have not found an ASTM F3340 test report for the R-value claim, so the mat needs careful checking before relying on it for colder nights.',
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
      note: 'The listing and similar Naturehike TuYe pages show R 3.5. No ASTM F3340 report or exact model match is identified.',
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
      note: 'Guidance for Naturehike’s TuYe model; the listing’s exact model is unconfirmed. This is not a comfort guarantee or verified safe-use threshold.',
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
      note: 'The purchased listing has not been confirmed as this exact TuYe model.',
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
    'Naturehike TuYe dimensions and materials are available for comparison, with owner measurements and overnight reports for that model. The marketplace mat’s exact identity remains unconfirmed, and no ASTM R-value report was found.',
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
    {
      text: 'Naturehike lists an inflation bag for the TuYe model; whether it is supplied with this marketplace option needs checking.',
      sourceIds: ['naturehike-global', 'rl-forum'],
    },
  ],
  negatives: [
    {
      text: 'The R 3.5 claim is not supported by an identified ASTM F3340 test or independent report.',
      sourceIds: ['naturehike-global'],
    },
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
    'The claimed R 3.5 is not independently verified here. Do not use the listing’s temperature guidance as a safe-use threshold for winter or alpine trips.',
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
