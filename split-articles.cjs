// split-articles.js
const fs = require('fs');
const path = require('path');

// Read the TypeScript file as text
const dataFile = path.join(__dirname, 'lib/data/artticleData.tsx');
const fileContent = fs.readFileSync(dataFile, 'utf-8');

// Extract the articlesData array using a regex (assumes export const articlesData: ArticleI[] = [ ... ];
const match = fileContent.match(/export const articlesData:[^=]*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find articlesData array in artticleData.tsx');
  process.exit(1);
}

const articlesArrayText = match[1];

// Use eval in a sandboxed context to parse the array (safe because you control the file)
const vm = require('vm');
let articlesData;
try {
  articlesData = vm.runInNewContext('(' + articlesArrayText + ')');
} catch (e) {
  console.error('Failed to parse articlesData array:', e);
  process.exit(1);
}

// Create output directory
const outDir = path.join(__dirname, 'lib/data/articles');
fs.mkdirSync(outDir, { recursive: true });

// Write each article as a separate JSON file
articlesData.forEach(article => {
  if (!article.slug) {
    console.warn('Skipping article with no slug:', article.title);
    return;
  }
  const outPath = path.join(outDir, `${article.slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(article, null, 2));
  console.log('Wrote', outPath);
});

console.log('Done!'); 