import { isString } from './typeGuards';

export type PredicateFn = (value: unknown) => boolean;

export const isAlphanumeric: PredicateFn = function isAlphanumeric(
  value,
): value is string {
  return isString(value) && /^[A-Za-z0-9]+$/.test(value);
};

/**
 * Die BSNR (Betriebsstättennummer) ist eine neunstellige Zahl, die eine eindeutige Zuordnung
 * von Leistungen zu dem entsprechenden Ort der Leistungserbringung ermöglicht.
 * Die BSNR ist für alle vertrags(zahn)ärztlichen Leistungserbringer gültig
 * und klar abzugrenzen vom Institutskennzeichen (IK-Nummer) eines Krankenhauses.
 *
 * https://reimbursement.institute/glossar/bsnr-betriebsstaettennummer
 */
export const isBSNR: PredicateFn = function isBSNR(value): value is string {
  return isString(value) && /^\d{9}$/.test(value);
};

export const EMAIL_REGEX =
  // Taken from https://emailregex.com
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail: PredicateFn = function isEmail(value): value is string {
  return isString(value) && EMAIL_REGEX.test(value);
};

export const isLabId: PredicateFn = function isLabId(value): value is string {
  return isString(value) && /^\d{2}-\d{6}$/.test(value);
};

export const isOnlyDigits: PredicateFn = function isOnlyDigits(
  value,
): value is string | number {
  return (isString(value) && /^\d+$/.test(value)) || Number.isInteger(value);
};

export const isRackBarcode: PredicateFn = function isRackBarcode(
  value,
): value is string {
  return isString(value) && /^[A-Z]{2}\d{8}$/.test(value);
};

export const isURL: PredicateFn = function isURL(value): value is string {
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

export const isWord: PredicateFn = function isWord(value): value is string {
  return isString(value) && /^[\w-]+$/.test(value);
};
