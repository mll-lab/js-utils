/**
 * Converts pixel value to number (e.g. "4px" to 4)
 */
export function pxToNumber(pixels: string): number {
  if (!pixels.includes('px')) {
    throw new Error(`'${pixels}' does not contain 'px'`);
  }

  const parsedValue = parseFloat(pixels);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`'${pixels}' is not a valid single pixel-value`);
  }

  return parsedValue;
}
