export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNonEmptyString(value: unknown): value is Exclude<string, ''> {
  return isString(value) && value !== '';
}

export function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export function isArrayOfStrings(value: unknown): value is Array<string> {
  return value instanceof Array && value.every(isString);
}

export function isEmptyObject(value: unknown): value is Record<string, never> {
  return Boolean(
    value &&
      typeof value === 'object' &&
      !(value instanceof Array) &&
      Object.keys(value).length === 0,
  );
}
