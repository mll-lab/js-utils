import { isLabId, isRackBarcode, PredicateFn } from './predicates';

function assertInvalid(predicate: PredicateFn, values: Array<any>) {
  test.each(values)(`invalid values for ${predicate.name}`, (value) =>
    expect(predicate(value)).toBe(false),
  );
}

function assertValid(predicate: PredicateFn, values: Array<any>) {
  test.each(values)(`valid values for ${predicate.name}`, (value) => {
    expect(predicate(value)).toBe(true);
  });
}

describe('predicates', () => {
  describe('isLabId', () => {
    assertValid(isLabId, ['17-123456']);
    assertInvalid(isLabId, ['asdf', '12345678', '123123123123']);
  });

  describe('isRackBarcode', () => {
    assertValid(isRackBarcode, ['FE12345678']);
    assertInvalid(isRackBarcode, ['FE123456789', 'fe12345678', '12345678']);
  });
});
