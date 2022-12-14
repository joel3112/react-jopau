import {
  head as _head,
  last as _last,
  nth as _nth,
  remove as _remove,
  uniq as _uniq,
  compact as _compact
} from 'lodash-es';
import type { TBasic } from './index';

export type TArray<T = TBasic> = Array<T>;
export type TArrayDouble<T = TBasic> = [Array<T>, Array<T>];
export type TArrayCriteriaSplit<T = TBasic> = (value: T, index: number) => boolean;

export const first = <T>(array: TArray<T>): T | undefined => {
  return _head(array);
};

export const last = <T>(array: TArray<T>): T | undefined => {
  return _last(array);
};

export const nth = <T>(array: TArray<T>, position: number): T | undefined => {
  return _nth<T>(array, position);
};

export const remove = <T>(array: TArray<T>, position: number): TArray<T> => {
  const [filtered, removed] = split<T>(array, position);
  return [...filtered.slice(0, -1), ...removed];
};

export const uniq = <T>(array: TArray<T>): TArray<T> => {
  return _uniq<T>(array);
};

export const compact = <T>(array: TArray<T>): TArray<T> => {
  return _compact<T>(array);
};

export const multiply = <T>(array: TArray<T>, size: number): TArray<T> => {
  return Array(size)
    .fill('')
    .reduce((acc) => [...acc, ...Array.from(array)], []);
};

export const split = <T>(array: TArray<T>, position: number): TArrayDouble<T> => {
  const [filtered, removed] = splitByCriteria(array, (value: T, i: number) => i <= position);
  return [filtered, removed];
};

export const splitByCriteria = <T>(
  array: TArray<T>,
  criteria: TArrayCriteriaSplit<T>
): TArrayDouble<T> => {
  const _array = [...Array.from(array)];
  return [_remove<T>(_array, criteria), _array];
};
