import {getHexCode, calcPercentage} from '../helpers';

describe('getHexCode', () => {
  it(`returns the color hex code`, () => {
    expect(getHexCode('accent-high')).toBe('#0c57fb');
    expect(getHexCode('accent-low')).toBe('#0072ff');
    expect(getHexCode('base-high')).toBe('#202d3a');
    expect(getHexCode('base-low')).toBe('#5a5c6a');
    expect(getHexCode('light-high')).toBe('#e1eaee');
    expect(getHexCode('light-low')).toBe('#fafafa');
    expect(getHexCode('white')).toBe('#fff');
    expect(getHexCode('black')).toBe('#000');
  });

  it(`returns the black color for the the unknown keywords`, () => {
    expect(getHexCode('none')).toBe('#0c57fb');
    // @ts-ignore
    expect(getHexCode('fake')).toBe('#0c57fb');
  });
});

describe('calcPercentage', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(calcPercentage({width: 568, height: 127})).toBe('22%');
    expect(calcPercentage({width: 386.5, height: 84.5})).toBe('22%');
    expect(calcPercentage({base: 80, width: 48, height: 16})).toBe('27%');
    expect(calcPercentage({width: 0, height: 0})).toBe('none');
    // @ts-ignore
    expect(calcPercentage({width: 180, height: 'foo'})).toBe('none');
  });
});
