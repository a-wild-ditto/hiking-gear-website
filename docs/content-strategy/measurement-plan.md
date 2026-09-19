# Measurement plan: what analytics Bush Gums should have

**Update, 2026-09-19:** The owner chose to add a minimal first-party funnel and
demand-research layer using Cloudflare Workers Analytics Engine. It records
structured page, kit, product, merchant and Build My Kit events, including the
six predefined questionnaire answer enums. It uses a tab-session identifier in
`sessionStorage`, not a persistent first-party visitor identifier. Microsoft
Clarity remains the separate qualitative UX tool and stays disabled on Build My
Kit. See `docs/analytics/README.md` for the implemented event and privacy model.

**Update, 2026-09-18:** After launch, the owner chose Microsoft Clarity (project
`yk49dw3tso`) for behavioural analytics, superseding the earlier advice against heatmaps
and session recording and the assumption that the site has no analytics. **All recommendations
and current-state claims below describe the earlier pre-launch assessment; they are historical,
not guidance for the present implementation.** The original reasoning is retained below.

Clarity review record: Microsoft [describes collection of page and interaction data](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data),
including clicks, scrolls and session playback data, stored in Clarity. Its [typical cookie
setup](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies) uses
pseudonymous identifiers. As of 2026-09-18, Microsoft [states](https://learn.microsoft.com/en-us/clarity/setup-and-installation/data-retention)
that playback data is retained for 30 days and click and heatmap data for 9 months (labeled
or favorited sessions can also last 9 months). The site's purpose is to improve usability,
navigation and content. The Clarity script loads asynchronously; failure to load it does not
affect the site's main functions.

The shared layout excludes `/build-my-kit` from Clarity to keep local questionnaire
answers out of Clarity.

Written 2026-09-18 as a follow-up to `content-strategy-summary.md`, which flagged that the
90-day learning objectives could not all be answered with the site as it currently stands.

## What the repository committed to at the pre-launch review

This is not a blank slate. Three things in the repo constrain the decision, and two of them
are public promises.

1. **`README.md` line 24:** "No checkout, inventory, database, accounts, analytics or email
   capture".
2. **`src/pages/privacy.astro`:** "This MVP has no account system, active email capture,
   first-party analytics, advertising tracker or questionnaire database." Last reviewed
   17 September 2026. This is a published statement to visitors.
3. **`AGENTS.md`:** "Do not add third-party tracking, fingerprinting, unnecessary personal
   information, or account infrastructure unless expressly requested. For any analytics or
   data-collection change, review what is collected, where it is stored, why it is needed,
   retention, user-facing privacy copy, and failure behaviour. Analytics failures must not
   break the primary site experience."

**Consequence: adding any client-side analytics requires editing the privacy page and the
README in the same change.** Shipping a tracker while the privacy page says there is none
would be a straightforward misrepresentation to visitors, and it would undermine the exact
quality the brand is selling. This is an owner decision, not a technical one.

**Also relevant:** `PUBLIC_SITE_URL` is unset, `npm run deploy` requires owner approval, and
`site.config.mjs` still falls back to `localhost:4321`. The site does not appear to be live
yet. Most of this is a pre-launch decision rather than a retrofit, which is the easy version.

## Recommendation in one line

**Take everything in Tier 0. It answers most of the 90-day questions, requires no code, no
new dependency, and no change to the privacy page. Add Tier 1 only at launch, and only with
the privacy copy updated in the same commit. Skip Tier 2 entirely for now.**

---

## Tier 0: zero code, zero collection, no privacy change needed

These are free, they collect nothing from visitors that the site itself stores, and none of
them contradict the current privacy statement.

### 1. Affiliate sub-IDs. Do this first, it is the highest-value item here.

AliExpress affiliate links support a tracking parameter that is reported back in the
affiliate portal. Every link in `src/data/offers.ts` currently goes out bare:

```
https://s.click.aliexpress.com/e/_c3AbGxtj
```

Tagging each placement lets the merchant-side report tell you **which page and which context
produced each click and each conversion**, without the Bush Gums site storing anything at
all. A scheme like `page_product_context`:

- `value-kit_cloudup_hero`
- `gear-cloudup_inline`
- `guide-tent_cta`
- `yt_video04_desc`

This single change answers the two commercially important 90-day questions, which product
produces the most affiliate clicks and whether YouTube or Google traffic converts better,
with better data than any site analytics could give you, because it includes the actual
conversion and not just the outbound click.

Implementation is a field on the offer type and a helper that appends it. Small, first-party,
no dependency, and it degrades to a normal link if it fails. Confirm the current parameter
name in the AliExpress affiliate portal before building it, since these change.

**Caveat worth knowing:** attribution across a redirect chain is imperfect, and the AliExpress
app intercepting links on mobile can lose parameters. Treat it as directional.

### 2. Google Search Console. Verify it now, before launch.

GSC is not analytics in the sense the privacy page means. It reports Google's own data about
your site to you. It sets no cookies, runs no script, and collects nothing from visitors.
Verification is a DNS record or an HTML file.

It answers directly:

- Which queries actually produce impressions and clicks, which is the only real test of the
  Naturehike bet
- Which pages Google surfaces, and for what
- Whether the AU localisation is working, via the country filter
- Indexing problems, which for a new static site is worth knowing early

**This is the single most valuable free measurement tool for the SEO half of the strategy,
and it has no privacy cost.** A `gscServer` MCP connector is configured in this workspace but
did not respond when queried during this session, so I could not confirm whether a property
already exists. Worth checking.

Submit `sitemap-index.xml` (already generated by `src/pages/sitemap-index.xml.ts`) once live.

### 3. YouTube Studio

Already free and already yours. It answers five of the seven 90-day learning objectives on
its own: title and thumbnail click-through rate, browse versus search traffic sources,
whether Shorts feed long-form, returning viewer rate by video, and audience geography.

Set up: a custom Studio dashboard comparing impressions click-through rate across the three
title propositions being tested (dollar figure, regret framing, brand and model name), since
that is 90-day objective one.

### 4. Cloudflare's own request data

Hosting on Workers Static Assets means Cloudflare already sees every request. The dashboard
gives requests, bandwidth, top paths, country and referrer at an aggregate level with no
script on the page and no additional collection, because it is server-side data you already
generate by serving the site.

This is coarse. It will not do funnels and it will not reliably separate humans from bots.
It is enough to answer "is anyone arriving, and from where".

---

## Tier 1: minimal client-side, only at launch, only with privacy copy updated

If Tier 0 leaves a real gap after 90 days, the gap will be **on-site behaviour**: did people
who landed on a guide page reach a product page, and did they scroll far enough to see the
offer.

### Recommended: Cloudflare Web Analytics

- No cookies, no `localStorage`, no persistent identifier, no cross-site tracking, no
  fingerprinting
- Free, and already inside the hosting account
- One script tag, no npm dependency, which suits a repo with four production dependencies
- If the script fails to load, nothing on the page breaks, which satisfies the AGENTS.md
  failure-behaviour requirement

### Acceptable alternative: Plausible or Umami, self-hosted or paid

Same privacy profile, better interface, gives you outbound-link click events out of the box.
Costs either money or a server to run. Only worth it if you want the outbound click data
on-site rather than relying on affiliate sub-IDs, and sub-IDs are the better source anyway.

### What the AGENTS.md review would need to say

If you proceed, the change needs all six answers in the commit, not afterwards:

| Question          | Answer for Cloudflare Web Analytics                                                                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is collected | Page URL, referrer, coarse country, device type, browser. No identifier that persists across visits.                                                                   |
| Where stored      | Cloudflare, under the existing hosting account.                                                                                                                        |
| Why needed        | To learn whether guide pages lead to product pages, which is the core funnel assumption.                                                                               |
| Retention         | Whatever the Cloudflare product default is at the time. Check and record it.                                                                                           |
| Privacy copy      | `privacy.astro` must change in the same commit. The "no first-party analytics" line becomes a statement of what is collected and what is not. `README.md` line 24 too. |
| Failure behaviour | Script is async and non-blocking. Site renders and functions identically without it.                                                                                   |

---

## Tier 2: do not do this

**Google Analytics 4.** Cookies, a consent banner obligation in several markets, a
substantial privacy-policy rewrite, a heavier page, and a direct contradiction of the
positioning. The site sells careful handling of evidence and plain dealing with the reader.
Putting Google's advertising infrastructure on it to learn things Search Console and YouTube
Studio already tell you is a bad trade.

**Email capture, accounts, or a saved-kit feature.** All explicitly out of scope in
`README.md` and the commercial phasing in `AGENTS.md`. Worth revisiting at phase three
(curated retailer), not now.

**Heatmaps and session recording.** Disproportionate collection for an eleven-product static
site, and hard to square with the privacy statement.

**A/B testing infrastructure.** With the traffic volumes implied by this keyword research,
tens to low hundreds of monthly searches per term, you will not reach significance on
anything. Test titles on YouTube, where the impression volume is large enough to be real.

---

## What this means for the 90-day learning objectives

Re-running the seven objectives from `content-strategy-summary.md` against Tier 0 alone:

| #   | Objective                                                       | Answerable with Tier 0? | Source                                           |
| --- | --------------------------------------------------------------- | ----------------------- | ------------------------------------------------ |
| 1   | Which title proposition produces the highest click-through rate | **Yes**                 | YouTube Studio                                   |
| 2   | Does cheap-vs-expensive beat model-specific review              | **Yes**                 | YouTube Studio                                   |
| 3   | Do Shorts drive long-form views                                 | **Yes**                 | YouTube Studio traffic sources                   |
| 4   | Does Australian localisation improve search performance         | **Yes**                 | Search Console, country filter                   |
| 5   | Which product produces the most affiliate clicks                | **Yes, and better**     | Affiliate sub-IDs, including conversions         |
| 6   | Which video type generates returning viewers                    | **Yes**                 | YouTube Studio                                   |
| 7   | Is the Naturehike bet real                                      | **Yes**                 | Search Console impressions on `naturehike` terms |

**All seven are answerable with no site analytics at all.** The earlier claim in
`content-strategy-summary.md` that the absence of analytics blocks the learning plan was too
pessimistic, and the summary should be read with this correction.

The one genuine blind spot Tier 0 leaves is **on-site navigation**: whether a reader who
lands on the R-value guide actually reaches the TuYe product page. That is a real question,
but it is a question about page design, and it is worth answering only once there is enough
traffic for the answer to mean anything. On the volumes in this research, that is unlikely
inside 90 days.

## Recommended sequence

1. **Now, pre-launch.** Design and implement the affiliate sub-ID scheme in
   `src/data/offers.ts`. Confirm the parameter name in the AliExpress portal first.
2. **Now.** Check whether a Search Console property already exists; if not, verify one
   against the production domain as soon as `PUBLIC_SITE_URL` is decided.
3. **At launch.** Submit the sitemap. Set up the YouTube Studio custom dashboard.
4. **At launch, optional.** Cloudflare Web Analytics, with `privacy.astro` and `README.md`
   updated in the same commit, or not at all.
5. **At day 90.** Review. Only add more measurement if a specific decision is actually
   blocked by not having it.
