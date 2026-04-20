const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  console.log("Navigating to https://www.gemstower.in/...");
  await page.goto('https://www.gemstower.in/', { waitUntil: 'networkidle2' });

  console.log("Waiting for popups...");
  await new Promise(r => setTimeout(r, 4000));

  // Try to click any close buttons
  await page.evaluate(() => {
    // Look for common popup close buttons
    const closeButtons = document.querySelectorAll('button, .close, .elementor-icon, a, div');
    for (let b of closeButtons) {
      if (b.innerText && b.innerText.match(/^close|x$/i)) {
        b.click();
      } else if (b.className && typeof b.className === 'string' && b.className.match(/close|dismiss/i)) {
        b.click();
      }
    }
    
    // Attempt to hide absolute/fixed overlays if they are full screen
    const elements = document.querySelectorAll('div');
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      if ((style.position === 'fixed' || style.position === 'absolute') && parseInt(style.zIndex, 10) > 100) {
         if (el.innerText.includes('Close') || el.innerHTML.includes('svg')) {
             // likely a modal container
             if(el.offsetWidth > 500 && el.offsetHeight > 500) {
                  el.style.display = 'none';
             }
         }
      }
    });

    // Directly click anywhere outside the popup if they use a backdrop
    try {
        document.body.click();
    } catch(e) {}
  });

  await new Promise(r => setTimeout(r, 1000));
  
  console.log("Taking screenshot...");
  await page.screenshot({ path: 'public/gemstower.png' });
  
  await browser.close();
  console.log("Screenshot saved successfully to public/gemstower.png!");
})();
