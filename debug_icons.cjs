const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  const path = require('path');
  await page.goto('file://' + path.resolve('index.html'));
  
  await new Promise(r => setTimeout(r, 4000));
  
  await page.evaluate(() => {
    const svgs = document.querySelectorAll('svg');
    console.log('SVG count in page:', svgs.length);
  });
  
  await browser.close();
})();
