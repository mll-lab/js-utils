import {isEqual, sortBy} from 'lodash';

export type NonEmptyArray<T> = Array<T> & { 0: T };

export function isNonEmptyArray<T>(value: Array<T>): value is NonEmptyArray<T> {
  return value.length > 0;
}

/**
 * Return a new array that does not contain the item at the specified index.
 */
export function withoutIndex<T>(
  array: Array<T>,
  indexToRemove: number,
): Array<T> {
  return array.filter((_, i) => i !== indexToRemove);
}

/**
 * Determines if the input arrays contain the same values.
 */
export function containSameValues(
  a: Array<unknown>,
  b: Array<unknown>,
): boolean {
  return isEqual(sortBy(a), sortBy(b));
}

/**
 * A singleton empty array.
 *
 * Can be used as a default or fallback while maintaining referential equality.
 */
export const EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);

/**
 * A helper to construct contiguous arrays with conditional elements.
 *
 * @example const arr = ['x', ...insertIf(foo === 42, 'y', 'z')]
 */
export function insertIf<T>(
  condition: boolean,
  ...elements: Array<T>
): Array<T> {
  return condition ? elements : [];
}

export function last<T, A extends Array<T>>(
  array: A,
): A extends NonEmptyArray<T> ? T : T | undefined {
  return array[array.length - 1];
}

/**
 * Appends element to array if not included or removes it.
 *
 * Never mutates the given array, always returns a new array.
 */
export function toggleElement<T>(array: Array<T>, element: T): Array<T> {
  return array.includes(element)
    ? array.filter((e) => e !== element)
    : array.concat(element);
}

/**
 * Sorts an array according to the order of the elements in a given recipe array.
 *
 * @param subject The array to sort.
 * @param recipe The recipe to sort by. Must be a set, an error is thrown if it contains duplicate values.
 *
 * @example array to sort [Dec, Jan, Mar]
 *          sort by recipe [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]
 *          returns sorted array [Jan, Mar, Dec]
 */
export function sortByArray<T extends string | number>(
    subject: Array<T>,
    recipe: Array<T>,
): Array<T> {
  if (new Set(recipe).size !== recipe.length) {
    throw new Error(
        'Recipe array must only consist of distinct values in order to define a valid order.',
    );
  }

  return sortBy(subject, (value) => recipe.indexOf(value));
}
