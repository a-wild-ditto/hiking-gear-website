import assert from 'node:assert/strict';
import {
  isAnalyticsAllowedHostname,
  isAnalyticsAllowedLocation,
} from '../src/config/analytics.ts';
import { originAllowed } from '../worker/index.ts';

for (const hostname of ['bushgums.com.au', 'www.bushgums.com.au']) {
  assert.equal(isAnalyticsAllowedHostname(hostname), true, hostname);
  assert.equal(isAnalyticsAllowedLocation(hostname, 'https:'), true, hostname);
}

for (const hostname of [
  'localhost',
  '127.0.0.1',
  '::1',
  'staging.bushgums.com.au',
  'branch-preview.pages.dev',
  'hiking-gear-website.example.workers.dev',
  'example.com',
]) {
  assert.equal(isAnalyticsAllowedHostname(hostname), false, hostname);
  assert.equal(isAnalyticsAllowedLocation(hostname, 'https:'), false, hostname);
}

assert.equal(isAnalyticsAllowedLocation('bushgums.com.au', 'http:'), false);

const requestFrom = (origin, site = 'same-origin') =>
  new Request('https://bushgums.com.au/api/analytics', {
    headers: { origin, 'sec-fetch-site': site },
  });

for (const origin of [
  'https://bushgums.com.au',
  'https://www.bushgums.com.au',
]) {
  assert.equal(originAllowed(requestFrom(origin)), true, origin);
}

for (const origin of [
  'http://bushgums.com.au',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
  'https://staging.bushgums.com.au',
  'https://branch-preview.pages.dev',
  'https://hiking-gear-website.example.workers.dev',
  'https://example.com',
]) {
  assert.equal(originAllowed(requestFrom(origin)), false, origin);
}

assert.equal(
  originAllowed(requestFrom('https://bushgums.com.au', 'cross-site')),
  false,
  'cross-site fetch',
);

console.log('Analytics production-host allowlist checks passed.');
