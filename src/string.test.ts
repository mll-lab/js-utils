import { firstLine, includesIgnoreCase, joinNonEmpty } from './string';

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

describe('joinNonEmpty', () => {
  it('handles empty array', () => {
    expect(joinNonEmpty([], ',')).toEqual('');
  });

  it('handles array with empty values', () => {
    expect(joinNonEmpty([null, undefined, ''], ',')).toEqual('');
  });

  it('handles array with single value', () => {
    expect(joinNonEmpty(['foo'], ',')).toEqual('foo');
  });

  it('handles array with multiple values', () => {
    expect(joinNonEmpty(['foo', 'bar'], ',')).toEqual('foo,bar');
  });

  it('handles array with mixed values', () => {
    expect(joinNonEmpty([undefined, 'foo', null, 'bar', ''], ',')).toEqual(
      'foo,bar',
    );
  });

  it('handles empty separator', () => {
    expect(joinNonEmpty(['foo', 'bar'], '')).toEqual('foobar');
  });
});
