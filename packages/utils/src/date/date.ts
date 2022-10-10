import { DateTime, Duration, DurationObjectUnits } from 'luxon';

export type TDate = Date | string | number | null | undefined;
export type TDateUnits = DurationObjectUnits;

export const dateInstance = (date: TDate): Date | null => {
  return date ? new Date(date) : null;
};

export const dateInstanceString = (date?: TDate): string => {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    return date;
  }
  return new Date(date).toISOString();
};

export const formatDate = (date: TDate, locale: string): string => {
  return date
    ? DateTime.fromISO(dateInstanceString(date)).setLocale(locale).toLocaleString(DateTime.DATE_MED)
    : '';
};

export const isValidateDate = (date: TDate): boolean => {
  if (!date) {
    return false;
  }
  return DateTime.fromISO(dateInstanceString(date)).isValid;
};

export const durationFromMinutes = (minutes: number): TDateUnits => {
  return Duration.fromObject({ minutes }).shiftTo('hours', 'minutes').toObject();
};

export const yearsFromNow = (date: TDate, end?: string | null): number => {
  if (!date) {
    return 0;
  }
  if (end) {
    return Math.floor(
      Math.abs(
        DateTime.fromISO(dateInstanceString(date)).diff(DateTime.fromISO(end), ['years']).years
      )
    );
  }

  return Math.floor(Math.abs(DateTime.fromISO(dateInstanceString(date)).diffNow('years').years));
};
