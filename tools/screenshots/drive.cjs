const { chromium } = require('playwright');
const [,, OUT, SCHEME='light', LOCALE='id-ID', TAG='id'] = process.argv;
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: LOCALE, colorScheme: SCHEME });
  const p = await ctx.newPage();
  await p.goto('http://localhost:8080'); await p.waitForTimeout(9000);
  await p.evaluate(() => document.querySelector('flt-semantics-placeholder')?.click());
  await p.waitForTimeout(1000);
  const shot = async (n) => { await p.mouse.move(389, 5); await p.waitForTimeout(2200); await p.screenshot({ path: `${OUT}/${n}-${TAG}-${SCHEME}.png` }); console.log('shot', n); };
  const nav = async (i) => { await p.mouse.click([39,117,195,273,351][i], 815); await p.waitForTimeout(1300); };
  try {
    await shot('home');
    await nav(2); await p.locator('input').first().fill('45000'); await p.waitForTimeout(600); await shot('catat'); await p.keyboard.press('Escape'); await p.waitForTimeout(800);
    await nav(3); await shot('transaksi');
    await nav(4); await shot('dompet');
    await nav(1); await p.mouse.click(195, 520); await p.waitForTimeout(1500); await shot('anggaran-detail');
    await p.goto('http://localhost:8080'); await p.waitForTimeout(9000); await p.evaluate(() => document.querySelector('flt-semantics-placeholder')?.click()); await p.waitForTimeout(1000);
    await nav(0); await p.mouse.click(195, 629); await p.waitForTimeout(1500); await shot('freelance');
  } catch (e) { console.log('ERR', e.message.slice(0, 200)); await shot('error'); }
  await b.close();
})();
