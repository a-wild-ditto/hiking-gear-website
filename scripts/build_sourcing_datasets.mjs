import fs from 'node:fs';

const checkedAt = new Date().toISOString();
const matsRaw = JSON.parse(
  fs.readFileSync('brightdata_sleeping_mats_raw.json', 'utf8'),
);
const packsRaw = JSON.parse(
  fs.readFileSync('brightdata_backpacks_raw.json', 'utf8'),
);

const established =
  /naturehike|flextail|3f\s*ul|aegismax|ice\s*flame|black\s*ice/i;
const matKeep =
  /(?:sleeping|camping|inflatable|air|foam).*(?:mat|pad|mattress)|(?:mat|pad|mattress).*(?:sleeping|camping|inflatable|air|foam)/i;
const matReject =
  /beach|picnic|tent footprint|ground cloth|ground sheet|groundsheet|blanket|pillow|seat|sitting pad|sofa|car bed|car folding|pet|yoga|hammock|bbq|fireproof|floor protector|double|glamping|3 person|heating|heated|electric|usb|shooting mat|polycro|storage tray|rain poncho|\btarp\b|baby bed|children/i;
const packCapacity = /(?:^|\D)(3[5-9]|4[0-5])\s*(?:l|litre|liter)(?:\D|$)/i;
const packReject =
  /hydration bladder|cover|raincover|waist pack|chest bag|sling bag|school bag|laptop only|dry bag|swimming|rafting|kayak|diving|surfing/i;
const failureWords =
  /leak|tear|torn|broke|broken|fail|weak|puncture|delamin|uncomfortable|not waterproof|smaller than|understated|zipper.*weak|strap.*weak/i;

function numberFrom(value) {
  if (value == null) return null;
  const match = String(value)
    .replace(/,/g, '')
    .match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function specsObject(row) {
  const out = {};
  for (const spec of row.specifications ?? []) {
    if (!spec?.title) continue;
    const key = String(spec.title).trim();
    if (!(key in out)) out[key] = spec.value ?? null;
  }
  return out;
}

function specText(row) {
  return (row.specifications ?? [])
    .map((s) => `${s.title}: ${s.value}`)
    .join('; ');
}

function firstSpec(row, pattern) {
  const hit = (row.specifications ?? []).find((s) =>
    pattern.test(String(s.title)),
  );
  return hit?.value ?? null;
}

function extractWeight(row) {
  const text = `${row.title ?? ''}; ${specText(row)}`;
  let match = text.match(
    /(?:weight|net weight)[^;]{0,30}?(\d+(?:\.\d+)?)\s*kg/i,
  );
  if (match) return Math.round(Number(match[1]) * 1000);
  match = text.match(/(?:weight|net weight)[^;]{0,30}?(\d{2,4})\s*g\b/i);
  return match ? Number(match[1]) : null;
}

function extractRValue(row) {
  const text = `${row.title ?? ''}; ${specText(row)}`;
  const match = text.match(/r[\s-]?(?:value)?\s*[:=]?\s*(\d+(?:\.\d+)?)/i);
  return match ? Number(match[1]) : null;
}

function extractThickness(row) {
  const text = `${row.title ?? ''}; ${specText(row)}`;
  const match = text.match(
    /(?:thickness|thick)[^;]{0,20}?(\d+(?:\.\d+)?)\s*cm/i,
  );
  return match ? Number(match[1]) : null;
}

function extractCapacity(row) {
  const text = `${row.title ?? ''}; ${specText(row)}`;
  const matches = [
    ...text.matchAll(/(?:^|\D)(3[5-9]|4[0-5])\s*(?:l|litre|liter)(?:\D|$)/gi),
  ];
  return matches.length
    ? [...new Set(matches.map((m) => Number(m[1])))].join('|')
    : null;
}

function hasPackCapacity(row) {
  const title = row.title ?? '';
  if (
    packCapacity.test(title) ||
    /(?:25\s*\+\s*10|30\s*\+\s*(?:5|10))\s*l/i.test(title)
  )
    return true;
  return (row.specifications ?? []).some(
    (s) =>
      /capacity|volume/i.test(String(s.title)) &&
      (packCapacity.test(String(s.value)) ||
        /(?:25\s*\+\s*10|30\s*\+\s*(?:5|10))\s*l/i.test(String(s.value))),
  );
}

function reviewStats(row) {
  const reviews = row.reviews ?? [];
  const textReviews = reviews.filter((r) => r.content?.trim());
  const negatives = textReviews.filter(
    (r) => Number(r.rating) <= 3 || failureWords.test(r.content),
  );
  return {
    inspected: reviews.length,
    textCount: textReviews.length,
    negatives,
    positiveThemes:
      textReviews
        .slice(0, 20)
        .filter((r) => Number(r.rating) >= 4)
        .map((r) => r.content.trim())
        .slice(0, 3)
        .join(' | ') || null,
    negativeThemes:
      negatives
        .map((r) => r.content.trim())
        .slice(0, 4)
        .join(' | ') || null,
  };
}

function priceScore(price) {
  if (price == null) return 4;
  if (price <= 20) return 20;
  if (price <= 35) return 18;
  if (price <= 60) return 15;
  if (price <= 80) return 9;
  return 4;
}

function reviewDepthScore(count) {
  if (!count) return 0;
  if (count >= 500) return 10;
  if (count >= 200) return 9;
  if (count >= 100) return 8;
  if (count >= 50) return 7;
  if (count >= 20) return 5;
  if (count >= 5) return 3;
  return 1;
}

function transactionScore(count) {
  if (!count) return 0;
  if (count >= 500) return 8;
  if (count >= 200) return 7;
  if (count >= 100) return 6;
  if (count >= 20) return 4;
  return 2;
}

function lowReviewPenalty(count) {
  if (!count) return -10;
  if (count < 5) return -7;
  if (count < 20) return -4;
  return 0;
}

function classifyTier(category, price, weight) {
  if (category === 'sleeping_mat')
    return price != null && price <= 35 ? 'Overnighter' : 'Value';
  return price != null && price <= 45 && (weight == null || weight <= 1200)
    ? 'Overnighter'
    : 'Value';
}

function normalize(row, category) {
  const title = row.title ?? 'unknown';
  const price = numberFrom(row.sale_price ?? row.price);
  const referencePrice = numberFrom(row.price);
  const weight = extractWeight(row);
  const reviews = reviewStats(row);
  const material = firstSpec(row, /material|fabric/i);
  const dimensions = firstSpec(
    row,
    /^(?:size|dimensions|unfolded size|product size)$/i,
  );
  const packed = firstSpec(row, /pack(?:ed|age)? size|folded size/i);
  const rating = numberFrom(row.star_rating);
  const count = numberFrom(row.review_count) ?? 0;
  const text = `${title}; ${specText(row)}`;
  const isMat = category === 'sleeping_mat';
  const specScore = Math.min(
    10,
    (material ? 3 : 0) +
      (weight ? 2 : 0) +
      (isMat
        ? (extractRValue(row) != null ? 3 : 0) +
          (extractThickness(row) != null ? 2 : 0)
        : (extractCapacity(row) ? 3 : 0) +
          (/hip belt|waist belt/i.test(text) ? 1 : 0) +
          (/mesh pocket/i.test(text) ? 1 : 0)),
  );
  const weightScore =
    weight == null
      ? 3
      : isMat
        ? weight <= 650
          ? 10
          : weight <= 900
            ? 7
            : 4
        : weight <= 900
          ? 10
          : weight <= 1200
            ? 7
            : 4;
  const failureScore = Math.max(0, 10 - reviews.negatives.length * 2);
  const testability = 9;
  const independentScore = 2;
  const penalty = lowReviewPenalty(count);
  const suspiciousVariantPrice =
    price != null &&
    (isMat ? !/foam|ixpe|egg.?crate/i.test(text) && price < 5 : price < 10);
  const listingPenalty = suspiciousVariantPrice ? -10 : 0;
  const sourcingScore = Math.max(
    0,
    Math.min(
      100,
      priceScore(price) +
        transactionScore(count) +
        reviewDepthScore(count) +
        independentScore +
        weightScore +
        specScore +
        failureScore +
        testability +
        penalty +
        listingPenalty,
    ),
  );
  const consumerConfidence = Math.max(
    0,
    Math.min(
      100,
      25 +
        reviewDepthScore(count) * 2 +
        (rating ? Math.max(0, rating - 3.5) * 12 : 0) +
        failureScore -
        Math.abs(penalty) -
        (count < 20 ? 10 : 0),
    ),
  );
  const discoveryPotential =
    sourcingScore >= 75 && count < 100
      ? 'Exceptional'
      : sourcingScore >= 68
        ? 'High'
        : sourcingScore >= 55
          ? 'Medium'
          : 'Low';
  const evidenceConfidence =
    count >= 200
      ? 'Medium-high'
      : count >= 50
        ? 'Medium'
        : count >= 10
          ? 'Medium-low'
          : 'Low';
  return {
    candidate_id: `${isMat ? 'MAT' : 'PACK'}-${row.item_id}`,
    category,
    subcategory: isMat
      ? /foam|ixpe|egg.?crate/i.test(text)
        ? 'foam'
        : /self.?inflating/i.test(text)
          ? 'self-inflating'
          : 'inflatable'
      : '35–45L hiking backpack',
    tier: classifyTier(category, price, weight),
    product_title: title,
    direct_aliexpress_url: `https://www.aliexpress.com/item/${row.item_id}.html`,
    aliexpress_item_id: String(row.item_id),
    current_aud_product_price: price,
    shipping_to_sydney_aud: null,
    total_delivered_aud: null,
    discount_reference_price_aud: referencePrice,
    choice_status: 'not visible',
    units_sold_orders: null,
    review_count: count || null,
    star_rating: rating,
    seller_store_name: row.store_name ?? null,
    seller_rating: null,
    store_age: null,
    seller_followers: null,
    claimed_product_weight_g: weight,
    claimed_dimensions: dimensions,
    claimed_packed_dimensions: packed,
    claimed_materials: material,
    claimed_r_value: isMat ? extractRValue(row) : null,
    claimed_thickness_cm: isMat ? extractThickness(row) : null,
    claimed_capacity_l: isMat ? null : extractCapacity(row),
    claimed_load_capacity: isMat
      ? null
      : firstSpec(row, /maximum load|load capacity|max load/i),
    hip_belt: isMat
      ? null
      : /hip belt|waist belt/i.test(text)
        ? 'seller claim: yes'
        : 'not visible',
    external_mesh_pocket: isMat
      ? null
      : /mesh pocket|front mesh/i.test(text)
        ? 'seller claim: yes'
        : 'not visible',
    frame: isMat
      ? null
      : /frameless/i.test(text)
        ? 'seller claim: frameless'
        : /frame/i.test(text)
          ? 'seller claim: framed'
          : 'not visible',
    customer_photo_review_count: null,
    reviews_actually_inspected: reviews.inspected,
    repeated_positive_review_themes: reviews.positiveThemes,
    repeated_negative_review_themes: reviews.negativeThemes,
    specification_inconsistencies: suspiciousVariantPrice
      ? 'Displayed price is implausibly low for the main pictured product and may refer to a minor accessory or bait variant; verify the selected SKU before purchase.'
      : null,
    fake_or_duplicated_review_concerns:
      reviews.textCount > 3 &&
      new Set((row.reviews ?? []).map((r) => r.content).filter(Boolean)).size <
        reviews.textCount * 0.6
        ? 'possible duplicated review text'
        : null,
    same_oem_duplicate_observations: null,
    date_time_checked: checkedAt,
    independent_ux_evidence_grade: 'D',
    reddit_urls: null,
    forum_urls: null,
    youtube_owner_review_urls: null,
    independent_owner_reports_located: 0,
    strongest_long_term_usage_report: null,
    independent_measured_weights: null,
    independent_measured_dimensions_capacity: null,
    repeated_independent_positive_themes: null,
    repeated_independent_negative_themes: null,
    known_failure_modes: reviews.negativeThemes,
    suspected_oem_aliases_names: null,
    bush_gums_sourcing_score: Math.round(sourcingScore),
    current_consumer_confidence: Math.round(consumerConfidence),
    discovery_potential: discoveryPotential,
    evidence_confidence: evidenceConfidence,
    established_brand_benchmark: established.test(text) ? 'yes' : 'no',
    source_metadata_note:
      'Bright Data AliExpress Products dataset; price currency appears as returned by AU-localised category but currency code and shipping were not supplied.',
    raw_specifications_json: JSON.stringify(specsObject(row)),
  };
}

function csvValue(value) {
  if (value == null) return '';
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function writeCsv(path, rows) {
  const headers = Object.keys(rows[0]);
  const lines = [
    headers.join(','),
    ...rows.map((row) => headers.map((h) => csvValue(row[h])).join(',')),
  ];
  fs.writeFileSync(path, `${lines.join('\n')}\n`);
}

function choose(rows, category) {
  const sorted = rows.sort(
    (a, b) =>
      b.bush_gums_sourcing_score - a.bush_gums_sourcing_score ||
      (b.review_count ?? 0) - (a.review_count ?? 0),
  );
  const nonPremium = sorted.filter(
    (r) => r.established_brand_benchmark === 'no',
  );
  const benchmark = sorted.find((r) => r.established_brand_benchmark === 'yes');
  const selected = nonPremium.slice(0, 59);
  if (benchmark) selected.push(benchmark);
  return selected.map((row, index) => ({
    rank_provisional: index + 1,
    ...row,
    selection_note: `Provisional automated screen from ${category} raw pool; independent evidence enrichment pending.`,
  }));
}

const mats = choose(
  matsRaw
    .filter(
      (r) =>
        r.item_id &&
        matKeep.test(r.title ?? '') &&
        !matReject.test(r.title ?? ''),
    )
    .map((r) => normalize(r, 'sleeping_mat')),
  'sleeping mat',
);
const packs = choose(
  packsRaw
    .filter(
      (r) =>
        r.item_id &&
        /backpack|rucksack|pack\b/i.test(r.title ?? '') &&
        !packReject.test(r.title ?? '') &&
        hasPackCapacity(r),
    )
    .map((r) => normalize(r, 'backpack')),
  'backpack',
);

if (mats.length < 30 || packs.length < 30)
  throw new Error(
    `Insufficient candidates after filtering: mats=${mats.length}, packs=${packs.length}`,
  );

writeCsv('aliexpress_sleeping_mats.csv', mats);
writeCsv('aliexpress_backpacks.csv', packs);
writeCsv('external_owner_evidence.csv', [
  {
    candidate_id: null,
    aliexpress_item_id: null,
    source_platform: null,
    source_url: null,
    date: null,
    username_channel: null,
    reported_usage_duration_distance_nights: null,
    sentiment: null,
    measured_values_reported: null,
    failure_reported: null,
    key_evidence_summary: null,
    oem_match_confidence: null,
    evidence_quality: null,
  },
]);

fs.writeFileSync(
  'aliexpress_sourcing_raw.json',
  JSON.stringify(
    {
      generated_at: checkedAt,
      source: 'Bright Data AliExpress Products dataset',
      source_snapshot_ids: {
        sleeping_mats: 'sd_mu2aholl17g3krvd4b',
        backpacks: 'sd_mu282w1c2him48t407',
      },
      limitations: [
        'No units-sold field',
        'No Choice field',
        'No destination shipping field',
        'Seller age/rating/followers absent',
      ],
      candidates: { sleeping_mats: mats, backpacks: packs },
      raw_records: { sleeping_mats: matsRaw, backpacks: packsRaw },
    },
    null,
    2,
  ),
);

console.log(
  JSON.stringify(
    {
      mats: mats.length,
      packs: packs.length,
      matTop: mats[0]?.product_title,
      packTop: packs[0]?.product_title,
    },
    null,
    2,
  ),
);
