import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { productionSiteUrl } from '../site.config.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const problems = [];

function report(message) {
  problems.push(message);
}

async function readBuilt(path) {
  try {
    return await readFile(resolve(dist, path), 'utf8');
  } catch {
    report(`Missing built file: ${path}`);
    return '';
  }
}

async function htmlFiles(directory) {
  const files = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, item.name);
    if (item.isDirectory()) files.push(...(await htmlFiles(path)));
    else if (item.isFile() && item.name.endsWith('.html')) files.push(path);
  }
  return files;
}

function attribute(tag, name) {
  const match = tag.match(
    new RegExp(
      `(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
      'i',
    ),
  );
  return match?.[1] ?? match?.[2] ?? match?.[3];
}

function matchingTags(html, name, predicate) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))]
    .map(([tag]) => tag)
    .filter(predicate);
}

function pagePath(file) {
  const output = relative(dist, file).split(sep).join('/');
  if (output === 'index.html') return '/';
  if (output.endsWith('/index.html')) return `/${output.slice(0, -10)}`;
  return `/${output.replace(/\.html$/, '/')}`;
}

function canonicalUrl(path) {
  return new URL(path, productionSiteUrl).toString();
}

function xmlValue(fragment, tag) {
  return fragment.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1];
}

function validDate(date) {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }
  const parsed = new Date(`${date}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.valueOf()) &&
    parsed.toISOString().slice(0, 10) === date
  );
}

function structuredData(html, path) {
  const nodes = [];
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  for (const [, attributes, content] of scripts) {
    if (
      attribute(attributes, 'type')?.toLowerCase() !== 'application/ld+json'
    ) {
      continue;
    }
    try {
      const parsed = JSON.parse(content);
      const documents = Array.isArray(parsed) ? parsed : [parsed];
      for (const document of documents) {
        if (document?.['@context'] !== 'https://schema.org') {
          report(`${path}: JSON-LD must use the schema.org context`);
        }
        const graph = document?.['@graph'];
        if (graph && !Array.isArray(graph)) {
          report(`${path}: JSON-LD @graph must be an array`);
        } else {
          nodes.push(...(graph ?? [document]));
        }
      }
    } catch {
      report(`${path}: invalid JSON-LD`);
    }
  }
  if (scripts.length === 0 || nodes.length === 0) {
    report(`${path}: missing JSON-LD`);
  }
  return nodes;
}

function schemaNodes(nodes, type) {
  return nodes.filter((node) =>
    (Array.isArray(node?.['@type'])
      ? node['@type']
      : [node?.['@type']]
    ).includes(type),
  );
}

function checkInternalLinks(html, path, pagePaths, pageHtml) {
  const source = canonicalUrl(path);
  const markup = html.replace(
    /<(?:script|style)\b[^>]*>[\s\S]*?<\/(?:script|style)>/gi,
    '',
  );
  for (const tag of matchingTags(markup, 'a', () => true)) {
    const href = attribute(tag, 'href');
    if (!href || /^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    let target;
    try {
      target = new URL(href.replace(/&amp;/g, '&'), source);
    } catch {
      report(`${path}: invalid link ${href}`);
      continue;
    }
    if (
      target.hostname !== 'bushgums.com.au' &&
      target.hostname !== 'www.bushgums.com.au'
    ) {
      continue;
    }
    if (target.origin !== productionSiteUrl) {
      report(`${path}: internal link uses noncanonical site origin ${href}`);
      continue;
    }
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(target.pathname);
    } catch {
      report(`${path}: invalid percent-encoded link ${href}`);
      continue;
    }
    const pageVariant =
      decodedPath === '/' ? '/' : `${decodedPath.replace(/\/+$/, '')}/`;
    if (pagePaths.has(pageVariant)) {
      if (decodedPath !== pageVariant) {
        report(`${path}: internal link uses noncanonical path ${href}`);
      }
      if (target.hash) {
        let fragment;
        try {
          fragment = decodeURIComponent(target.hash.slice(1));
        } catch {
          report(`${path}: invalid link fragment ${href}`);
          continue;
        }
        const targetHtml = pageHtml.get(pageVariant);
        const ids = matchingTags(
          targetHtml,
          '[a-z][a-z0-9-]*',
          (element) => attribute(element, 'id') === fragment,
        );
        if (ids.length === 0)
          report(`${path}: link fragment does not exist: ${href}`);
      }
      continue;
    }
    const localFile = resolve(dist, `.${decodedPath}`);
    if (!localFile.startsWith(`${dist}${sep}`) || !existsSync(localFile)) {
      report(`${path}: internal link has no built target: ${href}`);
    }
  }
}

const sitemap = await readBuilt('sitemap.xml');
const robots = await readBuilt('robots.txt');
const redirects = await readBuilt('_redirects');
const urlEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
  ([, entry]) => ({
    loc: xmlValue(entry, 'loc'),
    lastmod: xmlValue(entry, 'lastmod'),
  }),
);
const sitemapUrls = new Set();

if (
  !sitemap.includes(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  )
) {
  report('sitemap.xml is not a URL sitemap');
}
if (urlEntries.length === 0) report('sitemap.xml has no URLs');
for (const { loc, lastmod } of urlEntries) {
  if (!loc) {
    report('sitemap.xml contains a URL entry without loc');
    continue;
  }
  if (sitemapUrls.has(loc)) report(`Duplicate sitemap URL: ${loc}`);
  sitemapUrls.add(loc);
  try {
    const url = new URL(loc);
    if (
      url.origin !== productionSiteUrl ||
      (url.pathname !== '/' && !url.pathname.endsWith('/')) ||
      url.search ||
      url.hash
    ) {
      report(`Noncanonical sitemap URL: ${loc}`);
    }
  } catch {
    report(`Invalid sitemap URL: ${loc}`);
  }
  if (lastmod && !validDate(lastmod))
    report(`Invalid sitemap lastmod for ${loc}: ${lastmod}`);
}

const expectedRobotsSitemap = `Sitemap: ${canonicalUrl('/sitemap.xml')}`;
const robotsLines = robots
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);
if (robotsLines.filter((line) => line === expectedRobotsSitemap).length !== 1) {
  report(`robots.txt must contain one ${expectedRobotsSitemap}`);
}
if (robotsLines.filter((line) => /^Sitemap:/i.test(line)).length !== 1) {
  report('robots.txt must advertise only the canonical sitemap');
}
if (
  !robotsLines.includes('User-agent: *') ||
  !robotsLines.includes('Allow: /')
) {
  report('robots.txt must allow the general user agent');
}
if (robotsLines.some((line) => /^Disallow:\s*\/?\s*$/i.test(line))) {
  report('robots.txt must not block the whole site');
}

const redirectRules = redirects
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/));
function hasPermanentRedirect(source, destination) {
  return redirectRules.some(
    ([from, to, status]) =>
      from === source && to === destination && status === '301',
  );
}
if (!hasPermanentRedirect('/sitemap-index.xml', '/sitemap.xml')) {
  report('Legacy sitemap endpoint must redirect permanently to /sitemap.xml');
}
for (const [oldPath, newPath] of [
  ['first-overnight-hike', 'overnight-hike-packing-list'],
  ['sleeping-bag-temperature-guide', 'sleeping-bag-temperature-ratings'],
  ['sleeping-mat-r-value-guide', 'sleeping-mat-r-value'],
  ['choosing-your-first-hiking-tent', '2-person-hiking-tent-guide'],
]) {
  for (const suffix of ['', '/']) {
    if (
      !hasPermanentRedirect(
        `/guides/${oldPath}${suffix}`,
        `/guides/${newPath}/`,
      )
    ) {
      report(`Missing canonical legacy redirect: /guides/${oldPath}${suffix}`);
    }
  }
}

const files = await htmlFiles(dist).catch((error) => {
  report(`Cannot read built HTML in dist: ${error.message}`);
  return [];
});
if (files.length === 0) report('No built HTML pages found');
const indexable = new Set();
const pageHtml = new Map();
const pagePaths = new Set(files.map(pagePath));
const sitemapByUrl = new Map(urlEntries.map((entry) => [entry.loc, entry]));
const titles = new Map();
for (const file of files) {
  const path = pagePath(file);
  const html = await readFile(file, 'utf8');
  pageHtml.set(path, html);
  const titleTags = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  const title = titleTags[0]?.[1]?.trim();
  const descriptions = matchingTags(
    html,
    'meta',
    (tag) => attribute(tag, 'name')?.toLowerCase() === 'description',
  );
  const canonicals = matchingTags(
    html,
    'link',
    (tag) => attribute(tag, 'rel')?.toLowerCase() === 'canonical',
  );
  const robotsTags = matchingTags(
    html,
    'meta',
    (tag) => attribute(tag, 'name')?.toLowerCase() === 'robots',
  );
  const noindex = robotsTags.some((tag) =>
    /(?:^|[,\s])noindex(?:$|[,\s])/i.test(attribute(tag, 'content') ?? ''),
  );
  const expectedRobots =
    path === '/404/'
      ? 'noindex, nofollow'
      : [
            '/build-my-kit/',
            '/affiliate-disclosure/',
            '/privacy/',
            '/terms/',
          ].includes(path)
        ? 'noindex, follow'
        : undefined;
  const actualRobots = robotsTags.map((tag) =>
    attribute(tag, 'content')?.toLowerCase(),
  );
  if (
    expectedRobots &&
    (actualRobots.length !== 1 || actualRobots[0] !== expectedRobots)
  ) {
    report(`${path}: expected robots directive ${expectedRobots}`);
  }
  if (!expectedRobots && noindex) report(`${path}: unexpected noindex`);
  if (titleTags.length !== 1 || !title)
    report(`${path}: expected one meaningful title`);
  else if (titles.has(title))
    report(`${path}: duplicate title with ${titles.get(title)}`);
  else titles.set(title, path);
  if (
    descriptions.length !== 1 ||
    !attribute(descriptions[0], 'content')?.trim()
  ) {
    report(`${path}: expected one nonempty meta description`);
  }
  if (
    canonicals.length !== 1 ||
    attribute(canonicals[0], 'href') !== canonicalUrl(path)
  ) {
    report(`${path}: canonical link must be ${canonicalUrl(path)}`);
  }
  if (matchingTags(html, 'h1', () => true).length !== 1) {
    report(`${path}: expected one h1`);
  }
  const nodes = structuredData(html, path);
  const websites = schemaNodes(nodes, 'WebSite');
  if (websites.length !== 1 || websites[0].url !== productionSiteUrl) {
    report(`${path}: expected one WebSite schema for ${productionSiteUrl}`);
  }
  if (
    path.startsWith('/guides/') ||
    (path.startsWith('/gear/') && path !== '/gear/')
  ) {
    const articles = schemaNodes(nodes, 'Article');
    const breadcrumbs = schemaNodes(nodes, 'BreadcrumbList');
    if (articles.length !== 1 || breadcrumbs.length !== 1) {
      report(`${path}: expected Article and BreadcrumbList schema`);
    } else {
      const article = articles[0];
      const lastBreadcrumb = breadcrumbs[0].itemListElement?.at(-1);
      if (lastBreadcrumb?.item !== canonicalUrl(path)) {
        report(`${path}: final breadcrumb must match the canonical URL`);
      }
      const entityUrl =
        typeof article.mainEntityOfPage === 'string'
          ? article.mainEntityOfPage
          : article.mainEntityOfPage?.['@id'];
      if (entityUrl !== canonicalUrl(path)) {
        report(
          `${path}: Article mainEntityOfPage must match the canonical URL`,
        );
      }
      if (article.url && article.url !== canonicalUrl(path)) {
        report(`${path}: Article URL must match the canonical URL`);
      }
      if (path.startsWith('/guides/')) {
        if (article.datePublished && !validDate(article.datePublished)) {
          report(`${path}: invalid Article datePublished`);
        }
        if (article.dateModified && !validDate(article.dateModified)) {
          report(`${path}: invalid Article dateModified`);
        }
        if (
          article.datePublished &&
          article.dateModified &&
          article.dateModified < article.datePublished
        ) {
          report(`${path}: Article dateModified precedes datePublished`);
        }
        const lastmod = sitemapByUrl.get(canonicalUrl(path))?.lastmod;
        if (article.dateModified && !lastmod) {
          report(`${path}: dated guide is missing sitemap lastmod`);
        }
        if (lastmod && lastmod !== article.dateModified) {
          report(
            `${path}: sitemap lastmod must match the source Article dateModified`,
          );
        }
      }
    }
    if (path.startsWith('/gear/')) {
      const products = schemaNodes(nodes, 'Product');
      if (products.length !== 1 || products[0].url !== canonicalUrl(path)) {
        report(`${path}: expected one Product schema with the canonical URL`);
      }
      const lastmod = sitemapByUrl.get(canonicalUrl(path))?.lastmod;
      const modified = schemaNodes(nodes, 'Article')[0]?.dateModified;
      if (!lastmod || !validDate(lastmod) || lastmod !== modified) {
        report(
          `${path}: product sitemap lastmod must match Article dateModified`,
        );
      }
    }
  }
  if (!noindex) indexable.add(canonicalUrl(path));
}

for (const [path, html] of pageHtml) {
  checkInternalLinks(html, path, pagePaths, pageHtml);
}

for (const url of indexable) {
  if (!sitemapUrls.has(url))
    report(`Indexable page missing from sitemap: ${url}`);
}
for (const url of sitemapUrls) {
  if (!indexable.has(url))
    report(`Sitemap URL has no indexable HTML page: ${url}`);
}

try {
  await readFile(resolve(dist, 'sitemap-index.xml'));
  report('Legacy sitemap endpoint was built as an asset instead of a redirect');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

if (problems.length) {
  console.error(`SEO check failed:\n- ${problems.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(
    `SEO check passed: ${indexable.size} indexable pages, ${sitemapUrls.size} sitemap URLs, ${files.length} HTML pages.`,
  );
}
