import {getHexColorCode} from '../getHexColorCode';

describe('getHexColorCode', () => {
  it(`returns the color hex code`, () => {
    expect(getHexColorCode('accent-high')).toBe('#0c57fb');
    expect(getHexColorCode('accent-low')).toBe('#0072ff');
    expect(getHexColorCode('base-high')).toBe('#202d3a');
    expect(getHexColorCode('base-low')).toBe('#5a5c6a');
    expect(getHexColorCode('light-high')).toBe('#e1eaee');
    expect(getHexColorCode('light-low')).toBe('#fafafa');
    expect(getHexColorCode('white')).toBe('#fff');
    expect(getHexColorCode('black')).toBe('#000');
  });

  it(`returns the black color for the the unknown keywords`, () => {
    expect(getHexColorCode('none')).toBe('#0c57fb');
    expect(getHexColorCode('fake')).toBe('#0c57fb');
  });
});
