import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'aluminium-cookware-set',
  imageId: 'widesea-cookware-australian',
  name: 'Widesea Aluminium Cookware Set',
  identityNote:
    'The selected Widesea WSCS-1051 option is shown as an eight-piece dark-grey aluminium cooking set with orange folding handles, a 1.3 L pot, 440 ml cup/pot, burner bracket and utensils. The listing explicitly says the gas tank is not included.',
  category: 'Accessories',
  tags: ['Optional cooking add-on', 'Generic aluminium cookware'],
  pricePaidAud: 56.39,
  listingRating: {
    stars: 4.9,
    reviews: 40,
    sold: 222,
    merchant: 'Marketplace listing',
    checkedOn: '2026-09-16',
  },
  summary:
    'Everything you need for hot meals in one nested kit: pot, cup, stove and cutlery for A$56.',
  metaDescription:
    'Research notes for the Widesea WSCS-1051 aluminium camping cookware kit, including listing claims and what is included.',
  question:
    'Is this nested cookware set a practical, durable and appropriately sized option for beginner camp meals?',
  whyWeChoseIt: [
    'The set covers everything a beginner needs for hot meals and drinks in one nested kit: a 1.3 L pot, a 440 ml cup, a folding gas stove, a pot bracket and cutlery, at a seller-listed 557 g.',
    'It is kept outside the core kits because cookware is optional: some hikers already own suitable gear, while others are happy with cold food on a first overnight.',
  ],
  specs: [
    {
      label: 'Selected option',
      value: 'WSCS-1051',
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
      value: 'Nested dark-grey pots with folding orange handles',
      status: 'seller-claim',
      note: 'The supplied listing image is the identity reference; inspect the delivered set for differences.',
    },
    {
      label: 'Price shown',
      value: 'A$56.39',
      status: 'seller-claim',
      note: 'Marketplace price shown on the listing; price and availability can change.',
    },
    {
      label: 'Weight, capacity and burner',
      value: 'Not yet verified',
      status: 'to-verify',
      note: 'Do not assume a burner, fuel support or any particular pot capacity is included.',
    },
  ],
  coverage: 'limited',
  coverageNote:
    'The current record is based on the Widesea marketplace listing. Capacities and visible contents are listed, but weight, materials detail and independent durability evidence remain unverified.',
  sources: [
    {
      id: 'marketplace-listing',
      title: 'Widesea WSCS-1051 cookware marketplace listing',
      publisher: 'Marketplace listing',
      kind: 'listing',
      relation: 'seller-claim',
      summary:
        'Marketplace listing showing the Widesea WSCS-1051 option at A$56.39, a 4.9-star rating from 40 reviews and 222 sold. It describes an eight-piece set with a 1.3 L pot, 440 ml cup/pot, orange folding handles, burner bracket and utensils; gas tank not included.',
    },
  ],
  positives: [
    {
      text: 'The nested shape appears useful for reducing loose cookware in a beginner pack.',
      sourceIds: ['marketplace-listing'],
    },
    {
      text: 'A pot-and-pan combination could cover straightforward meals and hot drinks without requiring a separate pan.',
      sourceIds: ['marketplace-listing'],
    },
  ],
  negatives: [
    {
      text: 'The listing does not establish the set’s actual weight, aluminium alloy, coating or long-term durability.',
      sourceIds: ['marketplace-listing'],
    },
    {
      text: 'Food-contact finish, burner compatibility and replacement support remain difficult to assess before inspection.',
      sourceIds: ['marketplace-listing'],
    },
  ],
  thingsToKnow: [
    'The stove takes screw-on gas canisters (not included), which are sold cheaply at hardware stores and traditional retailers.',
    'Only use the stove outdoors and never inside your tent.',
    'Check local fire restrictions and total fire bans before lighting a stove.',
  ],
  watching: [
    'Whether all eight pictured pieces, the storage bag and burner bracket are included.',
    'Whether the claimed 1.3 L and 440 ml capacities are usable capacities.',
    'Complete carried weight, packed dimensions and handle security.',
    'Aluminium alloy, surface finish or coating, including any flaking or odour when heated.',
    'Ease of cleaning and whether soot or food residue is difficult to remove.',
    'Handle heat transfer and stability on a compatible stove.',
  ],
  testPlan: [
    'Photograph the delivered set, packaging and any model or material markings.',
    'Inventory every piece and compare it with the WSCS-1051 listing images.',
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
