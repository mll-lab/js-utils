import {
  formatGermanNumber,
  isPartialGermanNumber,
  parseGermanNumber,
} from './germanNumber';

describe('formatGermanNumber', () => {
  it('formats with defaults', () => {
    expect(formatGermanNumber(123)).toBe('123');
    expect(formatGermanNumber(123.0)).toBe('123');
    expect(formatGermanNumber(123.123)).toBe('123,123');
    expect(formatGermanNumber(-123)).toBe('-123');
    expect(formatGermanNumber(123456)).toBe('123.456');
    expect(formatGermanNumber(123456.1234567)).toBe('123.456,123457');
    expect(formatGermanNumber(null)).toBe('');
    expect(formatGermanNumber(Infinity)).toBe('∞');
  });
});

describe('parseGermanNumber', () => {
  it('handles fraction digits', () => {
    expect(parseGermanNumber('123,0')).toBe(123);
    expect(parseGermanNumber('123,40')).toBe(123.4);
    expect(parseGermanNumber('123,45678')).toBe(123.45678);
  });

  it('ignores non numeric values', () => {
    expect(parseGermanNumber(undefined)).toBe(null);
    expect(parseGermanNumber(null)).toBe(null);
    expect(parseGermanNumber('dummy')).toBe(null);
  });

  it('handles the comma as the last character', () => {
    expect(parseGermanNumber('12,')).toBe(12);
    expect(parseGermanNumber('1.234,')).toBe(1234);
  });

  it('handles thousands separator', () => {
    expect(parseGermanNumber('1.234')).toBe(1234);
    expect(parseGermanNumber('12.345,01')).toBe(12345.01);
    expect(parseGermanNumber('1.200.345,9')).toBe(1200345.9);
  });
});

describe('isPartialGermanNumber', () => {
  it('allows partially typed german numbers', () => {
    expect(isPartialGermanNumber('')).toBe(true);
    expect(isPartialGermanNumber('1')).toBe(true);
    expect(isPartialGermanNumber('0123')).toBe(true);
    expect(isPartialGermanNumber('0,')).toBe(true);
    expect(isPartialGermanNumber('1.234')).toBe(true);
    expect(isPartialGermanNumber('1.')).toBe(true);
  });

  it('disallows non-numbers', () => {
    expect(isPartialGermanNumber('rolf')).toBe(false);
    expect(isPartialGermanNumber('1,2.')).toBe(false);
    expect(isPartialGermanNumber('1,2.0')).toBe(false);
  });
});
