import type { ProductPage } from './types';

const LISTING_URL = 'https://www.aliexpress.com/item/1005008883929503.html';

const page: ProductPage = {
  slug: 'jnln-lightweight-rain-jacket',
  imageId: 'jnln-lightweight-rain-jacket',
  name: 'JNLN Lightweight Rain Jacket',
  identityNote:
    'Listed on AliExpress by JNLN as a unisex camping rain jacket and sun-protection windbreaker, sold in many colours and sizes. The listing was A$11.79 in a SuperDeals sale when checked, down from A$12.55. Its specification table gives a polyester shell and lining and a 150 g weight, and rates it "Water repellent" in its Waterproof field. We have not bought one.',
  category: 'Accessories',
  tags: ['Optional accessory'],
  pricePaidAud: 11.79,
  pricedOn: '2026-09-21',
  listingRating: {
    stars: 4.5,
    reviews: 442,
    sold: 2000,
    merchant: 'AliExpress',
    checkedOn: '2026-09-21',
  },
  seoTitle: 'JNLN Lightweight Rain Jacket: A Budget Way to Stay Dry',
  summary:
    'A very light, low-cost hooded jacket. When combined with a bin liner and a zip-lock bag for electronics, this forms an affordable setup for mild rain conditions.',
  metaDescription:
    'The JNLN lightweight rain jacket: a low-cost, 150 g hooded jacket that pairs with a bin liner and a zip-lock bag for an affordable beginner rain setup.',
  question:
    'Can a $12 packable jacket, paired with a bin liner and a zip-lock bag, keep a beginner dry enough on a rainy overnight?',
  whyWeChoseIt: [
    'When combined with a bin liner and a zip-lock bag for electronics, this forms an affordable setup for mild rain conditions. The jacket helps with light or short rain, the liner keeps your sleeping bag and spare clothes dry inside the pack, and the zip-lock bag protects your phone.',
    'The listing’s own specification table rates it water repellent rather than waterproof, even though the title says waterproof. Treat it as protection for light or short rain rather than all-day storms.',
  ],
  specs: [
    {
      label: 'Weight',
      value: '150 g',
      status: 'seller-claim',
      sourceIds: ['listing'],
    },
    {
      label: 'Shell and lining',
      value: 'Polyester',
      status: 'seller-claim',
      sourceIds: ['listing'],
    },
    {
      label: 'Water resistance',
      value: 'Water repellent',
      status: 'seller-claim',
      note: 'The title says waterproof, but the specification table says water repellent. No waterproof rating is stated.',
      sourceIds: ['listing'],
    },
    {
      label: 'Fit',
      value: 'Smaller than usual',
      status: 'seller-claim',
      note: 'Consider sizing up, especially to wear it over a warm layer.',
      sourceIds: ['listing'],
    },
    {
      label: 'Listed features',
      value: 'Hood, pocket, quick dry, anti-UV, packs down small',
      status: 'seller-claim',
      sourceIds: ['listing'],
    },
  ],
  coverage: 'limited',
  coverageNote:
    'So far we only have the marketplace listing: its specification table, a 4.5-star rating from 442 reviews and more than 2,000 sold. We have not bought one or worked through the individual buyer reviews yet.',
  sources: [
    {
      id: 'listing',
      title:
        'JNLN Camping Rain Jacket Men Women Waterproof Sun Protection Clothing Fishing Hunting Clothes Quick Dry Windbreaker With Pocket',
      publisher: 'AliExpress listing',
      url: LISTING_URL,
      kind: 'listing',
      relation: 'exact-product',
      summary:
        'Checked 21 September 2026: A$11.79 on sale from A$12.55, rated 4.5 from 442 reviews, 2,000+ sold. The specification table lists polyester shell and lining, 150 g, fit smaller than usual, and "Water repellent" in the Waterproof field.',
    },
  ],
  positives: [
    {
      text: 'Very light and low cost: a seller-listed 150 g for about A$12.',
      sourceIds: ['listing'],
    },
  ],
  negatives: [
    {
      text: 'The listing’s specification table rates it water repellent rather than waterproof, despite the title.',
      sourceIds: ['listing'],
    },
    {
      text: 'The seller lists the fit as smaller than usual.',
      sourceIds: ['listing'],
    },
  ],
  buyerContext: {
    heading: 'A budget setup for staying dry',
    paragraphs: [
      'Staying dry is about more than the jacket. Line the inside of your pack with a heavy-duty bin bag so your sleeping bag and spare clothes stay dry even if rain soaks the pack, and keep your phone and other electronics in a zip-lock bag.',
      'A water-repellent jacket like this suits light or short rain. For sustained or cold rain, a waterproof shell gives a much bigger safety margin, because staying dry matters for staying warm.',
    ],
  },
  thingsToKnow: [
    'The seller lists the fit as smaller than usual, so check the size chart.',
    'Sold in many colours and sizes.',
  ],
  watching: [
    'How long it keeps light rain out before wetting through.',
    'Whether the hood and cuffs keep rain out in wind.',
    'How much condensation builds up inside while walking uphill.',
  ],
  testPlan: [
    'Weigh it and measure its packed size.',
    'Shower tests of 10 and 30 minutes, checking where water gets through.',
    'Check the fit over a warm layer.',
  ],
  review: { state: 'researching' },
  researchedOn: '2026-09-21',
};

export default page;
