import { uniq } from 'lodash';

import { stringToHslaColor } from './stringToColor';

describe('stringToHslaColor', () => {
  it.each(['test', 'test'])(
    'is a pure function returning the same hsla for the same string',
    (testString) => {
      expect(stringToHslaColor(testString)).toStrictEqual(
        'hsla(58, 98%, 48%, 1)',
      );
    },
  );

  it('allows setting the opacity', () => {
    expect(stringToHslaColor('test', { opacity: 1.23 })).toStrictEqual(
      'hsla(58, 98%, 48%, 1.23)',
    );
  });

  it('returns various hsla colors for various inputs', () => {
    const testStrings = ['t', 'te', 'tes', 'test'];
    expect(
      uniq(testStrings.map((string) => stringToHslaColor(string))).length,
    ).toBe(testStrings.length);
  });

  it('returns a valid color for a random string', () => {
    expect(isValidColor(stringToHslaColor(randomString()))).toBe(true);
  });
});

function isValidColor(color: string): boolean {
  // Use the browser's validation. Create a dummy HTML element, assign the color and check if it's set.
  const element = document.createElement('div');
  element.style.borderColor = '';
  element.style.borderColor = color;

  return element.style.borderColor.length !== 0;
}

/** Generates a random string with a length of 1-11 chars. */
function randomString(): string {
  // Cut off the constant 0. from the beginning
  const fractionStart = 2;

  // Unequal distribution at the edges, but sufficiently random for the purposes of this function
  const randomLengthEnd = Math.round(Math.random() * 11) + 3;

  return Math.random().toString(36).substring(fractionStart, randomLengthEnd);
}
