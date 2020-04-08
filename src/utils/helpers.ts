import {FillStyle, HexColor} from '../typings/props';

// --- handle component color
export function handleColor(color: FillStyle): HexColor {
  switch (color) {
    case 'digital':
      return '#0C57FB';
    case 'silver':
      return '#D3DDE6';
    case 'light':
      return '#FFF';
    case 'dark':
      return '#1D2B3B';
    default:
      return '#000';
  }
}

// --- handle component size
export function handleSize(
  size?: string,
  defaultSize: string = '100%'
): string {
  return typeof size === 'undefined' ? defaultSize : size;
}

// --- hack svg padding for scaling
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
