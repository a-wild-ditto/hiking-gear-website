# Keyword clusters: Australian demand for Bush Gums content

## Data provenance

| Field | Value |
| --- | --- |
| Source | Google Ads Keyword Planner API (`generateKeywordIdeas`, `generateKeywordHistoricalMetrics`) |
| Date pulled | 2026-09-18 |
| Geography | Australia only (`geoTargetConstants/2036`) |
| Language | English (`languageConstants/1000`) |
| Network | `GOOGLE_SEARCH` (search only, matching the Keyword Planner web UI default rather than the higher search-partners figure) |
| Currency | AUD. Bid fields converted from micros by dividing by 1,000,000 |
| Historical window | Sep 2025 to Aug 2026 inclusive (12 months) |

### What these numbers are and are not

Keyword Planner does not report exact search counts. It reports bucketed averages. Every
volume in this study falls on the Google bucket ladder (0, 10, 20, 30, 40, 50, 70, 90, 110,
140, 170, 210, 260, 320, 390, 480, 590, 720, 880, 1000, 1300, 1900, 2900). A keyword
reported at 40 might really be 31 or 59. Treat all volumes as order-of-magnitude signals,
not measurements.

Further limitations that affect how this plan should be read:

- **Competition index is a paid-auction metric.** It describes how many advertisers bid on
  a keyword, not how hard the organic result page is to rank in. A `HIGH` index of 100 on
  `naturehike tent` tells us retailers are bidding, not that the content is good.
- **Zero does not mean nobody searches.** It means volume fell below the reporting floor.
  `chinese hiking gear`, `cheap hiking setup` and `hiking gear under 500` all returned 0 and
  are still strong video framings. They are simply not viable page targets.
- **Keyword Planner does not measure YouTube.** YouTube Browse and Suggested distribution is
  not a search volume phenomenon at all. The browse column in the CSV is a judgment score
  informed by the competitor research, not planner data.
- **No account-level or historical-trend segmentation by state was possible.** Location
  keywords (`hiking gear sydney`, `hiking gear melbourne`) were pulled Australia-wide as
  phrases. We did not run separate geo-scoped pulls per state.

## Collection volume

| Stage | Count |
| --- | --- |
| Raw ideas returned by `generateKeywordIdeas` (4 seeds, AU) | 1,053 |
| Raw ideas after normalising spacing and word order | 936 |
| Ideas with non-zero AU volume | 735 |
| Explicit seed keywords checked via `generateKeywordHistoricalMetrics` | 110 |
| Curated, deduplicated rows in `keyword-research-australia.csv` | 112 |

Normalisation merged `nature hike X` into `naturehike X` and collapsed word-order variants.
The curated CSV further merges close variants that returned byte-identical planner metrics
(for example `cheap hiking gear` absorbs `budget hiking gear`, `inexpensive hiking gear`,
`cheap hiking equipment` and `cheap trekking gear`, all at 70/mo, HIGH, 0.39 to 1.22 AUD).
Where a merge happened it is recorded in the `notes` column rather than silently dropped.

## The scoring model

```
priority_score =
  0.25 * demand        (log-scaled AU monthly volume, normalised to the 2,900 ceiling)
+ 0.20 * affiliate     (purchase proximity and whether a Bush Gums offer exists)
+ 0.20 * relevance     (fit to the current catalogue and the Starter/Value kits)
+ 0.15 * differentiation (how empty the existing Australian content field is)
+ 0.10 * browse        (likelihood of YouTube Browse/Suggested distribution)
+ 0.10 * competition   (100 minus the paid competition index, or 50 where unknown)
```

Demand is log-scaled deliberately. In a market this small, a linear weighting would let
`camping pillow` (1,900/mo, mostly car-camping intent, a 19 AUD product) outrank
`naturehike cloud up pro` (30/mo, exact catalogue match, 205 AUD product, no competing
review content). Log scaling keeps large volumes meaningful without letting them dominate.

The four judgment columns (affiliate, relevance, differentiation, browse) are scored 0 to
100 by hand against the repository catalogue and the competitor research. They are opinions
with reasons attached, not measurements. The scores are reproducible from
`scripts` logic in the generator, but they are not precise. A two-point difference between
two keywords means nothing. A twenty-point difference means something.

## Cluster summary

| Cluster | Rows | Total measured AU volume/mo | Dominant intent | Top-scoring keyword | Format |
| --- | --- | --- | --- | --- | --- |
| D: Tents | 23 | 7,840 | Commercial / navigational | `naturehike` (2,900) | Model reviews + tent buying guide |
| H: Cooking and accessories | 9 | 3,250 | Commercial | `hiking pillow` (390) | Short-form and accessory round-up |
| B: Cheap and value gear | 20 | 1,380 | Commercial / transactional | `aliexpress naturehike` (30) | Flagship browse video |
| C: Retailer comparison | 8 | 1,230 | Commercial | `kathmandu vs macpac` (170) | Comparison page + one video |
| F: Sleeping mats | 8 | 1,130 | Commercial | `naturehike sleeping mat` (210) | Product review + R-value guide |
| A: Beginner hiking | 17 | 1,010 | Informational | `overnight hiking checklist` (70) | Checklist page + beginner video |
| G: Backpacks | 8 | 870 | Commercial | `naturehike backpack` (110) | Product reviews |
| E: Sleeping bags | 11 | 820 | Commercial | `down sleeping bag australia` (210) | Product review + temperature guide |
| J: Modifiers and local | 8 | 530 | Mixed | `is naturehike good` (10) | Trust content |
| **Total** | **112** | **18,060** | | | |

## Cluster detail

### Cluster D: Tents. The centre of gravity.

- **Primary keyword:** `naturehike` (2,900/mo, HIGH, 0.35 to 1.81 AUD)
- **Secondary:** `naturehike tent` (1,300), `naturehike cloud up 2` (880), `2 person hiking tent` (590), `naturehike mongar 2` (480), `naturehike australia` (390)
- **Cluster volume:** 7,840/mo, 43 percent of all measured demand in this study
- **Intent:** navigational at the brand head, commercial at model level
- **Format:** model-specific reviews, a single strong AU tent buying guide

This is the finding that should reshape the plan. `naturehike` at 2,900/mo is not a niche
term in Australia. It is roughly three times `naturehike australia` plus `hiking equipment
australia` plus `hiking tent australia` combined. Australians are already searching for the
exact brand Bush Gums links to, in volume, and the search results are served by AliExpress
listings, `naturexplore.com.au` paid ads and a handful of US review videos.

Two important asymmetries inside this cluster:

1. **Demand exists for models not in the catalogue.** `naturehike mongar 2` (480/mo),
   `naturehike cloud up 3` (170), `naturehike cw400` sleeping bag (70) and `naturehike stove`
   (110) all have real demand and no Bush Gums offer. These are sourcing signals for the
   affiliate validation phase, not content gaps to fake.
2. **The exact catalogue product has almost no demand of its own.** `naturehike cloud up pro`
   is 30/mo and `bisinna tent` is 20/mo. Bush Gums cannot rank its way to traffic on the
   precise SKU names. It has to win the category and series terms and convert down.

### Cluster H: Cooking and accessories. High volume, low value per click.

- **Primary keyword:** `hiking pillow` (390/mo, HIGH, 0.27 to 1.26 AUD)
- **Secondary:** `camping pillow` (1,900), `backpack rain cover` (720), `hiking cookware` (70)
- **Cluster volume:** 3,250/mo
- **Intent:** commercial
- **Format:** Shorts and one accessory round-up. Not long-form.

`camping pillow` at 1,900/mo is the single highest-volume term in the study, and it is a
trap. The intent skews to car camping, the Bush Gums product is a 19 AUD pillow, and an
affiliate click on a 19 AUD item is worth a fraction of a click on a 205 AUD tent. Note
this cluster is scored down on relevance for exactly that reason. `hiking pillow` (390) is
the better target because the modifier filters for the right buyer.

`hiking stove australia` should be actively avoided. There is no stove in
`src/data/catalog.ts`, so content targeting it would send traffic nowhere.

### Cluster B: Cheap and value gear. The positioning, not the traffic.

- **Primary keyword:** `cheap hiking gear` (70/mo, HIGH, 0.39 to 1.22 AUD)
- **Secondary:** `kmart camping gear` (1,000), `cheap hiking pack` (90), `ultralight hiking gear australia` (50), `aldi hiking gear` (40), `aliexpress naturehike` (30)
- **Cluster volume:** 1,380/mo
- **Intent:** commercial, with a transactional edge on the marketplace terms
- **Format:** flagship browse video, not an SEO page

This cluster is where the Bush Gums thesis lives and where Google search demand is weakest.
`cheap backpacking gear`, `budget backpacking gear`, `chinese hiking gear`, `cheap hiking
setup` and `hiking gear under 500` are all at or near zero AU volume. That does not make
them bad ideas. The YouTube research shows `budget backpacking gear` is one of the most
distributed phrases on the platform, with multi-million-view videos. The demand is real, it
just does not express itself as Australian Google search.

The practical consequence: **build browse videos on this cluster and search pages on
clusters D, E, F and G.** Do not build a page targeting `hiking gear under 500`.

`kmart camping gear` at 1,000/mo is the largest AU cheap-gear signal and Bush Gums has no
affiliate path to Kmart. It is worth understanding as audience context, not worth chasing.
`aldi hiking gear` shows sharp seasonality, spiking to 140 in July 2026 around special-buys
cycles, and has the same problem.

### Cluster C: Retailer comparison. Low competition, high leverage.

- **Primary keyword:** `kathmandu vs macpac` (170/mo, MEDIUM, competition index 43)
- **Secondary:** `macpac tent` (880), `kathmandu hiking tent` (90), `anaconda hiking gear` (40), `anaconda vs kathmandu` (20, competition index 2)
- **Cluster volume:** 1,230/mo
- **Intent:** commercial
- **Format:** one canonical comparison page, one video

This is the most under-defended cluster in the study. `anaconda vs kathmandu` has a paid
competition index of 2 and `kathmandu vs macpac` only 43, against indexes of 100 almost
everywhere else. Australians comparing the big three retailers are in exactly the mental
state Bush Gums wants to meet them in, and nobody is contesting the query.

Bush Gums already has `src/data/retailer-comparison.ts` with dated, sourced,
category-matched rows. That asset is the content. It just needs a page that ranks.

### Cluster F: Sleeping mats. Best volume-to-fit ratio in the study.

- **Primary keyword:** `naturehike sleeping mat` (210/mo, HIGH, 0.27 to 0.81 AUD)
- **Secondary:** `hiking sleeping mat` (480), `insulated sleeping mat` (320), `best sleeping mat australia` (40, bid to 1.97 AUD)
- **Cluster volume:** 1,130/mo
- **Intent:** commercial
- **Format:** product review plus the existing R-value guide

`hiking sleeping mat` at 480/mo with a direct catalogue match (TuYe R3.5) and an existing
supporting guide at `/guides/sleeping-mat-r-value` is the cleanest search-to-offer
path Bush Gums owns. `naturehike tuye` itself is only 10/mo, which again says: win the
category term, convert to the SKU.

### Cluster A: Beginner hiking. The audience, not the queries.

- **Primary keyword:** `overnight hiking checklist` (70/mo, MEDIUM, competition index 38)
- **Secondary:** `hiking equipment australia` (320), `multi day hike australia` (260), `hiking gear list` (110), `overland track gear list` (50)
- **Cluster volume:** 1,010/mo
- **Intent:** informational
- **Format:** checklist and guide pages, beginner video

The whole beginner cluster is small and the highest-intent phrases are tiny: `first
overnight hike` is 10/mo, `hiking starter kit` is 10/mo, `backpacking gear australia` is
10/mo. `how to choose hiking gear` returns 0.

Two bright spots. `overnight hiking checklist` at 70/mo with competition index 38 and
bottom-of-range bids (0.03 to 0.16 AUD) is genuinely cheap territory. And `multi day hike
australia` at 260/mo with a LOW competition band is a trail-led doorway into gear content
that almost nobody is monetising.

### Cluster G: Backpacks. Solid, ordinary, converts.

- **Primary keyword:** `naturehike backpack` (110/mo, HIGH, 0.19 to 0.63 AUD)
- **Secondary:** `hiking backpack australia` (210), `ultralight backpack australia` (170), `60l hiking backpack` (140), `best hiking backpack australia` (110), `cheap hiking backpack` (90)
- **Cluster volume:** 870/mo
- **Intent:** commercial
- **Format:** product reviews

`ultralight backpack australia` carries the highest top-of-page bid ceiling found anywhere
in this study at 2.73 AUD, which is a strong commercial-value signal. It is also the
furthest from the Bush Gums beginner audience, so it is scored down on relevance. The
honest read is that it is a lucrative adjacent market Bush Gums is not currently positioned
for.

`60l hiking backpack` at 140/mo is an exact size match for the Rock 60+5L and is the best
non-brand pack target.

### Cluster E: Sleeping bags. Seasonal and warmth-sensitive.

- **Primary keyword:** `down sleeping bag australia` (210/mo, HIGH, 0.28 to 1.26 AUD)
- **Secondary:** `naturehike sleeping bag` (320), `goose down sleeping bag` (90), `cheap down sleeping bag` (30)
- **Cluster volume:** 820/mo
- **Intent:** commercial
- **Format:** product review plus the existing temperature-rating guide

`goose down sleeping bag` shows the clearest seasonality in the dataset, running at 40 to 50
in the Australian summer months and 170 through May and June 2026. Publish warmth content
in autumn, not spring.

This cluster carries the most editorial risk. Bush Gums has an explicit constraint that
warmth and severe-weather uncertainty must stay visible, `/build-my-kit` stops on winter
answers, and both kits are described as mild-weather only. Content here must not let a
seasonal search spike pull the site into implying a comfort rating it has not verified.

### Cluster J: Modifiers and local. Mostly a filter.

- **Primary keyword:** `is naturehike good` (10/mo, LOW, competition index 30)
- **Secondary:** `naturehike review` (30), `hiking gear sydney` (390), `hiking gear melbourne` (90)
- **Cluster volume:** 530/mo
- **Intent:** mixed
- **Format:** trust content

`hiking gear sydney` at 390/mo is local retail intent: people looking for a shop to walk
into. Bush Gums cannot satisfy that and should not chase it.

`is naturehike good` is only 10/mo but scores 69.8 because it is the single most on-thesis
query in the entire study. Someone typing it is asking exactly the question the site's
editorial policy was written to answer, and at competition index 30 almost nobody is
answering it. `naturehike review` is also trending up, hitting 70 in August 2026, its
highest month in the 12-month series.

## Australian content gaps

These are the places where AU demand exists and the answer currently does not.

1. **Naturehike has 2,900 monthly AU searches and no Australian voice.** Search results are
   AliExpress listings, one importer running paid ads, and US YouTube reviews priced in USD.
   No Australian creator owns this brand's coverage. This is the largest single gap found.

2. **`aliexpress hiking gear` returns essentially nothing on YouTube.** A YouTube search
   sorted by view count for that exact phrase surfaced two unrelated MyLifeOutdoors videos
   and paid ads from Anaconda and AliExpress. There is no established creator on the query.

3. **`hiking gear australia budget` on YouTube surfaces zero Australian content.** The top
   results by views are JupiterHikes (US, 436K), a Top Gear car-camping video, and a US road
   trip video. An Australian beginner searching this today gets US pricing, US retailers and
   US conditions.

4. **Australian retailer comparison is uncontested.** `anaconda vs kathmandu` sits at paid
   competition index 2. `kathmandu vs macpac` at 43 with 170/mo. These are commercial-intent
   queries with almost no competitive pressure.

5. **AU pricing differs substantially and nobody documents it.** US budget-gear content
   benchmarks against Walmart and Ozark Trail, neither of which exists here. The Australian
   equivalents in the data are Kmart (1,000/mo), Aldi (40/mo, spiking to 140) and the big
   three outdoor retailers. Nobody has mapped the AliExpress-to-Anaconda price delta for an
   Australian buyer.

6. **Named AU trail gear lists are thin and cheap to reach.** `overland track gear list` at
   50/mo with competition index 15, `larapinta trail gear list` at 10/mo with index 4.
   These require a real trip to serve honestly.

7. **The exact catalogue SKUs have no review content at all.** `bisinna tent`, `bisinna
   sleeping bag`, `bisinna backpack`, `naturehike tuye` and `naturehike cloud up pro` are
   near-total vacuums. Volumes are tiny (10 to 30/mo) so this is not a traffic play. It is a
   conversion play: the person who does search it is deep in a buying decision and currently
   finds nothing trustworthy.

## What the data says not to do

- Do not build pages for `chinese hiking gear`, `cheap hiking setup`, `hiking gear under
  500`, `best value hiking gear` or `how to choose hiking gear`. All returned 0 AU volume.
  Several are excellent video titles. None are page targets.
- Do not chase `hiking gear sydney` or `hiking gear melbourne`. Local retail intent Bush
  Gums cannot serve.
- Do not chase `kmart camping gear` or `aldi hiking gear`. Large signals, no affiliate path.
- Do not build a stove page. No stove in the catalogue.
- Do not treat `camping pillow` volume as opportunity. Wrong intent, low product value.
- Do not create separate pages for close variants. `cheap hiking gear`, `budget hiking
  gear`, `inexpensive hiking gear`, `cheap hiking equipment` and `cheap trekking gear` are
  one page, not five.
