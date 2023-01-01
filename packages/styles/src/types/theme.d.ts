import Stitches from '@stitches/react/types/stitches';
import { ConfigType } from '@stitches/react/types/config';
import { BreakpointsRules } from './breakpoint';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type ThemeConfig = {
  theme: ThemeTokens;
  darkTheme?: ThemeTokens;
  media: BreakpointsRules;
  brand: {
    title: string;
    url: string;
    image: string;
    darkImage?: string;
  };
};

export type PartialThemeConfig = DeepPartial<ThemeConfig> | ThemeConfig;
export type ThemeStyled = Stitches['styled'] | null;
export type ThemeTokens = ConfigType.Theme | null;
export type ThemeScheme = Stitches['theme'] | null;

export type ThemeSchemes = {
  darkTheme?: ThemeScheme;
  lightTheme?: ThemeScheme;
};
