# Bush Gums affiliate curation site

Bush Gums helps Australian beginners research a first overnight hiking setup. The public journey is Value kit, individual product research, then an external merchant listing. The lower-cost Starter kit is an alternative. The site curates gear and explains evidence and trade-offs; it does not sell or fulfil products.

Product pages describe real researched items. Some have been ordered for testing, but field testing remains incomplete. Important advertised specifications are attributed to their source and are not performance guarantees. Prices are what Bush Gums paid or recorded and can differ from current merchant prices.

## How Bush Gums evaluates gear

Specs tell us what a product claims to be. Experience tells us what it is actually like to own.

Bush Gums is a practical gear curator, not a laboratory review publication. We look for hiking gear that appears unusually good for the money, check useful advertised specifications, read widely across real owner and independent reviewer experiences, and use the gear ourselves in Australian conditions where possible.

Our own field experience is the strongest signal once we have enough of it. Until then, recurring owner and independent reviewer experiences matter more than brand reputation or a specification sheet alone. We look for patterns in comfort, setup, carrying, durability and value, and describe conflicting reports plainly. A single anecdote is not a general verdict.

We show important manufacturer, retailer and seller specifications as advertised claims, not guarantees. Less formal documentation about a lesser-known product means greater uncertainty about a particular claim, not automatically lower product quality. We apply the same judgment to familiar brands, marketplace products and gear from any country.

Our aim is practical: tell people what the gear promises, what owners experience, what we experienced, the compromises we found and whether we think it is worth the money. We do not invent field use or generalise beyond the conditions we actually experienced. Important warmth, severe-weather and other safety-related uncertainties remain clear. External merchants set current prices, stock, delivery, returns and warranty terms.

## Stack and local setup

- Astro 7 with static output and TypeScript
- Local data files, CSS and a browser-side Build My Kit questionnaire
- Cloudflare Workers Static Assets serving `./dist`
- No checkout, inventory, database, accounts, analytics or email capture

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Run `npm run check`, `npm run format:check` and `npm run build` before committing. `npm run preview` serves built files locally.

## Public content and data

- `src/data/product-pages/*.ts` is the public research source. Each page retains evidence notes, sources, open questions and test plans.
- `src/data/catalog.ts` contains only real products and variants used by the kits. It keeps product identity separate from merchant offers in `src/data/offers.ts`.
- `src/data/kits.ts` derives the Starter and Value core-kit totals. Consumer-facing weight totals use estimated carried or packed weight; technical minimum and unknown weights remain distinct. Optional cooking and comfort accessories are outside core totals.
- `src/data/retailer-comparison.ts` contains dated, sourced category-matched comparison rows and derives all totals and savings. Recheck official retailer prices and specifications before updating the public comparison. Club and sale prices need explicit labels, and the comparison must retain its caveats.
- `/build-my-kit` runs in the browser, remains noindex and does not send answers to Bush Gums. It recommends only the two current mild-weather kit shortlists and stops on winter answers.

All public copy must avoid Unicode U+2014. Keep evidence provenance visible. Do not turn unverified specifications into facts or claim field testing that has not occurred.

## Deployment preparation

The production Worker is `hiking-gear-website`. `wrangler.jsonc` serves static assets from `./dist` with `workers_dev` disabled, and Astro remains configured for static output. The public site origin is fixed at `https://bushgums.com.au`; `PUBLIC_SITE_URL` is optional, but if supplied it must match that origin, and `PUBLIC_CONTACT_EMAIL` must be a monitored address before a production build. `npm run deploy:check` validates the Worker and Astro configuration plus the contact email locally without network access or deployment. The custom domain is managed in the Cloudflare dashboard and is not declared in Wrangler. `npm run deploy` is a production action and requires owner approval. Cloudflare account, domain and release setup are outside this repository.

## Commercial scope

Bush Gums is in the affiliate curation phase. External merchants control current prices, stock, shipping, returns and warranty. An affiliate relationship does not change the evidence status of a product claim. No Premium tier, checkout, owned inventory, database, accounts or email capture exists. Moving to owned stock, payments, private label or custom products requires separate owner review.

## Owner review before launch

- Confirm the `hiking-gear-website` Worker and `https://bushgums.com.au` custom domain routing in the Cloudflare dashboard, and supply a monitored contact email.
- Review comparison freshness, exact merchant listing identity and affiliate compliance.
- Review legal wording and any safety or performance claim against the cited evidence.
- Confirm rights and accuracy of all imagery, and configure the Cloudflare domain and deployment workflow.
