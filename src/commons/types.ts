// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { COLOR_SCHEME } from './constants'
import type { ObjectValues } from './type-utils'

export type Alignment = 'row' | 'column'

export type ColorName = keyof typeof COLOR_SCHEME

export type HexCode = ObjectValues<typeof COLOR_SCHEME>

export type Size = string
