import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-rock-60-5',
  imageId: 'naturehike-rock-60-5-australian',
  name: 'Naturehike Rock 60+5L Backpack',
  identityNote:
    'We ordered the black 60 L version from the Naturehike Outdoor Gear Store on AliExpress. That listing quotes about 1.16 kg, which matches the Standard version rather than the heavier Upgraded one.',
  category: 'Packs',
  tags: ['Value backpack candidate'],
  pricePaidAud: 68.73,
  pricedOn: '2026-09-16',
  summary:
    'A framed ~1.16 kg pack with hip belt and rain cover for about A$70. Owners rate it highly for value.',
  metaDescription:
    'Research on the Naturehike Rock 60+5L (NH19BP095): owner and reviewer experience, measured capacity, fit concerns and why we chose it.',
  question:
    'Can this low-cost framed pack carry a beginner overnight load comfortably, and how much usable space does it really provide?',
  whyWeChoseIt: [
    'The Rock gives you the features that usually cost several times more: an aluminium frame, a padded hip belt and an included rain cover, at a low listed weight and a price well under A$100. Buyers of the exact black 60 L listing repeatedly describe it as good value, light for its size and roomy enough for backpacking.',
    'An independent test of the matching design measured about 46 L in the main compartment plus 10 L in pockets, so it is smaller than the 60+5 L label suggests. That is still plenty for a compact multi-day kit, and reports of a fixed, fairly long back length mainly matter for shorter hikers, who should check the fit first.',
  ],
  externalReview: {
    videoId: 'y1cHph875_I',
    title: 'NatureHike Rock 60+5L Backpack | Cold Weather Wild Camping Test',
  },
  specs: [
    {
      label: 'Model code',
      value: 'NH19BP095',
      status: 'corroborated',
      sourceIds: ['snowys', 'naturehike'],
    },
    {
      label: 'Claimed capacity',
      value: '60 + 5 L',
      status: 'manufacturer',
      note: 'One independent test of this design measured about 46 L in the main compartment plus about 10 L in pockets.',
      sourceIds: ['naturehike', 'stoker'],
    },
    {
      label: 'Weight',
      value: 'About 1.16 kg',
      status: 'seller-claim',
      note: 'Quoted by the listing we ordered from, matching Naturehike’s Standard version. Snowys lists 1.20 kg and the Upgraded version is about 1.31 kg.',
      sourceIds: ['naturehike', 'snowys'],
    },
    {
      label: 'Dimensions',
      value: '67 × 26 × 18 cm',
      status: 'corroborated',
      sourceIds: ['snowys', 'naturehike'],
    },
    {
      label: 'Fabric',
      value: 'Polyester (polyester + TPU on the Upgraded version)',
      status: 'manufacturer',
      note: 'Naturehike’s own page says polyester, so we follow the manufacturer. Snowys lists 420D nylon.',
      sourceIds: ['snowys', 'naturehike'],
    },
    {
      label: 'Frame',
      value: 'Aluminium alloy internal frame',
      status: 'retailer',
      sourceIds: ['snowys'],
    },
    {
      label: 'Back length',
      value: 'Fixed, about 54-55 cm, not adjustable',
      status: 'manufacturer',
      sourceIds: ['naturehike', 'stoker'],
    },
    {
      label: 'Rain cover',
      value: 'Included, stored in the base',
      status: 'corroborated',
      sourceIds: ['snowys', 'naturehike', 'stoker'],
    },
    {
      label: 'Suggested maximum load',
      value: 'About 14 kg stated on the listing we bought from',
      status: 'seller-claim',
      note: 'Naturehike publishes no official figure, and Snowys suggests staying under 18-20 kg. Neither is a tested limit. One buyer echoes the 14 kg figure in their review.',
      sourceIds: ['ali-reviews', 'snowys'],
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Specifications are well documented by the brand and an Australian retailer. Independent testing is thin but useful, with one self-funded test of the matching design and several reviews covering fit and use. Marketplace owners of the exact listing add practical signals, though they are not a substitute for loaded testing.',
  sources: [
    {
      id: 'stoker',
      title: 'Naturehike 65L Backpack',
      publisher: 'Stoker Outdoor Gear Testing',
      url: 'https://www.stokeroutdoorgeartesting.com/post/naturehike-65l-backpack',
      kind: 'written-review',
      relation: 'same-design',
      summary:
        'Self-funded, multi-tester review of a Naturehike 60+5L pack. It doesn’t name the Rock or the model code, but the design matches. Measured less volume than claimed, found the shoulder straps uncomfortable quickly and the torso long and fixed, while the fabric did well in abrasion and tear tests.',
      quote:
        'we tested it at 46 Liters in the main compartment and an additional 10 Liters in the large mesh and side pockets',
    },
    {
      id: 'ali-reviews',
      title: 'Buyer reviews on the AliExpress listing we bought from',
      publisher: 'AliExpress (Naturehike Outdoor Gear Store)',
      kind: 'listing',
      relation: 'exact-product',
      summary:
        'Reviews of the black 60 L version we ordered. The overall tone is very positive on value, low weight, capacity and the included rain cover, and several buyers praise the stitching and back padding. Treat them with the usual caution: marketplace reviews skew positive, many say little beyond “great value”, and almost none describe long-term use. The most useful are a buyer who replaced one after the frame broke, a 184 cm buyer on fit, and one repeating the 14 kg limit.',
      quote:
        'The frame of the same product I was using previously broke. I repurchased it.',
    },
    {
      id: 'snowys',
      title: 'Naturehike Rock 60 + 5 Hiking Backpack',
      publisher: 'Snowys Outdoors (Australian retailer)',
      url: 'https://www.snowys.com.au/rock-60-plus-5-hiking-backpack',
      kind: 'retailer',
      relation: 'exact-model',
      summary:
        'Australian retailer specifications and a helpful Q&A covering load, strap spacing and fit. Used for specifications, not performance.',
    },
    {
      id: 'naturehike',
      title: 'Rock Hiking Backpack',
      publisher: 'Naturehike (official site)',
      url: 'https://www.naturehike.com/products/naturehike-60l-5l-with-rain-cover-backpacks-nh19bp095',
      kind: 'manufacturer',
      relation: 'seller-claim',
      summary:
        'Manufacturer page listing the Standard and Upgraded versions with weights, back length and fabrics.',
    },
    {
      id: 'thrifty',
      title: 'Naturehike Rock 60l Backpack Review',
      publisher: 'Thrifty Hiker',
      url: 'https://thriftyhiker.com/naturehike-rock-60l-backpack-review/',
      kind: 'blog',
      relation: 'exact-model',
      summary:
        'A positive, mostly specification-based review. Useful for its fit comment from a tall author; we saw no evidence of a loaded trip, and the site appears to use affiliate links.',
      quote:
        'As a six-footer, I found it perfectly okay, but anyone much shorter might not find it quite so comfortable.',
    },
    {
      id: 'ogr-60-10',
      title:
        'Buying This Was a Huge Mistake - NatureHike 60+10L Ultralight Backpack Review',
      publisher: 'The Outdoor Gear Review',
      url: 'https://www.theoutdoorgearreview.com/2021/07/buying-this-was-huge-mistake-naturehike.html',
      kind: 'written-review',
      relation: 'similar-design',
      summary:
        'Self-funded review of a different Naturehike pack (60+10L). Relevant only as a pattern: harness rubbing near the neck and no torso adjustment, with decent build quality.',
    },
    {
      id: 'yt-first',
      title: 'New backpacks Naturehike 60L + 5L and Naturehike Outdoor…',
      publisher: 'YouTube',
      url: 'https://www.youtube.com/watch?v=uLE4e4EbeAE',
      kind: 'video',
      relation: 'exact-model',
      summary: 'A first-look video.',
    },
    {
      id: 'yt-follow-up',
      title: 'Naturehike Rock Series 60lt backpack follow up review',
      publisher: 'YouTube',
      url: 'https://www.youtube.com/watch?v=yU44FzE6QDE',
      kind: 'video',
      relation: 'exact-model',
      summary:
        'Described as a follow-up after use, which makes it potentially more useful than an unboxing.',
    },
  ],
  positives: [
    {
      text: 'Light for a framed 60 L-class pack, at a low price.',
      sourceIds: ['snowys', 'naturehike', 'thrifty'],
    },
    {
      text: 'Build quality, frame and fabric toughness hold up well.',
      sourceIds: ['stoker', 'ogr-60-10'],
    },
    {
      text: 'Rain cover included.',
      sourceIds: ['snowys', 'stoker'],
    },
    {
      text: 'Buyers of our exact listing repeatedly call it good value, light for its size and roomy enough for backpacking, and several praise the stitching and back padding.',
      sourceIds: ['ali-reviews'],
    },
  ],
  negatives: [
    {
      text: 'Usable space may be well short of 60+5 L. One test measured about 56 L in total.',
      sourceIds: ['stoker'],
    },
    {
      text: 'Fixed, fairly long back length. Shorter hikers may struggle to get a good fit.',
      sourceIds: ['naturehike', 'stoker', 'thrifty'],
    },
    {
      text: 'Narrow shoulder straps that can press or rub near the neck.',
      sourceIds: ['snowys', 'stoker', 'ogr-60-10'],
    },
    {
      text: 'Small hip-belt pockets.',
      sourceIds: ['stoker'],
    },
    {
      text: 'One buyer replaced their pack after the frame broke, and wished the frame could be bought separately. A single report, but worth watching.',
      sourceIds: ['ali-reviews'],
    },
  ],
  thingsToKnow: [
    'The back length is fixed, so shorter hikers should check the fit first.',
    'Load heavier items close to your back and let the hip belt carry most of the weight.',
    'The included rain cover helps keep the pack dry in showers.',
  ],
  watching: [
    'Real capacity. We’ll measure it rather than repeat the label. Buyers of our listing describe it as roomy, which sits awkwardly against the one independent test that measured about 56 L.',
    'Fit for average and shorter torsos, since the back length can’t be adjusted.',
    'Shoulder comfort after an hour or more with an overnight load.',
    'Which version we received: fabric and weight differ between them.',
    'Frame durability, after one buyer reported a broken frame on the same pack.',
  ],
  testPlan: [
    'Weigh the pack and rain cover separately.',
    'Measure usable volume of the main compartment and pockets.',
    'Measure back length and check fit on testers of different heights.',
    'Carry 8, 10, 12 and 14 kg loads on real walks.',
    'Assess how well the hip belt takes weight off the shoulders.',
    'Note shoulder and neck pressure over time.',
    'Check whether a water bottle can be reached while wearing it.',
    'Assess back ventilation on a warm day.',
    'Test the rain cover in sustained rain.',
    'Inspect mesh pockets and stitching after use.',
    'Check the frame and its housing for flex or damage after loaded carries.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
