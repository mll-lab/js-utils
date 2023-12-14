import { assertFalse, assertTrue } from './predicates.test';
import { isArrayOfStrings, isEmptyObject, isNotNullish } from './typeGuards';

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

  describe('emptyObject', () => {
    assertTrue(isEmptyObject, [{}]);
    assertFalse(isEmptyObject, [{ foo: 'bar' }, [], null, undefined, '']);
  });
});
