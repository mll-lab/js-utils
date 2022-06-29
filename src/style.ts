/**
 * Converts pixel value to number.
 *
 * @example "4px" to 4
 */
export function pxToNumber(pixels: string): number {
  const count = (pixels.match(/px/g) || []).length;
  if (count > 1 || !pixels.endsWith('px')) {
    throw new Error(`'${pixels}' does not contain a single 'px'`);
  }

  const parsedValue = parseFloat(pixels);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`'${pixels}' is not a valid single pixel-value`);
  }

  return parsedValue;
}
