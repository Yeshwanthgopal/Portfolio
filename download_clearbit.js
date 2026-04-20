const fs = require('fs');

const extractors = [
  { name: 'conversive.png', url: 'https://logo.clearbit.com/beconversive.com' },
  { name: 'sunstone.png', url: 'https://logo.clearbit.com/sunstone.in' },
  { name: 'gemstower.png', url: 'https://logo.clearbit.com/gemstower.com' },
  { name: 'credilinq.png', url: 'https://logo.clearbit.com/credilinq.ai' }
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
        console.log(`Downloaded ${item.name} from clearbit`);
      } else {
        console.log(`Failed ${item.name} status: ${response.status}`);
      }
    } catch(err) {
      console.log(`Failed ${item.name} error: ${err.message}`);
    }
  }
}
run();
