import { assertFalse, assertTrue } from './predicates.test';
import { isArrayOfStrings, isNotNullish } from './typeGuards';

describe('typeGuards', () => {
  describe('isNotNullish', () => {
    assertTrue(isNotNullish, ['', [], {}, false]);
    assertFalse(isNotNullish, [null, undefined]);
  });

  describe('isArrayOfStrings', () => {
    assertTrue(isArrayOfStrings, [[], ['']]);
    assertFalse(isArrayOfStrings, [null, undefined, ['', null]]);
  });
});
