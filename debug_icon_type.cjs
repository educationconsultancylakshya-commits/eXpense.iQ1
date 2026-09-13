const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  const path = require('path');
  await page.goto('file://' + path.resolve('index.html'));
  
  await new Promise(r => setTimeout(r, 4000));
  
  await page.evaluate(() => {
    if (window.lucide && window.lucide.icons && window.lucide.icons['Wallet']) {
        const icon = window.lucide.icons['Wallet'];
        console.log('Type:', typeof icon);
        console.log('Keys:', Object.keys(icon).join(', '));
        console.log('Is array?', Array.isArray(icon));
        if (Array.isArray(icon)) {
           console.log('Array length:', icon.length);
           console.log('Array contents:', JSON.stringify(icon));
        }
    }
  });
  
  await browser.close();
})();
