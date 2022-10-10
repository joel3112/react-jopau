import {
  dateInstance,
  dateInstanceString,
  durationFromMinutes,
  formatDate,
  isValidateDate,
  yearsFromNow
} from '../src/date';

describe('Date helper methods', () => {
  describe('dateInstance', () => {
    test('returns date for date parameter', () => {
      expect(dateInstance(new Date('2020-01-01'))).toStrictEqual(new Date('2020-01-01'));
    });

    test('returns date for string parameter', () => {
      expect(dateInstance('2020-01-01')).toStrictEqual(new Date('2020-01-01'));
    });

    test('returns date for integer parameter', () => {
      expect(dateInstance(new Date('2020-01-01').getTime())).toStrictEqual(new Date('2020-01-01'));
    });
  });

  describe('dateInstanceString', () => {
    test('returns date for date parameter', () => {
      expect(dateInstanceString(new Date('2020-01-01'))).toContain('2020-01-01');
    });

    test('returns date for string parameter', () => {
      expect(dateInstanceString('2020-01-01')).toContain('2020-01-01');
    });

    test('returns date for integer parameter', () => {
      expect(dateInstanceString(new Date('2020-01-01').getTime())).toContain('2020-01-01');
    });
  });

  describe('formatDate', () => {
    test('returns empty when date is null', () => {
      expect(formatDate(null, 'es')).toBe('');
    });

    test('returns formatted date', () => {
      expect(formatDate('2019-01-01', 'es')).toBe('1 ene 2019');
    });

    test('returns formatted english date', () => {
      expect(formatDate('2019-01-01', 'en')).toBe('Jan 1, 2019');
    });
  });

  describe('isValidDate', () => {
    test('returns true when date is valid', () => {
      expect(isValidateDate('2019-01-01')).toBeTruthy();
    });

    test('returns false when date is not valid', () => {
      expect(isValidateDate('2019-02-41')).toBeFalsy();
    });
  });

  describe('durationFromMinutes', () => {
    test('returns only minutes', () => {
      expect(durationFromMinutes(40)).toStrictEqual({ hours: 0, minutes: 40 });
    });

    test('returns only hours', () => {
      expect(durationFromMinutes(60)).toStrictEqual({ hours: 1, minutes: 0 });
    });

    test('returns hours and minutes', () => {
      expect(durationFromMinutes(78)).toStrictEqual({ hours: 1, minutes: 18 });
    });
  });

  describe('yearsFromNow', () => {
    test('returns 0 when date is null', () => {
      expect(yearsFromNow(null)).toBe(0);
    });

    test('returns years from date', () => {
      expect(yearsFromNow('2019-08-01')).toBe(3);
    });
  });
});
