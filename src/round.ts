/**
 * Round a number to a given number of decimal places.
 *
 * https://gist.github.com/djD-REK/2e347f5532bb22310daf450f03ec6ad8
 */
export function round(number: number, decimalPlaces: number): number {
  const factorOfTen = 10 ** decimalPlaces;
  return Math.round(number * factorOfTen) / factorOfTen;
}
