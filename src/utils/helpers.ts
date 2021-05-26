import {HexColorCode} from '../types/commonProps';

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
 * @param {string} color - One of the following types: 'accent-high', 'accent-low', 'base-high', 'base-low', 'light-high', 'light-low'
 * @returns {string} - Hex color code
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

/**
 * Scaling the SVG by using the padding-bottom hack.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/#option-5-use-the-padding-bottom-hack-on-an-inline-svg-element
 *
 * @private
 * @param {Object} options - SVG properties
 * @param {number} options.base - Scaling percentange (optional)
 * @param {number} options.width - SVG viewbox width
 * @param {number} options.height - SVG viewbox height
 * @returns {string} - Padding bottom in percentage unit, related to `options.base`
 */
export function calcSvgPadding({
  base = 100,
  width,
  height
}: CalcSvgPaddingProps): string {
  const percentage = Math.round((base * height) / width);
  return isNaN(percentage) ? 'none' : `${percentage}%`;
}

interface CalcSvgPaddingProps {
  base?: number;
  width: number;
  height: number;
}
