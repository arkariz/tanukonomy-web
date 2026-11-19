import React from 'react';
import {Composition, Folder} from 'remotion';
import {HistoryScene} from './scenes/HistoryScene';
import {Intro} from './scenes/Intro';
import {Outro} from './scenes/Outro';
import {Walkthrough} from './scenes/Walkthrough';
import {Tutorial, TUTORIAL_FRAMES} from './Tutorial';
import {InvestAsset, InvestBuy, INVEST_DURATIONS, INVEST_FRAMES, InvestTutorial, InvestValue} from './investasi/InvestTutorial';
import {FPS, H, W} from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Menabung-Adegan">
      <Composition id="Intro" component={Intro} width={W} height={H} fps={FPS} durationInFrames={102} />
      <Composition id="Panduan" component={Walkthrough} width={W} height={H} fps={FPS} durationInFrames={825} />
      <Composition id="Riwayat" component={HistoryScene} width={W} height={H} fps={FPS} durationInFrames={165} />
      <Composition id="Penutup" component={Outro} width={W} height={H} fps={FPS} durationInFrames={120} />
    </Folder>
    <Folder name="Investasi-Adegan">
      <Composition id="InvestBeli" component={InvestBuy} width={W} height={H} fps={FPS} durationInFrames={INVEST_DURATIONS.buy} />
      <Composition id="InvestNilai" component={InvestValue} width={W} height={H} fps={FPS} durationInFrames={INVEST_DURATIONS.value} />
      <Composition id="InvestAset" component={InvestAsset} width={W} height={H} fps={FPS} durationInFrames={INVEST_DURATIONS.asset} />
    </Folder>
    <Composition id="TutorialInvestasi" component={InvestTutorial} defaultProps={{lang: 'id' as const}} width={W} height={H} fps={FPS} durationInFrames={INVEST_FRAMES} />
    <Composition id="TutorialInvestingEn" component={InvestTutorial} defaultProps={{lang: 'en' as const}} width={W} height={H} fps={FPS} durationInFrames={INVEST_FRAMES} />
    <Composition id="TutorialMenabung" component={Tutorial} defaultProps={{lang: 'id' as const}} width={W} height={H} fps={FPS} durationInFrames={TUTORIAL_FRAMES} />
    <Composition id="TutorialSavingEn" component={Tutorial} defaultProps={{lang: 'en' as const}} width={W} height={H} fps={FPS} durationInFrames={TUTORIAL_FRAMES} />
  </>
);
