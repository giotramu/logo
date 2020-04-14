import {FillStyle, HexColor} from '../typings/props';

export function handleColor(color: FillStyle): HexColor {
  switch (color) {
    case 'digital':
      return '#0c57fb';
    case 'silver':
      return '#d3dde6';
    case 'light':
      return '#fff';
    case 'dark':
      return '#1d2b3b';
    default:
      return '#000';
  }
}

export function handleSize(
  size?: string,
  defaultSize: string = '100%'
): string {
  return typeof size === 'undefined' ? defaultSize : size;
}

/**
 * hack the svg padding for scaling
 * more info on the css-tricks blog: https://css-tricks.com/scale-svg/
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
