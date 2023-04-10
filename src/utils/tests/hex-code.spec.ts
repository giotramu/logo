import { getHexCode } from '../hex-code'

test('getHexCode() should return the right hex color code.', () => {
  expect(getHexCode('accent')).toBe('#4169E1')

  expect(getHexCode('base-900')).toBe('#313133')

  expect(getHexCode('base-800')).toBe('#4A4A4C')

  expect(getHexCode('base-700')).toBe('#636366')

  expect(getHexCode('base-600')).toBe('#7C7C7F')

  expect(getHexCode('base-500')).toBe('#949499')

  expect(getHexCode('base-400')).toBe('#ADADB2')

  expect(getHexCode('base-300')).toBe('#C6C6CC')

  expect(getHexCode('base-200')).toBe('#DFDFE5')

  expect(getHexCode('base-100')).toBe('#F8F8FF')
})

test('getHexCode() should return the default color for unknown keywords.', () => {
  expect(getHexCode('none')).toBe('#313133')

  expect(getHexCode('fake')).toBe('#313133')
})
