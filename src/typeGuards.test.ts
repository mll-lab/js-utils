import { assertFalse, assertTrue } from './predicates.test';
import {
  isArrayOfStrings,
  isEmptyObject,
  isNonEmptyString,
  isNotNullish,
  isString,
  isTruthy,
} from './typeGuards';

describe('typeGuards', () => {
  describe('isArrayOfStrings', () => {
    expect(isArrayOfStrings(['foo', 'bar'])).toBe(true);
    expect(isArrayOfStrings([])).toBe(true);
    assertFalse(isArrayOfStrings, [null, undefined, ['', null]]);
  });

  describe('isEmptyObject', () => {
    assertTrue(isEmptyObject, [{}]);
    assertFalse(isEmptyObject, [{ foo: 'bar' }, [], null, undefined, '']);
  });

  describe('isNonEmptyString', () => {
    assertTrue(isNonEmptyString, ['foo', '1', 'true']);
    assertFalse(isNonEmptyString, ['', /foo/, 1, true, null, undefined]);
  });

  describe('isNotNullish', () => {
    assertTrue(isNotNullish, ['', [], {}, false]);
    assertFalse(isNotNullish, [null, undefined]);
  });

  describe('isString', () => {
    assertTrue(isString, ['foo', '1', 'true', '']);
    assertFalse(isString, [/foo/, 1, true, null, undefined]);
  });

  describe('isTruthy', () => {
    assertTrue(isTruthy, [true, 1, -1, ' ', '0', 'false', [], {}]);
    assertFalse(isTruthy, [null, undefined, false, 0, -0, '', document.all]);
  });
});
