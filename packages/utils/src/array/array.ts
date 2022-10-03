import * as _ from 'lodash';
import { TBasic } from '../index';

export type TArray<T = TBasic> = ArrayLike<T>;
export type TArrayDouble<T = TBasic> = [Array<T>, Array<T>];
export type TArrayCriteriaSplit<T = TBasic> = (value: T, index: number) => boolean;

export const first = <T>(array: TArray<T>): T | undefined => {
  return _.head(array);
};

export const last = <T>(array: TArray<T>): T | undefined => {
  return _.last(array);
};

export const nth = <T>(array: TArray<T>, position: number): T | undefined => {
  return _.nth<T>(array, position);
};

export const remove = <T>(array: TArray<T>, position: number): TArray<T> => {
  const [filtered, removed] = split<T>(array, position);
  return [...filtered.slice(0, -1), ...removed];
};

export const uniq = <T>(array: TArray<T>): TArray<T> => {
  return _.uniq<T>(array);
};

export const compact = <T>(array: TArray<T>): TArray<T> => {
  return _.compact<T>(array);
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
  return [_.remove<T>(_array, criteria), _array];
};
