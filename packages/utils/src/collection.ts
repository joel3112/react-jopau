import * as _ from 'lodash';
import type { TAny, TArray, TBasic } from './index';
import { compact } from './array';

export type TCollection<T = TAny> = TArray<T> | T;
export type TCollectionSortOrder = 'asc' | 'desc';

export const isEmpty = <T>(collection: TCollection<T>): boolean => {
  if (Array.isArray(collection)) {
    return compact(collection).length === 0;
  }
  if (typeof collection === 'object') {
    return !(collection && Object.keys(collection).length);
  }

  return _.isEmpty(collection);
};

export const size = (collection: TCollection): number => {
  return _.size(collection as Array<TCollection>);
};

export const some = <T>(
  collection: TCollection<T> | null | undefined,
  predicate: TAny
): boolean => {
  return _.some<T>(
    collection as TArray<T>,
    predicate as (value: T, index: number, collection: ArrayLike<T>) => boolean
  );
};

export const includes = <T>(collection: TCollection<T>, value: TAny, fromIndex = 0): boolean => {
  return _.includes(collection as unknown as TArray<T>, value, fromIndex);
};

export const sortBy = <T>(
  collection: TCollection<T>,
  key: string | Array<string> | ((value: T, index: number, collection: ArrayLike<T>) => TBasic),
  orders: Array<TCollectionSortOrder> | TCollectionSortOrder = 'asc'
): TArray<T> | TArray<T[keyof T]> => {
  return _.orderBy<T>(collection as TArray<T>, key, orders);
};
