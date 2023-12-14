import {
  isLabID,
  isOnlyDigits,
  isRackBarcode,
  PredicateFn,
} from './predicates';

export function assertFalse(
  predicate: PredicateFn,
  values: Array<unknown>,
): void {
  test.each(values)(`invalid values for ${predicate.name}`, (value) =>
    expect(predicate(value)).toBe(false),
  );
}

export function assertTrue(
  predicate: PredicateFn,
  values: Array<unknown>,
): void {
  test.each(values)(`valid values for ${predicate.name}`, (value) => {
    expect(predicate(value)).toBe(true);
  });
}

describe('predicates', () => {
  describe('isLabID', () => {
    assertTrue(isLabID, ['17-123456']);
    assertFalse(isLabID, ['asdf', '12345678', '123123123123']);
  });

  describe('isOnlyDigits', () => {
    assertTrue(isOnlyDigits, ['123', 123]);
    assertFalse(isOnlyDigits, ['12x', 'x12', '1,2', '1.2', 1.2]);
  });

  describe('isRackBarcode', () => {
    assertTrue(isRackBarcode, ['FE12345678']);
    assertFalse(isRackBarcode, ['FE123456789', 'fe12345678', '12345678']);
  });
});
