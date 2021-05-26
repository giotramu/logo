import {getHexColorCode, calcSvgPadding} from '../helpers';

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

describe('calcSvgPadding', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(calcSvgPadding({width: 568, height: 127})).toBe('22%');
    expect(calcSvgPadding({width: 386.5, height: 84.5})).toBe('22%');
    expect(calcSvgPadding({base: 80, width: 48, height: 16})).toBe('27%');
    expect(calcSvgPadding({width: 0, height: 0})).toBe('none');
    // @ts-expect-error
    expect(calcSvgPadding({width: 180, height: 'foo'})).toBe('none');
  });
});
