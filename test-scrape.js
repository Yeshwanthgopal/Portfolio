const https = require('https');
const fs = require('fs');

const domains = ['conversive.ai', 'www.gemstower.in', 'sunstone.co.in', 'credilinq.ai'];

async function fetchHtml(domain) {
  return new Promise((resolve, reject) => {
    https.get('https://' + domain, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  for (const d of domains) {
    try {
      const html = await fetchHtml(d);
      
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*logo/gi;
      const metaRegex = /<meta[^>]+property="og:image"[^>]+content=["']([^"']+)["']/i;
      const iconRegex = /<link[^>]+rel="[^"]*icon"[^>]+href=["']([^"']+)["']/i;
      
      let match = metaRegex.exec(html);
      if(!match) match = iconRegex.exec(html);
      
      console.log('Domain:', d, 'Found URL:', match ? match[1] : 'None');
    } catch(e) {
      console.log('Error for', d, e.message);
    }
  }
}
run();
