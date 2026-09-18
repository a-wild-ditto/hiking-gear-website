# Content production system

Built for one person, producing content alongside other work, with real Australian trips as
the constraint. The design goal is that **one overnight trip produces roughly six weeks of
publishing.**

## Output target from a single overnight trip

| Output | Quantity | Source |
| --- | --- | --- |
| Flagship YouTube video | 1 | The trip narrative itself |
| Product-specific videos | 2 to 4 | Per-item segments filmed deliberately during the trip |
| Shorts / Reels / TikToks | 8 to 12 | Vertical pass, plus the dedicated capture list below |
| Product photography | 40 to 60 usable stills | Before, on trail, and after |
| Website review updates | 4 to 8 product pages | Evidence notes and test-plan status in `src/data/product-pages/*.ts` |
| Social posts | 6 to 10 | Stills plus a single honest observation each |
| Community posts | 1 to 2 | Only where genuinely useful and disclosed |
| Long-form written article | 1 | Only if the trip produced something the guides do not already cover |

## Field filming checklist

Print this. Take it. The single biggest failure mode for a solo creator is returning from a
trip with a good story and no B-roll of the thing being discussed.

### Before the trip (at home, controlled conditions)

- [ ] **Pack overview flat-lay**, top-down, every item visible, on a neutral surface
- [ ] **Product close-ups**, every item, three angles each, including any branding and tags
- [ ] **Scale readings on camera** for every single item, display clearly legible
- [ ] **Running total shot** as items go onto the scale one at a time
- [ ] **Packed-size shots** with a consistent reference object in frame (same water bottle, every time)
- [ ] **Price overlays** planned, using the recorded prices from `src/data/catalog.ts`
- [ ] **Setup at home**: tent pitched in the yard, timed, one unbroken take
- [ ] **Mat inflation timed** at home as the control
- [ ] **Vertical pass** of the flat-lay, the scale, and the packed sizes
- [ ] **Condition record**: photograph any existing marks or defects before use, so post-trip wear is honest
- [ ] Tent packed away wet-free and re-rolled so the trailhead shot is clean

### On trail

- [ ] **Trailhead shot** with total pack weight stated on camera
- [ ] **Walking with pack** from behind, from the side, and a POV of the shoulder straps
- [ ] **Pack fit** close-ups: hipbelt seated, load lifters, sternum strap
- [ ] **Sweat and comfort reaction** recorded mid-climb, unedited, while genuinely uncomfortable
- [ ] **Any problem the moment it happens.** A strap slipping, a zip catching, a pole clip. Film it then, not later.
- [ ] **Weather as it is**, including the unflattering conditions
- [ ] **Camp site selection** and why
- [ ] **Full setup sequence**, unbroken, with a timer visible or added in post
- [ ] **Mat inflation** in the field, timed, compared to the home control
- [ ] **Sleeping bag loft** shown in the tent after it has had time to expand
- [ ] **Cooking**: boil time on camera, the actual meal, the cleanup
- [ ] **Honest reactions to camera** at three points: arrival, after setup, in the tent before sleep
- [ ] **Vertical pass** of setup, cooking and the tent interior
- [ ] **Ambient audio** recorded separately for at least two minutes

### Morning

- [ ] **First reaction on waking**, before coffee, unscripted. This is the most valuable 15 seconds of the trip.
- [ ] **Condensation**: pan the inner and fly, no commentary, let it speak
- [ ] **Warmth impression** stated carefully, with the actual overnight temperature if known, and explicit about what it does and does not prove
- [ ] **What annoyed you**, stated within the first ten minutes of waking while it is still true
- [ ] **What worked**, same window
- [ ] **Pack-down timed**, cold hands, single take
- [ ] **Any damage** found, filmed close
- [ ] **Quick verdict per item**, one sentence each, straight to camera
- [ ] **Vertical pass** of the wake-up reaction and the condensation

### After the trip

- [ ] **Cleaned product** photographed against the pre-trip stills
- [ ] **Wear points** documented close-up, compared to the pre-trip condition record
- [ ] **Scale recheck** where anything absorbed water or lost parts
- [ ] **Final recommendation per item**, recorded in a quiet room, not on trail
- [ ] **Who should buy it** and **who should avoid it**, stated separately and specifically
- [ ] **Open questions updated** in the product page data, including anything the trip did not resolve

## The evidence discipline that must survive editing

The repository is explicit: advertised specifications are attributed claims, not guarantees;
field testing is incomplete; and the site must not claim use that has not occurred. Editing
is where that discipline usually dies, because the confident cut is the watchable cut.

Three rules to protect it:

1. **Never voice a spec as fact.** "The listing says 210 grams. On my scale it was 233."
2. **One night is one night.** A single mild-weather overnight supports statements about
   setup, packed size, comfort and first impressions. It does not support durability or
   temperature claims. Say which is which on camera.
3. **When the trip contradicts the research, lead with it.** That is the most valuable footage
   on the card and the reason the channel is worth watching.

## Repurposing workflow

A single trip runs on a two-week cycle.

**Day 0 to 1: the trip.** Film against the checklist. Do not edit anything yet.

**Day 2: ingest and log.** Dump the cards. Watch everything once at speed and log timecodes
into three buckets: flagship narrative, per-product segments, Shorts candidates. This is
the highest-leverage hour of the whole cycle and the one most often skipped.

**Day 3: cut the Shorts first.** Six to eight of them, from the vertical pass and the logged
candidates. They are short, they are quick, and they start working while the long-form is
still being built.

**Day 4 to 6: the flagship.** Chapter it explicitly. Every high-performing video in the
competitor set carries chapters, often 9 to 25 of them.

**Day 7: update the website.** Product page evidence notes, open questions, test-plan status.
Embed the video on the relevant pages. This is the step that converts content into the
affiliate funnel, and it is the step a tired creator skips.

**Day 8 to 11: the product-specific videos.** Two to four, cut from the segments already
logged. These are the search-led assets with the longest life. Dose of Dirt's budget tests
are still leading their category five years on.

**Day 12 to 14: social, community, buffer.** Stills and single observations. Buffer exists
because weather, illness and work will eat it.

## Editing priorities, in order

1. **The first three seconds.** A number or a problem. Nothing else.
2. **Chapters.** Non-negotiable, on every long-form video.
3. **On-screen numbers.** Prices, weights, times. The audience retains the number, not the sentence.
4. **The honest moment stays uncut.** The tired morning reaction, the thing that failed, the
   admission of uncertainty. Cutting these for pace removes the reason the channel exists.
5. **Audio before colour.** Bad audio loses viewers. Ungraded footage does not.
6. **Affiliate disclosure on camera**, not only in the description.

## Publishing cadence

See `content-strategy-summary.md` for the 90-day plan and the Option A versus Option B
analysis. The short version: **one long-form video every two weeks plus three Shorts a week**
is the schedule a single person can actually hold while doing real trips.

## Equipment notes

Minimal, because the research does not reward production value. Bec Cliffe's 42K Short and
Jack Brookes' 207K video are not technically elaborate.

Worth owning:

- A **digital luggage scale with a large clear display.** Eight of the 55 Shorts depend on it.
- A **consistent reference object** for packed-size shots. The same bottle, every trip.
- A **phone mount or small tripod** that works on a tent pole and on the ground.
- An **external microphone** of some kind. Audio is the one place cheap genuinely costs you.

Not worth buying yet: gimbals, drones, a second camera body, lighting. Nothing in the
competitor research suggests they change outcomes in this niche, and a drone shot of a
Tasmanian valley performed at 2.5x subscriber count for Bec Cliffe while a price-comparison
Short filmed on a table performed at 148x.
