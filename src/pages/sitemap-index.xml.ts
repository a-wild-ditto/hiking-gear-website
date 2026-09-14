import type { APIRoute } from 'astro';
import { site } from '../config/site';
const paths = [
  '/',
  '/starter-kits/',
  '/gear/',
  '/learn/',
  '/about/',
  '/contact/',
  '/faq/',
  '/guides/first-overnight-hike/',
  '/guides/sleeping-bag-temperature-guide/',
  '/guides/sleeping-mat-r-value-guide/',
  '/guides/choosing-your-first-hiking-tent/',
];
export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${site.url}${p}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
