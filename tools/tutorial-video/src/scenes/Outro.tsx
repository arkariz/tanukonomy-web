import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {Mascot} from '../components/Mascot';
import {C, FONT, MONO} from '../theme';
import {useStrings} from '../i18n';

export const OUTRO_SECONDS = 4;

export const Outro: React.FC = () => {
  const t = useStrings();
  const frame = useCurrentFrame();
  const ease = Easing.bezier(0.16, 1, 0.3, 1);
  const rise = (start: number) => ({
    opacity: interpolate(frame, [start, start + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    translate: `0px ${interpolate(frame, [start, start + 14], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px`,
  });
  return (
    <AbsoluteFill style={{fontFamily: FONT}}>
      <Background dark />
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: '0 90px', gap: 40}}>
        <Mascot size={260} bob />
        <div style={{...rise(6), fontSize: 104, fontWeight: 800, color: C.white, textAlign: 'center', letterSpacing: -2}}>{t.outroTitle}</div>
        <div style={{...rise(14), fontSize: 48, color: C.green100, textAlign: 'center', lineHeight: 1.3}}>
          {t.outroBody}
        </div>
        <div
          style={{
            ...rise(24),
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: MONO,
            fontSize: 36,
            color: C.green900,
            background: C.gold,
            padding: '16px 32px',
            borderRadius: 999,
            border: `4px solid ${C.white}`,
          }}
        >
          <Img src={staticFile('icons/piggy_savings.svg')} style={{width: 56, height: 56}} />
          {t.outroPath}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
