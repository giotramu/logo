import {hexCode} from '../hexCode';

describe('hexCode', () => {
  it(`returns the hex code`, () => {
    expect(hexCode('accent-high')).toBe('#0c57fb');
    expect(hexCode('accent-low')).toBe('#0072ff');
    expect(hexCode('base-high')).toBe('#202d3a');
    expect(hexCode('base-low')).toBe('#5a5c6a');
    expect(hexCode('light-high')).toBe('#e1eaee');
    expect(hexCode('light-low')).toBe('#fafafa');
    expect(hexCode('white')).toBe('#fff');
    expect(hexCode('black')).toBe('#000');
  });

  it(`returns the black color for the the unknown keywords`, () => {
    expect(hexCode('none')).toBe('#0c57fb');
    expect(hexCode('fake')).toBe('#0c57fb');
  });
});
