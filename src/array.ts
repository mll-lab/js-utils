import { isEqual, sortBy } from 'lodash';

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
  // @ts-expect-error too magical
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
