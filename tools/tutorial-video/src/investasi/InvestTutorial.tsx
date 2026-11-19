import React, {useContext} from 'react';
import {Audio} from '@remotion/media';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {interpolate, staticFile} from 'remotion';
import {type ClipEvent, ClipScene} from '../components/ClipScene';
import {type Lang, LangContext} from '../i18n';
import {Intro} from '../scenes/Intro';
import {Outro} from '../scenes/Outro';
import {FPS} from '../theme';
import aset from './events-aset.json';
import beli from './events-beli.json';
import nilai from './events-nilai.json';
import {INVEST_STRINGS} from './strings';

/** Jeda layar berubah sesudah ketukan pada rekaman investasi (diukur dari bingkai). */
const LAG = 0.7;
const f = (s: number) => Math.round(s * FPS);
const T = 15;

export const INVEST_DURATIONS = {intro: 102, buy: f(31.5), value: f(17.5), asset: f(7.5), outro: 120};
export const INVEST_FRAMES =
  INVEST_DURATIONS.intro + INVEST_DURATIONS.buy + INVEST_DURATIONS.value + INVEST_DURATIONS.asset + INVEST_DURATIONS.outro - 4 * T;

const useInvest = () => INVEST_STRINGS[useContext(LangContext)];

/** Adegan Catat pembelian (instrumen baru TLKM, 5 lot, Rp1.900.000). */
export const InvestBuy: React.FC = () => {
  const s = useInvest();
  const icons = ['chart_investment', 'note_pencil', 'stock_candle', 'report_bars', 'coins_currency', 'check_completed'];
  const bounds = [0, 2.6, 7.6, 14.6, 18.4, 24.8, 31.5];
  return (
    <ClipScene
      clip="clips/investasi-beli.mp4"
      seconds={31.5}
      events={beli as ClipEvent[]}
      lag={LAG}
      skipEvents={['tutup-keyboard']}
      stepTotal={9}
      steps={s.buy.map((step, i) => ({...step, icon: icons[i], from: bounds[i], to: bounds[i + 1]}))}
      loupes={[
        {from: 21.6, to: 24.7, region: {x: 0, y: 460, w: 1060, h: 330}, label: s.buyLoupes[0], icon: 'coins_currency'},
        {from: 29.6, to: 31.4, region: {x: 0, y: 1330, w: 1060, h: 270}, label: s.buyLoupes[1], icon: 'stock_candle'},
      ]}
    />
  );
};

/** Adegan rincian dan Perbarui nilai (Rp4.100 per lembar). */
export const InvestValue: React.FC = () => {
  const s = useInvest();
  const icons = ['report_bars', 'price_refresh', 'star_bonus'];
  const bounds = [0, 4.9, 12.6, 17.5];
  return (
    <ClipScene
      clip="clips/investasi-nilai.mp4"
      seconds={17.5}
      events={nilai as ClipEvent[]}
      lag={LAG}
      enter={false}
      skipEvents={['tutup-keyboard']}
      stepOffset={6}
      stepTotal={9}
      steps={s.value.map((step, i) => ({...step, icon: icons[i], from: bounds[i], to: bounds[i + 1]}))}
      loupes={[
        {from: 3.0, to: 4.8, region: {x: 0, y: 1260, w: 1060, h: 480}, label: s.valueLoupes[0], icon: 'report_bars'},
        {from: 13.6, to: 17.4, region: {x: 0, y: 200, w: 1060, h: 600}, label: s.valueLoupes[1], icon: 'star_bonus'},
      ]}
    />
  );
};

/** Adegan hasil: kembali ke Dompet, lapis Investasi di Total aset. */
export const InvestAsset: React.FC = () => {
  const s = useInvest();
  return (
    <ClipScene
      clip="clips/investasi-aset.mp4"
      seconds={7.5}
      events={aset as ClipEvent[]}
      lag={LAG}
      enter={false}
      steps={[{...s.asset, icon: 'bank_wallet', from: 0, to: 7.5}]}
      loupes={[{from: 4.8, to: 7.4, region: {x: 0, y: 600, w: 1060, h: 400}, label: s.assetLoupe, icon: 'chart_investment'}]}
    />
  );
};

const InvestIntro: React.FC = () => <Intro content={useInvest().intro} />;
const InvestOutro: React.FC = () => <Outro content={useInvest().outro} />;

/** Tutorial fitur investasi (ADR-049), 9:16. */
export const InvestTutorial: React.FC<{lang: Lang}> = ({lang}) => (
  <LangContext.Provider value={lang}>
    <Audio
      src={staticFile('music/chiptune.m4a')}
      loop
      volume={(fr) => interpolate(fr, [0, 15, INVEST_FRAMES - 45, INVEST_FRAMES], [0, 0.45, 0.45, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
    />
    <TransitionSeries>
      <TransitionSeries.Sequence name="Intro" durationInFrames={INVEST_DURATIONS.intro}>
        <InvestIntro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: T})} />
      <TransitionSeries.Sequence name="Catat pembelian" durationInFrames={INVEST_DURATIONS.buy}>
        <InvestBuy />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: T})} />
      <TransitionSeries.Sequence name="Perbarui nilai" durationInFrames={INVEST_DURATIONS.value}>
        <InvestValue />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: T})} />
      <TransitionSeries.Sequence name="Total aset" durationInFrames={INVEST_DURATIONS.asset}>
        <InvestAsset />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: T})} />
      <TransitionSeries.Sequence name="Penutup" durationInFrames={INVEST_DURATIONS.outro}>
        <InvestOutro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </LangContext.Provider>
);
