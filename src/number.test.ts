import {firstDecimalDigit, formatDecimal, round} from './number';

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


describe('formatDecimal', () => {
    it.each([
        [1.2345, { maxDecimals: 2, minDecimals: 1, trimTrailingZeros: true }, '1.23'],
        [1.2,    { maxDecimals: 3, minDecimals: 3, trimTrailingZeros: false }, '1.200'],
        [1.2345, { maxDecimals: 4, minDecimals: 2, trimTrailingZeros: false }, '1.2345'],
        [1.2000, { maxDecimals: 4, minDecimals: 2, trimTrailingZeros: true }, '1.2'],
        [1,      { maxDecimals: 2, minDecimals: 2, trimTrailingZeros: false }, '1.00'],
        [-1.234, { maxDecimals: 2, minDecimals: 0, trimTrailingZeros: true }, '-1.23'],
        [0,      { maxDecimals: 3, minDecimals: 0, trimTrailingZeros: true }, '0'],
    ])(
        'formatDecimal(%p, %p) → %p',
        (value, options, expected) => {
            expect(formatDecimal(value, options)).toEqual(expected);
        },
    );
});
