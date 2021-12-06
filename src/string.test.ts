import { firstLine, includesIgnoreCase } from './string';

describe('includesIgnoreCase', () => {
  it('finds exact match', () => {
    expect(includesIgnoreCase('find me', 'search and find me')).toBeTruthy();
    expect(
      includesIgnoreCase('find it', 'search and find me again'),
    ).toBeFalsy();
    expect(includesIgnoreCase('fist part', 'first part')).toBeFalsy();
  });

  it('finds no match', () => {
    expect(
      includesIgnoreCase('find it', 'search and find me again'),
    ).toBeFalsy();
  });

  it('finds match', () => {
    expect(includesIgnoreCase('find MÖ', 'search and find mö')).toBeTruthy();
    expect(includesIgnoreCase('find mö', 'search and find MÖ')).toBeTruthy();
  });
});

describe('firstLine', () => {
  it('gets the first line of a multiline string', () => {
    expect(firstLine('foo\nbar')).toEqual('foo');
  });

  it('gets the first line of a one line string', () => {
    expect(firstLine('foo')).toEqual('foo');
  });

  it('returns an empty string for empty strings', () => {
    expect(firstLine('')).toEqual('');
  });
});
