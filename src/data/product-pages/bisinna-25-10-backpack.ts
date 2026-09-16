import type { ProductPage } from './types';

const page: ProductPage = {
  slug: 'bisinna-25-10-backpack',
  imageId: 'bisinna-25-10-backpack-australian',
  name: 'BISINNA 25+10L Ultralight Backpack',
  identityNote:
    'We ordered the grey version from the BISINNA Global Store on AliExpress. Owner reviews describe the same 25+10L roll-top model, but we couldn’t confirm our listing is identical, including whether it comes with the removable foam back pad.',
  category: 'Packs',
  tags: ['Starter lightweight pack candidate'],
  pricePaidAud: 47.99,
  summary:
    'A roughly 580 g roll-top pack for under $50. It only makes sense if the whole load stays light — we want to find where that line is.',
  metaDescription:
    'What we know about the BISINNA 25+10L backpack before testing: claimed specs, owner reviews on comfort and load limits, and our test plan.',
  question:
    'At what total carried weight does this very cheap, very light pack stop being comfortable enough for a beginner?',
  whyWeChoseIt: [
    'Well-known ultralight packs cost many times more than this, and a beginner doesn’t need to spend that to find out whether a lighter style of hiking suits them. The BISINNA is a simple frameless roll-top with about 35 L of space and a claimed weight of around 580 g, and it is one of the few cheap packs with detailed owner write-ups.',
    'Those owners broadly agree: well made for the price, but thin shoulder straps and no frame. That means comfort depends almost entirely on how heavy and how carefully packed the load is. So “is it a good backpack?” isn’t the useful question. The useful question is how much weight a beginner can put in it before it becomes a bad day.',
  ],
  specs: [
    {
      label: 'Capacity',
      value: '25 L plus a 10 L roll-top extension',
      status: 'corroborated',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      label: 'Weight',
      value: 'About 580 g',
      status: 'seller-claim',
      note: 'Widely repeated but we found no independent weigh-in.',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      label: 'Dimensions',
      value: '70 × 24 × 16 cm (some seller copy says 73 cm)',
      status: 'seller-claim',
      sourceIds: ['maxcamp'],
    },
    {
      label: 'Fabric',
      value: '40D coated ripstop nylon outer, 210D lining',
      status: 'seller-claim',
      sourceIds: ['maxcamp'],
    },
    {
      label: 'Frame',
      value: 'Frameless; removable foam back pad that doubles as a sit mat',
      status: 'corroborated',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      label: 'Hip belt',
      value: 'Adjustable belt; padding not documented',
      status: 'to-verify',
    },
    {
      label: 'Rain cover',
      value: 'None included',
      status: 'corroborated',
      sourceIds: ['maxcamp'],
    },
    {
      label: 'Water resistance',
      value: 'Coated fabric; no waterproof rating stated',
      status: 'to-verify',
    },
  ],
  coverage: 'limited',
  coverageNote:
    'Two self-funded owner reviews (Korean and Japanese), one describing a real 2-day trip. Two further articles are by one writer and are affiliate or PR-labelled, focused on commuting. No long-term durability reports.',
  sources: [
    {
      id: 'maxcamp',
      title:
        '알리익스프레스 백패킹 미니멀캠핑 등산 배낭 bisinna 25+10L 배낭 구매해봤습니다',
      publisher: 'maxcamp (Korean blog, Tistory)',
      url: 'https://maxcamp.tistory.com/321',
      kind: 'blog',
      relation: 'exact-model',
      language: 'Korean',
      lang: 'ko',
      summary:
        'An experienced backpacker bought it on AliExpress with their own money and packed 8–9 kg (before food and water) for a 2-day trip. Rates the build as excellent for the price, but comfort clearly below their Gregory and Mystery Ranch packs, and the “mesh” back runs hot.',
      quote: '등판은 메쉬소재로 형식상 되어있습니다',
      quoteTranslation: 'The back panel is mesh, but only nominally.',
    },
    {
      id: 'akari',
      title:
        '【580g】有名ULザックの1/10の価格で買える「BISINNA」が、貧乏ハイカーの救世主すぎた件',
      publisher: 'Akari on note.com (Japanese blog)',
      url: 'https://note.com/akari_satoo/n/n7e9c0fc06279',
      kind: 'blog',
      relation: 'exact-model',
      language: 'Japanese',
      lang: 'ja',
      summary:
        'A self-bought review that is very positive on value, with clear warnings: minimal shoulder padding, no rigid back so poor packing is felt, and heavier loads may dig in.',
      quote:
        '肩紐のクッションは必要最低限です。10kgを超えるような重装備で歩くと、肩に食い込むかもしれません。',
      quoteTranslation:
        'Shoulder-strap cushioning is the bare minimum. If you walk with heavy gear over 10 kg, the straps may dig into your shoulders.',
    },
    {
      id: 'gizmodo',
      title:
        '登山用のコスパ抜群リュック（しかも580g）。ガンガン街中で使ってます',
      publisher: 'GIZMODO Japan',
      url: 'https://www.gizmodo.jp/article/bisinna/',
      kind: 'written-review',
      relation: 'exact-model',
      language: 'Japanese',
      lang: 'ja',
      summary:
        'Mostly about using it as an everyday and commuting bag. Contains affiliate links, and the writer also wrote a PR-labelled piece on the same pack, so we don’t treat it as independent trail evidence.',
    },
    {
      id: 'yt-short',
      title: 'BISINNA Camping Backpack Review | 25+10L Ultralight Hiking Bag',
      publisher: 'YouTube Short',
      url: 'https://www.youtube.com/shorts/mffSf73TKCk',
      kind: 'video',
      relation: 'exact-model',
      summary:
        'A short-form video. We couldn’t confirm the channel or whether it is sponsored.',
    },
  ],
  positives: [
    {
      text: 'Very light for a pack of around 35 L.',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      text: 'Build quality is better than expected for the price.',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      text: 'The removable back pad doubles as a sit mat.',
      sourceIds: ['maxcamp', 'akari'],
    },
  ],
  negatives: [
    {
      text: 'Thin shoulder straps; comfort drops noticeably compared with framed packs, and one owner warns about loads above 10 kg.',
      sourceIds: ['maxcamp', 'akari'],
    },
    {
      text: 'Frameless, so badly packed gear presses into your back.',
      sourceIds: ['akari'],
    },
    {
      text: 'The back panel is only nominally ventilated and runs hot.',
      sourceIds: ['maxcamp'],
    },
  ],
  watching: [
    'Comfort likely falls off somewhere around 8–10 kg total. That is an owner-report estimate, not a measured limit.',
    'Whether a complete beginner overnight kit actually fits in about 35 L.',
    'Durability of the 40D fabric and external mesh over time.',
    'How water-resistant the fabric and roll-top really are.',
  ],
  testPlan: [
    'Weigh the pack with and without the back pad.',
    'Measure usable volume, rolled down and fully extended.',
    'Try to fit a complete lightweight overnight kit.',
    'Carry 5, 7, 9 and 11 kg loads and note where comfort drops.',
    'Assess shoulder comfort and whether the hip belt carries any weight.',
    'Note back heat and sweat on a warm day.',
    'Check water bottle access while wearing it.',
    'Check external mesh and stitching for wear.',
    'Walk in rain and check what gets wet.',
  ],
  review: { state: 'ordered' },
  researchedOn: '2026-09-16',
};

export default page;
