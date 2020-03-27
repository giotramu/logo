import {handleColor, handleSize, calcPadding, pxUnit} from '../helpers';

describe('handleColor', () => {
  it(`returns a specific hex color for the "digital", "gray", "dark" and "light" keywords`, () => {
    expect(handleColor('digital')).toBe('rgb(12, 87, 251)');
    expect(handleColor('gray')).toBe('rgb(211, 221, 230)');
    expect(handleColor('dark')).toBe('rgb(29, 43, 59)');
    expect(handleColor('light')).toBe('rgb(255, 255, 255)');
  });

  it(`returns the black color for the the unknown keywords`, () => {
    expect(handleColor('none')).toBe('rgb(0, 0, 0)');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(handleColor('fake')).toBe('rgb(0, 0, 0)');
  });
});

describe('handleSize', () => {
  it(`returns declared size`, () => {
    expect(handleSize({size: '20', defaultSize: '100'})).toBe('20');
    expect(handleSize({size: 30, defaultSize: 100})).toBe('30');
  });

  it(`returns defaultSize if size isn't declared`, () => {
    expect(handleSize({defaultSize: '40'})).toBe('40');
    expect(handleSize({defaultSize: 60})).toBe('60');
  });
});

describe('calcPadding', () => {
  it(`returns padding based on width and height of the svg viewbox`, () => {
    expect(calcPadding({width: '568', height: '127'})).toBe('22');
    expect(calcPadding({width: 386.5, height: 84.5})).toBe('22');
    expect(calcPadding({width: 0, height: 0})).toBe('NaN');
  });

  it(`returns empty string if width or height value is invalid`, () => {
    expect(calcPadding({width: 'Foo', height: 'Bar'})).toBe('');
    expect(calcPadding({width: 'Foo', height: 0})).toBe('');
  });
});

describe('pxUnit', () => {
  it(`returns a string with px unit appended`, () => {
    expect(pxUnit('68')).toBe('68px');
    expect(pxUnit(74.4)).toBe('74px');
  });
});
