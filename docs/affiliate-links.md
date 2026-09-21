# Affiliate links and Amazon Associates tracking IDs

Developer note for how outbound merchant links are built and measured.

## Amazon Associates tracking IDs

Bush Gums has exactly two Amazon Associates tracking IDs, one per place an
Amazon product link can appear:

| Where the link appears                      | Tracking ID        |
| ------------------------------------------- | ------------------ |
| Landing page kit section (`/`)              | `bushgums-kit-22`  |
| Gear detail / review page (`/gear/<slug>/`) | `bushgums-gear-22` |

They are configured in one place: [`src/config/affiliate.ts`](../src/config/affiliate.ts),
as `AMAZON_TRACKING_IDS`. That is the only runtime source of the values: no
other module may define its own copy, and no offer may store a hard-coded
`tag=` parameter. `scripts/check-affiliate-urls.mjs` fails if an offer URL
carries one. Documentation, tests and example SQL naturally mention the IDs by
name; that is fine, because none of them feed a rendered link.

Tracking IDs are public values that appear in every outbound affiliate URL, so
they live in source control rather than in environment configuration or
secrets.

There are no tracking IDs for email, social, paid ads or articles, because
none of those surfaces currently link to Amazon. See "Adding a new context"
below before creating one.

## Where Amazon URLs are transformed

All of it happens in
[`src/lib/affiliate-tracking.ts`](../src/lib/affiliate-tracking.ts):

- `isAmazonUrl(url)` matches Amazon storefront hostnames (`amazon.com.au`
  and its national siblings, plus subdomains). It deliberately does not match
  `media-amazon.com`, `amazonaws.com` or lookalike hosts such as
  `amazon.com.au.example.com`.
- `extractAmazonAsin(url)` reads the ASIN from `/dp/`, `/gp/product/` and
  similar product paths.
- `canonicaliseAmazonUrl(url)` rewrites the URL to `https://<host>/dp/<ASIN>`.
- `buildAffiliateUrl({ url, context })` is the public entry point. It
  canonicalises, then sets the tracking ID for the context.
- `buildTrackedMerchantUrl(offer, context)` is what the pages actually call. It
  routes Amazon offers through `buildAffiliateUrl` and leaves every other
  merchant on the existing `bg1_` sub-id mechanism.

Behaviour that matters:

- A missing `tag` is added; an existing `tag` is replaced. A URL can never end
  up with two.
- Query parameters that are not known Amazon search/session noise are kept,
  and the fragment is always preserved.
- Non-Amazon URLs are returned untouched. AliExpress, Bunnings and any other
  retailer never receive an Amazon parameter.
- A malformed, empty or non-HTTP URL is returned unchanged rather than
  throwing, so a bad data entry degrades to an untagged link instead of a
  broken page.

## Why canonical `/dp/{ASIN}` URLs

Offers store the clean product URL, for example
`https://www.amazon.com.au/dp/B0G3P2ZNSV`, and never a SiteStripe URL.

- An ASIN URL is the stable identity of the product. Amazon's copied URLs
  carry `crid`, `dib`, `dib_tag`, `keywords`, `qid`, `sprefix` and `sr`, which
  are the state of one person's search session. Keeping them risks sending a
  visitor to a search result rather than the product we recommend, and makes
  it impossible to tell at a glance which product an offer points at.
- `linkCode`, `linkId` and `ref_` are not required for Associates attribution;
  the `tag` parameter is what Amazon attributes on. Dropping them means nobody
  has to generate a SiteStripe link by hand for every product.
- The `tag` is applied at render time, so the same stored URL produces
  `bushgums-kit-22` on the landing page and `bushgums-gear-22` on the review
  page with no duplicated data.

If an Amazon URL cannot be confidently reduced to an ASIN (a store page or an
unusual variant link), the helper preserves the valid destination and only
updates the `tag`.

## Size variants on a product page

A review page can cover one listing family sold in several sizes. Give each
size its own offer with a `variantLabel` and a `catalogIds` scope, and list the
default size first:

```ts
{ productSlug: 'naturehike-cloud-up-tent', url: '.../dp/B0DPFK6LPJ',
  catalogIds: ['cloud-up-2p'], variantLabel: '2 person' },
{ productSlug: 'naturehike-cloud-up-tent', url: '.../dp/B0FXGHX1PL',
  catalogIds: ['cloud-up-1p'], variantLabel: '1 person' },
```

`src/components/product/OfferChoice.astro` then renders a "Choose a size"
radio picker above the buy button and swaps the button between the listings.
A product with a single offer renders exactly one button, as before.

The picker is progressive enhancement. The server sends every labelled button
visible and the radios hidden, so without JavaScript a visitor still sees each
option and every link works; the script reveals the picker and shows one
button at a time. Each picker on a page uses its own `groupId`, so the hero
CTA and the "Where to buy" CTA never share a radio group.

Each variant gets its own placement, for example
`product_buy_primary_2-person`, so analytics records which size was clicked.
`catalogIds` controls which kit rows may use an offer. A kit row displays a
price and an estimated carried weight recorded from one specific listing, so
it must link to that listing. The Value kit's Cloud Up row shows figures taken
from the AliExpress Cloud Up Pro 1P, so the Amazon 1 person offer is scoped to
an empty list and stays on the review page. When a row's figures are
re-recorded against an Amazon listing, scope that offer to the row's catalog
id and the row switches over.

## Click analytics

Affiliate clicks reuse the existing `merchant_click` event rather than adding a
separate `affiliate_click` event. `merchant_click` already exists across the
client script, the Worker validator and the dashboard queries, and every
outbound merchant link on the site is an affiliate link or a candidate to
become one. One physical click produces exactly one event: each CTA is its own
anchor, and the single delegated click listener in `src/scripts/analytics.ts`
emits once.

Fields recorded on an affiliate click, and the repo name for each:

| Concept              | Field                                                                      |
| -------------------- | -------------------------------------------------------------------------- |
| `event_name`         | `event` (`merchant_click`)                                                 |
| `retailer`           | `merchant`                                                                 |
| `product_id`         | `productSlug`                                                              |
| `product_category`   | `productCategory`                                                          |
| `tier`               | `kitId` (`starter` / `value`)                                              |
| `source_context`     | `sourceSurface` (`kit` / `gear`) + `placement`                             |
| `page_path`          | `path`                                                                     |
| `placement`          | `placement`                                                                |
| `amazon_tracking_id` | `affiliateTrackingKey`                                                     |
| acquisition          | `source`, `medium`, `campaign`, `content`, `referrerDomain`, `landingPath` |

Notes:

- **`amazon_tracking_id` is `affiliateTrackingKey`.** For an Amazon link that
  field holds the exact Associates tag written into the outbound URL
  (`bushgums-kit-22` or `bushgums-gear-22`); for every other merchant it holds
  the Bush Gums `bg1_` sub-id. Amazon accepts no sub-id of its own, so the tag
  genuinely is the only attribution key an Amazon click has. Analytics Engine
  allows at most 20 blobs and the schema already uses all 20, so this avoids
  storing the same value twice.
- `productCategory` occupies `blob2`, which previously held a constant `1`
  schema marker. The request `version` field is still validated by the Worker.
- `placement` distinguishes the CTAs: `home_buy_inline` /
  `home_buy_secondary` in the kit table, and `product_buy_primary` /
  `product_buy_secondary` / `product_buy_where_to_buy` /
  `product_buy_where_to_buy_secondary` on a review page. The value is the
  single source of truth: it is both the non-Amazon sub-id in the outbound URL
  and the `placement` on the click, so the two cannot drift.
- `sourceSurface` on a `merchant_click` is journey-attributed: if the visitor
  arrived on the review page from the kit table, the event records the surface
  that sent them. `path` and `placement` always describe the page and the CTA
  the click actually happened on.
- Acquisition data is first-touch. It is captured once per session in
  `getAcquisition()` and reused by every later event, so browsing internally
  before clicking out does not overwrite the original UTM or referrer values.
- `utm_term` is not captured. The acquisition record covers `utm_source`,
  `utm_medium`, `utm_campaign` and `utm_content`, and there is no free blob for
  a fifth. Adding it means freeing or repurposing a blob.
- Analytics is best effort. It is fetch-and-forget with `keepalive`, wrapped in
  try/catch, and disabled off the production hosts. A failure never blocks or
  delays the outbound click.

## Adding a new context later

If a genuinely new surface starts linking to Amazon, for example a newsletter
or a guide article:

1. Create the tracking ID in Amazon Associates first.
2. Add it to `AMAZON_TRACKING_IDS` in `src/config/affiliate.ts` and extend the
   `AmazonContext` union.
3. Pass `amazonContext: '<new context>'` where that surface calls
   `buildTrackedMerchantUrl`.
4. Add a case to `scripts/check-affiliate-urls.mjs`.

Do not add a context speculatively. An unused tracking ID produces no data and
makes the Associates reports harder to read.
