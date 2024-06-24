import { isEqual, sortBy } from 'lodash';

import { Maybe } from './types';

export type NonEmptyArray<T> = Array<T> & { 0: T };

export function isNonEmptyArray<T>(value: Array<T>): value is NonEmptyArray<T> {
  return value.length > 0;
}

export function isEmptyArray(value: unknown): value is [] {
  return value instanceof Array && value.length === 0;
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

/**
 * Takes a function that maps the values to sort to strings and returns a compare function
 * using `String.prototype.localeCompare`, usable in `Array.toSorted` or similar APIs.
 *
 * null, undefined and the empty string are not distinguished and first in sort order.
 */
export function makeStringCompareFn<TSortable>(
  map: (sortable: TSortable) => Maybe<string>,
): (a: TSortable, b: TSortable) => number {
  return (a, b) => {
    const mappedA = map(a) ?? '';
    const mappedB = map(b) ?? '';

    return mappedA.localeCompare(mappedB);
  };
}

/**
 * Takes a function that maps the values to sort to numbers and returns a compare function
 * using subtraction, usable in `Array.toSorted` or similar APIs.
 *
 * null and undefined are coalesced to `fallbackValue`, by default 0, and thus not distinguished and first in sort order.
 */
export function makeNumberCompareFn<TSortable>(
  map: (sortable: TSortable) => Maybe<number>,
  fallbackValue: number = 0,
): (a: TSortable, b: TSortable) => number {
  return (a, b) => {
    const mappedA = map(a) ?? fallbackValue;
    const mappedB = map(b) ?? fallbackValue;

    return mappedA - mappedB;
  };
}

/**
 * Returns a compare function for values that are string, null or undefined,
 * using `String.prototype.localeCompare`, usable in `Array.toSorted` or similar APIs.
 *
 * The empty string is first in sort order.
 */
export function localeCompareStrings(a: string, b: string): number {
  return a.localeCompare(b);
}

/** If the given array contains exactly one item, return that, otherwise null. */
export function soleItem<T>(array: Maybe<Array<T>>): T | null {
  if (!array || array.length !== 1) {
    return null;
  }
  return array[0];
}
