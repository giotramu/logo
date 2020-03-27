import {LogoStyle, LogoColor} from '../typings/props';

// --- handle component color
export function handleColor(color: LogoStyle): LogoColor {
  switch (color) {
    case 'digital':
      return 'rgb(12, 87, 251)';
    case 'gray':
      return 'rgb(211, 221, 230)';
    case 'light':
      return 'rgb(255, 255, 255)';
    case 'dark':
      return 'rgb(29, 43, 59)';
    default:
      return 'rgb(0, 0, 0)';
  }
}

// --- handle component size
interface HandleSizeProps {
  size?: string | number;
  defaultSize: string | number;
}

export function handleSize({size, defaultSize}: HandleSizeProps): string {
  if (typeof size === 'undefined') {
    return typeof defaultSize === 'number'
      ? defaultSize.toFixed()
      : defaultSize;
  }

  return typeof size === 'number' ? size.toFixed() : size;
}

// --- hack svg padding for scaling
interface CalcPaddingProps {
  width: string | number;
  height: string | number;
}

export function calcPadding({width, height}: CalcPaddingProps): string {
  const w = typeof width === 'number' ? width : Number.parseInt(width, 10);
  const h = typeof height === 'number' ? height : Number.parseInt(height, 10);

  if (isNaN(w) || isNaN(h)) {
    // eslint-disable-next-line no-console
    console.warn('[calcPadding] invalid width, height');
    return '';
  }

  return ((100 * h) / w).toFixed();
}

// --- append px unit at the end of the value
export function pxUnit(val: string | number): string {
  return typeof val === 'number' ? `${val.toFixed()}px` : `${val}px`;
}
