/**
 * Splits a string into words by capitalization or delimiters.
 */
export function words(string: string): Array<string> {
  return string.match(/[A-Za-z][a-z]*|[0-9]+/g) || [];
}
