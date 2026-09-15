import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'nyxia-35l-rain-cover',
  imageId: 'nyxia-35l-rain-cover',
  name: 'NYXIA 35L Backpack Rain Cover',
  identityNote:
    'Ordered in orange from the NYXIA Plus Store on AliExpress. The listing calls it a universal 35 L rain and dust cover and describes it as waterproof, but gives no material, coating or tested rating.',
  category: 'Accessories',
  tags: ['Starter accessory'],
  pricePaidAud: 3.42,
  summary:
    'A pack cover for a few dollars. A simple accessory where spending more may not buy much — provided the cheap one stays on and keeps rain off.',
  metaDescription:
    'What we know about the NYXIA 35L backpack rain cover before testing, why a cover isn’t enough on its own, and how we’ll test it.',
  question:
    'Does a $3 pack cover stay on the pack and keep meaningful rain off, or is it false economy?',
  whyWeChoseIt: [
    'Some gear rewards spending more; a pack cover mostly doesn’t. It is a shaped piece of coated fabric with an elastic edge. If a very cheap one fits well, stays put in wind and sheds rain, there’s little reason for a beginner to pay much more.',
    'We’re also using it to make a point: a pack cover on its own won’t keep a pack dry. Water gets in through the side against your back. Sleeping bags, spare clothes and electronics should also go inside a waterproof liner or dry bag. We want to show how much a cover helps, not suggest it’s enough.',
  ],
  specs: [
    {
      label: 'Size',
      value: '35 L',
      status: 'seller-claim',
      note: 'No dimensions or fit range given.',
      sourceIds: ['listing'],
    },
    {
      label: 'Material and coating',
      value: 'Not stated',
      status: 'to-verify',
    },
    { label: 'Weight', value: 'Not stated', status: 'to-verify' },
    { label: 'Waterproof rating', value: 'None stated', status: 'to-verify' },
  ],
  coverage: 'limited',
  coverageNote:
    'We found no owner reviews of this cover. The listing has no real specifications. Wider pack-cover experience is well documented, so we lean on that for context.',
  sources: [
    {
      id: 'listing',
      title:
        '35L Backpack Rain Cover Outdoor Hiking Bag Rain Cover Universal Backpack Rain and Dust Cover…',
      publisher: 'Marketplace listing mirror',
      url: 'https://www.yorkshire.com/marketplace/luggage-and-bags-5181/backpacks-100/da2bc035-bada-4a41-8ee1-0bc5c9f12adb',
      kind: 'listing',
      relation: 'exact-product',
      summary:
        'Confirms the NYXIA brand and 35 L size. No material, dimensions, weight or reviews.',
    },
    {
      id: 'bpl',
      title: 'Pack liners vs pack covers',
      publisher: 'Backpacking Light forums',
      url: 'https://backpackinglight.com/forums/topic/49136/',
      kind: 'forum',
      relation: 'similar-design',
      summary:
        'An older hiker discussion about pack covers in general. Covers let water run down between your back and the pack and don’t keep straps dry; most prefer a liner.',
      quote:
        'A pack cover will not completely keep water out. Water will run down between your back and soak the back of your pack.',
    },
    {
      id: 'hilltop',
      title:
        'Pack Liner vs Pack Cover: Which One Actually Keeps Your Gear Dry?',
      publisher: 'Hilltop Packs (pack maker)',
      url: 'https://hilltoppacks.com/blogs/news/pack-liner-vs-pack-cover-which-one-actually-keeps-your-gear-dry',
      kind: 'manufacturer',
      relation: 'similar-design',
      summary:
        'A pack maker’s guide explaining that water can still enter through the back panel and that many long-distance hikers rely more on liners.',
    },
  ],
  positives: [],
  negatives: [
    {
      text: 'Pack covers in general leave the harness side exposed, so the back panel, straps and hip belt can still get wet.',
      sourceIds: ['bpl', 'hilltop'],
    },
  ],
  watching: [
    'Whether the elastic holds the cover on in wind, and whether it loosens over time.',
    'Fit on the 35 L BISINNA pack we also bought.',
    'Water getting in on the harness side, which no cover fully solves.',
  ],
  testPlan: [
    'Weigh it and measure its packed size.',
    'Check fit on the BISINNA 25+10L pack.',
    'Test how well it stays on in wind.',
    'Check for elastic stretching after repeated use.',
    'Shower tests of 10, 30 and 60 minutes, checking what gets wet.',
    'Note how much water the fabric holds afterwards.',
    'Check water getting in on the harness side.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
