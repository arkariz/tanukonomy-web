import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {C, FONT, MONO} from '../theme';
import {useStrings} from '../i18n';

export const INTRO_SECONDS = 3.4;

const chipIcons = ['shield_emergency', 'star_bonus', 'report_bars'];

export const Intro: React.FC = () => {
  const t = useStrings();
  const chips = chipIcons.map((icon, i) => ({icon, text: t.chips[i]}));
  const frame = useCurrentFrame();
  const ease = Easing.bezier(0.16, 1, 0.3, 1);
  const rise = (start: number) => ({
    opacity: interpolate(frame, [start, start + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    translate: `0px ${interpolate(frame, [start, start + 14], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px`,
  });
  return (
    <AbsoluteFill style={{fontFamily: FONT}}>
      <Background dark />
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: '0 80px', gap: 36}}>
        <Img
          src={staticFile('mascot_head.png')}
          style={{
            width: 300,
            height: 300,
            objectFit: 'contain',
            scale: interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp', easing: Easing.spring({damping: 12}), output: 'perceptual-scale'}),
            rotate: `${Math.sin(frame / 10) * 4}deg`,
          }}
        />
        <div style={{...rise(8), fontFamily: MONO, fontSize: 34, letterSpacing: 3, color: C.green900, background: C.green200, padding: '8px 24px', borderRadius: 999}}>
          {t.introPill}
        </div>
        <div style={{...rise(14), fontSize: 100, fontWeight: 800, color: C.white, textAlign: 'center', lineHeight: 1.02, letterSpacing: -2}}>
          {t.introTitle}
        </div>
        <div style={{...rise(22), fontSize: 48, color: C.green100, textAlign: 'center', lineHeight: 1.25}}>
          {t.introBody}
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 12}}>
          {chips.map((c, i) => (
            <div
              key={c.text}
              style={{
                ...rise(30 + i * 5),
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: C.white,
                borderRadius: 999,
                padding: '10px 24px 10px 12px',
                fontSize: 36,
                fontWeight: 700,
                color: C.green900,
                boxShadow: `5px 5px 0 ${C.green200}`,
              }}
            >
              <Img src={staticFile(`icons/${c.icon}.svg`)} style={{width: 52, height: 52}} />
              {c.text}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
