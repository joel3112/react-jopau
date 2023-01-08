import {
  debounce as _debounce,
  delay as _delay,
  noop as _noop,
  random as _random,
  range as _range,
  throttle as _throttle
} from 'lodash-es';
import type { TAny } from './index';

export type TFunction = (...args: never[]) => TAny;
export type TFunctionVoid = (...args: never[]) => void;
export type TFunctionBoolean = (...args: never[]) => boolean;
export type TFunctionPromiseVoid = (...args: never[]) => Promise<void>;

export const debounce = _debounce;
export const delay = _delay;
export const noop = _noop;
export const random = _random;
export const range = _range;
export const throttle = _throttle;

export const anysort = (a: TAny, b: TAny, order: string[]): number => {
  const generateAnysort = (criteria = []) => {
    return function sorter(a: never, b: never) {
      const indexOfA = criteria.indexOf(a);
      const indexOfB = criteria.indexOf(b);
      const hasA = indexOfA !== -1;
      const hasB = indexOfB !== -1;
      if (hasA && !hasB) {
        return -1;
      } else if (!hasA && hasB) {
        return 1;
      } else if (indexOfA !== indexOfB) {
        return indexOfA - indexOfB;
      } else if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    };
  };

  return generateAnysort(order as never)(a as never, b as never);
};
