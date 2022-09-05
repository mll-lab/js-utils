import {
  isLabId,
  isNotNullish,
  isRackBarcode,
  PredicateFn,
} from './predicates';

function assertFalse(predicate: PredicateFn, values: Array<unknown>): void {
  test.each(values)(`invalid values for ${predicate.name}`, (value) =>
    expect(predicate(value)).toBe(false),
  );
}

function assertTrue(predicate: PredicateFn, values: Array<unknown>): void {
  test.each(values)(`valid values for ${predicate.name}`, (value) => {
    expect(predicate(value)).toBe(true);
  });
}

describe('predicates', () => {
  describe('isLabId', () => {
    assertTrue(isLabId, ['17-123456']);
    assertFalse(isLabId, ['asdf', '12345678', '123123123123']);
  });

  describe('isRackBarcode', () => {
    assertTrue(isRackBarcode, ['FE12345678']);
    assertFalse(isRackBarcode, ['FE123456789', 'fe12345678', '12345678']);
  });

  describe('isNotNullish', () => {
    assertTrue(isNotNullish, ['', [], {}, false]);
    assertFalse(isNotNullish, [null, undefined]);
  });
});
