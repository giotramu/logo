import {hexCode} from '../hex-code';

describe('hexCode', () => {
  it('returns the right hex color code', () => {
    expect(hexCode('accent')).toBe('#0055FF');
    expect(hexCode('base-900')).toBe('#141414');
    expect(hexCode('base-800')).toBe('#333333');
    expect(hexCode('base-700')).toBe('#525252');
    expect(hexCode('base-600')).toBe('#707070');
    expect(hexCode('base-500')).toBe('#8F8F8F');
    expect(hexCode('base-400')).toBe('#ADADAD');
    expect(hexCode('base-300')).toBe('#CCCCCC');
    expect(hexCode('base-200')).toBe('#EBEBEB');
    expect(hexCode('base-100')).toBe('#FFFFFF');
  });

  it('returns the default color for unknown keywords', () => {
    expect(hexCode('none')).toBe('#141414');
    expect(hexCode('fake')).toBe('#141414');
  });
});
