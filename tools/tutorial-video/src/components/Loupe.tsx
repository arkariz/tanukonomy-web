import React from 'react';
import {Video} from '@remotion/media';
import {Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, CLIP_H, CLIP_W, FONT} from '../theme';

/**
 * Kaca pembesar: menampilkan wilayah [region] (piksel rekaman) dari [src]
 * selebar [width], lengkap dengan label. Diletakkan di dalam Sequence yang
 * sejajar dengan video utama; [trimBefore] = posisi video saat Sequence mulai.
 */
export const Loupe: React.FC<{
  src: string;
  trimBefore: number;
  region: {x: number; y: number; w: number; h: number};
  width: number;
  left: number;
  top: number;
  label: string;
  icon?: string;
}> = ({src, trimBefore, region, width, left, top, label, icon = 'note_pencil'}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const z = width / region.w;
  const height = region.h * z;
  const ease = Easing.bezier(0.16, 1, 0.3, 1);
  const show = interpolate(frame, [0, 12, durationInFrames - 8, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width,
        opacity: show,
        scale: interpolate(show, [0, 1], [0.7, 1]),
        transformOrigin: '50% 100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -40,
          left: 28,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: C.gold,
          color: C.green900,
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 34,
          padding: '8px 22px 8px 12px',
          borderRadius: 999,
          border: `4px solid ${C.green900}`,
        }}
      >
        <Img src={staticFile(`icons/${icon}.svg`)} style={{width: 44, height: 44}} />
        {label}
      </div>
      <div
        style={{
          width,
          height,
          borderRadius: 32,
          overflow: 'hidden',
          position: 'relative',
          border: `6px solid ${C.green900}`,
          boxShadow: `10px 10px 0 ${C.green900}, 0 30px 60px rgba(0,0,0,0.25)`,
          background: C.white,
        }}
      >
        <Video
          src={staticFile(src)}
          trimBefore={trimBefore}
          muted
          style={{
            position: 'absolute',
            width: CLIP_W * z,
            height: CLIP_H * z,
            left: -region.x * z - 6,
            top: -region.y * z - 6,
          }}
        />
      </div>
    </div>
  );
};
