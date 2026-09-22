import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'nyxia-35l-rain-cover',
  imageId: 'nyxia-35l-rain-cover-australian',
  name: 'NYXIA 35L Backpack Rain Cover',
  identityNote:
    'Ordered in orange from the NYXIA Plus Store on AliExpress. The listing calls it a universal 35 L rain and dust cover and describes it as waterproof nylon, but gives no coating details or tested rating.',
  category: 'Accessories',
  tags: ['Starter accessory'],
  pricePaidAud: 3.42,
  seoTitle: 'Backpack Rain Cover vs Pack Liner: NYXIA 35L',
  pricedOn: '2026-09-16',
  summary:
    'A A$3 pack cover that buyers say fits well and keeps rain off. Pair it with a liner for essentials.',
  metaDescription:
    'NYXIA 35L backpack rain cover research: listing claims, brief buyer reports and how a pack cover differs from a liner in wet weather.',
  question:
    'Does a $3 pack cover stay on the pack and keep meaningful rain off, or is it false economy?',
  whyWeChoseIt: [
    'The low recorded price makes this cover a simple, cheap way to shield the outside of a pack. Buyer comments report good fit and some rain protection, but do not describe prolonged rain or windy conditions.',
    'A cover works best alongside a liner. Water can get in through the side against your back, so sleeping bags, spare clothes and electronics should also go inside a waterproof liner or dry bag.',
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
      value: 'Nylon; coating not stated',
      status: 'retailer',
    },
    { label: 'Weight', value: 'Not yet verified', status: 'to-verify' },
    { label: 'Waterproof rating', value: 'None stated', status: 'to-verify' },
  ],
  coverage: 'limited',
  coverageNote:
    'The marketplace listing has 65 buyer reviews rated 4.8, but they are short and none describe sustained heavy rain. The listing gives little beyond size and nylon fabric, so we also lean on wider pack-cover experience for context.',
  sources: [
    {
      id: 'ali-reviews',
      title: 'Buyer reviews on the AliExpress listing we bought from',
      publisher: 'Marketplace listing',
      kind: 'listing',
      relation: 'exact-product',
      summary:
        '65 reviews, rated 4.8 overall, with 500+ sold. Buyers report that it covers the pack well and keeps water out, fits large packs and a Deuter 25 L, and can also wrap a camera bag. The reviews are brief and give no detail on heavy or prolonged rain.',
      quote:
        'Good product, it was what I expected, covers the backpack well and does not allow water to pass through.',
    },
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
  positives: [
    {
      text: 'Buyers say it covers the pack well and keeps rain off the contents.',
      sourceIds: ['ali-reviews'],
    },
    {
      text: 'The elastic edge fits a range of sizes: owners mention a Deuter 25 L, a large backpack and even a camera bag.',
      sourceIds: ['ali-reviews'],
    },
  ],
  negatives: [
    {
      text: 'Pack covers in general leave the harness side exposed, so the back panel, straps and hip belt can still get wet.',
      sourceIds: ['bpl', 'hilltop'],
    },
  ],
  buyerContext: {
    heading: 'Pack cover vs pack liner',
    paragraphs: [
      'A pack cover goes around the outside of the bag. It can shield the fabric and outer pockets, but leaves the harness side open. Hikers in the Backpacking Light discussion and the Hilltop Packs guide describe water running between the wearer and the pack, leaving the back panel and straps wet.',
      'A pack liner sits inside the main compartment around the contents. For a sleeping bag, spare clothes and electronics, use a liner or suitable dry bags even when carrying an outer cover. Neither the brief buyer reports nor the listing establish how this particular NYXIA cover performs in sustained rain.',
    ],
  },
  thingsToKnow: ['Sized for packs around 35 L.'],
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
