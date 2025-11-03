import { assertString } from './assert';

describe('assertString', () => {
  it('returns the value when it is a string', () => {
    expect(assertString('hello')).toBe('hello');
    expect(assertString('')).toBe('');
    expect(assertString('123')).toBe('123');
  });

  it('throws error when value is not a string', () => {
    expect(() => assertString(123)).toThrow(
      'Expected a string, but got number',
    );
    expect(() => assertString(null)).toThrow(
      'Expected a string, but got object',
    );
    expect(() => assertString(undefined)).toThrow(
      'Expected a string, but got undefined',
    );
    expect(() => assertString(true)).toThrow(
      'Expected a string, but got boolean',
    );
    expect(() => assertString({})).toThrow('Expected a string, but got object');
    expect(() => assertString([])).toThrow('Expected a string, but got object');
  });
});
