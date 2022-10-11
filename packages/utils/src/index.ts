import { TArray } from './array';
import { TDate } from './date';
import { TFunction, TFunctionVoid } from './function';
import { TObject } from './object';
import classes from 'classnames';

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
export * from './breakpoint';
export * from './collection';
export * from './date';
export * from './function';
export * from './object';
export * from './string';
export { classes };
