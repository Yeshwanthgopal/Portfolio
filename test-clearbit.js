const https = require('https');
const domains = ['conversive.ai', 'gemstower.in', 'sunstone.co.in', 'credilinq.ai'];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 }));
  });
}

async function run() {
  for (const domain of domains) {
    const res = await checkUrl(`https://logo.clearbit.com/${domain}`);
    console.log(res);
  }
}

run();
