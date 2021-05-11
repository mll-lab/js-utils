import { words } from './string';

describe('words', () => {
  it.each([
    ['fooBar', ['foo', 'Bar']],
    ['', []],
    ['a', ['a']],
    ['AI', ['AI']],
  ])('splits a string into words', (string, expectedWords) => {
    expect(words(string)).toEqual(expectedWords);
  });
});
