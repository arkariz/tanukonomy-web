import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';

/** Penanda ketuk: titik yang menekan lalu cincin yang melebar dan memudar. */
export const TapMarker: React.FC<{x: number; y: number; size?: number}> = ({x, y, size = 1}) => {
  const frame = useCurrentFrame();
  const ring = interpolate(frame, [0, 16], [0.3, 1.6], {extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: x - 50 * size,
          top: y - 50 * size,
          width: 100 * size,
          height: 100 * size,
          borderRadius: '50%',
          border: `${6 * size}px solid ${C.gold}`,
          scale: ring,
          opacity: interpolate(frame, [0, 4, 18], [0, 1, 0], {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}),
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: x - 26 * size,
          top: y - 26 * size,
          width: 52 * size,
          height: 52 * size,
          borderRadius: '50%',
          background: 'rgba(233,196,106,0.55)',
          border: `${3 * size}px solid ${C.white}`,
          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
          scale: interpolate(frame, [0, 3, 8, 14], [1.3, 0.85, 1, 1], {extrapolateRight: 'clamp'}),
          opacity: interpolate(frame, [0, 2, 12, 18], [0, 1, 1, 0], {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}),
        }}
      />
    </>
  );
};

/** Jari yang menggeser dari (x,y) ke (x2,y2) selama [frames]. */
export const SwipeMarker: React.FC<{x: number; y: number; x2: number; y2: number; frames: number}> = ({x, y, x2, y2, frames}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, frames], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad)});
  return (
    <div
      style={{
        position: 'absolute',
        left: x + (x2 - x) * p - 30,
        top: y + (y2 - y) * p - 30,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'rgba(233,196,106,0.6)',
        border: `4px solid ${C.white}`,
        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        opacity: interpolate(frame, [0, 4, frames, frames + 8], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
      }}
    />
  );
};
