import https from 'https';
import fs from 'fs';

// Read the sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// Extract all URLs
const urlMatches = sitemap.match(/<loc>(https:\/\/www\.360revenue\.in\/[^<]+)<\/loc>/g);
const urls = urlMatches.map(match => match.replace('<loc>', '').replace('</loc>', ''));

console.log(`Testing ${urls.length} URLs...`);

const results = {
  working: [],
  broken: []
};

let completed = 0;

function testUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      if (res.statusCode === 200) {
        results.working.push(url);
      } else {
        results.broken.push(url);
      }
      completed++;
      resolve();
    });

    req.on('error', () => {
      results.broken.push(url);
      completed++;
      resolve();
    });

    req.setTimeout(5000, () => {
      req.destroy();
      results.broken.push(url);
      completed++;
      resolve();
    });
  });
}

async function testAllUrls() {
  // Test URLs in batches to avoid overwhelming the server
  const batchSize = 10;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(batch.map(testUrl));
    
    // Progress update
    console.log(`Progress: ${completed}/${urls.length} URLs tested`);
  }

  console.log('\n=== RESULTS ===');
  console.log(`Working URLs: ${results.working.length}`);
  console.log(`Broken URLs (404s): ${results.broken.length}`);
  
  if (results.broken.length > 0) {
    console.log('\n=== BROKEN URLs (404s) ===');
    results.broken.forEach(url => console.log(url));
  }
}

testAllUrls(); 