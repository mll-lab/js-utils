import { pluralize } from './pluralize';

describe('pluralize', () => {
  it('returns singular or plural depending on the count', () => {
    const singular = 'Ding';
    const plural = 'Dinge';

    expect(pluralize(0, singular, plural)).toEqual(plural);
    expect(pluralize(1, singular, plural)).toEqual(singular);
    expect(pluralize(2, singular, plural)).toEqual(plural);
    expect(pluralize(9999, singular, plural)).toEqual(plural);
  });
});
