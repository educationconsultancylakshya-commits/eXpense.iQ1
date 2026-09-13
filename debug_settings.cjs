const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  const path = require('path');
  await page.goto('file://' + path.resolve('index.html'));
  
  await new Promise(r => setTimeout(r, 4000));
  
  await page.evaluate(() => {
    if (window.lucide && window.lucide.icons) {
        console.log('Settings icon exists?', !!window.lucide.icons['settings']);
    } else {
        console.log('No lucide.icons found');
    }
  });
  
  await browser.close();
})();
