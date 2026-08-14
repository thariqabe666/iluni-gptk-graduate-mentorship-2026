import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <!-- Background Circle with GM2026 Brand Cream & Ink Border -->
  <circle cx="50" cy="50" r="45" fill="#F6F5EC" stroke="#000000" stroke-width="7" />
  <!-- GM2026 Brand Red Solid Cursor Arrowhead -->
  <path d="M3 11L20 4L13 21L11 13L3 11Z" fill="#F81919" transform="translate(17.53, 14.71) scale(2.8235)" />
</svg>`;

// Function to generate an ICO file from PNG buffers
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + numImages * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const entries = [];
  const imageBuffers = [];

  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...imageBuffers]);
}

async function main() {
  const rootDir = process.cwd();
  const appDir = path.join(rootDir, 'app');
  const publicDir = path.join(rootDir, 'public');

  console.log('Generating GM2026 cursor favicon assets...');

  // 1. Write SVG favicons
  const svgPathApp = path.join(appDir, 'icon.svg');
  const svgPathPublic = path.join(publicDir, 'icon.svg');
  fs.writeFileSync(svgPathApp, svgContent, 'utf8');
  fs.writeFileSync(svgPathPublic, svgContent, 'utf8');
  console.log('✓ Wrote app/icon.svg and public/icon.svg');

  // 2. Generate PNGs at various resolutions using sharp
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngs = {};

  for (const s of sizes) {
    const buf = await sharp(Buffer.from(svgContent))
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngs[s] = buf;
  }

  // 3. Generate multi-resolution favicon.ico (16, 32, 48)
  const icoBuffer = createIco([
    { size: 16, buffer: pngs[16] },
    { size: 32, buffer: pngs[32] },
    { size: 48, buffer: pngs[48] },
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Replaced app/favicon.ico and public/favicon.ico with GM2026 cursor ICO');

  // 4. Apple Touch Icon & PWA icons
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), pngs[180]);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngs[180]);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), pngs[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), pngs[512]);
  console.log('✓ Generated apple-icon.png and PWA icons');

  console.log('All favicon assets successfully generated!');
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
