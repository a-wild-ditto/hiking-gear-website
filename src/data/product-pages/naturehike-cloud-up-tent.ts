import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-cloud-up-tent',
  imageId: 'naturehike-cloud-up-pro-australian',
  name: 'Naturehike Cloud Up Pro Tent',
  listingRating: {
    stars: 4.9,
    reviews: 9,
    sold: 66,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'The updated AliExpress listing contains Cloud Up Pro 1P, 2P and 3P options. The Pro 1P marketplace listing shows a grey 20D nylon tent at A$204.88, with a 1.23 kg weight excluding accessories, PU 3000 mm waterproofing and a 39 × 13 cm packed size. Check you have selected the capacity you want.',
  category: 'Shelter',
  tags: ['Value kit tent'],
  pricePaidAud: 204.88,
  seoTitle: 'Naturehike Cloud Up Pro 1P: Ultralight Budget Tent',
  pricedOn: '2026-09-16',
  pricedFrom: 'AliExpress',
  summary:
    'An ultralight 1.23 kg double-wall tent from a family with years of positive owner reviews. Also available in 2P and 3P.',
  metaDescription:
    'Naturehike Cloud Up Pro: a 1.23 kg double-wall tent for about A$205, with long-term owner reviews of the Cloud Up family and what to know before buying.',
  question:
    'Which Cloud Up variant makes the most sense for a beginner once complete weight, usable room, condensation and wet-weather behaviour are checked?',
  whyWeChoseIt: [
    'The Cloud Up family uses a familiar double-wall structure, aluminium poles and a front vestibule. Reviews of older Cloud Up 2 tents describe straightforward pitching and useful casual performance.',
    'It is ultralight and well reviewed, yet still much more affordable than other ultralight tent options.',
  ],
  externalReview: {
    videoId: 'zU3ZJg01nIM',
    title: 'Naturehike Cloud Up Tent — 7-Year Long-Term Review',
    note: 'Note: this review covers the original Cloud Up rather than the upgraded Cloud Up Pro variant listed here.',
  },
  specs: [
    {
      label: 'Variants in the listing',
      value: 'Cloud Up Pro 1P, 2P and 3P',
      status: 'seller-claim',
      note: 'Available in several colours and fabrics; check your selection.',
    },
    {
      label: 'Design',
      value: 'Three-season, front-entry double-wall tent with aluminium pole',
      status: 'manufacturer',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
    {
      label: 'Pro 1 listing weight',
      value: '1.23 kg excluding accessories',
      status: 'seller-claim',
      note: 'The marketplace listing also claims 210 × 60 × 105 cm and a 39 × 13 cm packed size. Measure the complete delivered kit.',
    },
    {
      label: 'Pro 2 listing weight',
      value: '1.75 kg shown on the marketplace listing',
      status: 'seller-claim',
      note: 'An earlier Pro 2 marketplace listing shows 1.75 kg including accessories. Naturehike currently states approximately 1.36 kg minimum / 1.53 kg packed.',
      sourceIds: ['naturehike-pro-2'],
    },
    {
      label: 'Pro 1 listing dimensions',
      value: '210 × 60 × 105 cm; packed about 39 × 13 cm claimed',
      status: 'seller-claim',
    },
    {
      label: 'Pro 2 dimensions',
      value: '210 × 130 × 105 cm; packed about 13 × 40 cm claimed',
      status: 'manufacturer',
      sourceIds: ['naturehike-pro-2'],
    },
    {
      label: 'Pro 3 listing specifications',
      value: 'Not shown on the marketplace listing',
      status: 'to-verify',
      note: 'The listing doesn’t show 3P specifications yet.',
    },
    {
      label: 'Materials',
      value:
        'Sold in 20D nylon and 210T polyester variants, with a 15D nylon option on the 2P. Pro 1 listing: 20D nylon and PU 3000 mm; Pro 2 official page: 20D silicone-coated nylon fly and 210T polyester floor claimed',
      status: 'seller-claim',
      note: 'Naturehike’s pages differ slightly on fabric details.',
      sourceIds: ['naturehike-base-1', 'naturehike-pro-2'],
    },
    {
      label: 'Capacity',
      value: 'Updated listing offers Pro 1P, 2P and 3P capacities',
      status: 'seller-claim',
      note: 'Listing specs cover the 1P; an earlier listing provides Pro 2 details. Reviewers found the older Cloud Up 2 interior snug for two adults.',
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Strong owner and reviewer evidence for the Cloud Up design, including a seven-year review and more than 150 nights from one owner. Most reports cover earlier generations rather than the current Pro.',
  sources: [
    {
      id: 'naturehike-base-1',
      title: 'Cloud Up Base 1-Person Ultralight Backpacking Tent',
      publisher: 'Naturehike',
      url: 'https://www.naturehike.com/products/cloud-up-base-1-person-ultralight-backpacking-tent',
      kind: 'manufacturer',
      relation: 'same-design',
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
      text: 'Owners and reviewers generally describe the Cloud Up as straightforward to pitch, with a conventional double-wall structure.',
      sourceIds: ['cleverhiker', 'cloud-up-2-measured'],
    },
    {
      text: 'An older Cloud Up 2 has credible long-term evidence for casual use below treeline, including more than 150 nights from one owner report.',
      sourceIds: ['five-year'],
    },
  ],
  negatives: [
    {
      text: 'Reviewers consistently found the Cloud Up 2 interior tight for two adults, especially with equipment, and limited in headroom for taller users.',
      sourceIds: ['cleverhiker', 'cloud-up-2-measured', 'five-year'],
    },
  ],
  thingsToKnow: [
    'Naturehike describes the design as three-season. That label assumes snowy winters, so outside alpine areas it suits Australian conditions all year round. It is not a snow tent.',
    'The fly leaves a gap at the base, so it can feel drafty on cold, windy nights. Pitch the foot of the tent into the wind.',
    'Reviews of older Cloud Up 2 tents found limited room for two adults and their equipment. Check the selected Pro variant’s pitched dimensions.',
    'Cloud Up tents come in several generations and fabrics, so check which one you’re selecting.',
  ],
  watching: [
    'Exact ordered variant, model code, complete carried weight and included footprint.',
    'Usable width for two mats, equipment storage, condensation and rain entry.',
    'Pole joints, hub, clips, zips, seam tape, guy points and peg quality.',
    'Keep Pro 1P, 2P and 3P results separate if multiple variants are tested.',
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
