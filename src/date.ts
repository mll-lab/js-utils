import {
  differenceInCalendarDays,
  format,
  isAfter,
  isValid,
  parse,
} from 'date-fns';
import { de } from 'date-fns/locale/de';

export function isToday(date: Date | string | number) {
  return differenceInCalendarDays(new Date(), date) === 0;
}

export function isFuture(date: Date | string | number): boolean {
  return isAfter(date, new Date());
}

export function isValidGermanDate(date: Maybe<string>): boolean {
  const regexGermanDateFormat = /^(\d{1,2}[.]\d{1,2}[.]\d{4})$/;

  if (date?.match(regexGermanDateFormat)) {
    return true;
  }

  return false;
}

export function isValidTime(time: Maybe<string>): boolean {
  const regexTimeFormat = /^(\d{2}[:]\d{2})$/;

  if (time?.match(regexTimeFormat)) {
    return true;
  }

  return false;
}

export function parseDate(value: string, formatString: string): Date | null {
  const parsedDate = parse(value, formatString, new Date());

  return isValid(parsedDate) ? parsedDate : null;
}

export function parseGermanDateFlexible(value: string): Date | null {
  return parseGermanDotlessDate(value) || parseGermanDate(value);
}

export const GERMAN_DATE_FORMAT = 'dd.MM.y';
export function parseGermanDate(value: string): Date | null {
  return parseDate(value, GERMAN_DATE_FORMAT);
}
export function formatGerman(date: Date | string | number): string {
  return format(date, GERMAN_DATE_FORMAT, { locale: de });
}

export const ISO_DATE_FORMAT = 'y-MM-dd';
export function parseIsoDate(value: string): Date | null {
  return parseDate(value, ISO_DATE_FORMAT);
}
export function formatIsoDate(date: Date | string | number): string {
  return format(date, ISO_DATE_FORMAT, { locale: de });
}

export const GERMAN_DOTLESS_DATE_FORMAT = 'ddMMy';
export function parseGermanDotlessDate(value: string): Date | null {
  return parseDate(value, GERMAN_DOTLESS_DATE_FORMAT);
}
export function formatGermanDotlessDate(date: Date | string | number): string {
  return format(date, GERMAN_DOTLESS_DATE_FORMAT, { locale: de });
}

export const SECONDLESS_DATE_TIME_FORMAT = 'y-MM-dd HH:mm';
export function parseSecondlessDateTime(value: string): Date | null {
  return parseDate(value, SECONDLESS_DATE_TIME_FORMAT);
}
export function formatSecondlessDateTime(date: Date | string | number): string {
  return format(date, SECONDLESS_DATE_TIME_FORMAT, { locale: de });
}

export const GERMAN_DATE_TIME_FORMAT = 'dd.MM.y HH:mm';
export function parseGermanDateTime(value: string): Date | null {
  return parseDate(value, GERMAN_DATE_TIME_FORMAT);
}
export function formatGermanDateTime(date: Date | string | number): string {
  return format(date, GERMAN_DATE_TIME_FORMAT, { locale: de });
}

export const ISO_DATE_TIME_FORMAT = 'y-MM-dd HH:mm:ss';
export function parseIsoDateTime(value: string): Date | null {
  return parseDate(value, ISO_DATE_TIME_FORMAT);
}
export function formatIsoDateTime(date: Date | string | number): string {
  return format(date, ISO_DATE_TIME_FORMAT, { locale: de });
}

export const DOTLESS_DATE_FORMAT = 'yMMdd';
export function parseDotlessDate(value: string): Date | null {
  return parseDate(value, DOTLESS_DATE_FORMAT);
}
export function formatDotlessDate(date: Date | string | number): string {
  return format(date, DOTLESS_DATE_FORMAT, { locale: de });
}

export function formatGermanTimeHourMinute(date: string): string {
  return format(date, 'HH:mm');
}

export function formatGermanFullDateTime(date: Date | string | number): string {
  return format(date, 'dd.MM.yyyy HH:mm:ss');
}
