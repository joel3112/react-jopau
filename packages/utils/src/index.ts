import { TArray } from './array';
import { TObject } from './object';

export type TBasic = string | number | boolean | null | undefined;
export type TAny = TBasic | TObject<unknown> | TArray<unknown> | unknown;

export * from './array';
export * from './object';
