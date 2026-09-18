---
status: approved
researchedDate: 2026-09-18
approvedDate: 2026-09-18
source: docs/seo-discovery/runs/2026-09-18.md
keywordPlanner: geoTargetConstants/2036, languageConstants/1000, GOOGLE_SEARCH
---

# Brief: hiking stove guide + "where to go" cluster

Shared contract for writer and reviewer agents. Volumes are AU monthly
averages (Keyword Planner, Sep 2025 to Aug 2026).

## Rules every post follows

Skill: `C:\Users\James\.codex\visualizations\2026\09\08\01a07ef9-f838-7bc1-a13c-2c232fe86d1d\website-remediation\.claude\skills\seo-blog\SKILL.md`
(written for Lux Tuition). Apply its site-agnostic rules: §4 structure
(intro hook, Key Takeaways dot points, H2s phrased as search queries, figures,
lists, one blockquote, cited stats, 5-7 FAQs), §5 linking (4-8 in-body links
spread early/mid/close, cross-links, soft CTA), §7 constraints (max TWO em
dashes per file, max ONE "not X, it's Y" construction per H2 section, no
keyword stuffing, no SEO jargon like cluster/pillar/hub/spoke in reader copy).
IGNORE Lux-only items: Blacktown/local SEO, hero SVGs, author credentials,
worksheet fidelity, `.md` format, lux-figure markup, study-guide CTA.

Bush Gums site rules (from `AGENTS.md` and
`docs/seo-discovery/bushgums.com.au.md`):

- **No proof points.** Bush Gums has no first-hand trips or test results.
  Never write "we walked", "when we camped", trip reports, or invented
  conditions. Region guides are planning-and-gear guides built on park
  authority sources.
- **Competitors:** never name a competing site or retailer; say "traditional
  retailers" if a comparison is needed. Product brands we review may be named.
- en-AU spelling, metric units, AUD.
- Attribute specs to manufacturer / retailer / seller; never present them as
  measured by Bush Gums. Keep safety uncertainty explicit (water, fire,
  weather, emergency gear).
- Every factual claim about a track, campsite, booking, fee, closure,
  distance or fire rule must be verified live (WebSearch/WebFetch) against an
  authority source (NSW NPWS, Parks Victoria, Parks and Wildlife Service
  Tasmania, state fire services, BoM) and linked. If you cannot verify it,
  leave it out. No fabricated distances or dates.

## Format (match the existing guides exactly)

- File: `src/pages/guides/<slug>.astro`, using `GuideLayout` with `title`,
  `description`, `eyebrow`, `readTime`. Copy the structure and CSS classes of
  `src/pages/guides/sleeping-mat-r-value.astro`: `<div class="takeaways">`,
  `<figure class="guide-figure"><div class="guide-table-wrap"><table class="guide-table">`,
  `<blockquote>`, and FAQ as `<div class="faq"><details><summary>…</summary><p>…</p></details></div>`.
- Title 50-65 chars (layout appends " | Bush Gums"); description 150-160
  chars with the primary keyword in the first ~10 words.
- 1,500-2,200 words (hub: 1,500-2,500).
- **Whitespace rule (Astro drops spaces):** never start a line with `<a`
  immediately after text on the previous line. Keep each link on the same
  line as the text before it, e.g. `... check the <a href="/x">guide</a> first.`
- Internal links you may use: `/guides/overnight-hike-packing-list`,
  `/guides/sleeping-bag-temperature-ratings`, `/guides/sleeping-mat-r-value`,
  `/guides/2-person-hiking-tent-guide`, `/#kits`, `/build-my-kit`,
  `/gear/aluminium-cookware-set/`, `/gear/naturehike-rock-60-5/`,
  `/gear/nyxia-35l-rain-cover/`, and the sibling slugs below.
- Only edit your own file. Do not touch `guides.ts`, sitemap, learn page or
  CSS; the orchestrator integrates.

## Posts

| Slug                                                 | Primary query (title)                | Supporting queries (H2/FAQ)                                                                                  | Notes                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hiking-stove-guide`                                 | hiking stove (1,300)                 | ultralight camp stove (390, peaks May-Jul), light weight camping stove (90), hiking cookware (70)            | Canister vs alcohol vs solid fuel vs integrated; weight; fuel availability in Australia; **fire bans**: rules on stoves during total fire bans differ by state; verify NSW RFS and CFA Victoria wording and link it, or say "check your state fire authority". Link the cookware review. Bush Fire Danger Period: NSW statewide 1 Oct 2026. |
| `overnight-hikes-victoria`                           | overnight hikes victoria (390)       | multi day hikes victoria (210), overnight hikes near melbourne (140), beginner overnight hikes victoria (20) | Parks Victoria bookings; a table of 4-6 beginner-suitable verified routes (name, park, one-way distance ONLY if verified, booking needed?, source link).                                                                                                                                                                                    |
| `overnight-hikes-blue-mountains`                     | overnight hikes blue mountains (320) | overnight hikes near sydney (140)                                                                            | NSW NPWS campsites, bookings, fire season. Verified routes table as above.                                                                                                                                                                                                                                                                  |
| `multi-day-hikes-nsw`                                | multi day hikes nsw (320)            | overnight hikes nsw (170), best multi day hikes nsw (70), best overnight hikes nsw (70)                      | Statewide; link to the Blue Mountains post for that region rather than repeating it.                                                                                                                                                                                                                                                        |
| `multi-day-hikes-tasmania`                           | multi day hikes tasmania (210)       | overnight hikes tasmania (140)                                                                               | Parks and Wildlife Service Tasmania: parks passes, booked walks, weather extremes.                                                                                                                                                                                                                                                          |
| `best-multi-day-hikes-australia` (hub, written last) | best multi day hikes australia (320) | multi day hikes australia (260), overnight hikes near brisbane (110)                                         | Summarise each state with a link to its guide; short Queensland section with verified info and no dead links.                                                                                                                                                                                                                               |

**Boundaries:** region posts own "where"; gear advice stays short and links
to the gear guides. The NSW post links to the Blue Mountains post and doesn't
repeat it. The stove guide owns cooking/fuel.
