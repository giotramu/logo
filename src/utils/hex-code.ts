import type {HexCode} from '../types';

enum Colors {
  'accent' = '#0055FF',
  'neutral-900' = '#141414',
  'neutral-800' = '#333333',
  'neutral-700' = '#525252',
  'neutral-600' = '#707070',
  'neutral-500' = '#8F8F8F',
  'neutral-400' = '#ADADAD',
  'neutral-300' = '#CCCCCC',
  'neutral-200' = '#EBEBEB',
  'neutral-100' = '#FFFFFF'
}

type Color = keyof typeof Colors;

export const DEFAULT_COLOR: Color = 'neutral-900';

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param str - Choose between: `accent`, `neutral-900`, `neutral-800`, `neutral-700`, `neutral-600`, `neutral-500`, `neutral-400`, `neutral-300`, `neutral-200`, `neutral-100`
 * @returns HexCode
 */
export function hexCode(str: string): HexCode {
  let color: Color;
  let hex = Colors[DEFAULT_COLOR];

  for (color in Colors) {
    if (str === color) {
      hex = Colors[color];
      break;
    }
  }

  return hex;
}
