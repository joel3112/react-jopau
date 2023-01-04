import * as _ from 'lodash';
import type { TAny } from './index';

export type TFunction = (...args: never[]) => TAny;
export type TFunctionVoid = (...args: never[]) => void;
export type TFunctionBoolean = (...args: never[]) => boolean;
export type TFunctionPromiseVoid = (...args: never[]) => Promise<void>;

export const debounce = _.debounce;
export const delay = _.delay;
export const noop = _.noop;
export const random = _.random;
export const range = _.range;
export const throttle = _.throttle;

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
