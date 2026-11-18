import React from 'react';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {HISTORY_SECONDS, HistoryScene} from './scenes/HistoryScene';
import {Intro, INTRO_SECONDS} from './scenes/Intro';
import {Outro, OUTRO_SECONDS} from './scenes/Outro';
import {Walkthrough, WALKTHROUGH_SECONDS} from './scenes/Walkthrough';
import {Audio} from '@remotion/media';
import {interpolate, staticFile} from 'remotion';
import {type Lang, LangContext} from './i18n';
import {FPS} from './theme';

export const TRANSITION_FRAMES = 15;
const f = (s: number) => Math.round(s * FPS);

export const TUTORIAL_FRAMES =
  f(INTRO_SECONDS) + f(WALKTHROUGH_SECONDS) + f(HISTORY_SECONDS) + f(OUTRO_SECONDS) - 3 * TRANSITION_FRAMES;

/** Tutorial menabung ke beberapa tujuan (ADR-048 §9), 9:16. */
export const Tutorial: React.FC<{lang: Lang}> = ({lang}) => (
  <LangContext.Provider value={lang}>
  <Audio
    src={staticFile('music/chiptune.m4a')}
    volume={(f) => interpolate(f, [0, 15, TUTORIAL_FRAMES - 45, TUTORIAL_FRAMES], [0, 0.45, 0.45, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
  />
  <TransitionSeries>
    <TransitionSeries.Sequence name="Intro" durationInFrames={102}>
      <Intro />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Panduan" durationInFrames={825}>
      <Walkthrough />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Riwayat" durationInFrames={165}>
      <HistoryScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Penutup" durationInFrames={120}>
      <Outro />
    </TransitionSeries.Sequence>
  </TransitionSeries>
  </LangContext.Provider>
);
