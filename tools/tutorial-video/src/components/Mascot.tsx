import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

/** Maskot tanuki clay (SVG splash aplikasi): badan muncul, lalu daun mendarat di kepala. */
export const Mascot: React.FC<{size: number; bob?: boolean}> = ({size, bob = false}) => {
  const frame = useCurrentFrame();
  const leafT = interpolate(frame, [8, 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.34, 1.4, 0.64, 1)});
  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        scale: interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp', easing: Easing.spring({damping: 12}), output: 'perceptual-scale'}),
        translate: `0px ${bob ? Math.abs(Math.sin(frame / 8)) * -16 : 0}px`,
        rotate: `${bob ? 0 : Math.sin(frame / 10) * 4}deg`,
      }}
    >
      <Img src={staticFile('splash_tanuki_body.svg')} style={{position: 'absolute', inset: 0, width: size, height: size}} />
      <Img
        src={staticFile('splash_tanuki_leaf.svg')}
        style={{
          position: 'absolute',
          inset: 0,
          width: size,
          height: size,
          opacity: interpolate(leafT, [0, 0.2], [0, 1], {extrapolateRight: 'clamp'}),
          translate: `${(1 - leafT) * size * 0.25}px ${(1 - leafT) * -size * 0.6}px`,
          rotate: `${(1 - leafT) * 40}deg`,
        }}
      />
    </div>
  );
};
