import { TObject } from './object';

export type TBasic = string | number | boolean | null | undefined;
export type TAny = TBasic | TObject<unknown> | unknown;

export * from './object';
