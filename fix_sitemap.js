import fs from 'fs';

// Read the broken URLs
const brokenUrls = fs.readFileSync('broken_urls.txt', 'utf8').split('\n').filter(url => url.trim());

// Read the current sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// Create a backup
fs.writeFileSync('public/sitemap.xml.backup', sitemap);

console.log(`Found ${brokenUrls.length} broken URLs to remove`);

// Remove each broken URL from the sitemap
let updatedSitemap = sitemap;
let removedCount = 0;

brokenUrls.forEach(brokenUrl => {
  if (brokenUrl.trim()) {
    const urlPattern = `<url><loc>${brokenUrl.trim()}</loc></url>`;
    if (updatedSitemap.includes(urlPattern)) {
      updatedSitemap = updatedSitemap.replace(urlPattern, '');
      removedCount++;
      console.log(`Removed: ${brokenUrl.trim()}`);
    }
  }
});

// Clean up extra whitespace and empty lines
updatedSitemap = updatedSitemap.replace(/\n\s*\n/g, '\n');

// Write the updated sitemap
fs.writeFileSync('public/sitemap.xml', updatedSitemap);

console.log(`\nSitemap updated successfully!`);
console.log(`Removed ${removedCount} broken URLs`);
console.log(`Backup saved as public/sitemap.xml.backup`); 