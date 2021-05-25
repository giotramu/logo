import {HexCode} from '../types/props';

export const fillColors = {
  'accent-high': '#0c57fb',
  'accent-low': '#0072ff',
  'base-high': '#202d3a',
  'base-low': '#5a5c6a',
  'light-high': '#e1eaee',
  'light-low': '#fafafa',
  white: '#fff',
  black: '#000'
} as const;

export function getHexCode(color: string): HexCode {
  let hexCode: string = fillColors['accent-high'];

  let key: keyof typeof fillColors;
  for (key in fillColors) {
    if (color === key) {
      hexCode = fillColors[key];
      break;
    }
  }

  return hexCode;
}

/**
 * Hack the svg padding for scaling.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/
 */
interface CalcPercentageProps {
  base?: number;
  width: number;
  height: number;
}

export function calcPercentage({
  base = 100,
  width,
  height
}: CalcPercentageProps): string {
  const formula = Math.round((base * height) / width);
  return isNaN(formula) ? 'none' : `${formula}%`;
}
