import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'bisinna-2-person-tent',
  imageId: 'bisinna-2-person-tent-australian',
  name: 'BISINNA 2-Person Backpacking Tent',
  identityNote:
    'We ordered the green/camel two-person tent from the BISINNA Global Store on AliExpress. BISINNA sells several 2-person tents under near-identical names; the listing we bought from specifies a 190T polyester fly rather than the 20D nylon version, which matches the tent OutdoorGearLab tested. The listing’s own instruction video is branded BENYUE, a sign this is a factory design sold under more than one name. We will confirm the fabric and weight on arrival.',
  category: 'Shelter',
  tags: ['Value shelter candidate'],
  pricePaidAud: 99.8,
  summary:
    'A freestanding double-wall tent for about $100. We want to know if it can be a genuinely usable first shelter.',
  metaDescription:
    'What we know about the BISINNA 2-person tent before testing it: specs by source, owner and reviewer findings on rain and build, and our test plan.',
  question:
    'Can a roughly $100 conventional double-wall tent be a usable first backpacking shelter?',
  whyWeChoseIt: [
    'A first overnight hike usually means buying a tent, and tents are where beginners either overspend or buy something that fails on the first wet night. A lot of cheap marketplace tents are single-wall or oddly shaped. The BISINNA is a conventional design: freestanding, two crossing poles, an inner tent with a separate fly, two doors and two vestibules. If it works, it is easy to pitch and easy to understand.',
    'It also has something most budget tents don’t: a hands-on review by OutdoorGearLab, who bought it themselves. They rated it a reasonable buy under US$100 but found the polyester fly eventually wets out in heavy rain. Our listing specifies the same 190T polyester fly, so that is the single most important thing for us to test — though our listing claims a higher waterproof rating than the tent they tested.',
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
      value: '210 × 140 × 110 cm, plus a vestibule on each side',
      status: 'corroborated',
      note: 'Our listing gives the body size. Other listings quote 60 + 140 + 60 cm across including both vestibules, and OutdoorGearLab’s measurements agree.',
      sourceIds: ['ogl', 'amazon-nylon'],
    },
    {
      label: 'Fly fabric',
      value: '190T polyester',
      status: 'seller-claim',
      note: 'Specified by the listing we bought from, and the same fly fabric as the tent OutdoorGearLab tested. We will check the label on arrival.',
    },
    {
      label: 'Waterproof rating',
      value: 'PU 3000 mm claimed for both fly and floor',
      status: 'seller-claim',
      note: 'From our listing, with no test evidence behind it. Other polyester listings of this tent claim only PU 2000 mm, and the tent OutdoorGearLab tested still wet out in heavy rain.',
    },
    {
      label: 'Weight',
      value: 'About 2.16 kg claimed',
      status: 'seller-claim',
      note: 'From our listing. OutdoorGearLab weighed the polyester version at just under 2.3 kg, so expect something in that range rather than an ultralight figure.',
    },
    {
      label: 'Packed size',
      value: 'About 15 × 43 cm (polyester version)',
      status: 'same-design',
      sourceIds: ['ogl'],
    },
    {
      label: 'Floor',
      value: '210D oxford, PU 3000 mm claimed',
      status: 'seller-claim',
    },
    {
      label: 'Poles',
      value: '8.5 mm aluminium',
      status: 'seller-claim',
      note: 'Our listing does not state an alloy grade; others claim 7001.',
    },
    {
      label: 'Included',
      value: '2 guy ropes and 10 aluminium stakes claimed',
      status: 'seller-claim',
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
    'One credible self-funded hands-on review, of a tent with the same fly fabric our listing specifies. We found no Reddit or forum owner reports, and no independent testing of this exact listing.',
  sources: [
    {
      id: 'ogl',
      title: 'Bisinna 2 Review | Tested & Rated',
      publisher: 'OutdoorGearLab',
      url: 'https://www.outdoorgearlab.com/reviews/camping-and-hiking/backpacking-tent/bisinna-2',
      kind: 'written-review',
      relation: 'same-design',
      summary:
        'Hands-on test of the 190T polyester version (May 2023) — the same fly fabric our listing specifies, though their tent claimed a lower PU 2000 mm rating. Found it light for its price class, with a useful roof vent, but the fly wets out in heavy rain, seam stitching leaves pinholes and the pole-sleeve mesh is loose. OutdoorGearLab says it buys the products it tests.',
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
      text: 'On the tent they tested, the polyester fly eventually wet out in heavy rain and the seam stitching created pinholes where water seeped through.',
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
    'Rain is the main question. Our listing claims a PU 3000 mm rating against the PU 2000 mm of the tent that wet out in testing, and we don’t know whether that makes a real difference.',
    'Seams. A tent that leaks through stitching may be fixable with seam sealer, but a beginner shouldn’t have to discover that on the trail.',
    'The waterproof figures are unverified listing claims, and our listing’s 2.16 kg is lighter than the 2.3 kg measured on the tested version.',
    'No owner evidence yet on wind stability or zip durability.',
  ],
  testPlan: [
    'Weigh the complete tent and each part (fly, inner, poles, stakes, bags), and check the guy rope and stake count against the listing.',
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
