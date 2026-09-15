# Agent instructions

## Repository context

This is a static-first Astro 7 validation site for an Australian beginner
hiking gear concept. Astro is configured with `output: 'static'`; pages and
catalogue data are built from the repository, with only a small browser-side
questionnaire. The deployment target is Cloudflare Workers Static Assets, with
`wrangler.jsonc` serving `./dist`.

There is currently no database, backend, CMS, authentication, commerce system,
or customer data collection. D1 is a possible future extension only. Do not
describe D1 as an existing dependency or introduce database assumptions into
ordinary static-site work.

The README is the primary project context for current product and deployment
facts. Preserve its distinction between demonstration data and verified launch
claims. Do not invent product promises, safety or performance claims, pricing
policy, fulfilment policy, or privacy policy.

Before making commerce, product, affiliate, inventory, architecture, or
marketing/positioning decisions, read the Business Strategy and Commercial
Phasing section below.

## Business Strategy and Commercial Phasing

This is an Australian beginner hiking/outdoor brand using the working brand
direction **Bush Gums**, built through low-risk phased validation. The target
customer is an Australian beginner to entry/mid-level hiker, often moving from
day hikes to first overnight trips: price-conscious, unwilling to buy obvious
low-quality junk, overwhelmed by gear choice, and interested in practical
lightweight equipment without being a hardcore ultralight enthusiast. The
positioning is: **good hiking gear at sensible prices for people buying their
first proper hiking setup**. The site should build confident buying decisions
before meaningful inventory or product-development risk is accepted.

The intended commercial progression is:

1. **Curator/recommendation layer:** guides, comparisons, starter kits, Build
   My Kit, and third-party recommendations. Do not assume owned inventory,
   checkout, or own-brand products; learn what customers want and build trust,
   audience, demand data, click behaviour, later email reach, and SEO authority.
2. **Affiliate validation:** where appropriate, test third-party offers such
   as AliExpress, Naturehike, 3F UL Gear, OneTigris, and other retailers. Learn
   which products, categories, price points, kits, and traffic sources show
   commercial intent; do not optimise for affiliate revenue or a single network.
   Keep product identity separate from merchant/offer data.
3. **Curated retailer/bundled kits:** only with proven demand, consider limited
   wholesale inventory, curated beginner kits, and one local checkout while
   remaining capital-light and evidence-led.
4. **Private label:** only after demand is demonstrated, replace selected
   high-performing products with Bush Gums ODM/private-label versions, starting
   from proven factory designs with modest changes and one category at a time.
   The frontend must allow a third-party offer to become a Bush Gums product
   without a rebuild.
5. **Proprietary/custom products:** only after meaningful sales, feedback, and
   expertise consider custom sleep systems, patents/IP, laboratory testing,
   tooling, or deep engineering. Custom products are a later moat, not an
   initial validation requirement.

Position the brand as good value, trustworthy, beginner-friendly, practical,
clearly explained, Australian-relevant, approachable, and more curated than a
large retailer. Do not position it as the absolute cheapest, a generic camping
retailer, a hardcore ultralight-only brand, or an AliExpress storefront. Do not
claim Australian-made, independently/ISO/ASTM/locally tested, proprietary, or
technically superior status unless verified.

Preserve a static-first, low-cost, Cloudflare-friendly, modular,
merchant-agnostic architecture that can later move from affiliate to wholesale
to private label to proprietary products. Do not prematurely add Shopify,
full checkout/cart, inventory, authentication, accounts, databases, paid SaaS,
automated price scraping, or deep commerce infrastructure unless the owner
explicitly asks or the current phase clearly justifies it. For product,
architecture, UX, and content decisions, prefer lower capital risk,
reversibility, stronger validation, low recurring cost, low lock-in, and a
clear path through those phases. Do not assume the business should advance to a
later phase; flag that progression for owner review.

Flag owner review for inventory ownership, checkout/payment, paid recurring
SaaS, personal data, affiliate compliance, testing/certification or safety
claims, private-label supplier assumptions, custom products, IP/patents, major
architectural lock-in, or anything expensive to reverse. Treat this strategy as
durable context and do not optimise the repository as a mature e-commerce
store. The near-term objective is to build the recommendation and
customer-acquisition layer first, then let customer behaviour determine which
parts of the value chain the business should own next.

## Orchestration and builders

The primary agent acts as orchestrator and reviewer by default. Delegate
implementation when subagents are available, while retaining ownership of:

- task decomposition and architecture decisions;
- file ownership and integration;
- final verification and visual QA;
- review coordination and adjudication;
- git state, local commits, and release decisions.

Use `gpt-5.6-luna` as the default builder model when Codex subagents or the
Codex MCP server are available. For every builder assignment, choose and state
one proportional effort: `low`, `medium`, `high`, `xhigh`, or `max`.

- `low`: bounded mechanical edits;
- `medium`: normal feature work with understood architecture;
- `high`: substantial integration, state, security, or infrastructure work;
- `xhigh`: difficult cross-cutting or ambiguous architectural work;
- `max`: exceptional complexity or high-risk work.

Do not use maximum effort indiscriminately. Run genuinely independent slices in
parallel where useful. Each assignment must include a tight scope, relevant
files, explicit ownership when multiple builders are active, constraints, and
acceptance criteria. Builders must not commit, push, deploy, or manipulate
another builder's worktree; the orchestrator integrates their work.

## Independent pre-commit review

Before every commit, obtain an independent review from `gpt-5.6-sol` at
reasoning effort `low`. The reviewer must be separate from both the builder and
the orchestrator's own review.

Give the reviewer enough canonical context to judge the change: `AGENTS.md`,
`README.md`, relevant Astro, package, Wrangler, source, and documentation files,
the task and acceptance criteria, and the complete proposed diff. Do not load
unrelated files merely for ceremony.

The reviewer checks functional correctness, regressions, security and privacy,
error handling, unnecessary complexity, architecture consistency,
Astro/Cloudflare compatibility, data-collection implications, verification
coverage, and whether the request is actually satisfied. For UI changes also
check accessibility and obvious interaction regressions.

The review loop is:

1. Send valid findings to the builder.
2. Have the builder fix them.
3. Review the updated diff independently.
4. Repeat until the review passes.

Any working-tree change after a pass invalidates that pass, including fixes,
refactors, formatting changes, visual-QA fixes, and manual corrections. An
unchanged passed diff needs no redundant review.

If the same substantive issue survives three fix-and-re-review cycles, or the
reviewer and orchestrator materially disagree about fitness to commit, stop
the ordinary loop. The orchestrator becomes adjudicator; do not create another
adjudicator. Inspect the code, findings, builder responses, evidence,
repository requirements, and user request, then rule one of:

```text
COMMIT AS-IS
COMMIT WITH SPECIFIED CHANGES
REJECT AND RE-SCOPE
```

Implement and verify specified changes. This adjudication substitutes for
another low-effort review of the same adjudicated diff. A rejection returns to
implementation with a new or re-scoped approach.

## Autonomy and owner gates

Within an approved coding task, act autonomously. Do not repeatedly ask James
for permission to inspect files, search the repository, run normal development
commands, edit in-scope files, create tests, fix failures caused by the change,
make necessary local refactors, create isolated local branches or worktrees,
run local servers, or perform local/static Cloudflare tooling and browser QA.

Only the orchestrator commits. A local commit may be created after verification,
the independent review gate, and required visual QA pass. Use a clear commit
message. Never push without James's explicit approval. Do not open or merge a
PR, deploy, trigger a production release, change DNS or a production domain,
change production secrets, or modify production Cloudflare resources without
explicit approval for that action. Permission to edit code is not permission
to release it. A push to a branch that can trigger Cloudflare deployment is a
release action.

Ask James before inventing material business or product policy, including what
products are sold, real safety or performance claims, pricing, customer
accounts, identifying-data collection, marketing capture, privacy policy,
payments, fulfilment, or an irreversible or expensive third-party commitment.
For such a decision, explain the current context, decision, viable options,
consequences, concrete risks, and a recommendation when one is justified.

## Cloudflare and future D1 safety

Preserve the static-first architecture. Do not convert the whole Astro site to
SSR for a small dynamic need. If dynamic behaviour is later required, prefer a
narrow Worker or API route and keep static pages and assets from invoking Worker
code unnecessarily.

The current Wrangler configuration is for Workers Static Assets only. Keep local
build output in `dist` and distinguish local Wrangler preview from deployment.
Do not fabricate account, zone, domain, asset, or database identifiers.

If D1 is introduced in a future task, treat it as a new production resource:

- commit migrations to the repository;
- use prepared or bound SQL parameters;
- do not perform destructive migrations without explicit owner approval;
- never store secrets in source control;
- distinguish local/test operations from production;
- identify every production migration requirement before release;
- never silently mutate production data or schema.

Code depending on a production schema migration is not release-ready until the
migration requirement and order are explicit. No current feature may assume D1
exists.

## Privacy and validation-site principles

Prefer minimal infrastructure, first-party functionality, low dependency count,
replaceable implementations, explicit data collection, graceful degradation,
and static-first delivery. Avoid speculative platform engineering.

Do not add third-party tracking, fingerprinting, unnecessary personal
information, or account infrastructure unless expressly requested. For any
analytics or data-collection change, review what is collected, where it is
stored, why it is needed, retention, user-facing privacy copy, and failure
behaviour. Analytics failures must not break the primary site experience.

## Verification

Inspect `package.json` before relying on scripts. The current baseline is:

```sh
npm run check
npm run format:check
npm run build
```

Relevant additional commands are:

```sh
npm run dev
npm run preview
npm run deploy:check
npm run deploy
npm run format
```

Run `check`, `format:check`, and `build` before every commit, plus any relevant
checks for the change. `deploy:check` validates the public deployment values;
it is deployment preparation, not a substitute for ordinary verification.
`deploy` runs the check, builds, and calls Wrangler, so it is a release action
requiring James's explicit approval. Do not run deployment-only checks requiring
production values unless the release context supplies them.

Fix failures before committing unless a failure is demonstrated to be
pre-existing and out of scope; document such failures precisely.

## Visual QA

Visual QA is mandatory for UI/UX work or changes that materially affect layout,
visible content, interaction, or responsive behaviour. It is not required just
because an `.astro` file was touched.

When browser tooling is available, the orchestrator owns final visual QA. Check
each materially affected page at approximately `1280 × 800` and `375 × 812`:

- reload after resizing and inspect the rendered appearance;
- interact with changed controls;
- check overflow and responsive layout;
- check browser console errors;
- check keyboard and mobile behaviour where relevant.

If visual QA cannot be performed, name the pages that remain visually
unverified. DOM measurements or automated tests alone are not visual QA. Any
visual-QA correction changes the diff and requires another independent review.

## Git and worktree safety

Inspect git status before destructive operations. When multiple agents or
sessions are active, use isolated branches or worktrees where appropriate,
never overwrite another session's changes, and keep integration with the
orchestrator. Never force-reset shared work, remove an active worktree, or
delete an unmerged or owner-managed branch. Re-fetch `origin/main` before
comparing against it and verify the exact target of any cleanup.

After an explicitly approved push, stale disposable worktrees and fully merged
task branches may be cleaned up only after their targets are verified. Do not
delete owner-managed branches or data.

## Scope discipline

Solve the requested problem completely without opportunistic rewrites. Fix an
adjacent defect when it blocks the task and report it. Report unrelated defects
without silently broadening scope. Prefer small coherent changes and avoid
generic abstractions without a demonstrated consumer.

## Final reporting

For every substantial task, report concisely:

1. what changed and the important implementation decisions;
2. verification performed and its result;
3. independent review result or any reason it was not applicable;
4. whether visual QA was performed;
5. local commit SHA and message if committed;
6. outstanding issues and the exact owner or release action required.

Never claim deployment, production migration, visual appearance verification,
or successful production behaviour without evidence.
