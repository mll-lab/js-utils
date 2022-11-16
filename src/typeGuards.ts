export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNotNullish<T>(
  value: T,
): value is Exclude<T, null | undefined> {
  return value != null;
}
