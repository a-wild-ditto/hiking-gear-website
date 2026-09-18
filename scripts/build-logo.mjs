// Builds public/logo.svg (traced mark + wordmark outlined from Outfit
// SemiBold) and public/logo-mark.svg. Re-trace the mark first with
// scripts/trace-logo.cjs if logo-source.png changes.
// Run: node scripts/build-logo.mjs
import fs from 'node:fs';
import opentype from 'opentype.js';

const COLOR = '#1f4a2c';
const mark = fs.readFileSync('src/assets/brand/mark.svg', 'utf8');
const [, , mw, mh] = mark
  .match(/viewBox="([^"]+)"/)[1]
  .split(' ')
  .map(Number);
const inner = mark
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replaceAll('currentColor', COLOR);

const buf = fs.readFileSync(
  'node_modules/@fontsource/outfit/files/outfit-latin-600-normal.woff',
);
const font = opentype.parse(
  buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
);
// Positions measured against the source artwork (mark crop origin 95,345).
const size = 168;
const baseline = 255;
const text = new opentype.Path();
let x = 495;
let prev;
// Manual layout: opentype.js can't run this font's GSUB tables.
for (const ch of 'Bush Gums') {
  const g = font.charToGlyph(ch);
  if (prev) x += (font.getKerningValue(prev, g) * size) / font.unitsPerEm;
  text.extend(g.getPath(x, baseline, size));
  x += (g.advanceWidth * size) / font.unitsPerEm + size * 0.015;
  prev = g;
}
const width = Math.ceil(text.getBoundingBox().x2 + 20);

fs.writeFileSync(
  'public/logo.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${mh}" role="img" aria-label="Bush Gums"><svg width="${mw}" height="${mh}" viewBox="0 0 ${mw} ${mh}">${inner}</svg><path fill="${COLOR}" d="${text.toPathData(2)}"/></svg>\n`,
);
fs.writeFileSync(
  'public/logo-mark.svg',
  mark.replaceAll('currentColor', COLOR),
);
console.log('logo.svg', width, 'x', mh);
