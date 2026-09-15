import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'memory-foam-camping-pillow',
  imageId: 'memory-foam-camping-pillow',
  name: 'Memory-Foam Camping Pillow',
  identityNote:
    'Unbranded AliExpress pillow, ordered in green. It appears to be the same design sold as HIKEMAN, but we haven’t confirmed that, so the reviews below are of the HIKEMAN version.',
  category: 'Accessories',
  tags: ['Comfort accessory'],
  pricePaidAud: 18.73,
  summary:
    'A slow-rebound foam pillow that is heavier than an inflatable. We want to know if better sleep is worth the extra weight.',
  metaDescription:
    'What we know about a compressible memory-foam camping pillow before testing: same-design reviews, weight questions, and our test plan.',
  question:
    'Is a few hundred grams more than an inflatable pillow worth carrying for noticeably better sleep?',
  whyWeChoseIt: [
    'A lot of hiking advice is about carrying less. But a beginner who barely sleeps can have a miserable first overnight trip, and a bad night is often what puts people off going again. Many people find inflatable pillows slippery, noisy or too firm.',
    'This pillow is a counterpoint: real foam, compressed into a small bag, for about $20. Reviews of what appears to be the same design are positive on comfort but clear that it’s heavy and bulky. That puts it squarely in the category of trade-offs we want to measure rather than guess at.',
  ],
  specs: [
    {
      label: 'Size',
      value: '38 × 25 × 10 cm',
      status: 'same-design',
      note: 'Stated for the HIKEMAN version, not measured on ours.',
      sourceIds: ['adventurekit'],
    },
    {
      label: 'Packed size',
      value: 'About 25 × 12 × 12 cm',
      status: 'same-design',
      sourceIds: ['adventurekit'],
    },
    {
      label: 'Weight',
      value: 'About 500 g in one review; other listings suggest less',
      status: 'same-design',
      note: 'Sources conflict. We’ll weigh ours.',
      sourceIds: ['adventurekit'],
    },
    {
      label: 'Material',
      value: 'Slow-rebound memory foam, removable cover',
      status: 'seller-claim',
      sourceIds: ['banggood', 'adventurekit'],
    },
  ],
  coverage: 'limited',
  coverageNote:
    'One independent Australian review and a couple of short marketplace reviews, all of the HIKEMAN-branded design. Nothing for our unbranded unit.',
  sources: [
    {
      id: 'adventurekit',
      title: 'Hikeman Memory Foam Pillow Review',
      publisher: 'AdventureKit (Australian site)',
      url: 'https://adventurekit.com.au/camp-gear/sleeping-gear/hikeman-camping-pillow-review/',
      kind: 'written-review',
      relation: 'same-design',
      summary:
        'Used on three car-camping trips (June 2025). Comfortable and supportive, especially for side sleepers, with no chemical smell noticed. Heavy and bulkier than inflatables.',
      quote: 'Side sleepers: A dream. No more scrunching or stacking pillows',
    },
    {
      id: 'banggood',
      title: 'HIKEMAN Soft Slow Rebound Memory Foam Pillow — reviews',
      publisher: 'Banggood marketplace',
      url: 'https://usa.banggood.com/HIKEMAN-Soft-Slow-Rebound-Memory-Foam-Pillow-Outdoor-Camping-Travel-Cervical-Pillow-Portable-NoonBreak-Pillow-Neck-Support-Pillow-Comfortable-Sleeping-Pillow-reviews-p2026535.html',
      kind: 'listing',
      relation: 'same-design',
      summary:
        'Two short buyer reviews, one of them informative: small to store and supportive without being too soft.',
      quote:
        'The pillow is small, easy to store, and has good support, but not too soft.',
    },
    {
      id: 'yt-hikeman',
      title:
        'Review HIKEMAN Camping Memory Foam Pillow - Ultralight Travel Pillow…',
      publisher: 'YouTube',
      url: 'https://www.youtube.com/watch?v=jVGzQ5gNPRc',
      kind: 'video',
      relation: 'same-design',
      summary:
        'A video review of the HIKEMAN version. We haven’t confirmed the channel or reviewed its contents in detail.',
    },
  ],
  positives: [
    {
      text: 'Supportive without being too soft; good for side sleepers.',
      sourceIds: ['adventurekit', 'banggood'],
    },
    {
      text: 'No inflating — ready to use once it expands.',
      sourceIds: ['adventurekit'],
    },
    {
      text: 'No chemical smell noticed (one reviewer).',
      sourceIds: ['adventurekit'],
    },
  ],
  negatives: [
    {
      text: 'Heavy for hiking and bulkier packed than an inflatable pillow.',
      sourceIds: ['adventurekit'],
    },
  ],
  watching: [
    'The real weight. Sources range widely, and a 500 g pillow is a meaningful load for a hiker.',
    'How long it takes to expand after being compressed all day.',
    'Whether our unbranded unit uses the same foam and cover.',
    'The only independent review was car camping, not hiking.',
  ],
  testPlan: [
    'Weigh it and measure packed size.',
    'Time how long it takes to expand after compression.',
    'Assess firmness, and comfort for back and side sleeping.',
    'Note any initial odour.',
    'Note heat build-up on a warm night.',
    'Inspect the cover and check it can be washed.',
    'Check how easily it goes back into its bag.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
