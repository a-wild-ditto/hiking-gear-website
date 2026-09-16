import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'aluminium-cookware-set',
  imageId: 'aluminium-cookware-set-clean',
  name: 'Generic Aluminium Cookware Set',
  identityNote:
    'Generic marketplace cookware listing. The selected option is G-1set, shown as nested aluminium cookware with folding green handles. Exact contents and construction need to be checked against the delivered set.',
  category: 'Accessories',
  tags: ['Optional cooking add-on', 'Generic aluminium cookware'],
  pricePaidAud: 36.99,
  listingRating: {
    stars: 4.6,
    reviews: 59,
    sold: 327,
    merchant: 'Marketplace listing',
    checkedOn: '2026-09-16',
  },
  summary:
    'A compact-looking aluminium pot-and-pan set for simple camp meals, included as an optional add-on rather than part of a starter kit.',
  metaDescription:
    'Research notes for a generic G-1set aluminium camping cookware kit, including the listing claims and what we still need to verify.',
  question:
    'Is this nested cookware set a practical, durable and appropriately sized option for beginner camp meals?',
  whyWeChoseIt: [
    'The nested pot-and-pan format appears easy to pack and gives a beginner a familiar way to prepare simple meals or hot drinks.',
    'It is kept outside the starter kits because cookware is an optional preference: some hikers already own suitable kitchen gear, while others may prefer a lighter or more specialised setup.',
  ],
  specs: [
    {
      label: 'Selected option',
      value: 'G-1set',
      status: 'seller-claim',
      note: 'Confirm the delivered variant and every included piece.',
    },
    {
      label: 'Construction',
      value: 'Aluminium cookware shown in the listing',
      status: 'seller-claim',
      note: 'Alloy, thickness, finish and coating are unverified.',
    },
    {
      label: 'Visible design',
      value: 'Nested pot and pan with folding green handles',
      status: 'seller-claim',
      note: 'The supplied listing image is the identity reference; inspect the delivered set for differences.',
    },
    {
      label: 'Price shown',
      value: 'A$36.99',
      status: 'seller-claim',
      note: 'Marketplace price shown in the supplied screenshot; price and availability can change.',
    },
    {
      label: 'Weight, capacity and burner',
      value: 'Not established',
      status: 'to-verify',
      note: 'Do not assume a burner, fuel support or any particular pot capacity is included.',
    },
  ],
  coverage: 'limited',
  coverageNote:
    'The current record is based on the supplied marketplace screenshot only. No manufacturer identity, technical specification or independent review has been established.',
  sources: [
    {
      id: 'listing-screenshot',
      title: 'Generic G-1set cookware marketplace listing screenshot',
      publisher: 'User-supplied screenshot',
      kind: 'listing',
      relation: 'seller-claim',
      summary:
        'Screenshot showing the generic cookware listing title, selected G-1set option, A$36.99 price, 4.6-star rating from 59 reviews, 327 sold, and nested aluminium pot and pan with folding green handles. No public URL was supplied.',
    },
  ],
  positives: [
    {
      text: 'The nested shape appears useful for reducing loose cookware in a beginner pack.',
      sourceIds: ['listing-screenshot'],
    },
    {
      text: 'A pot-and-pan combination could cover straightforward meals and hot drinks without requiring a separate pan.',
      sourceIds: ['listing-screenshot'],
    },
  ],
  negatives: [
    {
      text: 'The listing does not establish the set’s actual weight, capacities, coating or included pieces.',
      sourceIds: ['listing-screenshot'],
    },
    {
      text: 'The generic identity makes durability, food-contact finish and replacement support difficult to assess before inspection.',
      sourceIds: ['listing-screenshot'],
    },
  ],
  watching: [
    'Exact piece count and whether any cup, cutlery, bag or burner is included.',
    'Pot and pan capacities and usable cooking area.',
    'Complete carried weight, packed dimensions and handle security.',
    'Aluminium alloy, surface finish or coating, including any flaking or odour when heated.',
    'Ease of cleaning and whether soot or food residue is difficult to remove.',
    'Handle heat transfer and stability on a compatible stove.',
  ],
  testPlan: [
    'Photograph the delivered set, packaging and any model or material markings.',
    'Inventory every piece and compare it with the G-1set listing images.',
    'Weigh each piece and the complete packed set; measure packed dimensions.',
    'Measure usable pot and pan capacities with water rather than relying on seller descriptions.',
    'Inspect the interior and exterior finish for coating, burrs, sharp edges or manufacturing defects.',
    'Check that handles fold, lock and remain stable when the cookware is empty and loaded.',
    'Boil water and cook a simple meal on a compatible stove, recording heat distribution, cleaning effort and handle temperature.',
    'Do not use or recommend any included burner or fuel system until its presence and compatibility are verified.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
