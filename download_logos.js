const fs = require('fs');

const extractors = [
  { name: 'conversive.png', url: 'https://s2.googleusercontent.com/s2/favicons?domain=conversive.ai&sz=256' },
  { name: 'sunstone.png', url: 'https://s2.googleusercontent.com/s2/favicons?domain=sunstone.co.in&sz=256' },
  { name: 'gemstower.png', url: 'https://s2.googleusercontent.com/s2/favicons?domain=gemstower.in&sz=256' },
  { name: 'credilinq.svg', url: 'https://credilinq.ai/wp-content/uploads/2025/08/Layer_1-1.svg' },
  { name: 'credilinq.png', url: 'https://s2.googleusercontent.com/s2/favicons?domain=credilinq.ai&sz=256' }
];

async function run() {
  if (!fs.existsSync('./public/logos')) {
    fs.mkdirSync('./public/logos');
  }
  for (const item of extractors) {
    try {
      const response = await fetch(item.url);
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        fs.writeFileSync('./public/logos/' + item.name, Buffer.from(buffer));
        console.log(`Downloaded ${item.name}`);
      } else {
        console.log(`Failed ${item.name} status: ${response.status}`);
      }
    } catch(err) {
      console.log(`Failed ${item.name} error: ${err.message}`);
    }
  }
}
run();
