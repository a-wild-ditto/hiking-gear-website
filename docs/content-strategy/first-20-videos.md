# The first 20 long-form videos

## How this slate was ranked

Ranking is derived from the research, not from intuition. Each video was placed using four
inputs in this order:

1. **Cluster priority score** from `keyword-research-australia.csv`. Cluster D (tents) holds
   43 percent of all measured Australian demand and supplies the top of the slate.
2. **Format evidence** from `youtube-competitor-analysis.md`. Price-contrast and
   regret framings carry 9x to 148x view-to-subscriber breakout. Multi-product head-to-heads
   outperform single-product reviews by roughly 11x within the same channel. Videos using
   proven formats rank above videos using unproven ones at similar demand.
3. **Field-testing dependency.** The repository is explicit that field testing is incomplete
   and that Bush Gums must not claim use it has not had. Videos that can be made honestly
   before the first trip rank earlier than videos that cannot.
4. **Affiliate proximity.** Where two videos score similarly, the one pointing at a higher
   priced catalogue item with a live offer in `src/data/offers.ts` ranks higher.

## Catalogue facts used throughout

Prices are the recorded Bush Gums prices from `src/data/catalog.ts` in AUD. Merchants set
current prices and these can drift.

| Kit | Components | Recorded total |
| --- | --- | --- |
| Starter | BISINNA 2-Person Tent (100), BISINNA Sleeping Bag (53), Foil Egg-Crate Foam Mat (17), BISINNA 25+10L Pack (48) | **218** |
| Value | Naturehike Cloud Up Pro 1P (205), 400 g Down Envelope Sleeping Bag (86), Naturehike TuYe R3.5 Mat (86), Naturehike Rock 60+5L Pack (69) | **446** |

Outside core totals: Widesea Aluminium Cookware Set (56), NIOFEEL Memory-Foam Camping Pillow
(19), Nyxia 35L Rain Cover, Naturehike Cloud Up Pro 2P (217).

**Editorial constraint applying to every video below:** advertised specifications are
attributed claims, not guarantees. Warmth and severe-weather uncertainty stays explicit. No
video may describe field use that has not happened. Both kits are mild-weather only.

---

## 1. Can You Actually Do an Overnight Hike in Australia for $446?

- **Alternate title:** I Built a Complete Overnight Hiking Kit for $446. Here Is Everything in It.
- **Primary keyword:** `cheap hiking gear` (70/mo, HIGH, 0.39 to 1.22 AUD)
- **Cluster volume:** Cluster B, 1,380/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** Entire Value kit (Cloud Up Pro 1P, 400 g down bag, TuYe R3.5, Rock 60+5L)
- **Length:** 18 to 24 minutes
- **Hook:** "Four hundred and forty six dollars. That is the whole kit. Tent, sleeping bag, mat, pack. Here it is on the scales, and here is what the same four things cost at Anaconda."
- **Thumbnail:** The four items laid flat on gum leaves, large `$446` overlay, smaller struck-through retailer figure beside it.
- **Structure:** Price reveal, item by item with scale readings on camera, the retailer equivalent basket from `retailer-comparison.ts`, what we are uncertain about and why, what we are about to go and find out on trail.
- **CTA:** "Every item and every price is on the Value kit page, with our sources."
- **Landing page:** `/starter-kits`
- **Why now:** The explicit dollar figure in a title is the single most reliable breakout signal in the competitor set, from Bec Cliffe's 148x Short to Outdoor Boys at 8.1M. This is the flagship and everything else links back to it.
- **Field trip required:** No for v1. This is the pre-trip build video, which is what makes it publishable first.

## 2. Naturehike in Australia: Is It Actually Any Good?

- **Alternate title:** 2,900 Australians Search for This Brand Every Month. Nobody Here Reviews It.
- **Primary keyword:** `naturehike` (2,900/mo, HIGH, 0.35 to 1.81 AUD), `is naturehike good` (10/mo, LOW, index 30)
- **Cluster volume:** Cluster D, 7,840/mo
- **Search intent:** navigational into commercial
- **Browse potential:** Medium
- **Affiliate intent:** High
- **Products:** Cloud Up Pro 1P, TuYe R3.5, Rock 60+5L
- **Length:** 12 to 16 minutes
- **Hook:** "If you have looked at hiking gear online in Australia you have seen this brand. Almost nobody here has told you whether it is worth buying."
- **Thumbnail:** Three Naturehike items in a row, Australian flag colour block, text `WORTH IT?`
- **Structure:** What Naturehike is and where it sits, why Australians keep finding it, what owners consistently report, what we are checking ourselves, our current honest position with the uncertainty named.
- **CTA:** "Our full research on each item, including what we do not know yet, is on the gear pages."
- **Landing page:** `/gear`
- **Why now:** The largest single demand signal in the entire study with no Australian voice answering it. Top organic result is a five-year-old US review. Naturehike itself buys ads against the query.
- **Field trip required:** No, if framed as a research and positioning video rather than a verdict.

## 3. Cheap vs Expensive Hiking Tent: $100 vs $205 vs $600

- **Alternate title:** What Do You Actually Get for an Extra $500 on a Hiking Tent?
- **Primary keyword:** `cheap hiking tent` (40/mo, HIGH, 0.30 to 1.69 AUD), supported by `kathmandu hiking tent` (90), `macpac tent` (880)
- **Cluster volume:** Cluster D, 7,840/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** BISINNA 2-Person Tent (100), Naturehike Cloud Up Pro 1P (205), a retailer tent from `retailer-comparison.ts` as the price anchor
- **Length:** 15 to 20 minutes
- **Hook:** "One of these is a hundred dollars. One is two hundred. One is six hundred. Pitched side by side, can you tell which is which?"
- **Thumbnail:** Three tents pitched in a line, price above each, biggest one struck through.
- **Structure:** Blind visual comparison, pitch time each, packed size and weight on scales, material and pole claims labelled as advertised, where the money actually goes, who should buy which.
- **CTA:** "The full price and spec comparison, with dates and sources, is on the comparison page."
- **Landing page:** `/starter-kits` with the retailer comparison section
- **Why now:** Combines the price-contrast format with the highest-volume cluster. `macpac tent` at 880/mo and `kathmandu hiking tent` at 90/mo are the price anchors Australians actually use.
- **Field trip required:** No for the comparison itself. A follow-up cut needs the trip.

## 4. Naturehike Cloud Up Pro 1P: The Honest Australian Review

- **Alternate title:** I Spent $205 on This Tent Instead of $600. Here Is What I Found.
- **Primary keyword:** `naturehike cloud up` (140/mo), `naturehike cloud up 2` (880/mo), `naturehike cloud up pro` (30/mo)
- **Cluster volume:** Cluster D, 7,840/mo
- **Search intent:** commercial
- **Browse potential:** Low to medium
- **Affiliate intent:** High
- **Products:** Naturehike Cloud Up Pro 1P (205)
- **Length:** 12 to 15 minutes
- **Hook:** "The Cloud Up is the tent Australians keep finding and then asking Reddit about. I bought the Pro version. Here is the pitch, the weight, and the parts I am still unsure about."
- **Thumbnail:** Tent pitched at dusk, `$205` overlay, `CLOUD UP PRO` text.
- **Structure:** Unbox and weigh, pitch on camera timed, interior space with a person in it, what the spec sheet claims versus what we measured, recurring owner reports, verdict with uncertainty named.
- **CTA:** "Full research notes and the current offer are on the product page."
- **Landing page:** `/gear/naturehike-cloud-up-tent`
- **Why now:** The exact Value kit shelter, the highest-demand series in the study, and the only competing review is five years old and American.
- **Field trip required:** Yes for the sleep and weather portion. Publishable as a setup and measurement review first, updated after.

## 5. Anaconda vs Kathmandu vs AliExpress: I Priced the Same Hiking Kit Three Ways

- **Alternate title:** The Same Overnight Kit at Three Australian Price Points
- **Primary keyword:** `kathmandu vs macpac` (170/mo, MEDIUM, index 43), `anaconda vs kathmandu` (20/mo, LOW, index 2)
- **Cluster volume:** Cluster C, 1,230/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** Both kits plus the retailer comparison rows
- **Length:** 14 to 18 minutes
- **Hook:** "Same four things. Tent, bag, mat, pack. Three places to buy them in Australia. The gap is bigger than I expected."
- **Thumbnail:** Three shopping baskets with three totals, largest in red.
- **Structure:** Define the category match rules, walk each basket, show the dated sources, where the cheap option genuinely compromises, where it genuinely does not, what we would actually buy.
- **CTA:** "Every row, price and date is on the comparison page. Check current prices before you buy."
- **Landing page:** `/starter-kits`
- **Why now:** Paid competition index of 2 on `anaconda vs kathmandu` means essentially nobody is contesting genuine commercial-intent comparison queries in Australia. The data already exists in the repository.
- **Field trip required:** No.

## 6. Everything That Went Wrong on My First $446 Overnight

- **Alternate title:** I Took the Cheap Kit Into the Bush. Here Is What Failed.
- **Primary keyword:** `overnight hiking gear` (40/mo), `first overnight hike` (10/mo)
- **Cluster volume:** Cluster A, 1,010/mo
- **Search intent:** informational into commercial
- **Browse potential:** High
- **Affiliate intent:** Medium
- **Products:** Full Value kit
- **Length:** 20 to 28 minutes
- **Hook:** "Three things annoyed me, one thing genuinely worried me, and one thing was better than gear costing three times as much."
- **Thumbnail:** Tired face at camp, headtorch on, text `WHAT WENT WRONG`
- **Structure:** Trailhead with the pack weight on screen, the walk in, camp setup unedited, the cook, the night, the honest morning reaction, pack-down, the problems ranked.
- **CTA:** "Our updated verdict on each item is now on the gear pages."
- **Landing page:** `/gear`
- **Why now:** Jack Brookes' regret framings pull 9x to 14x his subscriber count. This is the format applied to Bush Gums' own first real trip, and it is the video that converts the site from research to experience.
- **Field trip required:** **Yes. This is the reason the first trip happens.**

## 7. Best Budget Hiking Sleeping Mat in Australia: $17 Foam vs $86 Inflatable

- **Alternate title:** Does a $17 Foam Mat Actually Ruin Your Sleep?
- **Primary keyword:** `hiking sleeping mat` (480/mo, HIGH, 0.25 to 1.43 AUD), `naturehike sleeping mat` (210/mo)
- **Cluster volume:** Cluster F, 1,130/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** High
- **Products:** Foil Egg-Crate Foam Mat (17), Naturehike TuYe R3.5 (86)
- **Length:** 10 to 14 minutes
- **Hook:** "Seventeen dollars against eighty six. One of these you can lose and not care about. The other one you will sleep on."
- **Thumbnail:** Both mats side by side, `$17` and `$86`, question mark between.
- **Structure:** Packed size and weight, inflation time on camera, R-value explained without jargon and labelled as an advertised figure, the ground-feel comparison, who each one is for.
- **CTA:** "R-values explained properly in our guide, with both mats linked."
- **Landing page:** `/guides/sleeping-mat-r-value`
- **Why now:** Best volume-to-catalogue-fit ratio in the study, an existing supporting guide page, and a genuine price contrast inside the catalogue itself.
- **Field trip required:** Partly. Publishable with home testing, materially better after a night out.

## 8. Cheap Down Sleeping Bags in Australia: What You Give Up at $86

- **Alternate title:** An $86 Down Sleeping Bag From AliExpress. Is That Even Possible?
- **Primary keyword:** `down sleeping bag australia` (210/mo, HIGH, 0.28 to 1.26 AUD), `cheap down sleeping bag` (30/mo)
- **Cluster volume:** Cluster E, 820/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** High
- **Products:** 400 g Down Envelope Sleeping Bag (86), BISINNA Sleeping Bag (53)
- **Length:** 12 to 16 minutes
- **Hook:** "Eighty six dollars for a down bag. My instinct said that cannot be real down. Here is what I found, and here is what I still cannot tell you."
- **Thumbnail:** Bag lofted on a dark background, `$86 DOWN?` overlay.
- **Structure:** Loft on camera, weight, fill claims labelled as seller claims with the uncertainty stated plainly, envelope versus mummy shape, the temperature question and why we will not give it a comfort rating we have not verified, who this is and is not for.
- **CTA:** "How temperature ratings actually work, and why we are cautious, is in our guide."
- **Landing page:** `/guides/sleeping-bag-temperature-ratings`
- **Why now:** `goose down sleeping bag` runs at 170/mo through the Australian autumn against 40 to 50 in summer. Publish into the seasonal rise, not away from it.
- **Field trip required:** Yes for any warmth statement. Explicitly do not imply a rating before that.
- **Safety note:** This is the highest-risk video in the slate editorially. Warmth uncertainty must be unmissable, not a disclaimer at the end.

## 9. Naturehike Rock 60+5L: A $69 Pack for Multi-Day Hiking

- **Alternate title:** Is a $69 65-Litre Hiking Pack a Terrible Idea?
- **Primary keyword:** `60l hiking backpack` (140/mo), `naturehike backpack` (110/mo), `cheap hiking backpack` (90/mo)
- **Cluster volume:** Cluster G, 870/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** High
- **Products:** Naturehike Rock 60+5L (69)
- **Length:** 10 to 14 minutes
- **Hook:** "Sixty nine dollars for a sixty five litre pack. The equivalent at Macpac is several times that. Here is where the difference shows up."
- **Thumbnail:** Pack worn from behind on trail, `$69 / 65L` overlay.
- **Structure:** Empty weight, harness and hipbelt construction, load it with the full Value kit on camera, fit adjustment, carry comfort, the failure points to watch.
- **CTA:** "Our full research notes, including what we are still watching, are on the pack page."
- **Landing page:** `/gear/naturehike-rock-60-5`
- **Why now:** Exact size match for a 140/mo query, direct catalogue item, and packs are where cheap gear most often genuinely disappoints, which makes the honest version valuable.
- **Field trip required:** Yes for carry comfort. Do not claim comfort over distance before walking it.

## 10. The $218 Kit vs The $446 Kit: Which Should a Beginner Actually Buy?

- **Alternate title:** I Would Not Buy the Cheapest Kit. Here Is Why.
- **Primary keyword:** `hiking starter kit` (10/mo), `beginner hiking gear` (40/mo), `overnight hiking gear` (40/mo)
- **Cluster volume:** Cluster A, 1,010/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** Both complete kits
- **Length:** 14 to 18 minutes
- **Hook:** "Two hundred and twenty eight dollars separates these two kits. I think one of them is worth it and one of them is a trap, and it is not the one you expect."
- **Thumbnail:** Split frame, both kits laid out, `$218` and `$446`.
- **Structure:** Both kits weighed against each other, packed size against each other, the four decisions where the money goes, the honest case for spending less, the honest case for spending more.
- **CTA:** "Answer six questions and we will tell you which one suits you."
- **Landing page:** `/build-my-kit`
- **Why now:** The site's own data model is already a two-kit comparison. Dose of Dirt's evidence says head-to-head beats single review by roughly 11x. This is the highest-converting format applied to the site's core asset.
- **Field trip required:** Better with both kits carried, but publishable from measurement.

## 11. What Broke First: The Cheap Kit After Five Overnight Trips

- **Alternate title:** Five Trips on a $446 Kit. What I Would Not Buy Again.
- **Primary keyword:** `naturehike review` (30/mo, rising to 70 in Aug 2026), `is naturehike good` (10/mo)
- **Cluster volume:** Cluster J, 530/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** Full Value kit
- **Length:** 15 to 20 minutes
- **Hook:** "Five trips in. Two things I would buy again without thinking. One thing I have already replaced."
- **Thumbnail:** Worn gear laid out with visible wear, text `WHAT BROKE`
- **Structure:** Wear points on each item, the item that disappointed and exactly how, the item that outperformed its price, revised recommendations, what we removed from the kit.
- **CTA:** "We have updated every product page with what we found."
- **Landing page:** `/gear`
- **Why now:** Highest-performing format in the entire competitor set. Jack Brookes' `Backpacking Gear I'd Never Buy Again` at 207K on 14.9K subscribers. This video is also the strongest possible proof that Bush Gums does what its editorial policy says.
- **Field trip required:** **Yes. Five separate trips. This is a month three to four video.**

## 12. Every Budget Hiking Tent Mistake I Made So You Do Not Have To

- **Alternate title:** Stop Overspending on Your First Hiking Tent
- **Primary keyword:** `best budget hiking tent australia` (20/mo), `budget hiking tent` (10/mo), `hiking tent australia` (140/mo)
- **Cluster volume:** Cluster D, 7,840/mo
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** BISINNA 2P, Cloud Up Pro 1P and 2P
- **Length:** 12 to 16 minutes
- **Hook:** "I nearly bought a six hundred dollar tent for trips I had not done yet."
- **Thumbnail:** Tent in rain, text `DO NOT BUY YET`
- **Structure:** The four things beginners overpay for, the three things genuinely worth the money, condensation reality in Australian conditions, 1P versus 2P for one person, what to buy first.
- **CTA:** "Our full tent guide walks through each decision."
- **Landing page:** `/guides/2-person-hiking-tent-guide`
- **Why now:** The `Stop Overspending` framing pulled 163K on a 14.9K channel. Existing guide page needs a video to anchor it.
- **Field trip required:** Yes for condensation claims.

## 13. Your First Overnight Hike in Australia: The Complete Checklist

- **Alternate title:** Everything You Actually Need for Your First Night Out
- **Primary keyword:** `overnight hiking checklist` (70/mo, MEDIUM, index 38, bids 0.03 to 0.16 AUD)
- **Cluster volume:** Cluster A, 1,010/mo
- **Search intent:** informational
- **Browse potential:** Medium
- **Affiliate intent:** Medium
- **Products:** Both kits plus cookware and pillow
- **Length:** 16 to 22 minutes
- **Hook:** "There is a version of this list that costs two thousand dollars and a version that costs four hundred. Both work. Here is the difference."
- **Thumbnail:** Full kit laid out flat from above, numbered.
- **Structure:** Shelter, sleep, carry, cook, water, clothing, safety, in that order, with the cheap option and the reason for each, and the three things not to cheap out on.
- **CTA:** "Downloadable version and every item linked on the first overnight hike guide."
- **Landing page:** `/guides/overnight-hike-packing-list`
- **Why now:** The cheapest competitive territory in Cluster A, bids at 0.03 to 0.16 AUD, competition index 38, and the existing guide page is already written.
- **Field trip required:** No, though trip footage makes it far better.

## 14. AliExpress Hiking Gear: How to Buy Without Getting Burned

- **Alternate title:** I Have Bought 11 Pieces of Hiking Gear From AliExpress. Here Is the System.
- **Primary keyword:** `aliexpress hiking gear` (10/mo), `aliexpress naturehike` (30/mo), `aliexpress camping gear` (10/mo)
- **Cluster volume:** Cluster B, 1,380/mo
- **Search intent:** transactional
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** The full catalogue as worked examples
- **Length:** 14 to 18 minutes
- **Hook:** "A YouTube search for AliExpress hiking gear returns almost nothing useful. That is strange, because a lot of Australians are buying there anyway."
- **Thumbnail:** Phone showing a listing next to real gear on a table, text `WHAT ACTUALLY ARRIVES`
- **Structure:** How to read a listing, which specs are meaningful and which are decorative, reading reviews for pattern not anecdote, shipping and returns reality for Australia, the eleven things we bought and how each one compared to its listing.
- **CTA:** "Every item we bought, with what we paid and what we found, is on the gear pages."
- **Landing page:** `/gear`
- **Why now:** A YouTube view-sorted search for `aliexpress hiking gear` surfaces no creator who owns the query. It is a near-total vacuum on exactly the Bush Gums buying path.
- **Field trip required:** No.
- **Compliance note:** Affiliate relationship must be disclosed on camera, not only in the description.

## 15. How Heavy Should Your First Hiking Pack Be?

- **Alternate title:** I Weighed Every Single Item in My Pack. The Result Surprised Me.
- **Primary keyword:** `hiking pack weight` (40/mo, LOW, competition index 1)
- **Cluster volume:** Cluster A, 1,010/mo
- **Search intent:** informational
- **Browse potential:** Medium to high
- **Affiliate intent:** Medium
- **Products:** Both kits, weighed item by item
- **Length:** 10 to 14 minutes
- **Hook:** "Everything in this pack, on the scales, one at a time. The heaviest thing is not what you think."
- **Thumbnail:** Scales with a pack on them, big number visible.
- **Structure:** Every item weighed on camera, running total, the three heaviest surprises, what the cheap kit costs you in grams versus dollars, realistic targets for a beginner.
- **CTA:** "Full weights for both kits are published on the kit pages."
- **Landing page:** `/starter-kits`
- **Why now:** Competition index of 1 is the lowest in the study. The site already derives verified kit weights in `src/data/kits.ts`, so the data is real rather than estimated. Also the richest single source of Shorts in the slate.
- **Field trip required:** No.

## 16. BISINNA 2-Person Tent: The $100 Tent Nobody Has Reviewed

- **Alternate title:** I Bought the Cheapest Hiking Tent I Could Find That Was Not Junk
- **Primary keyword:** `bisinna tent` (20/mo), `cheap hiking tent` (40/mo)
- **Cluster volume:** Cluster D, 7,840/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** High
- **Products:** BISINNA 2-Person Tent (100)
- **Length:** 10 to 14 minutes
- **Hook:** "Search for a review of this tent. There is not one. So I bought it."
- **Thumbnail:** Tent pitched, `$100` overlay, `NO REVIEWS` text.
- **Structure:** Why an unreviewed product is a risk worth documenting, pitch and weigh, materials as advertised versus what arrived, honest comparison against the Cloud Up Pro, who should and should not buy it.
- **CTA:** "Our full notes and open questions are on the product page."
- **Landing page:** `/gear/bisinna-2-person-tent`
- **Why now:** Complete content vacuum. Low volume, but a person searching `bisinna tent` is about to buy and currently finds nothing.
- **Field trip required:** Yes for weather performance.

## 17. Cooking on a $56 Hiking Cook Set

- **Alternate title:** Is a $56 Aluminium Cook Set Enough for Overnight Hiking?
- **Primary keyword:** `hiking cookware` (70/mo, HIGH, 0.27 to 1.36 AUD)
- **Cluster volume:** Cluster H, 3,250/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** Medium
- **Products:** Widesea Aluminium Cookware Set (56)
- **Length:** 8 to 12 minutes
- **Hook:** "Fifty six dollars of aluminium. Boiling water at camp is not complicated, so what does spending more actually buy you?"
- **Thumbnail:** Pot on a stove at camp, steam, `$56` overlay.
- **Structure:** What is in the set, nesting and packed size, aluminium versus titanium honestly, boil performance on camera, cleaning reality, what is missing from the set.
- **CTA:** "The cook set and everything we use with it are on the gear pages."
- **Landing page:** `/gear/aluminium-cookware-set`
- **Why now:** Direct catalogue match, decent volume. Ranked here rather than higher because `widesea cookware` returns zero AU brand demand, so this must be a category video, not a brand video.
- **Field trip required:** Yes for real cooking footage.
- **Note:** Bush Gums has no stove in the catalogue. Do not build this video around stove recommendations.

## 18. Six Months With the Cheap Kit: What I Would Buy Again

- **Alternate title:** The Cheap Hiking Gear I No Longer Recommend
- **Primary keyword:** `naturehike review` (30/mo), `cheap hiking gear` (70/mo)
- **Cluster volume:** Clusters B and J
- **Search intent:** commercial
- **Browse potential:** High
- **Affiliate intent:** High
- **Products:** Full catalogue, revisited
- **Length:** 16 to 22 minutes
- **Hook:** "Six months ago I said I did not know yet. Now I do."
- **Thumbnail:** Same flat-lay as video 1, visibly used, text `6 MONTHS LATER`
- **Structure:** Item by item revised verdict, the two items removed from recommendation and why, the item that genuinely surprised us, what we would tell a beginner now.
- **CTA:** "Every product page has been updated with what we found."
- **Landing page:** `/gear`
- **Why now:** This is the payoff video for the entire editorial position. It cannot be faked and it cannot be rushed. Schedule it, protect it.
- **Field trip required:** **Yes. Six months of accumulated use.**

## 19. Hiking Pillows: Does a $19 Pillow Change Your Night?

- **Alternate title:** The Cheapest Upgrade to Sleeping Outside
- **Primary keyword:** `hiking pillow` (390/mo, HIGH, 0.27 to 1.26 AUD)
- **Cluster volume:** Cluster H, 3,250/mo
- **Search intent:** commercial
- **Browse potential:** Medium
- **Affiliate intent:** Low to medium
- **Products:** NIOFEEL Memory-Foam Camping Pillow (19)
- **Length:** 7 to 10 minutes
- **Hook:** "Nineteen dollars and one hundred and something grams. This is the smallest decision in the kit and it made the biggest difference to how I slept."
- **Thumbnail:** Pillow compressed in a hand next to its inflated size.
- **Structure:** Packed size versus a rolled jacket, weight cost, memory foam versus inflatable, the honest verdict on whether it earns its grams.
- **CTA:** "Linked on the gear page with everything else in the sleep system."
- **Landing page:** `/gear/memory-foam-camping-pillow`
- **Why now:** Good volume at 390/mo. Ranked low deliberately: a 19 AUD product produces a small affiliate return per click, so this is an audience and Shorts asset more than a revenue asset.
- **Field trip required:** Yes for the sleep verdict.

## 20. Hiking the Overland Track on a Budget Kit

- **Alternate title:** Tasmania's Overland Track With $446 of Gear
- **Primary keyword:** `overland track gear list` (50/mo, LOW, competition index 15), `multi day hike australia` (260/mo, LOW, index 30)
- **Cluster volume:** Cluster A, 1,010/mo
- **Search intent:** informational
- **Browse potential:** High
- **Affiliate intent:** Medium
- **Products:** Full Value kit under genuine multi-day conditions
- **Length:** 25 to 35 minutes
- **Hook:** "Six days, Tasmania, and a kit that cost less than one night in a hotel there."
- **Thumbnail:** Tasmanian landscape with a small figure and pack, `$446` overlay.
- **Structure:** The gear list up front, day by day with gear observations woven through, the weather that tested it, what failed under sustained use, the final verdict.
- **CTA:** "Full gear list with weights and prices on the site."
- **Landing page:** `/starter-kits`
- **Why now:** Both keywords have LOW competition bands, which is rare in this dataset, and this is the strongest possible proof of the Bush Gums claim. Ranked last purely on logistics: it is the most expensive and weather-dependent video in the slate.
- **Field trip required:** **Yes. A multi-day Tasmanian trip with permits, booking and season constraints. Treat as a quarter two or three project, not a first-90-days commitment.**
- **Warning:** Tasmania in the wrong season exceeds what a mild-weather kit is rated for by the site's own standard. Either go in the right season or do not make this video with this kit.

---

## Sequencing summary

| Phase | Videos | Field trip dependency |
| --- | --- | --- |
| Before the first trip | 1, 2, 3, 5, 10, 13, 14, 15 | None. Eight publishable videos exist with zero trips. |
| From the first overnight | 4, 6, 7, 8, 9, 12, 16, 17, 19 | One trip yields the core of nine videos. |
| Accumulated use | 11 (five trips), 18 (six months) | Cannot be accelerated. Schedule and protect. |
| Logistics-dependent | 20 | Multi-day Tasmanian trip, season-gated. |

The important structural finding: **eight of the first twenty videos can be made honestly
before Bush Gums has done a single overnight trip.** That removes the main excuse for not
starting, and it means the first trip can be filmed properly rather than rushed.
