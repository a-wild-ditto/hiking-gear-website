# Site profile: bushgums.com.au

Draft for the `seo-discovery` skill (onboarding §0a). Status: **confirmed by operator 2026-09-18**. Provenance tags: `[crawled]` from the repo/site,
`[inferred]` from SERP research or reasoning, `[operator]` confirmed by the
owner. Inferred fields need confirming before the first engine run.

---

## Identity

- **Domain**: bushgums.com.au `[crawled]` (site.config.mjs)
- **GSC property**: none. Not verified in the connected Search Console
  account; site not yet indexed. `[crawled]`
- **GA4 property**: none in the connected Analytics account. `[crawled]`
- **Repo path**: `C:\Users\James\Documents\hiking-gear-website` `[crawled]`
- **Content locations**: `src/pages/guides/*.astro` (guides),
  `src/data/product-pages/*.ts` (gear reviews via `src/pages/gear/[slug].astro`),
  `src/data/kits.ts`, `src/data/catalog.ts` `[crawled]`
- **Sitemap URL**: `/sitemap.xml` (index at `/sitemap-index.xml`) `[crawled]`
- **Page inventory**: 1 homepage with kits; 11 gear review pages + gear index;
  4 guides + Learn hub; 1 interactive tool; FAQ, About, Contact; 4 legal
  pages. Shape = affiliate curation / review site. `[crawled]`
- **Interactive assets shipped**: Build My Kit questionnaire
  (`/build-my-kit`); starter kit comparison on homepage (`/#kits`).
  `[crawled]`

## Business summary `[operator]` confirmed

> Bush Gums is an Australian gear-curation site for beginner and entry-level
> hikers moving from day walks to their first overnight trips. It recommends
> good-value hiking gear, much of it from marketplace and direct-from-factory
> brands such as Naturehike, through researched gear reviews, beginner
> guides, two starter kits and a Build My Kit tool. It does not hold stock or
> take payment; it earns through affiliate links and is validating demand
> before any move to curated kits or its own products. Its credibility comes
> from an experience-first evidence standard: it separates seller claims,
> owner reports and its own hands-on testing, and applies the same standard
> to cheap marketplace gear as to established brands.

Confirmed by operator 2026-09-18.

## Market

- **What it sells (recommends)**: tents, sleeping bags, sleeping mats,
  packs, cookware, pillows, rain covers; bundled starter kits. `[crawled]`
- **Geography**: Australia `[crawled]`
- **Geo target**: `geoTargetConstants/2036` `[crawled]`
- **Language**: `languageConstants/1000` `[crawled]`
- **Regional spelling**: en-AU. Note the market's mixed vocabulary: Australians
  search "sleeping mat" for products but "sleeping pad" for R-value questions.
  `[crawled]` (Keyword Planner, Sep 2026 guide research)
- **Currency / units**: AUD, metric (kg, L, °C) `[crawled]`

## Market boundaries `[inferred]`

- **In-market qualifiers**: australia, aus, au, NSW/Vic/Qld/Tas place names,
  overnight, hiking, bushwalking, beginner, budget/cheap/value,
  lightweight, naturehike, aliexpress.
- **Out-of-market qualifiers**: US/UK/NZ-only retailers and places (REI,
  Walmart, Decathlon UK), °F, lbs, "backpacking" with US trail names, car
  camping / caravan / 4WD, heavy-duty family camping, hunting, military
  surplus, home insulation (R-value collisions), beach/festival camping.
- **Ambiguous terms**: `r value` (mostly home insulation) → prefer
  `r value sleeping pad` / `camping mat r value`; `hiking tent` (head term,
  retailer SERP) → prefer `2 person hiking tent`, `budget hiking tent australia`;
  `sleeping bag` (car camping heavy) → prefer `hiking sleeping bag`,
  `sleeping bag for hiking`.
- **Deliberately NOT filtered**: "backpacking" (Australians use it for
  overnight hiking too); "camping checklist" (1,300/mo, overlaps first
  overnight intent).

## Competitive landscape `[inferred]` (WebSearch, 18 Sep 2026)

- **Head terms searched**: beginner hiking gear australia; cheap hiking gear
  australia; best budget hiking tent australia; naturehike review australia;
  aliexpress hiking gear worth it; hiking sleeping mat australia best;
  2 person hiking tent buying guide australia; overnight hike packing list
  australia; down vs synthetic sleeping bag.

| Domain                                                                                       | Type                                  | Ranks for                                 | Notes                                         |
| -------------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------- | --------------------------------------------- |
| weareexplorers.co                                                                            | Publisher (direct content competitor) | best-of lists, packing lists, mats, tents | Strongest editorial rival across clusters     |
| trackslesstravelled.com                                                                      | Publisher (direct)                    | best tents/mats, packing lists            | Listicle + "how to choose" format             |
| the-equipment-guide.com.au                                                                   | Publisher (direct)                    | best hiking tents AU, Cloud-Up 2 review   | Closest match on budget/Naturehike reviews    |
| trailhiking.com.au                                                                           | Publisher (direct)                    | overnight lists, mats, down vs synthetic  | Beginner overnight focus                      |
| australianhiker.com.au                                                                       | Publisher / quasi-authority           | how-to-choose guides, ISO explainer       | Good citation source for standards            |
| k2.com.au, wildearth.com.au, snowys.com.au, paddypallin.com.au, bogong.com.au, macpac.com.au | Retailers with blogs                  | head product terms, buying guides         | Own head commercial terms; unwinnable head-on |
| seatosummit.com.au, naturehike.au                                                            | Manufacturers                         | brand terms                               | Never target brand terms                      |
| nationalparks.nsw.gov.au, parks.vic.gov.au, bom.gov.au                                       | Authorities                           | safety, conditions, bookings              | Citation sources; decision calendar           |
| iso.org, astm.org                                                                            | Authorities (standards)               | rating standards                          | Citation only                                 |

- **Unwinnable terms**: `hiking tent`, `sleeping mat`, `sleeping bag for
hiking`, `hiking gear` (retailer and manufacturer head SERPs).
- **Competitor content structure**: publishers run "best X in Australia"
  listicles plus "how to choose" guides and packing lists; few do honest
  reviews of budget marketplace gear with sourced owner evidence. That gap
  is Bush Gums' angle. Retailers don't review AliExpress/Naturehike gear.
- **Market vocabulary**: bushwalking, overnight/multi-day, three-season,
  R-value, comfort/limit rating, freestanding, double wall, vestibule,
  ultralight, base weight, PLB, snake bandage.

## Seed themes `[inferred]` (batches of 2–3)

- A. Beginner overnight: `first overnight hike`, `overnight hiking checklist`, `beginner hiking gear`
- B. Budget gear: `cheap hiking gear australia`, `budget hiking setup`, `best value hiking gear`
- C. Marketplace brands: `naturehike tent review`, `aliexpress hiking gear`, `naturehike sleeping bag`
- D. Shelter: `2 person hiking tent`, `budget hiking tent australia`, `lightweight tent`
- E. Sleep system: `hiking sleeping bag`, `down sleeping bag australia`, `insulated sleeping mat`
- F. Packs and carry: `hiking backpack 60l`, `overnight hiking backpack`, `pack rain cover`
- G. Cooking and water: `hiking stove`, `hiking cookware`, `water filter hiking`
- H. Places/trips: `overnight hikes nsw`, `beginner overnight hikes victoria`, `hike in campsites`
  (confirmed high-yield 2026-09-18: state/region "overnight hikes" and
  "multi day hikes" terms run 110–390/mo at CI 8–30)

## Domain-load-bearing broad terms `[inferred]`

- `r value`, `comfort rating`, `three season tent`, `ultralight`,
  `base weight`, `PLB`: category and standard terms, not generic filler.

## Authorities and decision calendar `[inferred]` (dates to verify in Scout)

- **Authorities**: NSW NPWS, Parks Victoria, Parks & Wildlife Tas, Qld Parks,
  Bureau of Meteorology, state fire services (fire danger periods), AMSA
  (PLBs).
- **Decision cycle (candidate windows, not yet confirmed)**:

| Window                 | Event                                                                                    | Source                                           | Last confirmed |
| ---------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------- |
| 28 Sep–9 Oct 2026      | NSW spring school holidays                                                               | https://www.nsw.gov.au/about-nsw/school-holidays | 2026-09-18     |
| 1 Oct 2026–31 Mar 2027 | NSW statutory Bush Fire Danger Period (27 LGAs started 1 Sep 2026)                       | https://www.rfs.nsw.gov.au/fire-information/BFDP | 2026-09-18     |
| Nov–Dec                | Black Friday / Christmas gear buying; AliExpress 11.11 sale                              | AliExpress, retailers                            | unconfirmed    |
| Jan                    | Summer holidays, Great Walks booking peak                                                | park booking systems                             | unconfirmed    |
| Mar–May                | Autumn peak (backpacking tent searches peak ~May per KP)                                 | Keyword Planner                                  | 2026-09-18     |
| Jun–Aug                | Winter; warmth/insulation searches rise (e.g. "how to choose a sleeping bag" 210 in Aug) | Keyword Planner                                  | 2026-09-18     |

- **Communities**: bushwalk.com forum, r/AusHiking, r/Ultralight, Facebook
  hiking groups. (Browser pane blocks Reddit.)

## Proof points

- None yet `[operator]`. Do not claim hands-on use, trips or test results in titles or framing.

## Hard rules `[crawled]` from AGENTS.md, `[operator]` confirmed

- **Claim discipline**: never claim Australian-made, independently / ISO /
  ASTM / locally tested, proprietary or technically superior status unless
  verified. Never invent field experience, trips, temperatures or
  conclusions. Keep safety uncertainty (warmth, insulation, severe weather,
  water treatment, emergency gear) explicit.
- **Service facts**: affiliate curator; no stock, checkout or own-brand
  products. Prices are marketplace prices that change.
- **Superseded facts**: none `[operator]`
- **Competitors** `[operator]`: comparisons are allowed but never name a competing site or retailer; refer to them as "traditional retailers". Product brands (e.g. Naturehike) may be named as the gear itself.
- **Sourcing constraint**: authorities and standards bodies above; owner
  reports and independent reviews as evidence per the editorial philosophy;
  seller claims attributed as seller claims.
- **Terminology**: "Bush Gums"; attribute specs to manufacturer / retailer /
  seller / Bush Gums measurement; use "marketplace listing" for listing
  evidence.

## Run history

- 2026-09-18: profile drafted and confirmed (seed themes and market boundaries accepted as drafted).
- 2026-09-18: first discovery run (`runs/2026-09-18.md`). No GSC/GA4. Found
  the "where to go" region tail and three gear-review retrofits; added two
  confirmed calendar dates.
