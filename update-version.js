const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const version = process.argv[2];
if (!version) {
  console.error('Version argument is required');
  process.exit(1);
}

packageJson.version = version;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
console.log(`Updated package.json version to ${version}`);