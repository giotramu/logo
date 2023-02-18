import {COLOR_SCHEME, DEFAULT_COLOR} from 'src/constants/color-scheme';
import type {ColorName, HexCode} from 'src/types/model';

/**
 * Map a color name to the related Hex code.
 *
 * @private
 * @param name - Choose between: `accent`, `base-900`, `base-800`, `base-700`, `base-600`, `base-500`, `base-400`, `base-300`, `base-200`, `base-100`
 * @returns HexCode
 */
export function getHexCode(name?: string): HexCode {
  return isValidColor(name) ? COLOR_SCHEME[name] : COLOR_SCHEME[DEFAULT_COLOR];
}

function isValidColor(name?: string): name is ColorName {
  if (typeof name === 'undefined') {
    return false;
  }

  return Object.hasOwn(COLOR_SCHEME, name);
}
