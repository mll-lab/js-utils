import { sortByCustomOrder } from '../sort';

describe('sortByCustomOrder', () => {
  it('change order of elements by given custom order', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe = [string1, string2, string3, string4];

    expect(sortByCustomOrder(subject, recipe)).toStrictEqual([
      string2,
      string4,
    ]);
  });

  it('result array should have a different order than before', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe = [string1, string2, string3, string4];

    expect(sortByCustomOrder(subject, recipe)).not.toStrictEqual(subject);
  });

  it('sorting should also work if recipe includes differing values', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string4, string2];
    const recipe = [string1, string2, string3, string4];

    expect(sortByCustomOrder(subject, recipe)).not.toStrictEqual(recipe);
  });

  it("empty subject array isn't sorted", () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [];
    const recipe = [string1, string2, string3, string4];

    expect(sortByCustomOrder(subject, recipe)).toStrictEqual(subject);
  });

  it('empty recipe array has no effect', () => {
    const string1 = 'a';
    const string2 = 'b';

    const subject = [string1, string2];
    const recipe = [];

    expect(sortByCustomOrder(subject, recipe)).toStrictEqual(subject);
  });

  it('multiple values in subject array are sorted correctly', () => {
    const string1 = 'a';
    const string2 = 'b';
    const string3 = 'c';
    const string4 = 'd';

    const subject = [string2, string1, string1];
    const recipe = [string1, string2, string3, string4];

    expect(sortByCustomOrder(subject, recipe)).toStrictEqual([
      string1,
      string1,
      string2,
    ]);
  });

  it('multiple values in recipe array lead to error', () => {
    const string1 = 'a';
    const string2 = 'b';

    const subject = [string2, string1];
    const recipe = [string1, string2, string1];

    expect(() => {
      sortByCustomOrder(subject, recipe);
    }).toThrow(
      'Recipe array must only consist of distinct values in order to define a valid order.',
    );
  });
});
