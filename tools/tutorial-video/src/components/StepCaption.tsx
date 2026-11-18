import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, FONT, MONO} from '../theme';
import {useStrings} from '../i18n';

/** Keterangan langkah di atas ponsel: ubin ikon clay, label langkah, judul, teks pembantu. */
export const StepCaption: React.FC<{
  step?: number;
  total?: number;
  label?: string;
  title: string;
  body: string;
  icon: string;
}> = ({step, total, label, title, body, icon}) => {
  const s = useStrings();
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const ease = Easing.bezier(0.16, 1, 0.3, 1);
  const inOut = (a: number, b: number) =>
    interpolate(frame, [0, 12, durationInFrames - 8, durationInFrames], [a, b, b, a], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: ease,
    });
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        right: 64,
        top: 72,
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start',
        opacity: inOut(0, 1),
        translate: `0px ${inOut(-30, 0)}px`,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          flex: '0 0 auto',
          width: 136,
          height: 136,
          borderRadius: 36,
          background: C.white,
          border: `4px solid ${C.green700}`,
          boxShadow: `6px 6px 0 ${C.green700}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          rotate: `${interpolate(frame, [0, 10, 18], [-14, 6, 0], {extrapolateRight: 'clamp'})}deg`,
        }}
      >
        <Img src={staticFile(`icons/${icon}.svg`)} style={{width: 96, height: 96}} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0}}>
        <div
          style={{
            alignSelf: 'flex-start',
            fontFamily: MONO,
            fontSize: 30,
            letterSpacing: 2,
            color: C.white,
            background: C.green700,
            padding: '6px 18px',
            borderRadius: 999,
          }}
        >
          {label ?? s.stepLabel(step ?? 0, total ?? 0)}
        </div>
        <div style={{fontSize: 80, fontWeight: 800, color: C.green900, lineHeight: 1.02, letterSpacing: -1.5}}>{title}</div>
        <div style={{fontSize: 44, fontWeight: 500, color: C.ink2, lineHeight: 1.22}}>{body}</div>
      </div>
    </div>
  );
};
