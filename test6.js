const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const client = await page.target().createCDPSession();
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 200,
    downloadThroughput: 50 * 1024,
    uploadThroughput: 50 * 1024
  });

  page.on('console', msg => console.log('LOG:', msg.text()));
  await page.goto('http://localhost:3000/index.html');
  await page.click('#btn-play');
  
  await new Promise(r => setTimeout(r, 6000));
  const errText = await page.evaluate(() => document.querySelector('.loading-text').textContent);
  console.log("Text after 6s:", errText);
  await browser.close();
})();
