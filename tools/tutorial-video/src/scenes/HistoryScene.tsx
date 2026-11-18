import React from 'react';
import {Video} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {Background} from '../components/Background';
import {Loupe} from '../components/Loupe';
import {BEZEL, CLIP_SCALE, Phone, PHONE_H, PHONE_W, SCREEN_H, SCREEN_W} from '../components/Phone';
import {StepCaption} from '../components/StepCaption';
import {TapMarker} from '../components/TapMarker';
import {useStrings} from '../i18n';
import {CLIP_CROP, FPS, H, W} from '../theme';

export const HISTORY_SECONDS = 5.5;
/** Klip Riwayat mulai dipakai dari detik ini. */
const START = 0.8;
const CLIP = 'clips/riwayat.mp4';
const PHONE_LEFT = (W - PHONE_W) / 2;
const PHONE_TOP = H - PHONE_H - 48;

export const HistoryScene: React.FC = () => {
  const t = useStrings();
  return (
  <AbsoluteFill>
    <Background />
    <Phone style={{left: PHONE_LEFT, top: PHONE_TOP}}>
      <Video src={staticFile(CLIP)} trimBefore={Math.round(START * FPS)} muted style={{width: SCREEN_W, height: SCREEN_H}} />
    </Phone>
    <Sequence name="Ketuk Riwayat" from={Math.round((1.5 - START + 0.2) * FPS)} durationInFrames={22} layout="none">
      <TapMarker x={PHONE_LEFT + BEZEL + (323 - CLIP_CROP) * CLIP_SCALE} y={PHONE_TOP + BEZEL + (2267 - CLIP_CROP) * CLIP_SCALE} />
    </Sequence>
    <Sequence name="Perbesar transfer" from={Math.round(2.4 * FPS)} durationInFrames={Math.round((HISTORY_SECONDS - 2.4) * FPS)} layout="none">
      <Loupe
        src={CLIP}
        trimBefore={Math.round((START + 2.4) * FPS)}
        region={{x: 0, y: 1300, w: 1060, h: 520}}
        width={900}
        left={(W - 900) / 2}
        top={620}
        label={t.historyLoupe}
        icon="leaf_send"
      />
    </Sequence>
    <StepCaption label={t.historyLabel} title={t.historyTitle} body={t.historyBody} icon="note_pencil" />
  </AbsoluteFill>
  );
};
