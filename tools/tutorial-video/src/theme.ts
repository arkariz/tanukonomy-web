import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

/** Palet matcha aplikasi (lib/core/design_system/presets/matcha.dart). */
export const C = {
  green900: '#043417',
  green700: '#1F4B2C',
  green500: '#3C6846',
  green200: '#A2D2A9',
  green100: '#D8E6DC',
  cream: '#F9F9F8',
  ink: '#1A1C1C',
  ink2: '#414941',
  gold: '#E9C46A',
  white: '#FFFFFF',
};

export const FONT = 'Plus Jakarta Sans';
export const MONO = 'Space Mono';

export const fontsReady = Promise.all([
  loadFont({family: FONT, url: staticFile('fonts/PlusJakartaSans-Variable.ttf'), weight: '200 800'}),
  loadFont({family: MONO, url: staticFile('fonts/SpaceMono-Bold.ttf'), weight: '700'}),
]);

export const FPS = 30;
export const W = 1080;
export const H = 1920;

/** Ukuran rekaman sesudah dipangkas 10 px tiap tepi. */
export const CLIP_W = 1060;
export const CLIP_H = 2380;
/** Rekaman 10 px lebih ke dalam dari koordinat ketukan perangkat. */
export const CLIP_CROP = 10;
/** Layar berubah sekitar 0,4 detik sesudah ketukan dikirim. */
export const TAP_LAG = 0.35;
