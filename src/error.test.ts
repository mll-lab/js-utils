import { errorMessage } from './error';

describe('errorMessage', () => {
  it('extracts the message from an Error', () => {
    const message = 'foo';
    expect(errorMessage(new Error(message))).toBe(message);
  });

  it('extracts the message from an object', () => {
    const message = 'foo';
    expect(errorMessage({ message })).toBe(message);
  });

  it('returns a string unchanged', () => {
    const error = 'foo';
    expect(errorMessage(error)).toBe(error);
  });

  it('stringifies an arbitrary object', () => {
    const error = { foo: 123 };
    expect(errorMessage(error)).toBe('{"foo":123}');
  });

  it('stringifies numbers', () => {
    const error = 123;
    expect(errorMessage(error)).toBe('123');
  });

  it('stringifies undefined', () => {
    const error = undefined;
    expect(errorMessage(error)).toBe('undefined');
  });

  it('stringifies null', () => {
    const error = null;
    expect(errorMessage(error)).toBe('null');
  });
});
