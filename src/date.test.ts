import { addDays, subDays } from 'date-fns';

import {
  formatGerman,
  formatGermanDateTime,
  formatGermanFullDateTime,
  isFuture,
  isToday,
  parseGermanDate,
  parseGermanDateFlexible,
  parseIsoDate,
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
  });
});

describe('formatGermanDateTime', () => {
  it('should format a date with time to german', () => {
    expect(formatGermanDateTime(new Date(2016, 2, 4, 11, 42, 59))).toEqual(
      '04.03.2016 11:42',
    );
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
