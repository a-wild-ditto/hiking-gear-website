import { readFileSync } from 'node:fs';

import { assertDeployConfig, productionSiteUrl } from '../site.config.mjs';

function readJsonc(path) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(source);
}

async function assertStaticProductionConfig() {
  const wrangler = readJsonc('../wrangler.jsonc');
  const { default: astroConfig } = await import(
    new URL('../astro.config.mjs', import.meta.url)
  );
  const problems = [];

  if (wrangler.name !== 'hiking-gear-website') {
    problems.push('wrangler.jsonc name must be hiking-gear-website');
  }
  if (wrangler.workers_dev !== false) {
    problems.push('wrangler.jsonc workers_dev must be false');
  }
  if (wrangler.assets?.directory !== './dist') {
    problems.push('wrangler.jsonc assets.directory must be ./dist');
  }
  if (
    'route' in wrangler ||
    'routes' in wrangler ||
    'custom_domains' in wrangler
  ) {
    problems.push(
      'wrangler.jsonc must leave the dashboard-managed custom domain undeclared',
    );
  }
  if (astroConfig.output !== 'static') {
    problems.push('astro.config.mjs output must be static');
  }

  if (problems.length) {
    throw new Error(
      `Production config is invalid:\n- ${problems.join('\n- ')}`,
    );
  }
}

await assertStaticProductionConfig();
assertDeployConfig();
console.log(`Deployment configuration is valid for ${productionSiteUrl}.`);
