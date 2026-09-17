export const productionSiteUrl = 'https://bushgums.com.au';

const configuredUrl = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
const configuredEmail = process.env.PUBLIC_CONTACT_EMAIL;

export const publicSite = {
  url: productionSiteUrl,
  contactEmail: configuredEmail || '',
};

export function assertDeployConfig() {
  const problems = [];
  let validOrigin = false;
  try {
    const parsed = new URL(configuredUrl);
    validOrigin =
      configuredUrl === productionSiteUrl &&
      parsed.origin === productionSiteUrl;
  } catch {
    // A missing or malformed URL is handled by the same launch-input error.
  }
  if (configuredUrl && !validOrigin) {
    problems.push(`PUBLIC_SITE_URL must be ${productionSiteUrl}`);
  }
  if (
    !configuredEmail ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail) ||
    configuredEmail.endsWith('.example')
  ) {
    problems.push('PUBLIC_CONTACT_EMAIL must be a monitored contact address');
  }
  if (problems.length) {
    throw new Error(
      `Deployment configuration is incomplete:\n- ${problems.join('\n- ')}`,
    );
  }
}
