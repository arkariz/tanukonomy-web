import React from 'react';
import {Video} from '@remotion/media';
import {AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {Background} from './Background';
import {Loupe} from './Loupe';
import {BEZEL, CLIP_SCALE, Phone, PHONE_H, PHONE_W, SCREEN_H, SCREEN_W} from './Phone';
import {StepCaption} from './StepCaption';
import {SwipeMarker, TapMarker} from './TapMarker';
import {CLIP_CROP, FPS, H, W} from '../theme';

export type ClipEvent = {t: number; type: string; x?: number; y?: number; x2?: number; y2?: number; ms?: number; label: string};
export type ClipStep = {from: number; to: number; icon: string; title: string; body: string; label?: string};
export type ClipLoupe = {from: number; to: number; region: {x: number; y: number; w: number; h: number}; label: string; icon: string};

const PHONE_LEFT = (W - PHONE_W) / 2;
const PHONE_TOP = H - PHONE_H - 48;
const toX = (x: number) => PHONE_LEFT + BEZEL + (x - CLIP_CROP) * CLIP_SCALE;
const toY = (y: number) => PHONE_TOP + BEZEL + (y - CLIP_CROP) * CLIP_SCALE;
const f = (seconds: number) => Math.round(seconds * FPS);

/**
 * Satu adegan rekaman layar di bingkai ponsel: keterangan per langkah, penanda
 * ketuk/geser dari log rekaman ([events], detik sejak rekaman, [lag] = jeda
 * layar berubah), dan kaca pembesar. [skipEvents] = label yang tidak diberi
 * penanda (mis. menutup keyboard).
 */
export const ClipScene: React.FC<{
  clip: string;
  seconds: number;
  events: ClipEvent[];
  lag: number;
  steps: ClipStep[];
  loupes?: ClipLoupe[];
  stepOffset?: number;
  stepTotal?: number;
  enter?: boolean;
  skipEvents?: string[];
}> = ({clip, seconds, events, lag, steps, loupes = [], stepOffset = 0, stepTotal, enter = true, skipEvents = []}) => {
  const frame = useCurrentFrame();
  const show = enter
    ? interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})
    : 1;
  return (
    <AbsoluteFill>
      <Background />
      <Phone style={{left: PHONE_LEFT, top: PHONE_TOP, translate: `0px ${(1 - show) * 400}px`, opacity: show}}>
        <Video src={staticFile(clip)} muted style={{width: SCREEN_W, height: SCREEN_H}} />
      </Phone>
      {events.map((e, i) => {
        if (e.t + lag > seconds || skipEvents.includes(e.label)) return null;
        const start = f(e.t + lag - 0.15);
        if (e.type === 'tap') {
          return (
            <Sequence key={i} name={`Ketuk ${e.label}`} from={start} durationInFrames={22} layout="none">
              <TapMarker x={toX(e.x!)} y={toY(e.y!)} size={e.label.startsWith('key-') ? 0.75 : 1} />
            </Sequence>
          );
        }
        if (e.type === 'swipe') {
          const frames = f((e.ms ?? 500) / 1000);
          return (
            <Sequence key={i} name="Geser" from={start} durationInFrames={frames + 10} layout="none">
              <SwipeMarker x={toX(e.x!)} y={toY(e.y!)} x2={toX(e.x2!)} y2={toY(e.y2!)} frames={frames} />
            </Sequence>
          );
        }
        return null;
      })}
      {loupes.map((l, i) => (
        <Sequence key={i} name={`Perbesar ${i + 1}`} from={f(l.from)} durationInFrames={f(l.to - l.from)} layout="none">
          <Loupe src={clip} trimBefore={f(l.from)} region={l.region} width={900} left={(W - 900) / 2} top={600} label={l.label} icon={l.icon} />
        </Sequence>
      ))}
      {steps.map((s, i) => (
        <Sequence key={i} name={`Langkah ${stepOffset + i + 1}`} from={f(s.from)} durationInFrames={f(s.to - s.from)} layout="none">
          <StepCaption
            step={stepOffset + i + 1}
            total={stepTotal ?? steps.length}
            label={s.label}
            title={s.title}
            body={s.body}
            icon={s.icon}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
