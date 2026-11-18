import React from 'react';
import {Video} from '@remotion/media';
import {AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {Loupe} from '../components/Loupe';
import {BEZEL, CLIP_SCALE, Phone, PHONE_H, PHONE_W, SCREEN_H, SCREEN_W} from '../components/Phone';
import {StepCaption} from '../components/StepCaption';
import {SwipeMarker, TapMarker} from '../components/TapMarker';
import events from '../events.json';
import {useStrings} from '../i18n';
import {CLIP_CROP, FPS, H, TAP_LAG, W} from '../theme';

/** Panjang adegan: rekaman alur menabung sampai kembali ke Tabungan. */
export const WALKTHROUGH_SECONDS = 27.5;

const CLIP = 'clips/menabung.mp4';
const PHONE_LEFT = (W - PHONE_W) / 2;
const PHONE_TOP = H - PHONE_H - 48;
const toX = (x: number) => PHONE_LEFT + BEZEL + (x - CLIP_CROP) * CLIP_SCALE;
const toY = (y: number) => PHONE_TOP + BEZEL + (y - CLIP_CROP) * CLIP_SCALE;
const f = (seconds: number) => Math.round(seconds * FPS);

type Step = {from: number; to: number; icon: string};
const steps: Step[] = [
  {from: 0, to: 3.9, icon: 'bank_wallet'},
  {from: 3.9, to: 7.0, icon: 'piggy_savings'},
  {from: 7.0, to: 10.6, icon: 'coins_currency'},
  {from: 10.6, to: 16.4, icon: 'report_bars'},
  {from: 16.4, to: 22.9, icon: 'star_bonus'},
  {from: 22.9, to: WALKTHROUGH_SECONDS, icon: 'check_completed'},
];

type Ev = {t: number; type: string; x?: number; y?: number; x2?: number; y2?: number; ms?: number; label: string};

/** Loupe: wilayah rekaman (piksel sesudah dipangkas) yang diperbesar. */
const loupes = [
  {from: 11.6, to: 16.3, region: {x: 0, y: 1370, w: 1060, h: 360}, icon: 'report_bars'},
  {from: 21.1, to: 22.8, region: {x: 0, y: 950, w: 1060, h: 600}, icon: 'star_bonus'},
  {from: 24.8, to: 27.4, region: {x: 0, y: 1630, w: 1060, h: 240}, icon: 'piggy_savings'},
];

export const Walkthrough: React.FC = () => {
  const t = useStrings();
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  return (
    <AbsoluteFill>
      <Background />
      <Phone style={{left: PHONE_LEFT, top: PHONE_TOP, translate: `0px ${(1 - enter) * 400}px`, opacity: enter}}>
        <Video src={staticFile(CLIP)} muted style={{width: SCREEN_W, height: SCREEN_H}} />
      </Phone>
      {(events as Ev[]).map((e, i) => {
        if (e.t > WALKTHROUGH_SECONDS) return null;
        if (e.type === 'tap') {
          const small = e.label.startsWith('key-');
          return (
            <Sequence key={i} name={`Ketuk ${e.label}`} from={f(e.t + TAP_LAG - 0.15)} durationInFrames={22} layout="none">
              <TapMarker x={toX(e.x!)} y={toY(e.y!)} size={small ? 0.75 : 1} />
            </Sequence>
          );
        }
        if (e.type === 'swipe') {
          const frames = f((e.ms ?? 500) / 1000);
          return (
            <Sequence key={i} name="Geser" from={f(e.t + TAP_LAG - 0.15)} durationInFrames={frames + 10} layout="none">
              <SwipeMarker x={toX(e.x!)} y={toY(e.y!)} x2={toX(e.x2!)} y2={toY(e.y2!)} frames={frames} />
            </Sequence>
          );
        }
        return null;
      })}
      {loupes.map((l, i) => (
        <Sequence key={i} name={`Perbesar ${i + 1}`} from={f(l.from)} durationInFrames={f(l.to - l.from)} layout="none">
          <Loupe
            src={CLIP}
            trimBefore={f(l.from)}
            region={l.region}
            width={900}
            left={(W - 900) / 2}
            top={600}
            label={t.loupes[i]}
            icon={l.icon}
          />
        </Sequence>
      ))}
      {steps.map((s, i) => (
        <Sequence key={i} name={`Langkah ${i + 1}`} from={f(s.from)} durationInFrames={f(s.to - s.from)} layout="none">
          <StepCaption step={i + 1} total={steps.length} title={t.steps[i].title} body={t.steps[i].body} icon={s.icon} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
