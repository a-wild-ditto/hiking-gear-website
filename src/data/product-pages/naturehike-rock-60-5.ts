import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'naturehike-rock-60-5',
  imageId: 'naturehike-rock-60-5',
  name: 'Naturehike Rock 60+5L Backpack',
  identityNote:
    'Model NH19BP095. Naturehike currently lists a Standard and an Upgraded 60+5L version with different fabrics and weights. We will confirm which one we received.',
  category: 'Packs',
  tags: ['Value backpack candidate'],
  pricePaidAud: 69.69,
  summary:
    'A framed 60+5L pack from an established brand at around $70. The question is how much of that capacity and comfort is real.',
  metaDescription:
    'What we know about the Naturehike Rock 60+5L (NH19BP095) before testing: specs by source, a measured volume result, fit concerns, and our test plan.',
  question:
    'Does a ~$70 framed pack from an established brand carry an overnight load well, and is the capacity as big as the label says?',
  whyWeChoseIt: [
    'Beginners often buy a pack last and cheaply, then find it is the thing that hurts on the trail. Naturehike is an established Chinese outdoor brand with a real catalogue and Australian stockists, so this isn’t an anonymous product. The Rock has an aluminium internal frame, a padded hip belt and an included rain cover, and it is listed at roughly 1.2 kg — all at a price well below most framed packs.',
    'The catch is that a number on a label doesn’t tell you how a pack carries. One independent test of this design measured noticeably less space than advertised, and several people mention a fixed, fairly long back length and narrow shoulder straps. Those are exactly the things a new hiker can’t judge from a listing.',
  ],
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
      value: 'About 1.16 kg (Standard) or 1.31 kg (Upgraded)',
      status: 'manufacturer',
      note: 'Snowys lists 1.20 kg.',
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
      value: '420D nylon, or polyester (Standard) / polyester + TPU (Upgraded)',
      status: 'to-verify',
      note: 'Snowys says 420D nylon; Naturehike’s current page says polyester. We’ll check the label.',
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
      value: 'Fixed, about 54–55 cm — not adjustable',
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
      value: 'Not stated by Naturehike; Snowys suggests staying under 18–20 kg',
      status: 'retailer',
      sourceIds: ['snowys'],
    },
  ],
  coverage: 'moderate',
  coverageNote:
    'Specifications are well documented by the brand and an Australian retailer. Independent testing is thin: one self-funded test of what appears to be this design, plus a few blog and video reviews.',
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
      summary:
        'A first-look video. We haven’t reviewed its contents in detail.',
    },
    {
      id: 'yt-follow-up',
      title: 'Naturehike Rock Series 60lt backpack follow up review',
      publisher: 'YouTube',
      url: 'https://www.youtube.com/watch?v=yU44FzE6QDE',
      kind: 'video',
      relation: 'exact-model',
      summary:
        'Described as a follow-up after use, which makes it potentially more useful than an unboxing. We haven’t reviewed its contents in detail.',
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
  ],
  watching: [
    'Real capacity. We’ll measure it rather than repeat the label.',
    'Fit for average and shorter torsos, since the back length can’t be adjusted.',
    'Shoulder comfort after an hour or more with an overnight load.',
    'Which version we received: fabric and weight differ between them.',
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
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
