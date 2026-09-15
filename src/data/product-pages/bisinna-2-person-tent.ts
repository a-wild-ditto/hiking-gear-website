import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'bisinna-2-person-tent',
  imageId: 'bisinna-2-person-tent',
  name: 'BISINNA 2-Person Backpacking Tent',
  identityNote:
    'BISINNA sells more than one 2-person tent under near-identical names, including a polyester version and a 20D nylon version. We will confirm which one we received when it arrives.',
  category: 'Shelter',
  tags: ['Value shelter candidate'],
  pricePaidAud: 100.7,
  summary:
    'A freestanding double-wall tent for about $100. We want to know if it can be a genuinely usable first shelter.',
  metaDescription:
    'What we know about the BISINNA 2-person tent before testing it: specs by source, owner and reviewer findings on rain and build, and our test plan.',
  question:
    'Can a roughly $100 conventional double-wall tent be a usable first backpacking shelter?',
  whyWeChoseIt: [
    'A first overnight hike usually means buying a tent, and tents are where beginners either overspend or buy something that fails on the first wet night. A lot of cheap marketplace tents are single-wall or oddly shaped. The BISINNA is a conventional design: freestanding, two crossing poles, an inner tent with a separate fly, two doors and two vestibules. If it works, it is easy to pitch and easy to understand.',
    'It also has something most budget tents don’t: a hands-on review by OutdoorGearLab, who bought it themselves. They rated it a reasonable buy under US$100 but found the polyester fly eventually wets out in heavy rain. That mixed result is exactly the kind of thing worth checking ourselves, especially because the version sold to us may use different fabric.',
  ],
  specs: [
    {
      label: 'Design',
      value:
        'Freestanding double-wall dome, 2 crossing poles, 2 doors, 2 vestibules',
      status: 'corroborated',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Pitched size',
      value:
        '(60 + 140 + 60) × 210 × 110 cm — vestibules plus inner width, length, height',
      status: 'corroborated',
      note: 'Same figure on the polyester and nylon listings, and consistent with OutdoorGearLab’s measurements.',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Fly fabric',
      value: 'Either 190T polyester or 20D silicone-coated nylon',
      status: 'to-verify',
      note: 'Depends on the variant. OutdoorGearLab tested the polyester version. We will check our fly label on arrival.',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Waterproof rating',
      value: 'PU 2000 mm (polyester) or PU 3000 mm (nylon) claimed',
      status: 'seller-claim',
      note: 'No test evidence behind either figure.',
      sourceIds: ['amazon-nylon'],
    },
    {
      label: 'Weight',
      value: 'Just under 2.3 kg (polyester version, per OutdoorGearLab)',
      status: 'same-design',
      note: 'Nylon listings claim about 1.95 kg (4.3 lb). Neither is confirmed for our unit.',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Packed size',
      value: 'About 15 × 43 cm (polyester version)',
      status: 'same-design',
      sourceIds: ['ogl'],
    },
    {
      label: 'Poles',
      value: 'Aluminium; listings claim 7001 alloy',
      status: 'seller-claim',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Ventilation',
      value: 'Roof vent propped open with a kickstand',
      status: 'same-design',
      sourceIds: ['ogl'],
    },
  ],
  coverage: 'limited',
  coverageNote:
    'One credible self-funded hands-on review, of the polyester version. We found no Reddit or forum owner reports, and nothing independent on the nylon version.',
  sources: [
    {
      id: 'ogl',
      title: 'Bisinna 2 Review | Tested & Rated',
      publisher: 'OutdoorGearLab',
      url: 'https://www.outdoorgearlab.com/reviews/camping-and-hiking/backpacking-tent/bisinna-2',
      kind: 'written-review',
      relation: 'same-design',
      summary:
        'Hands-on test of the 190T polyester version (May 2023). Found it light for its price class, with a useful roof vent, but the fly wets out in heavy rain, seam stitching leaves pinholes and the pole-sleeve mesh is loose. OutdoorGearLab says it buys the products it tests.',
      quote: 'The fly will eventually wet out in heavy rain.',
    },
    {
      id: 'amazon-nylon',
      title:
        'BISINNA 2 Person Camping Lightweight 4.3lbs 20D Nylon Backpacking Tent',
      publisher: 'Amazon listing',
      url: 'https://www.amazon.com/dp/B08KDHCYQ6',
      kind: 'listing',
      relation: 'seller-claim',
      summary:
        'Seller listing for the 20D nylon version. Source of the 4.3 lb weight and PU 3000 mm claims. Used for specifications only.',
    },
    {
      id: 'bisinna',
      title: 'BISINNA tents',
      publisher: 'BISINNA (brand site)',
      url: 'https://bisinna.net/tents/',
      kind: 'manufacturer',
      relation: 'seller-claim',
      summary:
        'Shows the brand sells several different 2-person tents, which is why we are careful not to mix up specifications.',
    },
    {
      id: 'yt-rain',
      title: 'BISINNA Tent - Overnighter in Heavy Rain Failure',
      publisher: 'YouTube',
      url: 'https://www.youtube.com/watch?v=W1JyScuJgtM',
      kind: 'video',
      relation: 'same-design',
      summary:
        'An overnight trip in heavy rain. We haven’t confirmed which BISINNA variant is shown, so we don’t count it as evidence about ours.',
    },
  ],
  positives: [
    {
      text: 'Two doors and two vestibules at a very low price.',
      sourceIds: ['ogl'],
    },
    {
      text: 'The kickstand roof vent helps release condensation, even in rain.',
      sourceIds: ['ogl'],
    },
    {
      text: 'Reasonably light for a sub-$100 freestanding double-wall tent.',
      sourceIds: ['ogl'],
    },
  ],
  negatives: [
    {
      text: 'The polyester fly eventually wets out in heavy rain, and seam stitching creates pinholes where water can seep through.',
      sourceIds: ['ogl'],
    },
    {
      text: 'Loose pole-sleeve mesh can catch pole ends and may tear.',
      sourceIds: ['ogl'],
    },
    {
      text: 'Minimal internal storage and budget materials raise durability questions.',
      sourceIds: ['ogl'],
    },
  ],
  watching: [
    'Which fabric our tent actually uses. The main rain finding comes from the polyester version and may not apply to nylon.',
    'Seams. A tent that leaks through stitching may be fixable with seam sealer, but a beginner shouldn’t have to discover that on the trail.',
    'The waterproof ratings are unverified listing claims.',
    'No owner evidence yet on wind stability or zip durability.',
  ],
  testPlan: [
    'Weigh the complete tent and each part (fly, inner, poles, pegs, bags).',
    'Measure packed size and pitched floor dimensions.',
    'Check how much usable room there is for one and for two people with packs.',
    'Time a solo pitch from bag to taut fly.',
    'Inspect poles, pegs, zips and seam construction.',
    'Sustained rain test, before and after seam sealing if needed.',
    'Overnight condensation check with the vent open and closed.',
    'Pitch in wind and note fly flap, pole flex and guying points.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
