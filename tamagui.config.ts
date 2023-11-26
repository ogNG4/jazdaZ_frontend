import {createFont, createTamagui} from 'tamagui';
import {themes, tokens} from '@tamagui/themes';
import {shorthands} from '@tamagui/shorthands';

const manropeFont = createFont({
  family: 'Manrope',
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 17,
    5: 19,
    6: 22,
    7: 24,
    8: 27,
    9: 30,
    10: 34,
    11: 36,
    12: 40,
    13: 48,
    true: 15,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    4: 28,
    5: 31,
    6: 35,
    7: 39,
    8: 43,
    9: 48,
    10: 53,
  },
  weight: {
    4: '300',
    5: '400',
    6: '500',
    7: '600',
    8: '700',
    9: '800',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  face: {
    300: {normal: 'Manrope-Light'},
    400: {normal: 'Manrope-Regular'},
    500: {normal: 'Manrope-Medium'},
    600: {normal: 'Manrope-SemiBold'},
    700: {normal: 'Manrope-Bold'},
    800: {normal: 'Manrope-ExtraBold'},
  },
});

const config = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: manropeFont,
    heading: manropeFont,
  },
});
type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
