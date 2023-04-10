import { COLOR_SCHEME } from 'src/constants/color-scheme'
import type { ObjectValues } from 'src/types/object-values'

export type Alignment = 'row' | 'column'

export type ColorName = keyof typeof COLOR_SCHEME

export type HexCode = ObjectValues<typeof COLOR_SCHEME>

export type Size = string
