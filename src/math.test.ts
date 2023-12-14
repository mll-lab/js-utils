import { ceil, isZeroish } from './math';

describe('ceil', () => {
  it('rounds up to the nearest step', () => {
    expect(ceil(1.2, 0.5)).toEqual(1.5);
    expect(ceil(1.0, 0.5)).toEqual(1.0);
    expect(ceil(0.3, 0.3)).toEqual(0.3);
  });
});

describe('isZeroish', () => {
  it('recognizes zero', () => {
    expect(isZeroish(1.2)).toBeFalsy();
    expect(isZeroish(0.2)).toBeFalsy();
    expect(isZeroish(0.0)).toBeTruthy();
    expect(isZeroish(0)).toBeTruthy();
    expect(isZeroish(0.00001)).toBeTruthy();
  });
  it('reacts to precision', () => {
    expect(isZeroish(0.01, 0.1)).toBeTruthy();
    expect(isZeroish(0.2, 0.1)).toBeFalsy();
  });
});
