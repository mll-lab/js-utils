import {
  containSameValues,
  insertIf,
  isEmptyArray,
  isNonEmptyArray,
  last,
  localeCompareStrings,
  makeStringCompareFn,
  NonEmptyArray,
  sortByArray,
  toggleElement,
  withoutIndex,
} from './array';
import { Maybe } from './types';

describe('NonEmptyArray', () => {
  it('can be proven to be non-empty', () => {
    const array = [1];

    // @ts-expect-error intentionally wrong
    let nonEmptyArray: NonEmptyArray<unknown> = [];

    // @ts-expect-error intentionally wrong
    nonEmptyArray = array;

    if (isNonEmptyArray(array)) {
      nonEmptyArray = array;
    }

    expect(isNonEmptyArray(nonEmptyArray)).toBe(true);
    expect(isNonEmptyArray([undefined])).toBe(true);
    expect(isNonEmptyArray([])).toBe(false);
  });
});

describe('isEmptyArray', () => {
  it('matches only exactly the empty array', () => {
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray([1])).toBe(false);
    expect(isEmptyArray([null])).toBe(false);
    expect(isEmptyArray([[]])).toBe(false);
    expect(isEmptyArray(null)).toBe(false);
    expect(isEmptyArray(undefined)).toBe(false);
  });
});

describe('withoutIndex', () => {
  it('handles empty arrays', () => {
    expect(withoutIndex([], 1)).toEqual([]);
  });

  it('removes the item at the given index without mutating the original', () => {
    const original = [1, 2, 3];
    expect(withoutIndex(original, 0)).toEqual([2, 3]);
    expect(original).toEqual([1, 2, 3]);
  });
});

describe('containSameValues', () => {
  it('handles empty arrays', () => {
    expect(containSameValues([], [])).toEqual(true);
  });

  it('ignores order', () => {
    expect(containSameValues([1, 2], [2, 1])).toEqual(true);
  });

  it('respects type', () => {
    expect(containSameValues([1], ['1'])).toEqual(false);
  });

  it('does not say subsets are equal type', () => {
    expect(containSameValues([1, 2], [1])).toEqual(false);
    expect(containSameValues([1], [1, 2])).toEqual(false);
  });
});

describe('insertIf', () => {
  it('returns the elements if the condition is true', () => {
    expect(insertIf(true, 1, 2)).toEqual([1, 2]);
  });

  it('returns an empty array if the condition is false', () => {
    expect(insertIf(false, 1, 2)).toEqual([]);
  });
});

describe('last', () => {
  it('returns the last element of an array', () => {
    const array: NonEmptyArray<number> = [1, 2];
    const actual: number = last(array);
    expect(actual).toEqual(2);
  });

  it('returns undefined for empty arrays', () => {
    expect(last([])).toEqual(undefined);
  });
});

describe('toggleElement', () => {
  it('removes existing element', () => {
    expect(toggleElement([1], 1)).toEqual([]);
  });

  it('appends non-existing element', () => {
    expect(toggleElement([], 1)).toEqual([1]);
  });

  it('uses strict comparison', () => {
    expect(toggleElement([1, '2'], '1')).toEqual([1, '2', '1']);
  });
});

describe('sortByArray', () => {
  it('change order of elements by given custom order', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe: Array<string> = [string1, string2, string3, string4];

    expect(sortByArray(subject, recipe)).toStrictEqual([string2, string4]);
  });

  it('result array should have a different order than before', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe: Array<string> = [string1, string2, string3, string4];

    expect(sortByArray(subject, recipe)).not.toStrictEqual(subject);
  });

  it('sorting should also work if recipe includes differing values', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe: Array<string> = [string1, string2, string3, string4];

    expect(sortByArray(subject, recipe)).not.toStrictEqual(recipe);
  });

  it("empty subject array isn't sorted", () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject: Array<string> = [];
    const recipe: Array<string> = [string1, string2, string3, string4];

    expect(sortByArray(subject, recipe)).toStrictEqual(subject);
  });

  it('empty recipe array has no effect', () => {
    const string1 = 'a';
    const string2 = 'b';

    const subject: Array<string> = [string1, string2];
    const recipe: Array<string> = [];

    expect(sortByArray(subject, recipe)).toStrictEqual(subject);
  });

  it('multiple values in subject array are sorted correctly', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject: Array<string> = [string2, string1, string1];
    const recipe: Array<string> = [string1, string2, string3, string4];

    expect(sortByArray(subject, recipe)).toStrictEqual([
      string1,
      string1,
      string2,
    ]);
  });

  it('multiple values in recipe array lead to error', () => {
    const string1 = 'a';
    const string2 = 'b';

    const subject: Array<string> = [string2, string1];
    const recipe: Array<string> = [string1, string2, string1];

    expect(() => {
      sortByArray(subject, recipe);
    }).toThrow(
      'Recipe array must only consist of distinct values in order to define a valid order.',
    );
  });
});

describe('makeStringCompareFn', () => {
  it('creates a compare function that sorts strings', () => {
    type MaybeKeyString = { key?: Maybe<string> };
    const compareFn = makeStringCompareFn<MaybeKeyString>(
      (record) => record.key,
    );
    const original: Array<MaybeKeyString> = [
      { key: 'c' },
      { key: '' },
      { key: undefined },
      { key: 'a' },
      { key: null },
      { key: 'b' },
      {},
    ];
    expect(original.sort(compareFn)).toEqual([
      { key: '' },
      { key: undefined },
      { key: null },
      {},
      { key: 'a' },
      { key: 'b' },
      { key: 'c' },
    ]);
  });
});

describe('localeCompareStrings', () => {
  it('sorts strings', () => {
    const original: Array<string> = ['c', '', 'a', 'b'];
    expect(original.sort(localeCompareStrings)).toEqual(['', 'a', 'b', 'c']);
  });
});
