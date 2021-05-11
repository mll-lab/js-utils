import { capitalizeWord, toCapitalizedWords } from './capitalize';

describe('capitalizeWord', () => {
  it.each([
    ['ding', 'Ding'],
    ['', ''],
    ['a', 'A'],
    ['AI', 'AI'],
  ])('capitalizes a single word', (nonCapitalized, capitalized) => {
    expect(capitalizeWord(nonCapitalized)).toEqual(capitalized);
    expect(capitalizeWord(capitalized)).toEqual(capitalized);
  });
});

describe('toCapitalizedWords', () => {
  it.each([
    ['camelCase1', 'Camel Case 1'],
    ['snake-case', 'Snake Case'],
    ['under_score', 'Under Score'],
    ['PasCal', 'Pas Cal'],
  ])(
    'capitalizes a string to a capitalized string with spaces',
    (nonCapitalized, capitalized) => {
      expect(toCapitalizedWords(nonCapitalized)).toEqual(capitalized);
      expect(toCapitalizedWords(capitalized)).toEqual(capitalized);
    },
  );
});
