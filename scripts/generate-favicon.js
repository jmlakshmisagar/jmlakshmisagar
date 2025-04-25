const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    const size = 32;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#bcaaa4';
    ctx.fillRect(0, 0, size, size);

    // Text
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LS', size/2, size/2);

    // Create the public directory if it doesn't exist
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Save as PNG first
    const pngBuffer = canvas.toBuffer('image/png');
    const faviconPath = path.join(publicDir, 'favicon.ico');
    fs.writeFileSync(faviconPath, pngBuffer);

    console.log('Favicon generated successfully at:', faviconPath);
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();