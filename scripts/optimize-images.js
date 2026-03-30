import sharp from 'sharp';
import { statSync, existsSync } from 'fs';

const SRC  = 'public/assets/avatar-source.png'; // оригинал, не трогаем
const WEBP = 'public/assets/avatar.webp';
const PNG  = 'public/assets/avatar.png';
const SIZE = 160; // 2x retina (displayed at 80px)

if (!existsSync(SRC)) {
  console.error('optimize-images: source not found at', SRC);
  process.exit(1);
}

await Promise.all([
  sharp(SRC)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .webp({ quality: 85 })
    .toFile(WEBP),

  sharp(SRC)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(PNG),
]);

const webpSize = statSync(WEBP).size;
const pngSize  = statSync(PNG).size;
const srcSize  = statSync(SRC).size;

console.log(`optimize-images: ${(srcSize / 1024).toFixed(0)} KB → webp ${(webpSize / 1024).toFixed(1)} KB, png ${(pngSize / 1024).toFixed(1)} KB`);
