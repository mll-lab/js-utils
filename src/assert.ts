/**
 * Asserts that a value is a string at runtime.
 * Throws an error if the value is not a string.
 *
 * Use this function instead of unsafe type casts like `as string` when you need
 * to ensure a value is actually a string at runtime.
 *
 * @param value - The value to check
 * @returns The value as a string if it passes the check
 * @throws Error if the value is not a string
 *
 * @example
 * const id = assertString(someUnknownValue);
 * // Now id is safely typed as string and verified at runtime
 */
export function assertString(value: unknown): string {
  if (typeof value !== 'string') {
    throw new Error(`Expected a string, but got ${typeof value}`);
  }

  return value;
}
