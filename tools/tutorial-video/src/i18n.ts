import {createContext, useContext} from 'react';

export type Lang = 'id' | 'en';

const id = {
  stepLabel: (n: number, t: number) => `LANGKAH ${n} DARI ${t}`,
  steps: [
    {title: 'Buka Tabungan', body: 'Di tab Dompet, ketuk segmen Tabungan.'},
    {title: 'Ketuk Menabung', body: 'Punya dua tujuan atau lebih? Mode bagi langsung aktif.'},
    {title: 'Isi nominal', body: 'Ketik jumlah yang kamu sisihkan di papan angka.'},
    {title: 'Atur persen', body: 'Ketuk kotak persen, lalu ketik. Jumlahnya harus 100%.'},
    {title: 'Isi sisa', body: 'Pilih tujuan, ketuk Isi sisa: kekurangannya langsung terisi.'},
    {title: 'Catat transfer', body: 'Tiap tujuan bertambah sesuai bagiannya.'},
  ],
  loupes: ['Kotak aktif & jumlah persen', 'Darurat terisi 10%', 'Kemajuan tujuan naik'],
  historyLabel: 'HASILNYA',
  historyTitle: 'Tercatat per tujuan',
  historyBody: 'Riwayat menampilkan satu transfer untuk tiap tujuan.',
  historyLoupe: 'Satu transfer per tujuan',
  introPill: 'TUTORIAL TANUKONOMY',
  introTitle: 'Menabung ke beberapa tujuan',
  introBody: 'Bagi satu setoran ke banyak tujuan dengan persen.',
  chips: ['Darurat', 'Liburan', 'Pendidikan'],
  outroTitle: 'Selamat menabung!',
  outroBody: 'Kamu memindahkan uangnya di bank atau e-wallet, Tanukonomy mencatatnya.',
  outroPath: 'Dompet › Tabungan › Menabung',
};

const en: typeof id = {
  stepLabel: (n, t) => `STEP ${n} OF ${t}`,
  steps: [
    {title: 'Open Savings', body: 'On the Wallet tab, tap the Savings segment.'},
    {title: 'Tap Add savings', body: 'Shown as Menabung in this clip. Two or more goals? Split mode turns on.'},
    {title: 'Enter the amount', body: 'Type how much you set aside on the keypad.'},
    {title: 'Set percentages', body: 'Tap a percentage box, then type. They must add up to 100%.'},
    {title: 'Fill the rest', body: 'Pick a goal, tap Fill the rest (Isi sisa): the shortfall fills in.'},
    {title: 'Record the transfer', body: 'Each goal grows by its share.'},
  ],
  loupes: ['Active box & total percentage', 'Darurat set to 10%', 'Goal progress goes up'],
  historyLabel: 'THE RESULT',
  historyTitle: 'Recorded per goal',
  historyBody: 'History shows one transfer for each goal.',
  historyLoupe: 'One transfer per goal',
  introPill: 'TANUKONOMY TUTORIAL',
  introTitle: 'Save to several goals at once',
  introBody: 'Split one deposit across goals by percentage.',
  chips: ['Emergency', 'Holiday', 'Education'],
  outroTitle: 'Happy saving!',
  outroBody: 'You move the money in your bank or e-wallet, Tanukonomy records it.',
  outroPath: 'Wallet › Savings › Add savings',
};

export const STRINGS = {id, en};
export const LangContext = createContext<Lang>('id');
export const useStrings = () => STRINGS[useContext(LangContext)];
