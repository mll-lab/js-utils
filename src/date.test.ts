import { addDays, subDays } from 'date-fns';

import {
  formatGerman,
  formatGermanDateTime,
  formatGermanFullDateTime,
  isFuture,
  isToday,
  isValidGermanDate,
  isTimeWithHoursAndMinutes,
  parseGermanDate,
  parseGermanDateFlexible,
  parseIsoDate,
  dateMatchesFormat,
} from './date';

describe('parseIsoDate', () => {
  it('should fail with an invalid date', () => {
    expect(parseIsoDate('abc')).toBeNull();
    expect(parseIsoDate('01022047')).toBeNull();
    expect(parseIsoDate('20180407')).toBeNull();
    expect(parseIsoDate('01.02.2010')).toBeNull();
    expect(parseIsoDate('01-02-2004')).toBeNull();
  });

  it('should parse a valid iso date', () => {
    expect(parseIsoDate('2004-10-05')).not.toBeNull();
  });
});

describe('parseGermanDate', () => {
  it('should parse and format a german date', () => {
    const germanDate = '02.03.2004';
    const parsed = parseGermanDate(germanDate);

    expect(parsed).toEqual(new Date(2004, 2, 2));
    expect(formatGerman(parsed as Date)).toEqual(germanDate);
  });
});

describe('parseGermanDateFlexible', () => {
  it('should fail with an invalid date', () => {
    expect(parseGermanDateFlexible('1212123456')).toBeNull();
    expect(parseGermanDateFlexible('12.12.')).toBeNull();
    expect(parseGermanDateFlexible('12..12.1234')).toBeNull();
  });

  it('should parse a valid german date with or without dots', () => {
    expect(parseGermanDateFlexible('12121234')).toEqual(new Date(1234, 11, 12));
    expect(parseGermanDateFlexible('01022003')).toEqual(new Date(2003, 1, 1));
  });
});

describe('formatGerman', () => {
  it('should format a date to german', () => {
    expect(formatGerman(new Date(2016, 2, 4))).toEqual('04.03.2016');
    expect(formatGerman('1945-05-24')).toEqual('24.05.1945');
  });
});

describe('formatGermanDateTime', () => {
  it('should format a date with time to german', () => {
    expect(formatGermanDateTime(new Date(2016, 2, 4, 11, 42, 59))).toEqual(
      '04.03.2016 11:42',
    );
  });
});

describe('isValidGermanDate', () => {
  it('determines if a string is a german date, day or month being one or two digits and year four digits, separated by dots', () => {
    expect(isValidGermanDate('01.01.2000')).toEqual(true);
    expect(isValidGermanDate('1.1.2000')).toEqual(true);
    expect(isValidGermanDate('1.01.2000')).toEqual(true);
    expect(isValidGermanDate('01.1.2000')).toEqual(true);
    expect(isValidGermanDate('011.1.2000')).toEqual(false);
    expect(isValidGermanDate('01.111.2000')).toEqual(false);
    expect(isValidGermanDate('01.01.200')).toEqual(false);
    expect(isValidGermanDate('xx.01.2000')).toEqual(false);
    expect(isValidGermanDate('01.yy.2000')).toEqual(false);
    expect(isValidGermanDate('01.01.zzzz')).toEqual(false);
    expect(isValidGermanDate('')).toEqual(false);
    expect(isValidGermanDate('..')).toEqual(false);
    expect(isValidGermanDate('abc')).toEqual(false);
  });
});

describe('isTimeWithHoursAndMinutes', () => {
  it('determines if a string matches the time format HH:mm', () => {
    expect(isTimeWithHoursAndMinutes('12:55')).toEqual(true);
    expect(isTimeWithHoursAndMinutes('02:05')).toEqual(true);
    expect(isTimeWithHoursAndMinutes('1:55')).toEqual(false);
    expect(isTimeWithHoursAndMinutes('12:5')).toEqual(false);
    expect(isTimeWithHoursAndMinutes('')).toEqual(false);
    expect(isTimeWithHoursAndMinutes(':')).toEqual(false);
    expect(isTimeWithHoursAndMinutes('abc')).toEqual(false);
  });
});

describe('isToday', () => {
  it('should determine if a date is today', () => {
    expect(isToday(new Date())).toEqual(true);
    expect(isToday(subDays(new Date(), 2))).toEqual(false);
    expect(isToday(addDays(new Date(), 2))).toEqual(false);
  });
});

describe('isFuture', () => {
  it('should determine if a date is in the future', () => {
    expect(isFuture(new Date())).toEqual(false);
    expect(isFuture(subDays(new Date(), 2))).toEqual(false);
    expect(isFuture(addDays(new Date(), 2))).toEqual(true);
  });
});

describe('formatGermanFullDateTime', () => {
  it('formats date with time and seconds', () => {
    expect(formatGermanFullDateTime('2023-06-14 09:56:15')).toEqual(
      '14.06.2023 09:56:15',
    );
  });
});

describe('dateMatchesFormat', () => {
  const DATE_FORMAT = 'yyyyMMdd';

  it('recognizes valid dates', () => {
    expect(dateMatchesFormat('20240101', DATE_FORMAT)).toBe(true);
    expect(dateMatchesFormat('20241222', DATE_FORMAT)).toBe(true);
    expect(dateMatchesFormat('99990710', DATE_FORMAT)).toBe(true);
    expect(dateMatchesFormat('00010101', DATE_FORMAT)).toBe(true);
  });

  it('rejects invalid dates', () => {
    expect(dateMatchesFormat('202410101', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('202411', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20241', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20240001', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20241301', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20241200', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20241233', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('0', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('xy20201201', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('20201201xy', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('xy', DATE_FORMAT)).toBe(false);
    expect(dateMatchesFormat('', DATE_FORMAT)).toBe(false);
  });
});
