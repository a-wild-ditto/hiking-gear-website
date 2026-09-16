import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-cloud-up-tent',
  imageId: 'naturehike-cloud-up-australian',
  name: 'Naturehike Cloud Up Tent',
  listingRating: {
    stars: 4.7,
    reviews: 148,
    sold: 800,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The displayed A$162.68 price is the 1P Base context from the supplied listing screenshot. The 2P Pro option is a different variant and has different pricing, weight, fabric and usable space. Naturehike’s current official figures also conflict with the screenshot weights, so confirm the exact ordered option and delivered model code.',
  category: 'Shelter',
  tags: ['Established-brand shelter candidate', 'Variant comparison'],
  pricePaidAud: 162.68,
  summary:
    'A familiar budget double-wall tent family, but the 1P Base and 2P Pro are different shelters whose listing weights conflict with current official specifications.',
  metaDescription:
    'Research on the Naturehike Cloud Up Base 1 and Cloud Up Pro 2: official specifications, independent findings and unresolved variant differences.',
  question:
    'Which Cloud Up variant offers the better beginner shelter once complete weight, usable room, condensation and wet-weather performance are measured consistently?',
  whyWeChoseIt: [
    'The Cloud Up family uses a familiar double-wall structure, aluminium pole and front vestibule, with more independent evidence than an anonymous marketplace tent.',
    'Base 1 and Pro 2 should not be treated as interchangeable capacity options. Their fabrics, pole sets, weights and prices differ, and advertised weights may exclude different components.',
  ],
  specs: [
    {
      label: 'Variants in the listing',
      value: 'Cloud Up Base 1P and Cloud Up Pro 2P',
      status: 'seller-claim',
      note: 'Record the ordered option, colour and model/SKU separately.',
    },
    {
      label: 'Design',
      value: 'Three-season, front-entry double-wall tent with aluminium pole',
      status: 'manufacturer',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
    {
      label: 'Base 1 listing weight',
      value: '1.49 kg shown in the supplied screenshot',
      status: 'seller-claim',
      note: 'Naturehike’s current Base 1 page gives 1.85 kg; measure the complete delivered kit.',
      sourceIds: ['naturehike-base-1'],
    },
    {
      label: 'Pro 2 listing weight',
      value: '1.75 kg shown in the supplied screenshot',
      status: 'seller-claim',
      note: 'Naturehike currently states approximately 1.36 kg minimum / 1.53 kg packed.',
      sourceIds: ['naturehike-pro-2'],
    },
    {
      label: 'Base 1 dimensions',
      value: '210 × 90 × 105 cm; packed about 13 × 13 × 39 cm claimed',
      status: 'manufacturer',
      sourceIds: ['naturehike-base-1'],
    },
    {
      label: 'Pro 2 dimensions',
      value: '210 × 130 × 105 cm; packed about 13 × 40 cm claimed',
      status: 'manufacturer',
      sourceIds: ['naturehike-pro-2'],
    },
    {
      label: 'Materials',
      value:
        'Base 1: 210T polyester; Pro 2: 20D silicone-coated nylon fly and 210T polyester floor claimed',
      status: 'manufacturer',
      note: 'The official pages contain some inconsistent table and description text; confirm the delivered fabric labels.',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
    {
      label: 'Capacity',
      value: 'Base 1: one person; Pro 2: two people claimed',
      status: 'manufacturer',
      note: 'Independent Cloud Up 2 reviews describe the two-person interior as tight for two adults.',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2', 'cleverhiker'],
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Naturehike provides current pages for both named variants, and older Cloud Up 2 versions have useful independent and long-term evidence. Most independent reviews are not of the current Pro 2, and the screenshot weights cannot yet be reconciled with the official pages.',
  sources: [
    {
      id: 'naturehike-base-1',
      title: 'Cloud Up Base 1-Person Ultralight Backpacking Tent',
      publisher: 'Naturehike',
      url: 'https://www.naturehike.com/products/cloud-up-base-1-person-ultralight-backpacking-tent',
      kind: 'manufacturer',
      relation: 'exact-model',
      summary:
        'Current Base 1 page listing 210 × 90 × 105 cm, 210T polyester, PU 3000 mm and 1.85 kg. The page contains some internally inconsistent copy.',
    },
    {
      id: 'naturehike-pro-2',
      title: 'Cloud Up Pro 2-Person Ultralight Backpacking Tent',
      publisher: 'Naturehike',
      url: 'https://www.naturehike.com/products/cloud-up-pro-2-person-ultralight-backpacking-tent',
      kind: 'manufacturer',
      relation: 'exact-model',
      summary:
        'Current Pro 2 page listing 210 × 130 × 105 cm, approximately 1.36 kg minimum / 1.53 kg packed, 20D nylon fly and aluminium pole.',
    },
    {
      id: 'cleverhiker',
      title: 'Naturehike Cloud Up 2 Review',
      publisher: 'CleverHiker',
      url: 'https://www.cleverhiker.com/backpacking/naturehike-cloud-up-2-tent-review/',
      kind: 'written-review',
      relation: 'same-design',
      summary:
        'Hands-on test of an older 20D Cloud Up 2. It was affordable and straightforward to pitch, but cramped for two and short on headroom.',
    },
    {
      id: 'five-year',
      title: 'Naturehike Cloud Up Tent Review: Five-Year Update',
      publisher: 'Mom Goes Camping',
      url: 'https://momgoescamping.com/naturehike-cloud-up-tent-review-five-year-update/',
      kind: 'blog',
      relation: 'same-design',
      summary:
        'Long-term report covering more than 150 nights in an older Cloud Up 2, dependable below treeline but not spacious for tall users or heavy snow.',
    },
    {
      id: 'cloud-up-2-measured',
      title: 'Review da Barraca Cloud Up 2, da Naturehike',
      publisher: 'FuiAcampar',
      url: 'https://fuiacampar.com.br/review-da-barraca-cloud-up-2-da-naturehike/',
      kind: 'written-review',
      relation: 'same-design',
      lang: 'pt-BR',
      summary:
        'Hands-on review of an older Cloud Up 2 measuring 1.90 kg with footprint and finding it tight for two people and their equipment.',
    },
  ],
  positives: [
    {
      text: 'The family uses a conventional double-wall structure and is generally straightforward to pitch.',
      sourceIds: ['cleverhiker', 'cloud-up-2-measured'],
    },
    {
      text: 'Older Cloud Up 2 versions have credible long-term evidence for casual three-season use.',
      sourceIds: ['five-year'],
    },
  ],
  negatives: [
    {
      text: 'The Cloud Up 2 floor is tight for two adults, especially with equipment.',
      sourceIds: ['cleverhiker', 'cloud-up-2-measured', 'five-year'],
    },
    {
      text: 'Cloud Up names conceal differences in fabric, generation, included components and price.',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
    {
      text: 'The screenshot weights conflict materially with Naturehike’s current figures.',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
  ],
  watching: [
    'Exact ordered variant, model code, complete carried weight and included footprint.',
    'Usable width for two mats, equipment storage, condensation and rain entry.',
    'Pole joints, hub, clips, zips, seam tape, guy points and peg quality.',
    'Keep Base 1 and Pro 2 results separate if both variants are tested.',
  ],
  testPlan: [
    'Record the ordered option, model code, barcode, production label, colour and supplied components.',
    'Weigh every component and report minimum and complete carried weight explicitly.',
    'Measure packed size, pitched floor, peak height, door and vestibule.',
    'Pitch with intended mats and packs, inspect construction, then test rain, condensation and moderate wind.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
