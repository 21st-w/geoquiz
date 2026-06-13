const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', error => console.log('ERROR:', error.message));
  await page.goto('http://localhost:3000/index.html');
  await page.click('#btn-play');
  await new Promise(r => setTimeout(r, 4000));
  await browser.close();
})();
