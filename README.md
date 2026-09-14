# Trailwise validation website

Trailwise is a static-first validation website for an Australian beginner hiking gear concept. It combines practical learning content, editable sample starter kits and a transparent rules-based “Build My Kit” questionnaire.

The brand name, products, prices, weights and performance ratings are placeholders. No products are offered for sale, no personal information is collected and the current recommendations are demonstration data.

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

- `src/data/catalog.ts` contains sample products, categories, prices and weights.
- `src/data/kits.ts` defines the three starter kits by product ID.
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

- Add outbound-link attributes and a first-party event endpoint when real affiliate links are introduced.
- Add a hosted email form only after provider selection and privacy-copy review.
- Introduce checkout through hosted payment links before building a full cart.
- Add D1 or another store only when dynamic inventory, saved kits or first-party analytics require it.
- Move content to a CMS only when non-technical editing volume justifies the operational cost.
- Connect Shopify only once inventory and fulfilment needs exceed static product pages.

## Deliberately unbuilt

Commerce, inventory, user accounts, saved recommendations, analytics, email capture, customer reviews, real product links and a CMS are outside this validation version.

## Placeholder launch checklist

- Select and clear the final brand name.
- Configure `PUBLIC_SITE_URL` and `PUBLIC_CONTACT_EMAIL`.
- Verify all product specifications, prices and claims.
- Obtain owner/legal review of privacy, affiliate and terms copy.
- Add real photography with appropriate rights and optimised responsive formats.
- Configure the chosen Cloudflare account, domain and deployment workflow.
