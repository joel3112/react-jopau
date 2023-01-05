import type { TArray } from './array';
import type { TDate } from './date';
import type { TFunction, TFunctionVoid } from './function';
import type { TObject } from './object';

export type TBasic = string | number | boolean | null | undefined;
export type TAny =
  | TBasic
  | TDate
  | TObject<unknown>
  | TArray<unknown>
  | TFunction
  | TFunctionVoid
  | unknown;

export * from './array';
export * from './collection';
export * from './date';
export * from './function';
export * from './object';
export * from './string';
export * from './system';
