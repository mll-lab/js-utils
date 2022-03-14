import { firstDecimalDigit, round } from './number';

describe('round', () => {
  it.each([
    [0.2345, 3, 0.235],
    [0.2344, 3, 0.234],
    [0.2344, 2, 0.23],
    [0.2345, 5, 0.2345],
  ])(
    'rounds the number to the correct decimals',
    (number, decimals, expectedResult) => {
      expect(round(number, decimals)).toEqual(expectedResult);
    },
  );
});

describe('firstDecimalDigit', () => {
  it.each([
    [1, 0],
    [0.2345, 2],
    [11.5344, 5],
    [-1.7345, 7],
    [-7, 0],
    [1.67, 6],
  ])('returns the decimal digit of a number', (number, expectedResult) => {
    expect(firstDecimalDigit(number)).toEqual(expectedResult);
  });
});
