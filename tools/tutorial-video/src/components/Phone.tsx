import React from 'react';
import {C, CLIP_H, CLIP_W} from '../theme';

export const SCREEN_H = 1330;
export const SCREEN_W = Math.round((SCREEN_H * CLIP_W) / CLIP_H);
export const BEZEL = 16;
export const PHONE_W = SCREEN_W + BEZEL * 2;
export const PHONE_H = SCREEN_H + BEZEL * 2;
/** Skala piksel rekaman → piksel layar di video. */
export const CLIP_SCALE = SCREEN_H / CLIP_H;

/** Bingkai ponsel sederhana: bezel gelap, sudut membulat, bayangan lembut. */
export const Phone: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div
    style={{
      position: 'absolute',
      width: PHONE_W,
      height: PHONE_H,
      borderRadius: 64,
      background: '#151816',
      padding: BEZEL,
      boxShadow: `0 40px 80px rgba(4,52,23,0.30), 0 0 0 4px ${C.green700}`,
      ...style,
    }}
  >
    <div style={{width: SCREEN_W, height: SCREEN_H, borderRadius: 50, overflow: 'hidden', position: 'relative', background: C.cream}}>
      {children}
    </div>
  </div>
);
