import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { guides } from '../data/guides';
import { productPages, productPath } from '../data/product-pages';

const corePaths = ['/', '/gear/', '/learn/', '/about/', '/contact/', '/faq/'];

function canonicalPath(path: string) {
  if (
    !path.startsWith('/') ||
    path.startsWith('//') ||
    path.includes('?') ||
    path.includes('#') ||
    new URL(path, site.url).pathname !== path
  ) {
    throw new Error(`Invalid sitemap path: ${path}`);
  }
  return path === '/' ? path : `${path.replace(/\/+$/, '')}/`;
}

function xmlEscape(value: string) {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function verifiedDate(date: unknown, context: string): string {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Invalid date for ${context}`);
  }
  const parsed = new Date(`${date}T00:00:00Z`);
  if (
    Number.isNaN(parsed.valueOf()) ||
    parsed.toISOString().slice(0, 10) !== date
  ) {
    throw new Error(`Invalid date for ${context}`);
  }
  return date;
}

function guideLastmod(guide: (typeof guides)[number]) {
  if (!('updatedOn' in guide)) return undefined;
  return verifiedDate(guide.updatedOn, guide.href);
}

export const GET: APIRoute = () => {
  const entries: { path: string; lastmod?: string }[] = [
    ...corePaths.map((path) => ({ path })),
    ...guides.map((guide) => ({
      path: guide.href,
      lastmod: guideLastmod(guide),
    })),
    ...productPages.map((product) => ({
      path: productPath(product.slug),
      lastmod: verifiedDate(product.researchedOn, product.slug),
    })),
  ];
  const paths = new Set<string>();
  const urls = entries.map(({ path, lastmod }) => {
    const canonical = canonicalPath(path);
    if (paths.has(canonical))
      throw new Error(`Duplicate sitemap path: ${canonical}`);
    paths.add(canonical);
    const loc = xmlEscape(new URL(canonical, site.url).toString());
    return `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
