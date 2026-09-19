# Bush Gums first-party analytics

The first-party dataset answers funnel and demand questions that aggregate
traffic tools, Clarity and affiliate networks cannot connect by themselves. It
does not replace those systems. Affiliate-network reporting remains the source
of truth for purchases, revenue and commission.

## Architecture

Astro still builds static files into `dist`. Cloudflare runs `worker/index.ts`
first only for `POST /api/analytics`; all other requests are served through the
`ASSETS` binding. Accepted events are written to dataset
`bush_gums_events_v1` through binding `ANALYTICS`. There is no public reporting
endpoint.

All browser analytics are gated by the exact hostname allowlist in
`src/config/analytics.ts`. Analytics intentionally runs only on
`bushgums.com.au` and `www.bushgums.com.au`; local development, automated
agents, Playwright tests, Cloudflare previews, branch deployments and staging
hosts do not load Clarity or send first-party events. No GA4 or Google tag
configuration currently exists in this repository.

Cloudflare documented Analytics Engine retention as three months when this was
implemented on 19 September 2026. Queries use the authenticated Analytics
Engine SQL API. Recheck retention before changing the privacy page.

## Events and answers

Version 1 allows only `session_start`, `page_view`, `kit_cta_click`,
`product_click`, `merchant_click`, `builder_start`, `builder_answer`,
`builder_result`, `builder_result_click` and `retailer_comparison_open`.

Builder answers are restricted by question: location (`nsw`, `vic`,
`tasmania`, `queensland`, `other`), season (`three-season`, `winter`), people
(`solo`, `two`), budget (`under-300`, `300-500`, `over-500`), priority
(`lowest-cost`, `comfort`, `lightweight`) and experience (`first`, `few`,
`experienced`). `step_commit` captures partial progress and changed answers;
six `final_snapshot` rows form the authoritative completed profile.

## Session, attempt and attribution behaviour

`bg_session_id_v1` is a random UUID stored only in `sessionStorage`. Acquisition
captures pathname-only landing path, four recognised UTM fields and referrer
hostname. It never captures arbitrary parameters or full referrer URLs. Journey
context lasts at most 30 minutes and applies only when its target pathname is
reached. Questionnaire attempts increment independently. The latest completed
attempt number is attached to later product and merchant events in that tab.

The browser module honours Do Not Track and Global Privacy Control. Missing
storage, blocked JavaScript, rejected requests and Analytics Engine failures do
not block the site, questionnaire or merchant navigation.

## Physical schema

`index1` is session ID. Blobs 1-20 are event, schema version, page path,
landing path, source, medium, campaign, content, referrer domain, product slug,
kit ID, placement, source surface, source ID, merchant, builder result, country,
affiliate tracking key, question key and answer value. Doubles 1-5 are event
count, builder step, affiliate flag, event sequence and builder attempt.

Merchant placement keys are deterministic and contain no session, UTM or
questionnaire data. Existing AliExpress URLs use tracking mode `none` and remain
unchanged; network-side query parameters require separate owner verification.

## Querying

Use the authenticated Cloudflare SQL API with an Account Analytics Read token;
never expose credentials to browser code. Start with
`dashboard-queries.sql`. Analytics Engine can sample results, so aggregate
counts use `_sample_interval`.
