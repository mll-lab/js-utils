/**
 * A round function using Math.round().js
 * https://gist.github.com/djD-REK/2e347f5532bb22310daf450f03ec6ad8
 */
export const round = (number: number, decimalPlaces: number) => {
  const factorOfTen = 10 ** decimalPlaces;
  return Math.round(number * factorOfTen) / factorOfTen;
};
