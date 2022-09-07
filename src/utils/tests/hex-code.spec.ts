import {hexCode} from '../hex-code';

describe('hexCode', () => {
  it('returns the right hex color code', () => {
    expect(hexCode('accent')).toBe('#0055FF');
    expect(hexCode('neutral-900')).toBe('#141414');
    expect(hexCode('neutral-800')).toBe('#333333');
    expect(hexCode('neutral-700')).toBe('#525252');
    expect(hexCode('neutral-600')).toBe('#707070');
    expect(hexCode('neutral-500')).toBe('#8F8F8F');
    expect(hexCode('neutral-400')).toBe('#ADADAD');
    expect(hexCode('neutral-300')).toBe('#CCCCCC');
    expect(hexCode('neutral-200')).toBe('#EBEBEB');
    expect(hexCode('neutral-100')).toBe('#FFFFFF');
  });

  it('returns the default color for unknown keywords', () => {
    expect(hexCode('none')).toBe('#141414');
    expect(hexCode('fake')).toBe('#141414');
  });
});
