/**
 * Round a number to a given number of decimal places.
 *
 * https://gist.github.com/djD-REK/2e347f5532bb22310daf450f03ec6ad8
 */
export function round(number: number, decimalPlaces: number): number {
  const factorOfTen = 10 ** decimalPlaces;
  return Math.round(number * factorOfTen) / factorOfTen;
}

export function firstDecimalDigit(number: number): number {
  if (number % 1 === 0) {
    return 0;
  }

  const regExp = /\d*\.(\d)/;
  const regExpMatchArray = number.toString().match(regExp);

  if (regExpMatchArray === null) {
    throw new Error(`Invalid number for regex matching: ${number}`);
  }

  return Number(regExpMatchArray[1]);
}
