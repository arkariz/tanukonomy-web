import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {C} from '../theme';

const floaters = [
  {icon: 'piggy_savings', x: 70, y: 1450, size: 120, phase: 0},
  {icon: 'coins_currency', x: 905, y: 1180, size: 104, phase: 1.3},
  {icon: 'star_bonus', x: 930, y: 1690, size: 86, phase: 2.1},
  {icon: 'shield_emergency', x: 60, y: 900, size: 92, phase: 3.4},
];

/** Latar krem dengan pola titik piksel dan ikon clay yang melayang pelan. */
export const Background: React.FC<{dark?: boolean; showFloaters?: boolean}> = ({dark = false, showFloaters = true}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: dark
          ? `radial-gradient(120% 80% at 50% 10%, ${C.green700} 0%, ${C.green900} 70%)`
          : `radial-gradient(110% 70% at 50% 0%, ${C.green100} 0%, ${C.cream} 60%)`,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${dark ? 'rgba(162,210,169,0.18)' : 'rgba(31,75,44,0.10)'} 3px, transparent 3px)`,
          backgroundSize: '36px 36px',
          backgroundPosition: `${(frame * 0.4) % 36}px ${(frame * 0.6) % 36}px`,
        }}
      />
      {showFloaters
        ? floaters.map((f) => (
            <Img
              key={f.icon}
              src={staticFile(`icons/${f.icon}.svg`)}
              style={{
                position: 'absolute',
                left: f.x,
                top: f.y + Math.sin(frame / 22 + f.phase) * 14,
                width: f.size,
                height: f.size,
                rotate: `${Math.sin(frame / 30 + f.phase) * 8}deg`,
                opacity: interpolate(frame, [0, 20], [0, dark ? 0.9 : 0.55], {extrapolateRight: 'clamp'}),
              }}
            />
          ))
        : null}
    </AbsoluteFill>
  );
};
