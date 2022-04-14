export function includesIgnoreCase(
  needle: string,
  haystack: string | Array<string>,
): boolean {
  if (haystack instanceof Array) {
    return haystack.some((hay) => includesIgnoreCase(needle, hay));
  }

  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export function firstLine(multilineText: string): string {
  return multilineText.split('\n', 1)[0];
}

export function joinNonEmpty(
  maybeStrings: Array<string | null | undefined>,
  separator: string,
): string {
  return maybeStrings.filter(Boolean).join(separator);
}
