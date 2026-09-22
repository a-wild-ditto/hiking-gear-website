import type { ProductPage } from './types';

const page: ProductPage = {
  slug: '400g-down-envelope-sleeping-bag',
  imageId: '400g-down-envelope-sleeping-bag-australian',
  name: '400 g Down Envelope Sleeping Bag',
  listingRating: {
    stars: 4.9,
    reviews: 9,
    sold: 92,
    merchant: 'AliExpress',
    checkedOn: '2026-09-16',
  },
  identityNote:
    'AliExpress listing 1005010759344924, ordered in green with the 400 g fill option. The listing gives model number sd001 and ships from Zhejiang, and the bags in the product and review photos are branded Mountain Dream, though the listing itself does not use that name. The same specification sheet is sold under several store names, which is common for factory-made gear.',
  category: 'Sleep',
  tags: ['Value and Starter kit sleeping bag'],
  pricePaidAud: 85.61,
  pricedOn: '2026-09-16',
  summary:
    'A down bag for under A$90. About 800 g packed, a fraction of the price of name-brand down.',
  metaDescription:
    'A light 400 g down bag for under A$90, about 800 g packed. Perfect for most Australian conditions, with buyer reports and what to expect.',
  question:
    'Can this low-cost down bag deliver useful warmth and low weight, or are the listing claims doing too much of the work?',
  whyWeChoseIt: [
    'Down usually means spending several hundred dollars. The listing claims 400 g of 90% goose down in a roughly 725 g bag, or about 800 g with the stuff sack, which puts it in the weight class of far more expensive bags for under A$100.',
    'Australian winters are mild by international standards, so outside alpine areas it is perfect for most Australian conditions and offers standout value. Like most budget bags, warmth claims vary between sellers, so treat them as a rough guide and pack a warm layer.',
  ],
  specs: [
    {
      label: 'Fill weight',
      value: '400 g claimed',
      status: 'seller-claim',
      note: 'One listing states batches can vary by about 100 g.',
      sourceIds: ['arknor'],
    },
    {
      label: 'Fill type',
      value: '90% goose down claimed',
      status: 'seller-claim',
      note: 'The specification table says 90% goose down and a description banner says 98%. Neither figure comes with a certificate.',
      sourceIds: ['arknor'],
    },
    {
      label: 'Fill power',
      value: '750+ claimed',
      status: 'seller-claim',
      note: 'From a description image on our listing, which also claims a cleanliness figure of 450+. Neither is backed by a test certificate, and other listings of the same design state no fill power at all.',
    },
    {
      label: 'Temperature rating',
      value: 'No tested rating',
      status: 'to-verify',
      note: 'Seller figures vary (our listing says 0 to −10 °C, another seller of the same design says 5 to 20 °C), and none cite an EN or ISO 23537 test. Rely on owner reports.',
      sourceIds: ['arknor'],
    },
    {
      label: 'Model number',
      value: 'sd001',
      status: 'seller-claim',
    },
    {
      label: 'Zip',
      value: 'Full-length YKK zip claimed',
      status: 'seller-claim',
      note: 'Our listing shows a YKK-branded pull in its description images, and another seller of the same design claims YKK.',
    },
    {
      label: 'Size',
      value: 'About 200 × 73 cm, rectangular (envelope) cut',
      status: 'seller-claim',
      sourceIds: ['arknor'],
    },
    {
      label: 'Shell and lining',
      value: '20D, 400T nylon claimed',
      status: 'seller-claim',
      sourceIds: ['arknor'],
    },
    {
      label: 'Weight',
      value: 'About 725 g bag, about 800 g with stuff sack',
      status: 'seller-claim',
      sourceIds: ['arknor'],
    },
  ],
  coverage: 'limited',
  coverageNote:
    'Nine buyer reviews rate the listing 4.9, praising the stitching, zip and compact package. Some reviews cover other colours or the 600 g option, so warmth reports for this exact bag are still limited.',
  sources: [
    {
      id: 'ali-reviews',
      title: 'Buyer reviews on the AliExpress listing we bought from',
      publisher: 'AliExpress',
      kind: 'listing',
      relation: 'exact-model',
      summary:
        'Nine reviews, rated 4.9 overall. Buyers describe good stitching, a working zip with Velcro and drawstring closures, and a compact, light package. Several are for the blue colour or the heavier 600 g fill rather than our green 400 g, one 600 g buyer found it thinner than expected, and another says the 600 g version suited spring, summer and autumn, which sits awkwardly against the listing’s 0 to −10 °C claim.',
      quote:
        'Arrived in great condition. shipping time was very reasonable. the product quality is quite good. stitching is very well done.',
    },
    {
      id: 'arknor',
      title: 'Rectangular down sleeping bag 400T 20D, 400/600 g',
      publisher: 'Arknor (retailer listing)',
      url: 'https://arknor.com/en/products/sac-couchage-duvet-rectangulaire-400t-20d-200x74',
      kind: 'retailer',
      relation: 'same-design',
      summary:
        'A retailer listing with a near-identical specification sheet (size, fabric, fill and weight). Likely the same generic design, but we can’t prove it’s the same factory. Specifications only.',
      quote: 'recommended range 5 to 20 °C',
    },
    {
      id: 'fruugo',
      title:
        'Camping Sleeping Bag 90% Goose Down Adult 200*73cm Envelope Type Ultralight…',
      publisher: 'Fruugo marketplace listing',
      url: 'https://www.fruugo.fi/retkeily-makuupussi-90-hanhen-untuva-aikuinen-200-73cm-kirjekuorityyppi-ultrakevyt-kannettava-liukuva-makuupussi-3-kauden-lammin/p-186904104-399135948',
      kind: 'listing',
      relation: 'same-design',
      summary:
        'Another store selling the same specification sheet, categorised as a winter bag and titled “3 season”. Shows how temperature claims differ between sellers.',
    },
    {
      id: 'downmark',
      title: 'Failed alerts',
      publisher: 'Downmark (down testing and certification body)',
      url: 'https://www.downmark.org/fraud-alerts',
      kind: 'manufacturer',
      relation: 'similar-design',
      summary:
        'General context, not about this bag: lists down products whose independent lab tests didn’t match their label claims.',
    },
  ],
  positives: [
    {
      text: 'Buyers of this listing generally praise the stitching, finish and compact package.',
      sourceIds: ['ali-reviews'],
    },
  ],
  negatives: [
    {
      text: 'One buyer of the heavier 600 g version found it thinner than expected.',
      sourceIds: ['ali-reviews'],
    },
  ],
  thingsToKnow: [
    'Perfect for most Australian conditions year-round outside alpine areas. For coastal winter trips, add a beanie and thermals. Not intended for alpine areas or snow.',
    'Pair it with an insulated mat; a bag alone won’t keep you warm on cold ground.',
  ],
  watching: [
    'Whether the fill is really around 400 g, and really mostly down rather than feather. The listing itself says both 90% and 98% in different places.',
    'The 0 to −10 °C claim on our listing is far colder than other sellers claim for the same design, and nothing supports it. Treat it as marketing, not a rating to plan around.',
    'The 750+ fill power claim, which would be high-quality down if true.',
    'Warmth. There is no standardised temperature rating, so plan conservatively and carry backup insulation.',
    'Down leaking through the thin shell and stitching.',
    'Cold spots from uneven fill or sewn-through construction.',
  ],
  testPlan: [
    'Weigh the bag and stuff sack.',
    'Estimate fill weight where we can do so without damaging the bag.',
    'Check the zip pull for genuine YKK branding.',
    'Measure loft and check how evenly the down is spread.',
    'Look for cold spots and sewn-through seams.',
    'Check for down leakage, quills and odour.',
    'Test the zip and inspect stitching.',
    'Note how the shell handles damp and condensation.',
    'Measure compressed and packed volume.',
    'Compare it side by side with a sleeping bag that has a known EN/ISO rating.',
    'Cautious overnight use in mild conditions, with a backup layer.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
