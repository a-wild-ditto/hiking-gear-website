// Traces the generated line drawings in src/assets/illustrations/source into
// black mask SVGs (public/illustrations/*.svg) with potrace; CSS tints them.
// Run: node scripts/trace-illustrations.cjs
const fs = require('fs');
const Jimp = require('jimp');
const potrace = require('potrace');

const DIR = 'src/assets/illustrations';
const NAMES = [
  'wilted-gum-branch',
  'icon-choice',
  'icon-price',
  'icon-quality',
];

const trace = (buf) =>
  new Promise((res, rej) =>
    potrace.trace(
      buf,
      { threshold: 128, turdSize: 80, optTolerance: 0.4, color: '#000' },
      (err, svg) => (err ? rej(err) : res(svg)),
    ),
  );

(async () => {
  for (const name of NAMES) {
    const src = await Jimp.read(`${DIR}/source/${name}.png`);
    // Flatten any transparency onto white before thresholding.
    const img = new Jimp(src.bitmap.width, src.bitmap.height, 0xffffffff);
    img.composite(src, 0, 0);
    img.greyscale();
    // Any line colour works: pixels that differ clearly from the corner
    // background become black ink, everything else white.
    const { data, width, height } = img.bitmap;
    const bg = data[0];
    img.scan(0, 0, width, height, (x, y, i) => {
      const v = Math.abs(data[i] - bg) > 60 ? 0 : 255;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 255;
    });
    // Crop to the drawing's bounding box plus a small margin.
    let [x0, y0, x1, y1] = [width, height, 0, 0];
    img.scan(0, 0, width, height, (x, y, i) => {
      if (data[i] === 0) {
        x0 = Math.min(x0, x);
        y0 = Math.min(y0, y);
        x1 = Math.max(x1, x);
        y1 = Math.max(y1, y);
      }
    });
    const m = 12;
    x0 = Math.max(0, x0 - m);
    y0 = Math.max(0, y0 - m);
    x1 = Math.min(width - 1, x1 + m);
    y1 = Math.min(height - 1, y1 + m);
    img.crop(x0, y0, x1 - x0 + 1, y1 - y0 + 1);
    const svg = await trace(await img.getBufferAsync(Jimp.MIME_PNG));
    fs.writeFileSync(`public/illustrations/${name}.svg`, svg);
    console.log(name, `${x1 - x0 + 1}x${y1 - y0 + 1}`, svg.length);
  }
})();
