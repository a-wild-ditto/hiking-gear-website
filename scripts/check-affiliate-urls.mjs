import assert from 'node:assert/strict';
import { AMAZON_TRACKING_IDS } from '../src/config/affiliate.ts';
import {
  buildAffiliateUrl,
  buildTrackedMerchantUrl,
  canonicaliseAmazonUrl,
  extractAmazonAsin,
  isAmazonUrl,
} from '../src/lib/affiliate-tracking.ts';
import { offers } from '../src/data/offers.ts';

const CANONICAL = 'https://www.amazon.com.au/dp/B0G3P2ZNSV';
const LONG_SEARCH_URL =
  'https://www.amazon.com.au/Naturehike-Internal-Backpack-Backpacking-Ultralight/dp/B0G3P2ZNSV?crid=20IGKYW99I8WP&dib=eyJ2IjoiMSJ9.abc&dib_tag=se&keywords=naturehike+backpack&qid=1789943773&sprefix=naturehike%2Caps%2C270&sr=8-7';
const LONG_REF_URL =
  'https://www.amazon.com.au/Naturehike-Cloud-Tent-1-53kg-Wind-Stable-Freestanding/dp/B0DPFK6LPJ/ref=sr_1_11?crid=31FC5Q9FOF1T4&dib_tag=se&qid=1789945489&sr=8-11&th=1&psc=1';

const tagOf = (url) => new URL(url).searchParams.get('tag');
const tagCount = (url) => new URL(url).searchParams.getAll('tag').length;

// 1. Amazon URL + kit context.
{
  const { url, amazonTrackingId } = buildAffiliateUrl({
    url: CANONICAL,
    context: 'kit',
  });
  assert.equal(url, `${CANONICAL}?tag=bushgums-kit-22`);
  assert.equal(amazonTrackingId, 'bushgums-kit-22');
  assert.equal(amazonTrackingId, AMAZON_TRACKING_IDS.kit);
}

// 2. Amazon URL + gear-detail context.
{
  const { url, amazonTrackingId } = buildAffiliateUrl({
    url: CANONICAL,
    context: 'gear-detail',
  });
  assert.equal(url, `${CANONICAL}?tag=bushgums-gear-22`);
  assert.equal(amazonTrackingId, AMAZON_TRACKING_IDS['gear-detail']);
}

// 3. An existing incorrect tag is replaced, never duplicated.
{
  const { url } = buildAffiliateUrl({
    url: 'https://www.amazon.com.au/dp/B0G3P2ZNSV?tag=someone-else-22',
    context: 'kit',
  });
  assert.equal(tagOf(url), 'bushgums-kit-22');
  assert.equal(tagCount(url), 1);
}

// 4. Unrelated query parameters survive; Amazon search noise does not.
{
  const { url } = buildAffiliateUrl({
    url: 'https://www.amazon.com.au/dp/B0G3P2ZNSV?language=en_AU&qid=123',
    context: 'gear-detail',
  });
  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get('language'), 'en_AU');
  assert.equal(parsed.searchParams.get('qid'), null, 'search noise dropped');
  assert.equal(parsed.searchParams.get('tag'), 'bushgums-gear-22');
}

// 5. A clean canonical product URL stays canonical.
{
  const { url } = buildAffiliateUrl({ url: CANONICAL, context: 'kit' });
  assert.equal(
    url,
    'https://www.amazon.com.au/dp/B0G3P2ZNSV?tag=bushgums-kit-22',
  );
}

// 6. Long search/session URLs canonicalise to /dp/<ASIN>, keeping the ASIN.
{
  assert.equal(extractAmazonAsin(LONG_SEARCH_URL), 'B0G3P2ZNSV');
  assert.equal(canonicaliseAmazonUrl(LONG_SEARCH_URL), CANONICAL);
  const { url } = buildAffiliateUrl({ url: LONG_SEARCH_URL, context: 'kit' });
  assert.equal(url, `${CANONICAL}?tag=bushgums-kit-22`);

  assert.equal(extractAmazonAsin(LONG_REF_URL), 'B0DPFK6LPJ');
  const cloudUp = buildAffiliateUrl({
    url: LONG_REF_URL,
    context: 'gear-detail',
  });
  const cloudUpParsed = new URL(cloudUp.url);
  assert.equal(cloudUpParsed.origin, 'https://www.amazon.com.au');
  assert.equal(cloudUpParsed.pathname, '/dp/B0DPFK6LPJ');
  assert.equal(cloudUpParsed.searchParams.get('tag'), 'bushgums-gear-22');
  assert.ok(!cloudUp.url.includes('/ref='), 'ref_ path segment removed');
  assert.equal(cloudUpParsed.searchParams.get('sr'), null, 'search rank gone');
  assert.equal(cloudUpParsed.searchParams.get('crid'), null, 'crid gone');
  assert.equal(cloudUpParsed.searchParams.get('qid'), null, 'session id gone');
  // Variation selectors survive: these listings are multi-variant, so dropping
  // them could land the visitor on a different version of the product.
  assert.equal(cloudUpParsed.searchParams.get('th'), '1', 'th preserved');
  assert.equal(cloudUpParsed.searchParams.get('psc'), '1', 'psc preserved');
}

// 6b. Variation, seller and offer selectors are never stripped.
{
  const { url } = buildAffiliateUrl({
    url: 'https://www.amazon.com.au/dp/B0FXGHX1PL?th=1&psc=1&smid=A123&qid=9',
    context: 'gear-detail',
  });
  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get('th'), '1');
  assert.equal(parsed.searchParams.get('psc'), '1');
  assert.equal(parsed.searchParams.get('smid'), 'A123');
  assert.equal(parsed.searchParams.get('qid'), null);
  assert.equal(parsed.searchParams.get('tag'), 'bushgums-gear-22');
}

// 7. Non-Amazon and lookalike hosts never receive an Amazon tracking ID.
for (const url of [
  'https://www.bunnings.com.au/some-product_p0012345',
  'https://www.naturehike.com/products/cloud-up',
  'https://example.com/dp/B0G3P2ZNSV',
  'https://media-amazon.com/dp/B0G3P2ZNSV',
  'https://s3.amazonaws.com/dp/B0G3P2ZNSV',
  'https://amazon.com.au.phishing.example.com/dp/B0G3P2ZNSV',
  // Real Amazon marketplaces are an allowlist, so an arbitrary amazon.<tld>
  // is not a storefront and must never be tagged.
  'https://amazon.dev/dp/B0G3P2ZNSV',
  'https://amazon.zip/dp/B0G3P2ZNSV',
  'https://amazon.co.zz/dp/B0G3P2ZNSV',
  'https://notamazon.com.au/dp/B0G3P2ZNSV',
]) {
  assert.equal(isAmazonUrl(url), false, url);
  const built = buildAffiliateUrl({ url, context: 'kit' });
  assert.equal(built.url, url, url);
  assert.equal(built.amazonTrackingId, undefined, url);
  assert.ok(!built.url.includes('bushgums-'), url);
}

// 7b. Real Amazon storefronts and their subdomains are recognised.
for (const host of [
  'www.amazon.com.au',
  'amazon.com.au',
  'smile.amazon.com.au',
  'www.amazon.com',
  'www.amazon.co.uk',
  'www.amazon.co.jp',
]) {
  const url = `https://${host}/dp/B0G3P2ZNSV`;
  assert.equal(isAmazonUrl(url), true, host);
  assert.equal(
    buildAffiliateUrl({ url, context: 'kit' }).amazonTrackingId,
    'bushgums-kit-22',
    host,
  );
}

// 8. AliExpress deep links are untouched by the Amazon logic.
{
  const aliexpress = 'https://s.click.aliexpress.com/e/_c4V1qZBr';
  assert.equal(isAmazonUrl(aliexpress), false);
  assert.equal(
    buildAffiliateUrl({ url: aliexpress, context: 'kit' }).url,
    aliexpress,
  );
}

// 9. Invalid, empty and non-http URLs fail safely by returning the input.
for (const url of ['', 'not a url', '/dp/B0G3P2ZNSV', 'javascript:alert(1)']) {
  assert.equal(isAmazonUrl(url), false, url);
  assert.equal(extractAmazonAsin(url), undefined, url);
  assert.equal(canonicaliseAmazonUrl(url), url, url);
  assert.equal(buildAffiliateUrl({ url, context: 'kit' }).url, url, url);
}

// 10. Fragments survive, and an Amazon URL with no readable ASIN keeps its
// valid destination and only gains the tag.
{
  const { url } = buildAffiliateUrl({
    url: 'https://www.amazon.com.au/dp/B0G3P2ZNSV#customerReviews',
    context: 'gear-detail',
  });
  assert.equal(
    url,
    'https://www.amazon.com.au/dp/B0G3P2ZNSV?tag=bushgums-gear-22#customerReviews',
  );

  const storeUrl = 'https://www.amazon.com.au/stores/page/ABC123#gallery';
  assert.equal(extractAmazonAsin(storeUrl), undefined);
  assert.equal(canonicaliseAmazonUrl(storeUrl), storeUrl);
  assert.equal(
    buildAffiliateUrl({ url: storeUrl, context: 'kit' }).url,
    'https://www.amazon.com.au/stores/page/ABC123?tag=bushgums-kit-22#gallery',
  );
}

// 11. A missing context never invents a tracking ID.
{
  const built = buildAffiliateUrl({ url: CANONICAL });
  assert.equal(built.url, CANONICAL);
  assert.equal(built.amazonTrackingId, undefined);
}

// 12. Click context: kit and gear-detail produce the documented pairs, and a
// non-Amazon offer in the same place keeps its own tracking key.
{
  const slug = 'naturehike-cloud-up-tent';
  const amazonOffer = offers.find(
    (o) => o.productSlug === slug && isAmazonUrl(o.url),
  );
  assert.ok(amazonOffer, 'Cloud Up has an Amazon offer');

  const kitClick = buildTrackedMerchantUrl(amazonOffer, {
    productSlug: slug,
    sourceSurface: 'home',
    sourceId: 'kit-table',
    placement: 'home_buy_inline',
    amazonContext: 'kit',
  });
  assert.equal(kitClick.amazonTrackingId, 'bushgums-kit-22');
  assert.equal(kitClick.trackingKey, 'bushgums-kit-22');
  assert.equal(tagOf(kitClick.url), 'bushgums-kit-22');

  const gearClick = buildTrackedMerchantUrl(amazonOffer, {
    productSlug: slug,
    sourceSurface: 'gear',
    placement: 'product_buy_primary',
    amazonContext: 'gear-detail',
  });
  assert.equal(gearClick.amazonTrackingId, 'bushgums-gear-22');
  assert.equal(gearClick.trackingKey, 'bushgums-gear-22');
  assert.equal(tagOf(gearClick.url), 'bushgums-gear-22');

  const aliOffer = offers.find(
    (o) => o.productSlug === slug && !isAmazonUrl(o.url),
  );
  assert.ok(aliOffer, 'Cloud Up keeps its AliExpress offer');
  const aliClick = buildTrackedMerchantUrl(aliOffer, {
    productSlug: slug,
    sourceSurface: 'gear',
    placement: 'product_buy_primary',
    amazonContext: 'gear-detail',
  });
  assert.equal(aliClick.url, aliOffer.url, 'AliExpress URL unchanged');
  assert.equal(aliClick.amazonTrackingId, undefined);
  assert.ok(aliClick.trackingKey.startsWith('bg1_'));
}

// 12b. The Rock 60+5L Amazon offer must be the 60+5L ASIN. B0G3P2ZNSV looks
// right from its listing title but resolves to the 45 L variant, so it is
// pinned out here.
{
  const rockOffers = offers.filter(
    (o) => o.productSlug === 'naturehike-rock-60-5',
  );
  assert.ok(rockOffers.length > 0, 'Rock 60+5 still has an offer');
  assert.ok(
    rockOffers.every((o) => !o.url.includes('B0G3P2ZNSV')),
    'Rock 60+5 must never link to the 45 L variant B0G3P2ZNSV',
  );
  const rockAmazon = rockOffers.filter((o) => isAmazonUrl(o.url));
  assert.equal(rockAmazon.length, 1, 'Rock 60+5 has one Amazon offer');
  assert.equal(
    extractAmazonAsin(rockAmazon[0].url),
    'B08PV3XF4H',
    'Rock 60+5 links to the 60+5L ASIN',
  );
  assert.ok(
    rockOffers.some((o) => !isAmazonUrl(o.url)),
    'Rock 60+5 keeps its AliExpress alternative',
  );
}

// 13. No stored offer hard-codes a tag, and every stored Amazon URL is
// already in canonical /dp/<ASIN> form.
for (const offer of offers) {
  assert.ok(!/[?&]tag=/i.test(offer.url), `hard-coded tag in ${offer.url}`);
  if (isAmazonUrl(offer.url)) {
    const asin = extractAmazonAsin(offer.url);
    assert.ok(asin, `Amazon offer without a readable ASIN: ${offer.url}`);
    assert.equal(
      offer.url,
      `https://www.amazon.com.au/dp/${asin}`,
      `Amazon offer is not canonical: ${offer.url}`,
    );
  }
}

console.log('Affiliate URL and Amazon tracking ID checks passed.');
