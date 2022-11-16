import { assertFalse, assertTrue } from './predicates.test';
import { isNotNullish } from './typeGuards';

describe('typeGuards', () => {
  describe('isNotNullish', () => {
    assertTrue(isNotNullish, ['', [], {}, false]);
    assertFalse(isNotNullish, [null, undefined]);
  });
});
