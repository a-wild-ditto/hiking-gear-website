import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { productPages, productPath } from '../data/product-pages';

const paths = [
  '/',
  '/gear/',
  '/learn/',
  '/about/',
  '/contact/',
  '/faq/',
  '/guides/overnight-hike-packing-list/',
  '/guides/sleeping-bag-temperature-ratings/',
  '/guides/sleeping-mat-r-value/',
  '/guides/2-person-hiking-tent-guide/',
  ...productPages.map((product) => productPath(product.slug)),
];

export const GET: APIRoute = () => {
  const urls = paths
    .map((path) => `<url><loc>${site.url}${path}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
