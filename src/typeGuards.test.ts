import { assertFalse, assertTrue } from './predicates.test';
import { isArrayOfStrings, isNotNullish } from './typeGuards';

describe('typeGuards', () => {
  describe('isNotNullish', () => {
    assertTrue(isNotNullish, ['', [], {}, false]);
    assertFalse(isNotNullish, [null, undefined]);
  });

  describe('isArrayOfStrings', () => {
    expect(isArrayOfStrings(['foo', 'bar'])).toBe(true);
    expect(isArrayOfStrings([])).toBe(true);
    assertFalse(isArrayOfStrings, [null, undefined, ['', null]]);
  });
});
