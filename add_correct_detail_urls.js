import fs from 'fs';

// Read the current sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// Extract all method names from the investingMethods object
const articleData = fs.readFileSync('lib/data/artticleData.tsx', 'utf8');
const methodMatches = articleData.match(/"([^"]+)":\s*{/g);
const methodNames = methodMatches ? methodMatches.map(match => match.match(/"([^"]+)":\s*{/)[1]) : [];

console.log(`Found ${methodNames.length} method names in investingMethods`);

// Create detail URLs with proper URL encoding
const detailUrls = methodNames.map(methodName => {
  const encodedName = encodeURIComponent(methodName);
  return `https://www.360revenue.in/articles/details/${encodedName}`;
});

// Create new sitemap content
let newSitemap = sitemap.replace('</urlset>', '');

// Add the detail URLs
detailUrls.forEach(url => {
  newSitemap += `\n  <url><loc>${url}</loc></url>`;
});

newSitemap += '\n</urlset>';

// Write the updated sitemap
fs.writeFileSync('public/sitemap.xml', newSitemap);

console.log(`\nAdded ${detailUrls.length} detail URLs to sitemap`);
console.log('\nExample detail URLs added:');
detailUrls.slice(0, 10).forEach(url => console.log(`- ${url}`));
if (detailUrls.length > 10) {
  console.log(`... and ${detailUrls.length - 10} more`);
} 