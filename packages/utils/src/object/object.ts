import * as _ from 'lodash';
import { TAny, TBasic } from '../index';

export type TObject<T = TAny, U extends string | number | symbol = string> = {
  [index in U]: T;
};

export const getPropValue = <T = TObject, U = TAny>(
  object: T,
  path: string,
  defaultValue?: U
): U => {
  return _.get(object, path, defaultValue);
};

export const mapValuesBy = <T extends object = TObject>(
  object: T | null | undefined,
  callback: (value: Partial<typeof object[keyof typeof object]>) => TBasic
): { [P in keyof T]: TAny } | { [index: number]: TAny } => {
  return _.mapValues<T>(object, callback);
};
