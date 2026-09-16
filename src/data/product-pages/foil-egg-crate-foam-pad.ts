import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'foil-egg-crate-foam-pad',
  imageId: 'foil-egg-crate-foam-pad-australian',
  name: 'Foil-Faced Egg-Crate Foam Sleeping Pad',
  identityNote:
    'Unbranded AliExpress pad, ordered in green and black at 186 × 56 × 2 cm. Many factories make this folding design, so reviews of other pads can only be a rough guide.',
  category: 'Sleep',
  tags: ['Starter sleep-pad candidate'],
  pricePaidAud: 17.35,
  summary:
    'A folding closed-cell foam pad for under $20. Nothing to inflate, nothing to puncture. The trade-offs are likely bulk, comfort and warmth.',
  metaDescription:
    'What we know about a cheap foil-faced egg-crate foam sleeping pad before testing: seller claims, what similar pads deliver, and our test plan.',
  question:
    'Is a $17 folding foam pad comfortable and warm enough for a mild first overnight trip?',
  whyWeChoseIt: [
    'Inflatable mats are comfortable and pack small, but good ones are expensive and cheap ones can go flat at 2 am. A folding foam pad avoids that entirely: unfold it and you are done, and nothing can puncture it. For a beginner on a mild-weather first trip, that reliability is worth a lot.',
    'This design copies a well-known category of egg-crate foam pads, where name-brand 2 cm versions have standardised ASTM F3340 warmth ratings and years of owner reports. That gives us a sensible benchmark. The questions are whether the cheap version is comparable, and whether the seller’s warmth claim holds up.',
  ],
  specs: [
    {
      label: 'Size (unfolded)',
      value: '186 × 56 × 2 cm',
      status: 'seller-claim',
      note: 'Matches the size shown when we ordered.',
      sourceIds: ['reseller'],
    },
    {
      label: 'Folded size',
      value: '56 × 13 × 14 cm',
      status: 'seller-claim',
      sourceIds: ['reseller'],
    },
    {
      label: 'Weight',
      value: 'About 330 g',
      status: 'seller-claim',
      note: 'Lighter than the name-brand pad below despite being larger, which may mean lower-density foam.',
      sourceIds: ['reseller'],
    },
    {
      label: 'Material',
      value: 'IXPE foam with an aluminium foil layer',
      status: 'seller-claim',
      sourceIds: ['reseller'],
    },
    {
      label: 'R-value',
      value: '2.5 claimed, not verified',
      status: 'to-verify',
      note: 'No ASTM F3340 test cited. For comparison, the Therm-a-Rest Z Lite Sol, a 2 cm egg-crate pad, is rated R 2.0 under that standard.',
      sourceIds: ['reseller', 'zlite'],
    },
  ],
  coverage: 'limited',
  coverageNote:
    'No reviews of our exact pad. The real-world picture comes from similar folding foam pads: two long-term owner reviews of cheap clones and a hands-on test of a name-brand equivalent.',
  sources: [
    {
      id: 'pmags',
      title: 'Gear review: NatureHike Foam Pad (Z-Lite clone)',
      publisher: 'PMags.com',
      url: 'https://pmags.com/gear-review-naturehike-foam-pad-z-lite-clone',
      kind: 'blog',
      relation: 'similar-design',
      summary:
        'Long-term use of a cheap Chinese clone of the Z Lite over a long-distance trail. Comfort and foam life similar to the original, but the reflective film peeled fairly early.',
      quote: 'The reflective film is peeling on the NatureHike.',
    },
    {
      id: 'frugal',
      title: 'Naturehike foldable mattress (Thermarest Z-lite Sol clone)',
      publisher: 'Frugal Hiker',
      url: 'http://frugalhiker.blogspot.com/2016/07/naturehike-foldable-mattress-thermarest.html',
      kind: 'blog',
      relation: 'similar-design',
      summary:
        'An AliExpress-bought clone. Uncomfortable for side sleeping, warm enough only to around freezing, and the egg-crate bumps and foil coating wear with use.',
    },
    {
      id: 'ogl-switchback',
      title: 'NEMO Switchback Review | Tested & Rated',
      publisher: 'OutdoorGearLab',
      url: 'https://www.outdoorgearlab.com/reviews/camping-and-hiking/sleeping-pad/nemo-switchback',
      kind: 'written-review',
      relation: 'similar-design',
      summary:
        'Hands-on test of a name-brand folding foam pad. Less comfortable than inflatables, suits summer or use under another mat, bulky when folded, and very durable.',
      quote:
        'The egg carton ridges started to show a bit of collapse and degradation, but the wear and tear was minimal.',
    },
    {
      id: 'zlite',
      title: 'Z Lite SOL Sleeping Pad',
      publisher: 'Therm-a-Rest / Cascade Designs',
      url: 'https://www.cascadedesigns.com/sleeping-pads/fast-and-light/z-lite-sol-sleeping-pad/Z-Lite-Sol.html',
      kind: 'manufacturer',
      relation: 'similar-design',
      summary:
        'Name-brand benchmark: 2 cm thick, 410 g, R 2.0 under ASTM F3340. Useful as a reference point, not as evidence about our pad.',
    },
    {
      id: 'reseller',
      title:
        '330g Lightweight Foam Camping Mattress Portable Foldable Sleeping Pad',
      publisher: 'Smokey Mountains Sports and Outdoors (reseller listing)',
      url: 'https://smokeymountainssportsandoutdoors.com/products/330g-lightweight-foam-camping-mattress-portable-foldable-sleeping-pad-moisture-resistant-insulated-for-hiking-backpacking',
      kind: 'retailer',
      relation: 'seller-claim',
      summary:
        'A reseller listing with the same headline specifications as our order. No reviews. Specifications only.',
    },
  ],
  positives: [
    {
      text: 'Light, cheap, instant to set up, and impossible to puncture.',
      sourceIds: ['pmags', 'ogl-switchback'],
    },
    {
      text: 'A cheap clone matched the name-brand original for comfort and foam life in long-term use.',
      sourceIds: ['pmags'],
    },
    {
      text: 'Doubles as a sit pad, or an extra layer under an inflatable in colder weather.',
      sourceIds: ['frugal', 'ogl-switchback'],
    },
  ],
  negatives: [
    {
      text: 'Thin and firm: hard going for side sleepers.',
      sourceIds: ['frugal', 'ogl-switchback'],
    },
    {
      text: 'The foil layer on cheap versions peels or wears off.',
      sourceIds: ['pmags', 'frugal'],
    },
    {
      text: 'Modest warmth: suited to mild conditions, not cold ground on its own.',
      sourceIds: ['frugal', 'ogl-switchback', 'zlite'],
    },
    {
      text: 'Bulky when folded; usually carried outside the pack.',
      sourceIds: ['ogl-switchback'],
    },
  ],
  watching: [
    'The R 2.5 claim looks optimistic next to ASTM-rated 2 cm pads at R 2.0. We won’t publish our own R-value from informal testing.',
    'Whether the lighter weight means softer foam that flattens sooner.',
    'Side-sleeping comfort, which is the usual weak point of this design.',
  ],
  testPlan: [
    'Weigh it and measure folded dimensions.',
    'Sleep on it on our backs and sides, on firm ground.',
    'Check for hips and shoulders bottoming out.',
    'Measure thickness before and after repeated nights.',
    'Check whether it absorbs water.',
    'Note wear on the foil and foam surface.',
    'Compare warmth side by side with a mat that has an ASTM F3340 rating.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
