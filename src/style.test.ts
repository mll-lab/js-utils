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

  it('throws when invalid parameter given', () => {
    expect(() => pxToNumber('5')).toThrow(/does not contain 'px'/);
    expect(() => pxToNumber('5ax')).toThrow(/does not contain 'px'/);
    expect(() => pxToNumber('px')).toThrow(/is not a valid/);
  });

  it.each([
    ['5', /does not contain 'px'/],
    ['5ax', /does not contain 'px'/],
    ['px', /is not a valid/],
  ])('throws when invalid parameter given', (input, expectedResult) => {
    expect(() => pxToNumber(input)).toThrow(expectedResult);
  });
});
