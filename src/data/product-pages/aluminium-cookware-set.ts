import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'aluminium-cookware-set',
  imageId: 'widesea-cookware-australian',
  name: 'Widesea Aluminium Cookware Set',
  identityNote:
    'The selected Widesea WSCS-1051 option is shown as an eight-piece dark-grey aluminium cooking set with orange folding handles, a 1.3 L pot, 440 ml cup/pot, folding gas stove, pot bracket and utensils. The gas canister is not included.',
  category: 'Accessories',
  tags: ['Optional cooking add-on'],
  pricePaidAud: 56.39,
  listingRating: {
    stars: 4.9,
    reviews: 40,
    sold: 222,
    merchant: 'Marketplace listing',
    checkedOn: '2026-09-16',
  },
  pricedOn: '2026-09-16',
  summary:
    'Everything you need for hot meals in one nested kit: pot, cup, stove and cutlery for A$56.',
  metaDescription:
    'Widesea WSCS-1051 nested cookware kit: pot, cup, stove and cutlery for about A$56, and in a video test it boiled faster than a Jetboil.',
  question:
    'Is this nested cookware set a practical, durable and appropriately sized option for beginner camp meals?',
  whyWeChoseIt: [
    'The set covers everything a beginner needs for hot meals and drinks in one nested kit: a 1.3 L pot, a 440 ml cup, a folding gas stove, a pot bracket and cutlery, at a seller-listed 557 g.',
    'It is kept outside the core kits because cookware is optional: some hikers already own suitable gear, while others are happy with cold food on a first overnight.',
  ],
  externalReview: {
    videoId: 'KWa_BXN7rG0',
    title: 'I Found the BEST Budget Camping Cooker System! // WIDESEA WSJC-002',
    note: 'Note: this review covers the same pots and stove as this set, sold without the cutlery.',
  },
  specs: [
    {
      label: 'Selected option',
      value: 'WSCS-1051',
      status: 'seller-claim',
      note: 'Includes the pots, folding gas stove, pot bracket and cutlery.',
    },
    {
      label: 'Construction',
      value: 'Aluminium cookware shown in the listing',
      status: 'seller-claim',
      note: 'Alloy and coating aren’t specified by the seller.',
    },
    {
      label: 'Visible design',
      value: 'Nested dark-grey pots with folding orange handles',
      status: 'seller-claim',
          },
    {
      label: 'Price shown',
      value: 'A$56.39',
      status: 'seller-claim',
      note: 'Marketplace price shown on the listing; price and availability can change.',
    },
    {
      label: 'Weight, capacity and stove',
      value: '557 g; 1.3 L pot and 440 ml cup; folding gas stove included',
      status: 'seller-claim',
      note: 'Gas canister not included.',
    },
  ],
  coverage: 'limited',
  coverageNote:
    'Based on the marketplace listing (4.9 from 40 reviews) and an independent video test of the same pots and stove.',
  sources: [
    {
      id: 'marketplace-listing',
      title: 'Widesea WSCS-1051 cookware marketplace listing',
      publisher: 'Marketplace listing',
      kind: 'listing',
      relation: 'seller-claim',
      summary:
        'Marketplace listing showing the Widesea WSCS-1051 option at A$56.39, a 4.9-star rating from 40 reviews and 222 sold. It describes an eight-piece set with a 1.3 L pot, 440 ml cup/pot, orange folding handles, folding gas stove, pot bracket and utensils; gas canister not included.',
    },
    {
      id: 'yt-wsjc002',
      title: 'I Found the BEST Budget Camping Cooker System! // WIDESEA WSJC-002',
      publisher: 'JEL Reviews (YouTube)',
      url: 'https://www.youtube.com/watch?v=KWa_BXN7rG0',
      kind: 'video',
      relation: 'same-design',
      summary:
        'An independent video review of the Widesea WSJC-002, the same pots and stove as this set without the cutlery. In the reviewer’s test it boils water faster than a Jetboil that costs hundreds of dollars more.',
    },
  ],
  positives: [
    {
      text: 'In a side-by-side video test, the same pot and stove boiled water faster than a Jetboil costing hundreds of dollars more.',
      sourceIds: ['yt-wsjc002'],
    },
    {
      text: 'The nested design keeps your cookware tidy in the pack.',
      sourceIds: ['marketplace-listing'],
    },
    {
      text: 'Covers simple meals and hot drinks without a separate pan.',
      sourceIds: ['marketplace-listing'],
    },
  ],
  negatives: [],
  thingsToKnow: [
    'The stove takes screw-on gas canisters (not included), which are sold cheaply at hardware stores and traditional retailers.',
    'Only use the stove outdoors and never inside your tent.',
    'Check local fire restrictions and total fire bans before lighting a stove.',
  ],
  watching: [
    'Whether all eight pictured pieces, the storage bag and pot bracket arrive as listed.',
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
    'Check the included stove seals properly on a standard screw-on canister before the first trip.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
