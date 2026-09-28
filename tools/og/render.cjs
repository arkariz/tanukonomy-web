// Merender public/og/og-{id,en}.png dari og.html. Butuh Playwright:
//   NODE_PATH=$(npm root -g) node tools/og/render.cjs
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const lang of ['id', 'en']) {
    await p.goto(`file://${path.resolve(__dirname, 'og.html')}?lang=${lang}`);
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.resolve(__dirname, `../../public/og/og-${lang}.png`) });
  }
  await b.close();
})();
