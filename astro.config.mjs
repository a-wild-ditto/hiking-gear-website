import { defineConfig } from 'astro/config';
import { publicSite } from './site.config.mjs';

export default defineConfig({
  output: 'static',
  site: publicSite.url,
});
