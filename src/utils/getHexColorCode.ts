import type {HexColorCode} from '../types/commonProps';

enum FillColors {
  'accent-high' = '#0c57fb',
  'accent-low' = '#0072ff',
  'base-high' = '#202d3a',
  'base-low' = '#5a5c6a',
  'light-high' = '#e1eaee',
  'light-low' = '#fafafa',
  white = '#fff',
  black = '#000'
}

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param color - One of the following types: 'accent-high', 'accent-low', 'base-high', 'base-low', 'light-high', 'light-low'
 * @returns Hex color code
 */
export function getHexColorCode(color: string): HexColorCode {
  let hexColorCode = FillColors['accent-high'];

  let key: keyof typeof FillColors;
  for (key in FillColors) {
    if (color === key) {
      hexColorCode = FillColors[key];
      break;
    }
  }

  return hexColorCode;
}
