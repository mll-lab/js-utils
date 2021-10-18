import { differenceInCalendarDays, format, isValid, parse } from 'date-fns';
import de from 'date-fns/locale/de';

export function isToday(date: Date | number) {
  return differenceInCalendarDays(new Date(), date) === 0;
}

export function parseDate(value: string, formatString: string): Date | null {
  const parsedDate = parse(value, formatString, new Date());

  return isValid(parsedDate) ? parsedDate : null;
}

export function parseGermanDateFlexible(value: string): Date | null {
  return parseGermanDotlessDate(value) || parseGermanDate(value);
}

export const GERMAN_DATE_FORMAT: string = 'dd.MM.y';
export function parseGermanDate(value: string): Date | null {
  return parseDate(value, GERMAN_DATE_FORMAT);
}
export function formatGerman(date: Date): string {
  return format(date, GERMAN_DATE_FORMAT, { locale: de });
}

export const ISO_DATE_FORMAT: string = 'y-MM-dd';
export function parseIsoDate(value: string): Date | null {
  return parseDate(value, ISO_DATE_FORMAT);
}
export function formatIsoDate(date: number | Date): string {
  return format(date, ISO_DATE_FORMAT, { locale: de });
}

export const GERMAN_DOTLESS_DATE_FORMAT: string = 'ddMMy';
export function parseGermanDotlessDate(value: string): Date | null {
  return parseDate(value, GERMAN_DOTLESS_DATE_FORMAT);
}
export function formatGermanDotlessDate(date: Date): string {
  return format(date, GERMAN_DOTLESS_DATE_FORMAT, { locale: de });
}

export const SECONDLESS_DATE_TIME_FORMAT: string = 'y-MM-dd HH:mm';
export function parseSecondlessDateTime(value: string): Date | null {
  return parseDate(value, SECONDLESS_DATE_TIME_FORMAT);
}
export function formatSecondlessDateTime(dateTime: number | Date): string {
  return format(dateTime, SECONDLESS_DATE_TIME_FORMAT, { locale: de });
}

export const GERMAN_DATE_TIME_FORMAT: string = 'dd.MM.y HH:mm';
export function parseGermanDateTime(value: string): Date | null {
  return parseDate(value, GERMAN_DATE_TIME_FORMAT);
}
export function formatGermanDateTime(date: Date): string {
  return format(date, GERMAN_DATE_TIME_FORMAT, { locale: de });
}

export const ISO_DATE_TIME_FORMAT: string = 'y-MM-dd HH:mm:ss';
export function parseIsoDateTime(value: string): Date | null {
  return parseDate(value, ISO_DATE_TIME_FORMAT);
}
export function formatIsoDateTime(dateTime: number | Date): string {
  return format(dateTime, ISO_DATE_TIME_FORMAT, { locale: de });
}

export const DOTLESS_DATE_FORMAT: string = 'yMMdd';
export function parseDotlessDate(value: string): Date | null {
  return parseDate(value, DOTLESS_DATE_FORMAT);
}
export function formatDotlessDate(dateTime: number | Date): string {
  return format(dateTime, DOTLESS_DATE_FORMAT, { locale: de });
}
