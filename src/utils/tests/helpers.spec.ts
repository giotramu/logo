import {handleColor, handleSize, calcPercentage} from '../helpers';

describe('handleColor', () => {
  it(`returns a specific hex color for the "digital", "silver", "dark" and "light" keywords`, () => {
    expect(handleColor('digital')).toBe('#0C57FB');
    expect(handleColor('silver')).toBe('#D3DDE6');
    expect(handleColor('dark')).toBe('#1D2B3B');
    expect(handleColor('light')).toBe('#FFF');
  });

  it(`returns the black color for the the unknown keywords`, () => {
    expect(handleColor('none')).toBe('#000');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(handleColor('fake')).toBe('#000');
  });
});

describe('handleSize', () => {
  it(`returns declared size`, () => {
    expect(handleSize('20px')).toBe('20px');
  });

  it(`returns defaultSize if size isn't declared`, () => {
    expect(handleSize()).toBe('100%');
    expect(handleSize(undefined)).toBe('100%');
    expect(handleSize(undefined, '80%')).toBe('80%');
  });
});

describe('calcPercentage', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(calcPercentage({width: 568, height: 127})).toBe('22%');
    expect(calcPercentage({width: 386.5, height: 84.5})).toBe('22%');
    expect(calcPercentage({base: 80, width: 48, height: 16})).toBe('27%');
    expect(calcPercentage({width: 0, height: 0})).toBe('none');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(calcPercentage({width: 180, height: 'foo'})).toBe('none');
  });
});
