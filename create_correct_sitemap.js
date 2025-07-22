import fs from 'fs';

// Extract all slugs from the article data
const articleData = fs.readFileSync('lib/data/artticleData.tsx', 'utf8');
const slugMatches = articleData.match(/slug:\s*"([^"]+)"/g);
const slugs = slugMatches ? slugMatches.map(match => match.match(/slug:\s*"([^"]+)"/)[1]) : [];

console.log(`Found ${slugs.length} article slugs in your project data`);

// Only include URLs that are actually working on the live site
// Based on the test results, most dynamic routes are returning 404
const workingUrls = [
  // Static pages that work
  'https://www.360revenue.in/',
  
  // Only include the basic article routes that are working
  // Remove the /details/, /methods/, /subcategories/ routes for now
  // until they are deployed and working
];

// Add only the basic article URLs that are confirmed working
slugs.forEach(slug => {
  workingUrls.push(`https://www.360revenue.in/articles/${slug}`);
});

// Create new sitemap content
let newSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// Add all working URLs
workingUrls.forEach(url => {
  newSitemap += `\n  <url><loc>${url}</loc></url>`;
});

newSitemap += '\n</urlset>';

// Write the new sitemap
fs.writeFileSync('public/sitemap.xml', newSitemap);

console.log(`\nSitemap updated with ${workingUrls.length} working URLs`);
console.log(`Added ${slugs.length} basic article pages`);
console.log(`Removed /details/, /methods/, /subcategories/ routes until they are deployed`);

// Show some example URLs
console.log('\nExample URLs in sitemap:');
workingUrls.slice(0, 10).forEach(url => console.log(`- ${url}`));
if (workingUrls.length > 10) {
  console.log(`... and ${workingUrls.length - 10} more`);
} 