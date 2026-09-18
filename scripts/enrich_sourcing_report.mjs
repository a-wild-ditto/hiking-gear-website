import fs from 'node:fs';

const path = 'aliexpress_sourcing_raw.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const mats = data.candidates.sleeping_mats;
const packs = data.candidates.backpacks;

const evidence = [
  {
    candidate_id: 'PACK-1005012918184976',
    aliexpress_item_id: '1005012918184976',
    source_platform: 'note',
    source_url: 'https://note.com/akari_satoo/n/n7e9c0fc06279',
    date: '2026-01-29',
    username_channel: 'Akari',
    reported_usage_duration_distance_nights:
      'Owner-use article; duration not stated in accessible text',
    sentiment: 'positive',
    measured_values_reported: '580 g; 35 L stated as 25+10 L',
    failure_reported: 'none stated in accessible text',
    key_evidence_summary:
      'Owner describes the low weight, roll-top expansion and external mesh pocket as useful; this is a single-source report, not long-term corroboration.',
    oem_match_confidence: 'Highly likely',
    evidence_quality:
      'C: detailed owner article, limited duration and no corroboration',
  },
  {
    candidate_id: 'PACK-1005012918184976',
    aliexpress_item_id: '1005012918184976',
    source_platform: 'ROOMIE',
    source_url: 'https://www.roomie.jp/2025/11/1638299/',
    date: '2025-11',
    username_channel: 'not visible',
    reported_usage_duration_distance_nights:
      'Usage duration not stated in search-accessible text',
    sentiment: 'positive',
    measured_values_reported: '35 L (25+10 L); listed at ¥7,680',
    failure_reported: 'none stated in accessible text',
    key_evidence_summary:
      'Independent publication identifies the same BISINNA 35 L/25+10 L pack; useful identity corroboration, but weak durability evidence.',
    oem_match_confidence: 'Highly likely',
    evidence_quality:
      'C: product-specific article with limited long-term detail',
  },
  {
    candidate_id: 'MAT-3256808061828593',
    aliexpress_item_id: '3256808061828593',
    source_platform: 'Reddit r/UltralightAus',
    source_url:
      'https://www.reddit.com/r/UltralightAus/comments/1tswx5u/aliexpress_nature_hike_r58_sleeping_pad_15_year/',
    date: '2026-05-31',
    username_channel: 'Reddit OP',
    reported_usage_duration_distance_nights: 'about 40 nights over 1.5 years',
    sentiment: 'mixed-positive',
    measured_values_reported:
      'estimated about 500 g for 183 cm mummy pad; warm to around freezing',
    failure_reported:
      'internal delamination after being left inflated in an approximately 30°C tent',
    key_evidence_summary:
      'Strong long-term benchmark: warm, comfortable for a roughly 60 kg side sleeper and good value, but suffered heat-associated baffle failure and third-party warranty refusal.',
    oem_match_confidence:
      'Weak: same brand family but source is R5.8, listing is R3.5',
    evidence_quality:
      'B: detailed long-term owner report with corroborating commenter',
  },
  {
    candidate_id: 'MAT-3256808061828593',
    aliexpress_item_id: '3256808061828593',
    source_platform: 'Reddit r/UltralightAus',
    source_url:
      'https://www.reddit.com/r/UltralightAus/comments/1myiki6/naturehike_high_r_value_pad_legit/',
    date: '2025',
    username_channel: 'Reddit commenter',
    reported_usage_duration_distance_nights:
      'duration not stated; used to 1.5°C',
    sentiment: 'mixed',
    measured_values_reported: 'owner warmth impression at 1.5°C',
    failure_reported: 'felt some cold through the pad at 1.5°C',
    key_evidence_summary:
      'Useful benchmark warning that claimed warmth should not be treated as laboratory-confirmed performance.',
    oem_match_confidence: 'Weak: same brand family, different R-value variant',
    evidence_quality: 'C: first-hand field use but limited detail',
  },
  {
    candidate_id: 'MAT-3256808061828593',
    aliexpress_item_id: '3256808061828593',
    source_platform: 'Reddit r/Ultralight',
    source_url:
      'https://www.reddit.com/r/Ultralight/comments/11zug1n/naturehike_58_r_insulated_sleeping_padlight_tour/',
    date: '2023',
    username_channel: 'Reddit owner',
    reported_usage_duration_distance_nights: 'not stated',
    sentiment: 'mixed',
    measured_values_reported:
      'reported shorter, narrower and about 1 cm thinner than claimed',
    failure_reported: 'seller dimensions/thickness reportedly overstated',
    key_evidence_summary:
      'Possible OEM-family evidence that actual dimensions and warmth can diverge from seller specifications.',
    oem_match_confidence: 'Weak: benchmark family evidence only',
    evidence_quality: 'C: product-family owner report',
  },
];

const byId = new Map([...mats, ...packs].map((r) => [r.candidate_id, r]));
const bisinna = ['PACK-1005012918184976', 'PACK-3256812550995387'];
const thickMats = ['MAT-1005010653298755', 'MAT-1005010417711140'];
const foamMats = ['MAT-1005011665329887', 'MAT-1005011891546828'];

function markGroup(ids, confidence, alias) {
  const present = ids.filter((id) => byId.has(id));
  for (const id of present) {
    const row = byId.get(id);
    row.same_oem_duplicate_observations = `${confidence}: ${present.filter((x) => x !== id).join(', ')}; matched on near-identical title and key specification pattern. Photos were not independently pixel-compared.`;
    row.suspected_oem_aliases_names = alias;
  }
}
markGroup(bisinna, 'Highly likely', 'BISINNA 35 L / 25+10 L roll-top');
markGroup(
  thickMats,
  'Confirmed duplicate listing text; OEM identity highly likely',
  'Extra Thick 4 Inch spliceable self-inflating mat',
);
markGroup(foamMats, 'Possible', 'Generic aluminium-film egg-crate foam mat');

for (const row of [...mats, ...packs]) {
  const own = evidence.filter((e) => e.candidate_id === row.candidate_id);
  if (!own.length) continue;
  row.independent_owner_reports_located = own.length;
  row.independent_ux_evidence_grade = row.candidate_id.startsWith('PACK-')
    ? 'C'
    : 'B (brand-family benchmark only)';
  row.forum_urls = own.map((e) => e.source_url).join(' | ');
  row.strongest_long_term_usage_report =
    own.find((e) => /40 nights/.test(e.reported_usage_duration_distance_nights))
      ?.key_evidence_summary ?? own[0].key_evidence_summary;
  row.independent_measured_weights = own
    .map((e) => e.measured_values_reported)
    .filter(Boolean)
    .join(' | ');
  row.repeated_independent_positive_themes = row.candidate_id.startsWith(
    'PACK-',
  )
    ? 'Low weight and practical roll-top/mesh layout.'
    : 'Warmth-to-price and comfort received positive owner reports in the benchmark family.';
  row.repeated_independent_negative_themes = row.candidate_id.startsWith(
    'PACK-',
  )
    ? 'No repeated failure pattern located.'
    : 'Noise, dimensional variance and heat-associated delamination require testing.';
  row.known_failure_modes = row.candidate_id.startsWith('PACK-')
    ? row.known_failure_modes
    : 'Potential baffle delamination when hot; possible understated dimensions/thickness (family-level evidence, not exact listing).';
  row.current_consumer_confidence = Math.min(
    100,
    row.current_consumer_confidence +
      (row.candidate_id.startsWith('PACK-') ? 8 : 12),
  );
  row.bush_gums_sourcing_score = Math.min(
    100,
    row.bush_gums_sourcing_score + 4,
  );
  row.evidence_confidence = row.candidate_id.startsWith('PACK-')
    ? 'Medium'
    : 'Medium (benchmark-family evidence)';
}

for (const id of bisinna) {
  const row = byId.get(id);
  if (!row) continue;
  row.independent_ux_evidence_grade = 'C';
  row.independent_owner_reports_located = 2;
  row.forum_urls = evidence
    .filter((e) => e.candidate_id === bisinna[0])
    .map((e) => e.source_url)
    .join(' | ');
  row.strongest_long_term_usage_report = evidence[0].key_evidence_summary;
  row.independent_measured_weights = 'One owner article reports 580 g.';
  row.repeated_independent_positive_themes =
    'Low weight, roll-top expansion and external mesh utility.';
  row.repeated_independent_negative_themes =
    'No corroborated long-term failure pattern found.';
  row.evidence_confidence = 'Medium';
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}
function pointsForPrice(row) {
  const price = row.current_aud_product_price;
  if (price == null) return 4;
  if (price <= 20) return 20;
  if (price <= 35) return 18;
  if (price <= 60) return 15;
  if (price <= 80) return 9;
  return 4;
}
function pointsForReviews(count) {
  if (!count) return 0;
  if (count >= 500) return 10;
  if (count >= 200) return 9;
  if (count >= 100) return 8;
  if (count >= 50) return 7;
  if (count >= 20) return 5;
  if (count >= 5) return 3;
  return 1;
}
function pointsForIndependent(grade) {
  if (/^A/.test(grade)) return 15;
  if (/^B/.test(grade)) return 11;
  if (/^C/.test(grade)) return 7;
  if (/^F/.test(grade)) return 0;
  return 2;
}
function pointsForWeight(row) {
  const w = row.claimed_product_weight_g;
  if (w == null) return 3;
  if (row.category === 'sleeping_mat') return w <= 650 ? 10 : w <= 900 ? 7 : 4;
  return w <= 900 ? 10 : w <= 1200 ? 7 : 4;
}
function pointsForSpecs(row) {
  let score =
    (row.claimed_materials ? 3 : 0) + (row.claimed_product_weight_g ? 2 : 0);
  if (row.category === 'sleeping_mat')
    score +=
      (row.claimed_r_value != null ? 3 : 0) +
      (row.claimed_thickness_cm != null ? 2 : 0);
  else
    score +=
      (row.claimed_capacity_l ? 3 : 0) +
      (/yes/.test(row.hip_belt ?? '') ? 1 : 0) +
      (/yes/.test(row.external_mesh_pocket ?? '') ? 1 : 0);
  return Math.min(10, score);
}
function pointsForFailure(row) {
  const negatives = String(row.repeated_negative_review_themes ?? '')
    .split(' | ')
    .filter(Boolean).length;
  return Math.max(0, 10 - negatives * 2);
}
function reviewPenalty(count) {
  return !count ? -10 : count < 5 ? -7 : count < 20 ? -4 : 0;
}
function suspiciousPenalty(row) {
  return row.specification_inconsistencies ? -10 : 0;
}

for (const row of [...mats, ...packs]) {
  const components = {
    price_performance_20: pointsForPrice(row),
    units_sold_transaction_history_15: 0,
    aliexpress_review_depth_10: pointsForReviews(row.review_count),
    independent_real_world_ux_15: pointsForIndependent(
      row.independent_ux_evidence_grade,
    ),
    weight_performance_10: pointsForWeight(row),
    claimed_materials_specifications_10: pointsForSpecs(row),
    negative_review_failure_pattern_10: pointsForFailure(row),
    objective_testability_10: 10,
    low_review_penalty: reviewPenalty(row.review_count),
    suspicious_listing_penalty: suspiciousPenalty(row),
  };
  row.score_breakdown_json = JSON.stringify(components);
  row.bush_gums_sourcing_score = clamp(
    Object.values(components).reduce((a, b) => a + b, 0),
  );
  const price = row.current_aud_product_price ?? 999;
  const w = row.claimed_product_weight_g;
  const base = row.bush_gums_sourcing_score;
  const isMat = row.category === 'sleeping_mat';
  row.starter_kit_fit_score = clamp(
    base +
      (price <= 25 ? 15 : price <= 40 ? 5 : -10) +
      (row.review_count >= 50 ? 5 : 0) +
      (isMat && /foam/.test(row.subcategory) ? 5 : 0),
  );
  row.lightweight_kit_fit_score = clamp(
    base +
      (price <= 60 ? 5 : -5) +
      (w != null && w <= (isMat ? 650 : 900) ? 15 : w == null ? -5 : -10) +
      (isMat && row.claimed_r_value >= 2 ? 5 : 0),
  );
  row.performance_kit_fit_score = clamp(
    base +
      (isMat
        ? row.claimed_r_value >= 3
          ? 15
          : row.claimed_r_value == null
            ? -10
            : -5
        : w != null && w <= 900
          ? 10
          : w == null
            ? -5
            : -10) +
      (row.independent_ux_evidence_grade === 'D' ? -5 : 5) +
      (price <= 60 ? 5 : 0),
  );
  const fits = [
    ['Starter', row.starter_kit_fit_score],
    ['Lightweight', row.lightweight_kit_fit_score],
    ['Performance', row.performance_kit_fit_score],
  ].sort((a, b) => b[1] - a[1]);
  row.best_fit_kit = fits[0][0];
  row.kit_fit_note =
    'Fit scores are sourcing priorities within the current three demonstration kits; missing weights, delivered prices and verified performance reduce confidence.';
}

function csvValue(value) {
  if (value == null) return '';
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
function writeCsv(file, rows) {
  const headers = Object.keys(rows[0]);
  fs.writeFileSync(
    file,
    `${[headers.join(','), ...rows.map((r) => headers.map((h) => csvValue(r[h])).join(','))].join('\n')}\n`,
  );
}

function displayedSubtotal(...ids) {
  const prices = ids.map((id) => byId.get(id)?.current_aud_product_price);
  return prices.some((price) => price == null)
    ? 'Not yet verified'
    : `A$${prices.reduce((total, price) => total + price, 0).toFixed(2)}`;
}

function rerank(rows) {
  rows.sort(
    (a, b) =>
      b.bush_gums_sourcing_score - a.bush_gums_sourcing_score ||
      (b.review_count ?? 0) - (a.review_count ?? 0),
  );
  rows.forEach((r, i) => {
    r.rank_provisional = i + 1;
    r.selection_note =
      'Screened candidate; rank reflects available listing metadata and limited external evidence, not a product recommendation.';
  });
}
rerank(mats);
rerank(packs);
writeCsv('aliexpress_sleeping_mats.csv', mats);
writeCsv('aliexpress_backpacks.csv', packs);
writeCsv('external_owner_evidence.csv', evidence);
data.external_owner_evidence = evidence;
data.methodology_note =
  'Scoring follows the requested 100-point framework, but units sold, shipping, Choice, photo-review count and seller-history fields were unavailable in the Bright Data output and therefore received no inferred values. Rankings are sourcing priorities for physical testing, not consumer recommendations.';
fs.writeFileSync(path, JSON.stringify(data, null, 2));

const money = (v) =>
  v == null
    ? 'unknown'
    : `A$${Number(v).toFixed(2)} product price; Sydney shipping unavailable`;
const valueCandidates = (rows, category) =>
  rows
    .filter(
      (r) =>
        r.established_brand_benchmark === 'no' &&
        r.current_aud_product_price >= (category === 'mat' ? 20 : 20) &&
        r.current_aud_product_price <= 60,
    )
    .slice(0, 10);
const overCandidates = (rows, category) =>
  rows
    .filter(
      (r) =>
        r.established_brand_benchmark === 'no' &&
        r.current_aud_product_price <= (category === 'mat' ? 35 : 45),
    )
    .slice(0, 5);
function risk(r) {
  if (r.specification_inconsistencies) return r.specification_inconsistencies;
  if (r.category === 'sleeping_mat')
    return 'Verify overnight air retention, valve sealing, real thickness, weight and warmth; seller claims are unvalidated.';
  return 'Verify real capacity, load transfer, strap/seam strength, mesh durability and water resistance under a realistic overnight load.';
}
function rankTable(rows) {
  return [
    '|Rank|Candidate|Price evidence|Orders|Reviews / rating|Claimed weight / key spec|External UX|Scores|Discovery / confidence|Why test it|Biggest risk|',
    '|---:|---|---|---:|---|---|---|---|---|---|---|',
    ...rows.map(
      (r, i) =>
        `|${i + 1}|[${r.product_title.replaceAll('|', '/')}](<${r.direct_aliexpress_url}>)<br>${r.aliexpress_item_id}|${money(r.current_aud_product_price)}|unknown|${r.review_count ?? 'unknown'} / ${r.star_rating ?? 'unknown'}|${r.claimed_product_weight_g ?? 'unknown'} g; ${r.category === 'sleeping_mat' ? `R${r.claimed_r_value ?? ' unknown'}, ${r.claimed_thickness_cm ?? 'unknown'} cm` : `${r.claimed_capacity_l ?? 'unknown'} L, ${r.claimed_materials ?? 'material unknown'}`}|${r.independent_ux_evidence_grade}; ${r.strongest_long_term_usage_report ?? 'No product-specific independent owner evidence found.'}|${r.bush_gums_sourcing_score}/100 sourcing; ${r.current_consumer_confidence}/100 consumer|${r.discovery_potential}; ${r.evidence_confidence}|Cheap, objectively testable candidate with ${r.review_count ?? 0} marketplace reviews.|${risk(r).replaceAll('|', '/')}|`,
    ),
  ].join('\n');
}

const matTests = [
  'MAT-1005011665329887',
  'MAT-1005007091683212',
  'MAT-3256805902506117',
  'MAT-1005010653298755',
  'MAT-3256808061828593',
]
  .map((id) => byId.get(id))
  .filter(Boolean);
const packTests = [
  'PACK-1005007054093066',
  'PACK-1005012918184976',
  'PACK-1005009804791143',
  'PACK-3256806277866587',
  'PACK-3256812291683516',
]
  .map((id) => byId.get(id))
  .filter(Boolean);
function tests(rows) {
  return rows
    .map(
      (r, i) =>
        `${i + 1}. **${r.product_title}**: ${money(r.current_aud_product_price)}; ${r.established_brand_benchmark === 'yes' ? 'benchmark/control' : r.discovery_potential + ' discovery potential'}. Test: ${risk(r)}`,
    )
    .join('\n');
}
function appendix(rows) {
  return rows
    .map(
      (r) =>
        `### ${r.product_title}\n\n- Product: [AliExpress ${r.aliexpress_item_id}](<${r.direct_aliexpress_url}>)\n- Reddit/forums/blogs: ${
          r.forum_urls
            ? r.forum_urls
                .split(' | ')
                .map((u) => `[source](${u})`)
                .join(', ')
            : 'No credible exact-product independent source located in this research pass.'
        }\n- Positive consensus: ${r.repeated_independent_positive_themes ?? 'None established outside marketplace reviews.'}\n- Negative consensus: ${r.repeated_independent_negative_themes ?? 'No repeated independent pattern located; this means unknown, not proven reliable.'}\n- Outliers/failures: ${r.known_failure_modes ?? 'None located.'}\n- Seller-claim discrepancies: ${r.specification_inconsistencies ?? 'No exact external measurements available to confirm or contradict the listing.'}\n- Bush Gums testing questions: ${risk(r)}\n`,
    )
    .join('\n');
}

const report = `# Bush Gums AliExpress sleeping-mat and backpack sourcing report

Generated ${data.generated_at}. This is a **test-purchase sourcing screen**, not a consumer buying recommendation.

## Executive summary

The scrape produced **${mats.length} sleeping-mat candidates** and **${packs.length} 35–45 L backpack candidates**, satisfying the 30-per-category collection requirement. The most interesting pattern is not a proven winner: it is a set of very cheap, objectively testable products with meaningful marketplace review counts but little independent durability evidence. That is precisely where Bush Gums testing can create value.

The strongest external evidence attaches to the BISINNA 25+10 L pack and to the Naturehike mat benchmark family. Most anonymous listings remain Evidence Grade D: unknown because nobody credible was found testing the exact item long-term, not known-bad. Displayed sub-A$10 prices on inflatable mats or full backpacks are flagged as probable variant bait and must be confirmed at checkout.

## Method and material limitations

- Source data: Bright Data's AliExpress Products dataset, using the supplied Australian AliExpress category URLs and dedicated category IDs. Raw snapshots are preserved in \`aliexpress_sourcing_raw.json\`.
- The scraper returned product/listing prices, titles, item IDs, stores, ratings, review counts, specifications and a sample of reviews. It did **not** return units sold, Choice status, customer-photo counts, Sydney shipping, delivered totals, seller rating/age/followers, or a reliable currency code. Those fields are left blank/unknown, not guessed.
- Product prices are labelled AUD only as an inference from the AU-localised page context; shipping and exact selected-SKU pricing require manual checkout verification.
- Review inspection is limited to the review sample returned by the dataset, not a guaranteed newest/lowest/photo-review sweep. This materially caps confidence.
- Duplicate calls are title/specification-based. No claim of identical OEM manufacture is made without stronger evidence.
- The requested score weights were used: price/performance 20; transaction history 15; marketplace review depth 10; independent UX 15; weight/performance 10; specifications 10; failure pattern 10; testability 10; brand reputation 0. Missing transaction/photo fields earned no inferred credit; low review depth and suspicious prices incur penalties.

## Sleeping mats: Top 10 Value

${rankTable(valueCandidates(mats, 'mat'))}

## Sleeping mats: Top 5 Overnighter

${rankTable(overCandidates(mats, 'mat'))}

## Backpacks: Top 10 Value

${rankTable(valueCandidates(packs, 'pack'))}

## Backpacks: Top 5 Overnighter

${rankTable(overCandidates(packs, 'pack'))}

## OEM and duplicate observations

- The two BISINNA 25+10 L listings (${bisinna.join(', ')}) are **highly likely** the same product family based on identical title, capacity and architecture; retain the better live offer after manually comparing seller and delivered price.
- The two “Extra Thick 4 Inch” mat listings (${thickMats.join(', ')}) have confirmed duplicate listing text and are **highly likely** the same OEM design.
- The aluminium-film egg-crate mats (${foamMats.join(', ')}) are a **possible** OEM family match; matching broad foam geometry is insufficient for a stronger conclusion without image/dimension comparison.

## Recommended test purchases

### Three kit price points

|Kit|Sleeping mat to buy|Backpack to buy|Displayed product subtotal|Reason|
|---|---|---|---:|---|
|Starter|[Egg-crate foam mat](<${byId.get('MAT-1005011665329887')?.direct_aliexpress_url}>)|[Generic 40 L pack](<${byId.get('PACK-1005007054093066')?.direct_aliexpress_url}>)|${displayedSubtotal('MAT-1005011665329887', 'PACK-1005007054093066')}|Lowest-cost credible pairing: the foam mat cannot leak and both listings have the deepest useful review history in their generic groups.|
|Lightweight|[WESTTUNE inflatable](<${byId.get('MAT-3256805902506117')?.direct_aliexpress_url}>)|[BISINNA 25+10 L roll-top](<${byId.get('PACK-1005012918184976')?.direct_aliexpress_url}>)|${displayedSubtotal('MAT-3256805902506117', 'PACK-1005012918184976')}|Balanced emerging-brand test. BISINNA has the best external evidence and reported 580 g weight; WESTTUNE has 121 marketplace reviews.|
|Performance|[Naturehike R3.5 benchmark mat](<${byId.get('MAT-3256808061828593')?.direct_aliexpress_url}>)|[Generic claimed-730 g 35 L pack](<${byId.get('PACK-3256806277866587')?.direct_aliexpress_url}>)|${displayedSubtotal('MAT-3256808061828593', 'PACK-3256806277866587')}|Uses the permitted established-brand control for the higher-spec sleep component and an objectively testable sub-900 g discovery pack.|

These subtotals exclude shipping and the rest of each kit. They are not complete-kit totals.

### Sleeping mats

${tests(matTests)}

This set compares a high-review foam control, an implausibly cheap inflatable challenger, a named low-brand inflatable, a duplicated thick design and one established-brand benchmark.

### Backpacks

${tests(packTests)}

This set compares the highest-review generic 40 L listing, the externally discussed BISINNA ultralight layout, a tactical 38 L architecture, a generic hiking-specific 35 L candidate and one established-brand benchmark.

## External evidence appendix: test finalists

${appendix([...matTests, ...packTests])}

## Decision guidance

Do not publish these prices or specifications as durable consumer claims. Before ordering, manually open each finalist, select the exact size/variant, set delivery to Sydney, record delivered AUD total and delivery estimate, and capture the seller/Choice/order fields the scraper omitted. After purchase, weigh and measure every item; run 24–72 hour static leak tests and repeated inflation cycles for mats; and perform progressive load, seam, buckle, mesh and water-ingress tests for packs. The CSV scores should then be recomputed with Bush Gums measurements replacing seller claims.
`;
fs.writeFileSync('bush_gums_aliexpress_sourcing_report.md', report);
console.log(
  JSON.stringify(
    {
      mats: mats.length,
      packs: packs.length,
      evidence: evidence.length,
      reportBytes: Buffer.byteLength(report),
    },
    null,
    2,
  ),
);
