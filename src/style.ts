/**
 * Converts pixel value to number (e.g. "4px" to 4)
 */
const PIXEL_SUFFIX = 'px';

export function pxToNumber(pixels: string): number {
  const count = (pixels.match(/px/g) || []).length;
  if (count > 1 || !pixels.endsWith(PIXEL_SUFFIX)) {
    throw new Error(`'${pixels}' does not contain a single 'px'`);
  }

  const parsedValue = parseFloat(pixels);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`'${pixels}' is not a valid single pixel-value`);
  }

  return parsedValue;
}
