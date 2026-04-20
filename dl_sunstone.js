const fs = require('fs');

async function run() {
  const url = 'https://s2.googleusercontent.com/s2/favicons?domain=sunstone.in&sz=256';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const buffer = await response.arrayBuffer();
      fs.writeFileSync('./public/logos/sunstone.png', Buffer.from(buffer));
      console.log(`Downloaded sunstone.png`);
    } else {
      console.log(`Failed sunstone.png status: ${response.status}`);
    }
  } catch(err) {
    console.log(`error: ${err.message}`);
  }
}
run();
