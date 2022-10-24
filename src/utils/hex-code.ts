import type {HexCode} from '../types';

enum Colors {
  'accent' = '#0055FF',
  'base-900' = '#141414',
  'base-800' = '#333333',
  'base-700' = '#525252',
  'base-600' = '#707070',
  'base-500' = '#8F8F8F',
  'base-400' = '#ADADAD',
  'base-300' = '#CCCCCC',
  'base-200' = '#EBEBEB',
  'base-100' = '#FFFFFF'
}

type Color = keyof typeof Colors;

export const DEFAULT_COLOR: Color = 'base-900';

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param str - Choose between: `accent`, `base-900`, `base-800`, `base-700`, `base-600`, `base-500`, `base-400`, `base-300`, `base-200`, `base-100`
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
