# SEO content backlog

Source: [September 2026 SEO discovery](seo-discovery/runs/2026-09-18.md)
and [guide rewrite brief](seo-briefs/guides-rewrite-2026-09.md). Keyword
Planner volumes are bucketed Australian monthly estimates; advertiser
competition is not organic ranking difficulty. Search Console coverage was
unavailable at research time. Reassess priorities when actual query data
exists.

## Already represented in the repository

The packing list, sleeping bag ratings, mat R-value, two-person tent and
stove guides are generated routes in the repository. The Australia, Victoria,
Blue Mountains, NSW and Tasmania trip-planning guides also exist. Avoid creating duplicate
URLs for close keyword variants. Recheck authority links and changing park,
booking, weather and fire information before promoting any route guide.

Git commits show guide content created or reworked on 18 Sep 2026, but no
verified public launch or editorial review date. Publication and review dates
remain unset pending owner evidence.

## Next editorial candidates

| Candidate                      | Evidence and next step                                                                                                                                     | Gate                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Cloud Up review refinement     | Discovery found demand for "nature hike cloud up 2". Confirm the exact Cloud Up versus Cloud Up Pro model and variant before changing the title or claims. | Product identity and evidence review |
| NYXIA rain cover refinement    | Add a sourced pack cover versus liner explanation if it helps the current review. Avoid implying the cover makes a pack waterproof.                        | Evidence review                      |
| TuYe mat refinement            | Match relevant Naturehike mat queries only where the page accurately describes the reviewed model and its unverified insulation claim.                     | Safety and evidence review           |
| Printable overnight checklist  | Extend the existing packing list URL instead of adding a competing page. Keep emergency and water advice sourced and qualified.                            | Safety review                        |
| Water treatment guide          | Discovery identified demand, but treatment performance is safety sensitive. Gather current primary authority and product evidence before drafting.         | Owner review of safety claims        |
| Queensland overnight routes    | Research suggested Brisbane-area interest. Validate actual routes, access, bookings and fire rules from Queensland authorities before adding a page.       | Authority research                   |
| Overnight pack selection guide | Discovery noted a narrower pack query cluster. Assess overlap with current gear reviews and the packing list before assigning a new URL.                   | Coverage review                      |

## Gate for first-party gear testing content

Keep first-party testing findings unpublished until the gear has actually been
used and the relevant observations are recorded. For each tested product,
capture and review:

- Original photos showing the actual item, its configuration and any details
  discussed in the review.
- Measured packed weight, component weights and dimensions, with the measured
  configuration and method stated. Separate these from seller specifications.
- Setup and pack-down times where relevant, with the conditions and level of
  familiarity stated.
- Observations about build, materials, fit and comfort that were actually
  experienced, including the load, weather, terrain or other conditions needed
  to understand them.
- Useful trade-offs, any differences from seller or manufacturer claims, and
  limitations or unresolved questions that still affect a recommendation.

Attribute each finding to the observation or source that supports it. Do not
publish planned tests, assumed performance or an editorial verdict as if they
were first-hand results. Keep safety-related uncertainty clear even when a
field observation is positive.

Keep future pages in `src/data/guides.ts` when published so the Learn hub and
sitemap remain aligned. Add `updatedOn` only when an actual content update
date is known; do not infer it from research notes or the build date.
