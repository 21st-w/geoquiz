const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('ERROR:', msg.text());
  });
  await page.goto('http://localhost:3000/index.html');
  await page.click('#btn-play');
  await new Promise(r => setTimeout(r, 4000));
  const text = await page.evaluate(() => document.getElementById('loading-overlay').style.display);
  console.log("Loading overlay display after 4s:", text);
  await browser.close();
})();
