const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', req => console.log('REQ FAIL:', req.url()));
  await page.goto('http://localhost:3000/index.html');
  await page.click('#btn-play');
  await new Promise(r => setTimeout(r, 3000));
  await browser.close();
})();
