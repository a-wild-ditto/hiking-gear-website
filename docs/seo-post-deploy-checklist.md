# SEO checks after an approved deployment

Use this after the owner has approved and completed a production release. Local
`npm run build && npm run seo:check` checks generated files; it cannot prove
Cloudflare domain routing or live response status.

## Before release

1. Run `npm run check`, `npm run format:check`, `npm run build` and
   `npm run seo:check`. The checker compares every built indexable HTML page
   with the sitemap, checks canonical tags and basic metadata, and verifies
   `robots.txt` and the built redirect file.
2. Review guide `updatedOn` values before adding them to `src/data/guides.ts`.
   The sitemap emits `<lastmod>` only for a guide with that verified field. Do
   not use research dates, build dates or a blanket current date. Render the
   same date as the guide Article's `dateModified`; `npm run seo:check`
   requires them to agree.
3. Confirm the release gates in `AGENTS.md` and the monitored contact address.

## On the live site

Record the observed status, `Location` and final URL for each case. Use a
browser or an HTTP client that can show redirect hops.

| Request                                                      | Expected result                                                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `https://bushgums.com.au/sitemap.xml`                        | 200 XML URL sitemap with canonical URLs                                                     |
| `https://bushgums.com.au/sitemap-index.xml`                  | 301 to `/sitemap.xml`                                                                       |
| `https://bushgums.com.au/robots.txt`                         | 200 and `Sitemap: https://bushgums.com.au/sitemap.xml`                                      |
| An old guide path, with and without a trailing slash         | 301 straight to the new guide path ending in `/`                                            |
| A current HTML path without a trailing slash                 | Redirect to the slash form; Cloudflare Static Assets uses 307 for this setting              |
| A missing path                                               | 404, with the site's custom 404 page                                                        |
| `http://bushgums.com.au/` and `https://www.bushgums.com.au/` | Redirect to `https://bushgums.com.au/`; configure and verify at the Cloudflare domain level |

Check the homepage, Learn hub, one guide and one gear page for matching
canonical tags and final URLs. Check both desktop and mobile if a release also
changes visible content. The repository's `_redirects` file cannot perform
domain-level redirects, so the apex HTTPS behavior requires owner review and
Cloudflare dashboard configuration.

## Search Console

After the production domain is serving the approved release, verify the
`bushgums.com.au` property with a method the owner controls. Submit
`https://bushgums.com.au/sitemap.xml`, then review sitemap fetch status,
indexed pages, excluded pages and canonical selections. Treat indexing as a
search-engine decision, not a result the build or deployment can guarantee.
Recheck after content or redirect changes. Do not submit the retired
`sitemap-index.xml` URL.

Inspect and, where appropriate, request indexing for the homepage, `/learn/`,
`/gear/`, the overnight packing list and representative gear pages. Validate a
guide and product research page in Google's current structured-data tooling.
Run production Lighthouse or PageSpeed checks for desktop and mobile, review
Core Web Vitals when field data exists, and record an initial Search Console
baseline once impressions and indexing data become available.
