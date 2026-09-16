const configuredUrl = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
const configuredEmail = process.env.PUBLIC_CONTACT_EMAIL;

export const publicSite = {
  url: configuredUrl || 'http://localhost:4321',
  contactEmail: configuredEmail || '',
};

export function assertDeployConfig() {
  const problems = [];
  let validOrigin = false;
  try {
    const parsed = new URL(configuredUrl);
    validOrigin =
      parsed.protocol === 'https:' &&
      parsed.origin === configuredUrl &&
      !parsed.hostname.endsWith('.example') &&
      parsed.hostname !== 'localhost';
  } catch {
    // A missing or malformed URL is handled by the same launch-input error.
  }
  if (!validOrigin) {
    problems.push('PUBLIC_SITE_URL must be the final https:// site URL');
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
