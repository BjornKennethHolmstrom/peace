const fs = require('fs');
const path = require('path');

function copyRedirectFile() {
  const sourcePath = path.join(__dirname, '..', 'public', 'root-redirect.html');
  const outputPath = path.join(__dirname, '..', 'out', 'index.html');
  
  // Create the out directory if it doesn't exist
  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    // Copy the file
    fs.copyFileSync(sourcePath, outputPath);
    console.log('✓ Successfully created redirect at /index.html');
  } catch (error) {
    console.error('Error copying redirect file:', error);
    process.exit(1);
  }
}

copyRedirectFile();
