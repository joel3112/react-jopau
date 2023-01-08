import { get as _get, mapValues as _mapValues, merge as _merge } from 'lodash-es';
import type { TAny, TArray, TBasic } from './index';

export type TObject<T = TAny, U extends string | number | symbol = string> = Record<U, T>;

export const getPropValue = <T = TObject, U = TAny>(
  object: T,
  path: string,
  defaultValue?: U
): U => {
  return _get(object, path, defaultValue) as U;
};

export const mapValuesBy = <T extends object = TObject>(
  object: T | null | undefined,
  callback: (value: Partial<(typeof object)[keyof typeof object]>) => TBasic
): { [P in keyof T]: TAny } | { [index: number]: TAny } => {
  return _mapValues<T>(object, callback);
};

export const merge = <T = Object, U = Object>(object: T, ...sources: TArray<U>): T & U => {
  return _merge({}, object, ...sources);
};
