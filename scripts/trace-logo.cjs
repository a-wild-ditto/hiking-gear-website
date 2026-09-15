// Traces src/assets/brand/logo-source.png into SVG paths with potrace.
// Outputs src/assets/brand/mark.svg (leaf + gumnuts) and
// public/logo-traced.svg (full lockup, text traced too).
// Run: node scripts/trace-logo.cjs
const fs = require('fs');
const Jimp = require('jimp');
const potrace = require('potrace');

const SRC = 'src/assets/brand/logo-source.png';
const trace = (img) =>
  new Promise((res, rej) =>
    img.getBuffer(Jimp.MIME_PNG, (e, buf) => {
      if (e) return rej(e);
      potrace.trace(
        buf,
        { threshold: 150, turdSize: 20, optTolerance: 0.3, alphaMax: 1, color: '#1f4a2c' },
        (err, svg) => (err ? rej(err) : res(svg)),
      );
    }),
  );

(async () => {
  const src = await Jimp.read(SRC);
  // Crop boxes measured from the 1448x1086 source.
  const markBox = [95, 345, 480, 405];
  const fullBox = [95, 345, 1275, 405];
  const mark = await trace(src.clone().crop(...markBox));
  const full = await trace(src.clone().crop(...fullBox));
  const toMark = (svg) =>
    svg
      .replace(/<svg[^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${markBox[2]} ${markBox[3]}">`)
      .replace(/fill="#1f4a2c"/g, 'fill="currentColor"')
      .replace(/stroke="none"\s*/g, '')
      .replace(/fill-rule="evenodd"/g, 'fill-rule="evenodd"');
  fs.writeFileSync('src/assets/brand/mark.svg', toMark(mark));
  fs.writeFileSync(
    'public/logo-traced.svg',
    full.replace(/<svg[^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fullBox[2]} ${fullBox[3]}" role="img" aria-label="Bush Gums">`),
  );
  console.log('traced', fs.statSync('src/assets/brand/mark.svg').size, fs.statSync('public/logo-traced.svg').size);
})();
