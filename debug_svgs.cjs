const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  const path = require('path');
  await page.goto('file://' + path.resolve('index.html'));
  
  await new Promise(r => setTimeout(r, 4000));
  
  // Login
  await page.evaluate(() => {
     const inputs = document.querySelectorAll('input');
     if (inputs.length >= 2) {
         inputs[0].value = 'test@example.com';
         inputs[1].value = 'password123';
     }
     const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Sign In'));
     if (btn) btn.click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  await page.evaluate(() => {
    const svgs = document.querySelectorAll('svg');
    console.log(`SVG count: ${svgs.length}`);
  });
  
  await browser.close();
})();
