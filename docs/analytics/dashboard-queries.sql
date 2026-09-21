-- Bush Gums Analytics Engine v1 queries.
-- Dataset: bush_gums_events_v1. All counts account for sampling.

-- 30-day commercial funnel
SELECT
  sum(sample_weight) AS sessions,
  sum(sample_weight * product_clicked) AS product_interest_sessions,
  sum(sample_weight * merchant_clicked) AS merchant_click_sessions,
  round(if(sum(sample_weight) > 0, 100.0 * sum(sample_weight * merchant_clicked) / sum(sample_weight), 0), 1) AS merchant_click_rate_pct
FROM (
  SELECT index1, max(_sample_interval) AS sample_weight,
    max(if(blob1 = 'product_click', 1, 0)) AS product_clicked,
    max(if(blob1 = 'merchant_click', 1, 0)) AS merchant_clicked
  FROM bush_gums_events_v1
  WHERE timestamp >= now() - INTERVAL '30' DAY
  GROUP BY index1
);

-- Traffic-source quality
SELECT source, medium, sum(sample_weight) AS sessions,
  sum(sample_weight * merchant_clicked) AS merchant_click_sessions,
  round(if(sum(sample_weight) > 0, 100.0 * sum(sample_weight * merchant_clicked) / sum(sample_weight), 0), 1) AS merchant_click_rate_pct
FROM (
  SELECT index1, max(_sample_interval) AS sample_weight, max(blob5) AS source,
    max(blob6) AS medium, max(if(blob1 = 'merchant_click', 1, 0)) AS merchant_clicked
  FROM bush_gums_events_v1
  WHERE timestamp >= now() - INTERVAL '30' DAY
  GROUP BY index1
)
GROUP BY source, medium
ORDER BY merchant_click_sessions DESC, sessions DESC;

-- Product page to merchant conversion
SELECT product_slug, sum(sample_weight * product_viewed) AS product_view_sessions,
  sum(sample_weight * merchant_clicked) AS merchant_click_sessions,
  round(if(sum(sample_weight * product_viewed) > 0, 100.0 * sum(sample_weight * merchant_clicked) / sum(sample_weight * product_viewed), 0), 1) AS product_to_merchant_pct
FROM (
  SELECT index1, blob10 AS product_slug, max(_sample_interval) AS sample_weight,
    max(if(blob1 = 'page_view', 1, 0)) AS product_viewed,
    max(if(blob1 = 'merchant_click', 1, 0)) AS merchant_clicked
  FROM bush_gums_events_v1
  WHERE timestamp >= now() - INTERVAL '30' DAY AND blob10 != ''
  GROUP BY index1, product_slug
)
GROUP BY product_slug
ORDER BY merchant_click_sessions DESC, product_view_sessions DESC;

-- Merchant placement clicks.
-- blob2 is the product category. It previously held a constant '1' schema
-- marker, so rows written before that change carry '1' and must be read as
-- "unknown category"; nullIf() below does that. blob18 is the attribution key
-- written into the outbound URL: for Amazon it is the Associates tracking ID
-- itself (bushgums-kit-22 or bushgums-gear-22); for other merchants it is the
-- bg1_ sub-id. See docs/affiliate-links.md.
SELECT blob10 AS product_slug, nullIf(blob2, '1') AS product_category,
  blob15 AS merchant,
  blob12 AS placement, blob11 AS kit_tier, blob18 AS tracking_key,
  sum(_sample_interval) AS clicks
FROM bush_gums_events_v1
WHERE timestamp >= now() - INTERVAL '30' DAY AND blob1 = 'merchant_click'
GROUP BY product_slug, product_category, merchant, placement, kit_tier, tracking_key
ORDER BY clicks DESC;

-- Amazon clicks per Associates tracking ID, to reconcile against the
-- Amazon Associates tracking-ID report.
SELECT blob18 AS amazon_tracking_id, blob3 AS page_path, blob10 AS product_slug,
  blob12 AS placement, blob5 AS utm_source, blob6 AS utm_medium,
  blob7 AS utm_campaign, blob8 AS utm_content,
  sum(_sample_interval) AS clicks
FROM bush_gums_events_v1
WHERE timestamp >= now() - INTERVAL '30' DAY AND blob1 = 'merchant_click'
  AND blob18 LIKE 'bushgums-%-22'
GROUP BY amazon_tracking_id, page_path, product_slug, placement,
  utm_source, utm_medium, utm_campaign, utm_content
ORDER BY clicks DESC;

-- Completed-answer distribution (change blob19 to another question key).
SELECT blob20 AS answer, sum(_sample_interval) AS completed_attempts
FROM bush_gums_events_v1
WHERE timestamp >= now() - INTERVAL '30' DAY
  AND blob1 = 'builder_answer' AND blob12 = 'final_snapshot'
  AND blob19 = 'budget'
GROUP BY answer
ORDER BY completed_attempts DESC;

-- Budget by priority
SELECT budget, priority, sum(sample_weight) AS completed_attempts
FROM (
  SELECT index1, double5 AS attempt_number, max(_sample_interval) AS sample_weight,
    max(if(blob1 = 'builder_answer' AND blob12 = 'final_snapshot' AND blob19 = 'budget', blob20, '')) AS budget,
    max(if(blob1 = 'builder_answer' AND blob12 = 'final_snapshot' AND blob19 = 'priority', blob20, '')) AS priority
  FROM bush_gums_events_v1
  WHERE timestamp >= now() - INTERVAL '30' DAY AND double5 > 0
  GROUP BY index1, attempt_number
)
WHERE budget != '' AND priority != ''
GROUP BY budget, priority
ORDER BY completed_attempts DESC;

-- No-match demand
SELECT hiking_location, season, budget, priority, sum(sample_weight) AS no_match_attempts
FROM (
  SELECT index1, double5 AS attempt_number, max(_sample_interval) AS sample_weight,
    max(if(blob19 = 'location' AND blob12 = 'final_snapshot', blob20, '')) AS hiking_location,
    max(if(blob19 = 'season' AND blob12 = 'final_snapshot', blob20, '')) AS season,
    max(if(blob19 = 'budget' AND blob12 = 'final_snapshot', blob20, '')) AS budget,
    max(if(blob19 = 'priority' AND blob12 = 'final_snapshot', blob20, '')) AS priority,
    max(if(blob1 = 'builder_result', blob16, '')) AS result
  FROM bush_gums_events_v1
  WHERE timestamp >= now() - INTERVAL '30' DAY AND double5 > 0
  GROUP BY index1, attempt_number
)
WHERE result = 'no_match'
GROUP BY hiking_location, season, budget, priority
ORDER BY no_match_attempts DESC;

-- Daily trend
SELECT toStartOfDay(timestamp) AS day,
  sumIf(_sample_interval, blob1 = 'session_start') AS sessions,
  sumIf(_sample_interval, blob1 = 'product_click') AS product_clicks,
  sumIf(_sample_interval, blob1 = 'merchant_click') AS merchant_clicks,
  sumIf(_sample_interval, blob1 = 'builder_start') AS builder_attempts
FROM bush_gums_events_v1
WHERE timestamp >= now() - INTERVAL '30' DAY
GROUP BY day
ORDER BY day ASC;
