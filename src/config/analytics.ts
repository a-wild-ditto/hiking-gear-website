export const ANALYTICS_ALLOWED_HOSTS = [
  'bushgums.com.au',
  'www.bushgums.com.au',
] as const;

export function isAnalyticsAllowedHostname(hostname: string) {
  return (ANALYTICS_ALLOWED_HOSTS as readonly string[]).includes(
    hostname.toLowerCase(),
  );
}

export function isAnalyticsAllowedLocation(hostname: string, protocol: string) {
  return protocol === 'https:' && isAnalyticsAllowedHostname(hostname);
}

/**
 * Analytics intentionally runs only on the production bushgums.com.au
 * hostnames. This prevents local development, automated agents, Playwright
 * tests, preview deployments and staging traffic from contaminating production
 * analytics.
 */
export function shouldEnableAnalytics() {
  return (
    typeof window !== 'undefined' &&
    isAnalyticsAllowedLocation(
      window.location.hostname,
      window.location.protocol,
    )
  );
}
