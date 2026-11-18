import React from 'react';
import {Composition, Folder} from 'remotion';
import {HistoryScene} from './scenes/HistoryScene';
import {Intro} from './scenes/Intro';
import {Outro} from './scenes/Outro';
import {Walkthrough} from './scenes/Walkthrough';
import {Tutorial, TUTORIAL_FRAMES} from './Tutorial';
import {FPS, H, W} from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Menabung-Adegan">
      <Composition id="Intro" component={Intro} width={W} height={H} fps={FPS} durationInFrames={102} />
      <Composition id="Panduan" component={Walkthrough} width={W} height={H} fps={FPS} durationInFrames={825} />
      <Composition id="Riwayat" component={HistoryScene} width={W} height={H} fps={FPS} durationInFrames={165} />
      <Composition id="Penutup" component={Outro} width={W} height={H} fps={FPS} durationInFrames={120} />
    </Folder>
    <Composition id="TutorialMenabung" component={Tutorial} defaultProps={{lang: 'id' as const}} width={W} height={H} fps={FPS} durationInFrames={TUTORIAL_FRAMES} />
    <Composition id="TutorialSavingEn" component={Tutorial} defaultProps={{lang: 'en' as const}} width={W} height={H} fps={FPS} durationInFrames={TUTORIAL_FRAMES} />
  </>
);
