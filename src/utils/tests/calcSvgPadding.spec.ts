import {calcSvgPadding} from '../calcSvgPadding';

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
