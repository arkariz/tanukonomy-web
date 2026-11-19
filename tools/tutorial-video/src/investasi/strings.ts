import type {Lang} from '../i18n';

/** Teks tutorial investasi (ADR-049). Klip berbahasa Indonesia dipakai kedua versi. */
const id = {
  intro: {
    pill: 'TUTORIAL TANUKONOMY',
    title: 'Catat investasimu',
    body: 'Saham, reksa dana, emas, dan obligasi dalam satu tempat.',
    chips: [
      {icon: 'stock_candle', text: 'Saham'},
      {icon: 'chart_investment', text: 'Reksa dana'},
      {icon: 'gold_bar', text: 'Emas'},
    ],
  },
  buy: [
    {title: 'Buka Investasi', body: 'Di tab Dompet, segmen Investasi berisi semua investasimu.'},
    {title: 'Catat pembelian', body: 'Pembelian dicatat dari dompet asal uangnya.'},
    {title: 'Instrumen baru', body: 'Tulis namanya, lalu pilih jenis, mis. Saham.'},
    {title: 'Isi jumlah', body: 'Saham dihitung dalam lot. 1 lot = 100 lembar.'},
    {title: 'Isi nominal', body: 'Ketuk nominal, lalu ketik total yang kamu bayar.'},
    {title: 'Simpan', body: 'Saldo dompet berkurang, investasi baru masuk daftar.'},
  ],
  buyLoupes: ['Total dibayar, termasuk biaya', 'Investasi baru di daftar'],
  value: [
    {title: 'Buka rinciannya', body: 'Lihat jumlah, nilai perolehan, dan harga rata-rata.'},
    {title: 'Perbarui nilai', body: 'Isi harga terbaru dari aplikasi sekuritasmu.'},
    {title: 'Lihat untung/rugi', body: 'Nilai pasar dan untung/rugi dihitung otomatis.'},
  ],
  valueLoupes: ['Posisimu', 'Untung belum terwujud'],
  asset: {label: 'HASILNYA', title: 'Masuk ke Total aset', body: 'Investasi menjadi lapis ketiga di Total aset.'},
  assetLoupe: 'Lapis Investasi',
  outro: {
    title: 'Selamat berinvestasi!',
    body: 'Jual beli tetap di aplikasi sekuritasmu, Tanukonomy mencatatnya.',
    path: 'Dompet › Investasi › Catat pembelian',
    icon: 'chart_investment',
  },
};

const en: typeof id = {
  intro: {
    pill: 'TANUKONOMY TUTORIAL',
    title: 'Track your investments',
    body: 'Stocks, mutual funds, gold, and bonds in one place.',
    chips: [
      {icon: 'stock_candle', text: 'Stocks'},
      {icon: 'chart_investment', text: 'Funds'},
      {icon: 'gold_bar', text: 'Gold'},
    ],
  },
  buy: [
    {title: 'Open Investments', body: 'On the Wallet tab, the Investments segment holds them all.'},
    {title: 'Record purchase', body: 'Shown as Catat pembelian here. It comes from the paying wallet.'},
    {title: 'New instrument', body: 'Type its name, then pick a type, e.g. Stock.'},
    {title: 'Enter the quantity', body: 'Stocks are counted in lots. 1 lot = 100 shares.'},
    {title: 'Enter the amount', body: 'Tap the amount, then type the total you paid.'},
    {title: 'Save', body: 'The wallet goes down and the new investment joins the list.'},
  ],
  buyLoupes: ['Total paid, including fees', 'New investment in the list'],
  value: [
    {title: 'Open its details', body: 'See the quantity, cost basis, and average price.'},
    {title: 'Update value', body: 'Enter the latest price from your broker app.'},
    {title: 'See the gain or loss', body: 'Market value and gain/loss are worked out for you.'},
  ],
  valueLoupes: ['Your position', 'Unrealized gain'],
  asset: {label: 'THE RESULT', title: 'Part of Total assets', body: 'Investments become the third layer of Total assets.'},
  assetLoupe: 'Investments layer',
  outro: {
    title: 'Happy investing!',
    body: 'You trade in your broker app, Tanukonomy records it.',
    path: 'Wallet › Investments › Record purchase',
    icon: 'chart_investment',
  },
};

export const INVEST_STRINGS: Record<Lang, typeof id> = {id, en};
