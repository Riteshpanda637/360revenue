import fs from 'fs';

// Read the current sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// Extract all slugs from the article data
const articleData = fs.readFileSync('lib/data/artticleData.tsx', 'utf8');
const slugMatches = articleData.match(/slug:\s*"([^"]+)"/g);
const slugs = slugMatches ? slugMatches.map(match => match.match(/slug:\s*"([^"]+)"/)[1]) : [];

console.log(`Found ${slugs.length} article slugs in your project data`);

// URLs that should be working based on your project structure
const workingUrls = [
  // Static pages
  'https://www.360revenue.in/',
  'https://www.360revenue.in/about',
  'https://www.360revenue.in/blog',
  'https://www.360revenue.in/categories',
  'https://www.360revenue.in/privacypolicy',
  'https://www.360revenue.in/methods',
  'https://www.360revenue.in/subcategories',
  'https://www.360revenue.in/terms&condition',
  
  // Articles (from your data)
  ...slugs.map(slug => `https://www.360revenue.in/articles/${slug}`),
  
  // Article details pages
  ...slugs.map(slug => `https://www.360revenue.in/articles/details/${slug}`),
  
  // Subcategory pages
  ...slugs.map(slug => `https://www.360revenue.in/subcategories/${slug}`),
  
  // Method detail pages
  ...slugs.map(slug => `https://www.360revenue.in/methods/${slug}`),
  
  // Keywords (from your existing sitemap)
  'https://www.360revenue.in/keywords/passive%20income',
  'https://www.360revenue.in/keywords/side%20hustles',
  'https://www.360revenue.in/keywords/investing',
  'https://www.360revenue.in/keywords/budgeting',
  'https://www.360revenue.in/keywords/financial%20freedom',
  'https://www.360revenue.in/keywords/wealth%20building',
  'https://www.360revenue.in/keywords/online%20business',
  'https://www.360revenue.in/keywords/financial%20literacy',
  'https://www.360revenue.in/keywords/debt%20management',
  'https://www.360revenue.in/keywords/saving%20strategies',
  'https://www.360revenue.in/keywords/affiliate%20marketing',
  'https://www.360revenue.in/keywords/digital%20marketing',
  'https://www.360revenue.in/keywords/entrepreneurship',
  'https://www.360revenue.in/keywords/remote%20work',
  'https://www.360revenue.in/keywords/personal%20finance'
];

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
console.log(`Added ${slugs.length} article pages`);
console.log(`Added ${slugs.length} article detail pages`);
console.log(`Added ${slugs.length} subcategory pages`);
console.log(`Added ${slugs.length} method detail pages`);
console.log(`Added 8 static pages`);
console.log(`Added 15 keyword pages`);

// Show some example slugs
console.log('\nExample article slugs found:');
slugs.slice(0, 10).forEach(slug => console.log(`- ${slug}`));
if (slugs.length > 10) {
  console.log(`... and ${slugs.length - 10} more`);
} 