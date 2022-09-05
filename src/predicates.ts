export type PredicateFn = (value: unknown) => boolean;

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export const isAlphanumeric: PredicateFn = (value) =>
  isString(value) && /^[A-Za-z0-9]+$/.test(value);

/**
 * BSNR (Betriebsstättennummer) ist eine eindeutige Zuordnung von Leistungen zu dem entsprechenden Ort der Leistungserbringung ermöglicht,
 * für alle vertrags(zahn)ärztlichen Leistungserbringer gültig
 * und klar abzugrenzen vom Institutskennzeichen (IK-Nummer) eines Krankenhauses.
 */
export const isBSNR: PredicateFn = (value) =>
  isString(value) && /^\d{9}$/.test(value);

// Taken from https://emailregex.com/
// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail: PredicateFn = (value) =>
  isString(value) && EMAIL_REGEX.test(value);

export const isOnlyDigits: PredicateFn = (value) =>
  isString(value) && /^\d+$/.test(value);

export const isURL: PredicateFn = (value) => {
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
};

export const isWord: PredicateFn = (value) =>
  isString(value) && /^[\w-]+$/.test(value);

export const isLabId: PredicateFn = (value) =>
  isString(value) && /^\d{2}-\d{6}$/.test(value);

export const isRackBarcode: PredicateFn = (value) =>
  isString(value) && /^[A-Z]{2}\d{8}$/.test(value);

export function isNotNullish<T>(value: T | null | undefined): value is T {
  return value != null;
}
