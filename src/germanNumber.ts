export const GERMAN_THOUSAND_SEPARATOR = '.';
export const GERMAN_DECIMAL_SEPARATOR = ',';

export const ENGLISH_THOUSAND_SEPARATOR = ',';
export const ENGLISH_DECIMAL_SEPARATOR = '.';

type FormatNumberOptions = Intl.NumberFormatOptions & {
  defaultValue?: string;
};

export function formatGermanNumber(
  value: number | string | null | undefined,
  { defaultValue, ...localeOptions }: FormatNumberOptions = {},
): string {
  if (!value) {
    return '';
  }

  const parsed = typeof value === 'string' ? Number.parseFloat(value) : value;
  if (Number.isNaN(parsed)) {
    return defaultValue ?? '';
  }

  return parsed.toLocaleString('de-DE', {
    ...localeOptions,
    maximumFractionDigits: 6,
  });
}

/**
 * Parse an input into a number on a best effort basis.
 *
 * If the value can not be parsed, this function returns null.
 */
export function parseGermanNumber(
  value: string | null | undefined,
): number | null {
  if (value === null || value === undefined) {
    return null;
  }

  const normalizedValue = value
    .replace(new RegExp(`\\${GERMAN_THOUSAND_SEPARATOR}`, 'g'), '')
    .replace(GERMAN_DECIMAL_SEPARATOR, ENGLISH_DECIMAL_SEPARATOR);

  const parsed = Number.parseFloat(normalizedValue);
  if (Number.isNaN(parsed)) {
    return null;
  }

  return parsed;
}

/**
 * Check if the given input might be on track to become a parseable german number.
 *
 * The regular expression must be quite lenient, as it is used to validate numbers
 * as they are being typed. We just want to improve the user experience by disallowing
 * them to enter something totally nonsensical.
 */
export function isPartialGermanNumber(value: string): boolean {
  return /^-?\d*[.\d]*,?\d*$/.test(value);
}
