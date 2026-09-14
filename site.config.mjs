const configuredUrl = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
const configuredEmail = process.env.PUBLIC_CONTACT_EMAIL;

export const publicSite = {
  url: configuredUrl || 'http://localhost:4321',
  contactEmail: configuredEmail || 'hello@trailwise.example',
};

export function assertDeployConfig() {
  const problems = [];
  if (!configuredUrl || configuredUrl.includes('.example')) {
    problems.push('PUBLIC_SITE_URL must be the final https:// site URL');
  }
  if (!configuredEmail || configuredEmail.endsWith('@trailwise.example')) {
    problems.push('PUBLIC_CONTACT_EMAIL must be a monitored contact address');
  }
  if (problems.length) {
    throw new Error(
      `Deployment configuration is incomplete:\n- ${problems.join('\n- ')}`,
    );
  }
}
