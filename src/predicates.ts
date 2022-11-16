export type PredicateFn = (value: unknown) => boolean;

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isAlphanumeric(value: unknown): value is string {
  return isString(value) && /^[A-Za-z0-9]+$/.test(value);
}

/**
 * BSNR (Betriebsstättennummer) ist eine eindeutige Zuordnung von Leistungen zu dem entsprechenden Ort der Leistungserbringung ermöglicht,
 * für alle vertrags(zahn)ärztlichen Leistungserbringer gültig
 * und klar abzugrenzen vom Institutskennzeichen (IK-Nummer) eines Krankenhauses.
 */
export function isBSNR(value: unknown): value is string {
  return isString(value) && /^\d{9}$/.test(value);
}

// Taken from https://emailregex.com
export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isEmail(value: unknown): value is string {
  return isString(value) && EMAIL_REGEX.test(value);
}

export function isOnlyDigits(value: unknown): value is string {
  return isString(value) && /^\d+$/.test(value);
}

export function isURL(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  try {
    // Constructing the URL object throws on invalid values
    // eslint-disable-next-line no-new
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function isWord(value: unknown): value is string {
  return isString(value) && /^[\w-]+$/.test(value);
}

export function isLabId(value: unknown): value is string {
  return isString(value) && /^\d{2}-\d{6}$/.test(value);
}

export function isRackBarcode(value: unknown): value is string {
  return isString(value) && /^[A-Z]{2}\d{8}$/.test(value);
}

export function isNotNullish<T>(
  value: T,
): value is Exclude<T, null | undefined> {
  return value != null;
}
