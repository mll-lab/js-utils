import { round } from './round';

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
