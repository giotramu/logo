import { COLOR_SCHEME, DEFAULT_COLOR } from './constants'
import type { ColorName, HexCode } from './types'

/**
 * Map a color name to the related Hex code.
 * @private
 * @param name - Choose between: `accent`, `base-900`, `base-800`, `base-700`, `base-600`, `base-500`, `base-400`, `base-300`, `base-200`, `base-100`
 * @returns HexCode
 */
export const getHexCode = (name?: string): HexCode =>
  isValidColor(name) ? COLOR_SCHEME[name] : COLOR_SCHEME[DEFAULT_COLOR]

const isValidColor = (name?: string): name is ColorName =>
  typeof name === 'undefined' ? false : Object.hasOwn(COLOR_SCHEME, name)
