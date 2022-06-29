import { pxToNumber } from './style';

describe('pxToNumber', () => {
  it.each([
    ['0px', 0],
    ['1px', 1],
    ['10px', 10],
    ['100px', 100],
    ['10px', 10],
    ['100px', 100],
    ['-0px', -0],
    ['-1px', -1],
    ['-10px', -10],
    ['-100px', -100],
    ['0.12px', 0.12],
    ['1.12px', 1.12],
    ['-0.12px', -0.12],
    ['-1.12px', -1.12],
  ])('converts pixel-value %s to number %d', (input, expectedResult) => {
    expect(pxToNumber(input)).toEqual(expectedResult);
  });

  it.each([['5'], ['5ax'], ['px'], ['1px 2px'], ['1px 2px 3px 4px'], ['1px ']])(
    'throws when invalid parameter %s given',
    (input) => {
      expect(() => pxToNumber(input)).toThrow();
    },
  );
});
