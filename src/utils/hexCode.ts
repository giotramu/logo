import type {HexCode} from '../types';

enum FillColors {
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

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param color - One of the following types: `accent`, `neutral-900`, `neutral-800`, `neutral-700`, `neutral-600`, `neutral-500`, `neutral-400`, `neutral-300`, `neutral-200`, `neutral-100`
 * @returns HexColorCode
 */
export function hexCode(color: string): HexCode {
  let hex = FillColors.accent;
  let key: keyof typeof FillColors;

  for (key in FillColors) {
    if (color === key) {
      hex = FillColors[key];
      break;
    }
  }

  return hex;
}
