# Trailwise validation website

Trailwise is a static-first validation website for an Australian beginner hiking gear concept. It combines practical learning content, researched starter-kit candidates and a transparent rules-based “Build My Kit” questionnaire.

The brand name and demonstration catalogue are placeholders. The “Bought for testing” product pages describe items purchased with Bush Gums money; they have not been field-tested yet, and their specs carry provenance statuses. No products are offered for sale and no personal information is collected.

## Stack

- Astro and TypeScript
- Static HTML for every page
- Plain CSS with central colour tokens
- Small client-side JavaScript module for the questionnaire
- Local TypeScript data files; no database, CMS, authentication or backend
- Cloudflare Workers Static Assets compatible output

## Local setup

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Validation

```bash
npm run check
npm run format:check
npm run build
npm run preview
```

Production files are written to `dist/`.

## Deploy to Cloudflare

The included `wrangler.jsonc` points Cloudflare Workers Static Assets at `./dist`.

1. Set `PUBLIC_SITE_URL` to the final HTTPS origin.
2. Set `PUBLIC_CONTACT_EMAIL` to a monitored address.
3. Run `npm run deploy:check` to verify neither value is still a placeholder.
4. Preview with `npm run build` followed by `npx wrangler dev`.
5. Deploy with `npm run deploy`.

The deploy command refuses to publish until the two public identity values are
configured. Wrangler runs through `npx` without adding a runtime dependency.
Cloudflare account and domain setup are deliberately outside this repository.

## Editing the site

### Brand

Edit `src/config/site.ts` for the temporary brand name, tagline, metadata and
colour tokens. Public URL and contact email come from the environment through
`site.config.mjs`.

### Products and kits

- `src/data/product-pages/*.ts` contains one purchased product per file for the “Bought for testing” pages. These products are not yet tested; their specs carry provenance statuses. Offers remain separate in `src/data/offers.ts`.
- `src/pages/gear/[slug].astro` renders these pages. Product images use the `product-<imageId>` convention in `src/assets/images` when available.
- `src/data/catalog.ts` contains both the retained demonstration range and the real product records used by the Starter and Value kits. Prices are historical purchase/listing context, not live offers.
- `src/data/kits.ts` defines the kits by product ID. Cooking and comfort accessories are separate optional add-ons rather than part of kit totals.
- `src/pages/build-my-kit.astro` contains the visible questions and deterministic matching rules.

Product claims marked as demo data must be replaced with verified manufacturer information before launch.

### Guides

Guide cards are listed in `src/data/guides.ts`. The four guide pages live in `src/pages/guides/` and use `src/layouts/GuideLayout.astro`.

## Architecture notes

Astro renders the entire catalogue and content layer at build time. The only meaningful client JavaScript is the recommender. Its answers stay in the browser and the matching rules are intentionally readable:

- Budget provides the strongest initial tier weighting.
- Cost, comfort and lower-weight priorities each add distinct weights.
- Every location adds a documented condition-based weighting.
- Winter always selects the warmest demo tier and explains the budget conflict.
- Experience and group size influence both scoring and the explanation.
- A kit-link query is retained and compared with the questionnaire result.

This gives the business a usable decision-engine prototype without hosting application servers or collecting customer data.

## Future extension points

- Affiliate destinations are marked as sponsored and disclosed. Add a first-party event endpoint only if outbound-click measurement is later approved.
- Add a hosted email form only after provider selection and privacy-copy review.
- Introduce checkout through hosted payment links before building a full cart.
- Add D1 or another store only when dynamic inventory, saved kits or first-party analytics require it.
- Move content to a CMS only when non-technical editing volume justifies the operational cost.
- Connect Shopify only once inventory and fulfilment needs exceed static product pages.

## Deliberately unbuilt

Commerce, inventory, user accounts, saved recommendations, analytics, email capture, customer reviews and a CMS are outside this validation version. The site can link to third-party merchant offers or searches, but it has no checkout and does not sell products directly.

## Placeholder launch checklist

- Select and clear the final brand name.
- Configure `PUBLIC_SITE_URL` and `PUBLIC_CONTACT_EMAIL`.
- Verify all product specifications, prices and claims.
- Obtain owner/legal review of privacy, affiliate and terms copy.
- Add real photography with appropriate rights and optimised responsive formats.
- Configure the chosen Cloudflare account, domain and deployment workflow.
