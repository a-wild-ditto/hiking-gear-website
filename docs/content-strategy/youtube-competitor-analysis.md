# YouTube and content competitor analysis

## Method and limitations

All figures below were read directly from YouTube channel and search pages on 2026-09-18
using a browser session, not from an API. Specifics:

- Search results were pulled with the `sp=CAMSAhAB` filter, which sorts by view count, so
  the videos listed are the highest-viewed results for that query rather than the most
  recent or the most relevant.
- Subscriber and view counts are as YouTube displayed them, rounded by YouTube itself
  (`207K`, `24.6K`). Treat them as approximate.
- Video ages are YouTube's relative labels (`3mo ago`, `5y ago`), not exact dates.
- Channel-level totals such as lifetime views, RPM, or affiliate revenue are not visible
  and are not estimated here.
- Six creators (Mowser, Chris and Danya, Dr Kate Grarock, Justin Outdoors, Backcountry
  Exposure, Homemade Wanderlust) were added in a second pass on 2026-09-18 and appear in
  the "Second pass" section near the end of this document. That section revises one of the
  conclusions drawn in the first pass.

## Headline finding

**View-to-subscriber breakout ratio in this niche is driven by price-contrast framing, not
by channel size.** The three strongest breakout examples found all package a money question
in the title, and two of them come from channels small enough that Bush Gums could plausibly
match their production quality within a quarter.

## Channel analysis

### Jack Brookes (AU-relevant, 14.9K subscribers, 103 videos)

Positioning: "No-BS hiking gear, backpacking advice, and trail-ready training."

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| Backpacking Gear I'd Never Buy Again | 207K | 3mo | 13.9x |
| Stop Overspending on Solo Backpacking Gear (Simple Kit That Works) | 163K | 6mo | 10.9x |
| Scotland's West Highland Way: A Journey Into the Highlands | 158K | 3y | 10.6x |
| I Wasted Money on Backpacking Gear, Here's What's Actually Worth It | 142K | 3mo | 9.5x |
| 6 Backpacking Gear Upgrades That Are Actually Worth It | 119K | 5mo | 8.0x |
| My Ultralight Gear Upgrades: What Changed | 96K | 6mo | 6.4x |
| Ultimate Guide to the Overland Track: Hiker's Paradise | 25K | 1y | 1.7x |

**Why it works:** the top four videos are all regret-and-money framings published in the
last six months, each pulling 9x to 14x his subscriber count. The Overland Track guide, an
excellent destination video on an Australian trail, pulls 1.7x. The gap is the whole lesson.
Browse distribution in this niche rewards "what I got wrong about spending money" far more
than it rewards "here is a beautiful trail."

**Implication for Bush Gums:** the single highest-confidence format available. Titles built
on regret, waste and overspending outperform destination content by roughly 8x on the same
channel with the same audience and the same production quality. Bush Gums Bucket 3 (trust
and long-term content) is not a slow-burn credibility play; on this evidence it is the
strongest browse format in the category.

### Dose of Dirt (24.6K subscribers, 100 videos)

Head-to-head budget testing, organised into a "Sleep Systems" playlist.

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| What is the BEST BUDGET SLEEPING BAG? 4 Budget Sleeping Bags Tested and Reviewed | 178K | 5y | 7.2x |
| What is the BEST BUDGET SLEEPING PAD, budget backpacking sleeping pad review and comparison | 138K | 5y | 5.6x |
| BEST BUDGET SLEEPING PAD Round 2! 3 More Backpacking Sleeping Pads Tested and Reviewed | 79K | 5y | 3.2x |
| 0 Degree Sleeping Bags, Teton Sports Leef vs Paria Thermodown | 67K | 4y | 2.7x |
| Testing Two Budget Winter Sleeping Pads, Paria Recharge XL vs Gear Doctors Apollo Air | 32K | 4y | 1.3x |
| Budget Winter Sleeping Pad, full test and review of the Apollo Air | 16K | 5y | 0.7x |
| Gear I'm Stoked About and will be testing in 2024 | 8.2K | 2y | 0.3x |

**Why it works:** the multi-product comparison beats the single-product review consistently
and by a wide margin. Four bags tested against each other pulls 178K. One pad reviewed alone
pulls 16K. That is an 11x spread inside one channel, one category, one production style.
These are also five-year-old videos still carrying the channel, which is search-led
longevity rather than browse-led spikes.

**Implication for Bush Gums:** never publish a single-product review where a head-to-head is
available. The Starter and Value kits are already structured as a comparison
(`src/data/kits.ts`), so the comparative format is native to the site's data model.
Search-led budget tests also age extremely well, which matters for a one-person operation.

### Set To Hike (Australian, 27.8K subscribers, 186 videos)

Hayley, Australian, multi-day trails plus tips and gear. The closest direct comparator for
an Australian hiking channel.

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| What's in my Backpack? Multi-Day Hiking Gear Loadout | 32K | 2w | 1.2x |
| The Camera Gear behind my Hiking Films, Adventure Filmmaking | 15K | 5d | 0.5x |
| Everything I do on trail so tomorrow hurts less, HIKING RECOVERY | 7.4K | 4mo | 0.3x |
| Can one hike change your life? I went back to find out | 7.0K | 4mo | 0.3x |
| What does a LUXURY HIKE look like? Uluru-Kata Tjuta Signature Walk | 6.5K | 2mo | 0.2x |
| Evening Stretch Routine for Hikers, Follow Along at Camp | 2.2K | 4mo | 0.1x |

**Why it works:** the gear loadout video hit 32K in two weeks against a 186-video back
catalogue where trail films sit at 6K to 7K. Gear is outperforming destination on an
established Australian channel by roughly 5x.

**Implication for Bush Gums:** confirms that in the Australian market specifically, gear
content out-distributes trail content. It also shows the realistic ceiling: a well-run
Australian hiking channel with 27.8K subscribers gets 32K views on its best recent video.
Bush Gums should not model its first 90 days on Jack Brookes' 207K outlier.

### Bec Cliffe / HikingBec (Australian, 283 subscribers, 15 videos)

The most instructive channel in the study, precisely because it is tiny.

| Content | Views | Format | Views per subscriber |
| --- | --- | --- | --- |
| $64 vs $570 Rain Pants for Hiking | 42K | Short | **148x** |
| GEAR REVIEW: ULTRALIGHT HIKING BACKPACK, Gossamer Gear Mariposa 60 | 20K | Short | **71x** |
| Songs I love to hear on Bluetooth speakers while hiking | 4.1K | Short | 14x |
| Is this ultralight cooking kit all you really need? | 1.9K | Short | 6.7x |
| Type 3 fun? | 1.1K | Short | 3.9x |
| Day Hike Packing | 945 | Short | 3.3x |
| BRUTALLY HONEST Gear Review After 4 Months on the Hexatrek | 5.2K | Long-form | 18x |
| Gear Review: Neve Gear Waratah Quilt | 5.0K | Long-form | 18x |
| EVERYTHING I'M TAKING FOR A 3,000km HIKE | 1.7K | Long-form | 6.0x |
| HEXATREK, EVERYTHING YOU NEED TO KNOW | 1.6K | Long-form | 5.7x |
| Overnight Hike to Lake Tali Karng + Realistic Packing | 732 | Long-form | 2.6x |
| Is this the BEST hike in Victoria? | 707 | Long-form | 2.5x |

**Why it works:** a 283-subscriber Australian channel got 42,000 views on a Short whose
entire concept is a price comparison stated numerically in the title. `$64 vs $570` does all
the work. The second-best performer, also a Short, is a single gear review. The destination
videos sit under 750 views.

**Implication for Bush Gums:** this is the most important single data point in the research.
Short-form price-contrast content can reach an Australian hiking audience with effectively
zero subscriber base. Bush Gums does not need an audience before Shorts start working. It
needs a specific dollar figure against another specific dollar figure, in the title, on
screen, in the first second. The Bush Gums Starter kit versus an equivalent Anaconda or
Kathmandu basket is exactly this format, and the price data already exists in
`src/data/retailer-comparison.ts`.

### MyLifeOutdoors (US, large channel, reference only)

The dominant voice on the queries Bush Gums cares about, including in Australian search
results.

| Video | Views | Age |
| --- | --- | --- |
| The KEY to Great Sleep Outdoors | 4.7M | 4y |
| The SCAM Outdoor Brands Don't Want You To Know | 3.9M | 2y |
| The Biggest PROBLEM with Modern Rain Gear | 3.8M | 3y |
| Backpacking Stoves I Wish I Tried Sooner | 3.5M | 3y |
| Gear to AVOID! And What You Should Get Instead | 2.8M | 2y |
| Next-Level Gear No One is Talking About (All Under $30) | 2.7M | 3y |
| The Truth About Expensive Winter Gear | 2.0M | 3y |
| **Naturehike Cloud Up 2 Person Backpacking Tent Review 2021** | **284K** | **5y** |

**Why it matters:** MyLifeOutdoors is the top result for `naturehike cloud up review` with a
five-year-old video, and the second and third results for `aliexpress hiking gear` with
videos that are not about AliExpress at all. The queries are underserved enough that a large
adjacent channel wins them by default.

Note the title pattern: SCAM, PROBLEM, AVOID, Truth, No One is Talking About. Adversarial
and secret-revealing framings, consistently, at multi-million scale.

### Other channels observed in search results

| Channel | Video | Views | Note |
| --- | --- | --- | --- |
| Outdoor Boys | $25 Walmart Survival Challenge | 8.1M | Budget-constraint challenge format, US retailer |
| Outdoor Boys | CHEAPEST Walmart Gear Camping Challenge | 6.8M | Same format |
| DropForgedSurvival | $100 Walmart Survival Kit, 7 Day Challenge | 6.1M | Dollar figure in title |
| Joe Robinet | 24h Walmart Camping Challenge, $500 Spent | 5.5M | Dollar figure in title |
| Jon Conti | Beginner's Guide to Solo Backpacking | 1.7M | Beginner category winner |
| GearTest Outdoors | Budget Backpacking Gear for Beginners | 1.6M | Exact Bush Gums topic, US |
| Dan Becker | How I fit all this backpacking gear in a 40L pack | 1.7M | Packing format |
| JupiterHikes | My Favorite BUDGET Hiking Gear (Full Gear List) | 436K | Top result for AU budget query |
| TheOutdoorGearReview | EVERY Tent Company Should Copy This, NatureHike StarRiver 2 UL | 270K | Naturehike coverage, US |
| Scotty's Gone Walkabout | Australian camping channel, ~78K to 189K subscribers per third-party sources | n/a | Bushcraft and swag camping, not budget gear reviews |

## Recurring title patterns that work

Ranked by how consistently they appeared on breakout videos:

1. **Explicit dollar contrast.** `$64 vs $570`, `$25 Walmart`, `$100 Walmart`, `$500 Spent`.
   Appears on the highest breakout ratios at every channel size.
2. **Regret and waste.** `Gear I'd Never Buy Again`, `I Wasted Money`, `Gear to AVOID`.
   Jack Brookes' entire top four.
3. **Spending prohibition.** `Stop Overspending on...`. 163K on a 14.9K channel.
4. **Superlative budget head-to-head.** `What is the BEST BUDGET X? 4 tested`. Dose of Dirt's
   two biggest videos, still working five years later.
5. **Adversarial reveal.** `The SCAM...`, `The Truth About...`, `No One is Talking About`.
   MyLifeOutdoors at multi-million scale.
6. **Loadout and packing.** `What's in my Backpack?`, `How I fit all this gear in a 40L pack`.
   Set To Hike's best recent video, Dan Becker at 1.7M.

Patterns that underperform in this niche: destination and trail names, personal-journey
framings, routine and technique videos, and "gear I'm excited about" previews.

## Structural observations

- **Video length varies widely and does not predict success.** Jack Brookes' 163K video is
  41:55; his 142K video is 9:10. Dose of Dirt's 178K video is 19:58. Length appears to
  follow the format rather than drive performance.
- **Chaptering is near-universal on high performers.** Almost every breakout video carries
  explicit chapters, frequently 9 to 25 of them. This matters for both retention and for
  Google surfacing the video against a specific query.
- **Search-led budget tests have extraordinary longevity.** Dose of Dirt's top videos are
  four to five years old and still lead the category. Browse-led regret videos spike in
  months. A one-person operation should weight toward the durable format.
- **Affiliate monetisation is overt and normalised.** `geni.us` links, `amzn.to` links and
  discount codes appear in the descriptions of essentially every gear channel observed.
  Bush Gums' affiliate disclosure page is consistent with category norms.
- **Anaconda buys YouTube pre-roll on Australian gear queries.** Sponsored Anaconda results
  appeared above organic results on both `aliexpress hiking gear` and `hiking gear australia
  budget`, and Naturehike itself advertised on `naturehike cloud up review`. The queries are
  commercially proven even where organic content is absent.

## Implications for Bush Gums, in priority order

1. **Lead with price-contrast Shorts from day one.** A 283-subscriber Australian channel got
   42K views on `$64 vs $570 Rain Pants`. This works without an audience. It is the cheapest
   available distribution.
2. **Make regret and overspending the flagship long-form angle**, not "here is my kit."
   Jack Brookes' data says it is worth roughly 8x a destination video on the same channel.
3. **Always compare, never review alone.** Dose of Dirt's 11x spread between a four-product
   test and a single-product review is the clearest format instruction in the research.
4. **Own Naturehike in Australia.** 2,900 AU searches a month, one five-year-old US review
   leading the query, no Australian voice, and the brand itself buying ads against it.
5. **Chapter everything and put the price in the title.** Both are consistent across the
   breakout set and cost nothing to adopt.
6. **Calibrate expectations to Set To Hike, not to Jack Brookes.** An established Australian
   hiking channel with 27.8K subscribers gets about 32K views on a strong gear video. That
   is the realistic shape of success in this market.

---

# Second pass: the six remaining creators

Added 2026-09-18. Figures read from channel pages sorted by the channel's own "Popular" tab.

## Mowser (Tasmanian, 42.6K subscribers, 240 videos)

The most important channel in either pass, and the one that most directly challenges the
first-pass conclusion.

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| Hiking for over 30 Years has taught me this | 841K | 1y | **19.7x** |
| The only 9 things worth carrying after 34 years | 226K | 4mo | 5.3x |
| THE Ultimate Guide to Hiking Footwear | 177K | 2y | 4.2x |
| I have worn a LOT OF FLEECE! These are my favourites | 168K | 2y | 3.9x |
| STOP Wasting Money on These 5 Hiking Gear Traps | 138K | 1y | 3.2x |
| 10 Common Hiking Mistakes Most Beginners Make | 135K | 2y | 3.2x |
| I asked 15,000 hikers for their best tips | 127K | 1y | 3.0x |
| 5 Embarrassing Hiking Problems Nobody Talks About | 100K | 1y | 2.3x |
| **What Tasmania taught me about Cold (Wet Cold, Not Dry Cold)** | **95K** | **2mo** | **2.2x** |
| The TRUTH About Arc Teryx Beta AR Durability | 48K | 2y | 1.1x |
| Is Zenbivy the BEST Sleep system for 2026? | 37K | 1y | 0.9x |
| The Tent You Think You Need Is Wrong | 36K | 2mo | 0.8x |

**Why it works:** Mowser is an Australian hiking channel with an 841K video, built almost
entirely on *experience-authority framing* rather than product reviews. The top ten are
lessons, mistakes, traps and "what X taught me". The only two named-product reviews in his
top thirty (Arc Teryx at 48K, Zenbivy at 37K) sit near the bottom of it.

`What Tasmania taught me about Cold` at 95K is the single best proof in this research that
**Australian-specific framing is an asset rather than a limitation.** Australian conditions
are a differentiator, not a smaller market.

**Implication for Bush Gums, and a problem.** Mowser's format is the highest-performing in
the Australian market, and Bush Gums cannot use it. His authority comes from "over 30 years"
and "34 years", stated in the titles. Bush Gums has incomplete field testing and an explicit
policy against claiming experience it has not had. Copying this format would be the single
most damaging thing the brand could do.

The honest adaptation is to swap the authority source from *time* to *method and money*:
"I bought eleven pieces of cheap gear and weighed every one" is a verifiable claim Bush Gums
can make today. `STOP Wasting Money on These 5 Hiking Gear Traps` at 138K shows the money
framing works on its own, without the decades.

## Justin Outdoors (Canadian, 137K subscribers, 537 videos)

The most commercially sophisticated channel observed, and a template for cadence.

| Video | Views | Age |
| --- | --- | --- |
| I Went Backpacking with the Best Gear I have Ever Seen! | 118K | 2w |
| THE BEST 2-PERSON BACKPACKING TENTS (2026 Awards) | 93K | 3mo |
| The Best 1-Person Backpacking Tents of 2026 | 88K | 4mo |
| I Built the Most Comfortable Backpacking Kit! | 78K | 4mo |
| I Test 9 Comfy Sleeping Pads, One Destroyed the Competition | 72K | 4mo |
| I Went Backpacking with the Founder of Durston Gear | 65K | 2mo |
| **Top Picks for Affordable Backpacking Gear** | **60K** | **13d** |
| THE BEST PACKS for BACKPACKING (2026 Awards) | 57K | 4mo |
| Best Sleeping Pads for Backpacking in 2026 (Cheap to Expensive) | 31K | 3w |
| New Budget Gear That is Actually Good? | 24K | 2mo |

**Why it works:** near-weekly publishing with a tight floor. Nothing in his recent thirty
falls below about 16K on 137K subscribers. The "Awards" and "Best X of 2026" roundups are
the reliable performers, republished annually, which is a durable search asset that renews
itself. Note `Top Picks for Affordable Backpacking Gear` pulling 60K in 13 days.

**Implication for Bush Gums:** the annually-refreshed category roundup ("Best Budget Hiking
Tent in Australia 2027") is a format that compounds. It also fits the site structure,
because the kit pages are already maintained, dated and sourced. This is a year-two move,
not a launch move, since it needs products actually tested.

## Backcountry Exposure (US, 81.7K subscribers, 853 videos)

| Video | Views | Age |
| --- | --- | --- |
| What Is A Wag Bag? How To Poop In The Woods Responsibly | 2.0M | 8y |
| How to LEVEL UP Your Camping in 2025 | 883K | 1y |
| I Wish I Knew This Sooner About Hammock Camping | 454K | 4y |
| 5 Mistakes Every New Tent Camper Makes | 419K | 7y |
| The BEST and WORST Tents Of 2020 | 383K | 5y |
| Expert Backpacking Habits EVERY Beginner Should Master | 243K | 1y |
| **Backpacking Gear You Should Buy First And Why** | **232K** | **7y** |
| **What Gear Do I Need for Backpacking? The Ultimate No-Fluff Checklist** | **213K** | **1y** |
| **The Best Backpacking Sleeping Pad? Cheap vs Expensive** | **207K** | **8y** |
| **Cheap vs Expensive Backpacking Tents! The Truth!** | **109K** | **3y** |
| *This $140 Sleeping Pad Was Almost Perfect (latest)* | *6.4K* | *3d* |
| *Pinyon Gear Tote Overview (latest)* | *2.0K* | *8d* |

**Why it matters:** this is the clearest single-channel demonstration of the format gap in
the whole research. His `Cheap vs Expensive` videos sit at 207K and 109K and are three to
eight years old. His current single-product reviews are pulling 6.4K and 2.0K on an 81.7K
subscriber base, which is **0.08x and 0.02x**.

An 853-video channel with strong production is getting roughly one fiftieth of the return on
single-product reviews that it gets on comparison and checklist content. This is the
strongest confirmation available of the first-pass conclusion, and it comes from a channel
that has clearly tried both formats at scale.

## Dr Kate Grarock (Australian, 10.8K subscribers, 152 videos)

Ecologist, Alone Australia season one participant. The closest match to the Bush Gums
audience and conditions.

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| 30 YEARS hiking experience in 30 minutes, Overnight Backpacking Gear list 2024 | 14K | 2y | 1.3x |
| I Tested Water Filters Until They Failed (BeFree vs Sawyer) | 12K | 3mo | 1.1x |
| **3F UL LanShan 2 Ultralight Tent review, a great ultralight cheap tent** | **7.7K** | **1y** | **0.71x** |
| My Best Tent for Hiking: Mont Moondance | 6.5K | 1y | 0.60x |
| Hiking Mount Solitary, Blue Mountains | 5.1K | 1y | 0.47x |
| Big Agnes Tiger Wall UL2 tent review | 4.7K | 1y | 0.44x |
| I Tested Every Type of Hiking Pillow | 2.7K | 2mo | 0.25x |
| Which Sleeping Pad is Right for YOU? NEMO vs Sea to Summit vs Therm-a-Rest | 1.9K | 1mo | 0.18x |
| Various destination and overnight hikes | 1.7K to 3.3K | various | 0.16x to 0.31x |

**Three findings that directly affect the Bush Gums plan:**

1. **A cheap Chinese tent review is her best-performing product video.** The 3F UL LanShan 2
   at 7.7K beat her Big Agnes review (4.7K) and her premium Mont review (6.5K). An Australian
   creator covering budget Chinese gear outperforms the same creator covering premium brands.
   This is direct support for the Bush Gums catalogue choice.
2. **Her premium three-way mat comparison flopped at 1.9K.** Comparison alone is not the
   magic. `NEMO vs Sea to Summit vs Therm-a-Rest` has no price contrast, only brand contrast.
   The earlier conclusion needs this qualifier: **it is the price gap that carries the format,
   not the act of comparing.**
3. **Her hiking pillow test pulled 2.7K, near the bottom of her catalogue.** This independently
   confirms the decision in `content-strategy-summary.md` to de-prioritise the NIOFEEL pillow
   despite `hiking pillow` showing 390 monthly Australian searches.

Her destructive test (`I Tested Water Filters Until They Failed`) at 12K is her best recent
video. Testing to failure is a format Bush Gums has not considered and probably should.

## Chris and Danya (Australian and Canadian, 9.96K subscribers, 116 videos)

| Video | Views | Age | Views per subscriber |
| --- | --- | --- | --- |
| HIKING, The ancient KUMANO KODO Trail, Japan | 113K | 6y | 11.3x |
| TRAIL LOGISTICS, How to Plan and Book the Kumano Kodo Trail | 80K | 6y | 8.0x |
| Hiking the Routeburn Track, New Zealand Great Walks | 67K | 4y | 6.7x |
| Hiking the Milford Track | 57K | 4y | 5.7x |
| POST HIKE GEAR LIST, LARAPINTA TRAIL END TO END | 19K | 7y | 1.9x |

**Why it matters as a counter-example.** This is a destination channel with a 113K video on
under 10K subscribers, which appears to contradict the "gear beats destination" finding. It
does not. Their breakouts are *named international trails with logistics problems attached*,
which is a travel-planning audience, not a gear-buying one. Their single gear video sits at
19K, roughly one sixth of their best.

The relevant lesson is monetisation, not format: a destination audience converts on travel
planning, not on affiliate gear links. Bush Gums should not chase destination views as a
route to affiliate revenue. Notably their Larapinta gear list at 19K is the one video that
overlaps Bush Gums territory, which supports keeping `larapinta trail gear list` (10/mo,
competition index 4) as a low-priority option rather than dropping it.

## Homemade Wanderlust (US, 449K subscribers, 881 videos)

Thru-hiking focused (AT, PCT, CDT). Recent video `The Worst Part of Backpacking Nobody Talks
About` at 80K in 6 days, which is 0.18x her subscriber base.

**Why it is largely not a model for Bush Gums:** the channel is built on long-distance
thru-hiking narrative, an audience with different gear economics (they buy expensive gear
because they use it for five months continuously) and no Australian relevance. Included here
for completeness. The one transferable observation is that her recent breakout is a
"nobody talks about" problem framing, matching Mowser's `5 Embarrassing Hiking Problems
Nobody Talks About` at 100K.

## What the second pass changes

**Confirmed and strengthened:**

- Cheap versus expensive beats single-product review. Backcountry Exposure's 207K and 109K
  comparison videos against 6.4K and 2.0K current single-product reviews is a roughly 50x
  gap on one channel.
- Pillows are a poor bet. Kate Grarock's pillow test is near the bottom of her catalogue.
- Budget Chinese gear is viable Australian content. Her 3F UL LanShan review outperformed
  her premium brand reviews.

**Revised:**

- **Comparison alone is not enough. The price gap is the active ingredient.** Kate Grarock's
  brand-versus-brand mat comparison at 1.9K against Backcountry Exposure's cheap-versus-
  expensive pad video at 207K. Every Bush Gums comparison must carry a price delta in the
  title, not just two product names.
- **Experience-authority framing outperforms everything else in Australia**, per Mowser's
  841K. Bush Gums cannot use it honestly and must substitute method-and-money authority.

**New:**

- **Australian-specific framing is a growth asset.** `What Tasmania taught me about Cold` at
  95K, two months old, on a 42.6K channel. Raise the priority of AU-conditions content.
- **Testing to failure is an untapped format.** Kate Grarock's best recent video. Bush Gums
  has cheap gear and a stated willingness to be honest about failure, which is the exact
  combination this format needs.
- **Annual category roundups compound**, per Justin Outdoors' Awards series. A year-two move,
  once real testing exists.
