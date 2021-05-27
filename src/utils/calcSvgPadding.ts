/**
 * Scaling the SVG by using the padding-bottom hack.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/#option-5-use-the-padding-bottom-hack-on-an-inline-svg-element
 *
 * @private
 * @param options - SVG properties
 * @param options.base - Scaling percentange (optional)
 * @param options.width - SVG viewbox width
 * @param options.height - SVG viewbox height
 * @returns Padding bottom in percentage unit, related to `options.base`
 */
export function calcSvgPadding({
  base = 100,
  width,
  height
}: CalcSvgPaddingProps): string {
  const percentage = Math.round((base * height) / width);
  return isNaN(percentage) ? 'none' : `${percentage}%`;
}

interface CalcSvgPaddingProps {
  base?: number;
  width: number;
  height: number;
}
