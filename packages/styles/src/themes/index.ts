import type { ConfigType } from '@stitches/react/types/config';
import Stitches from '@stitches/react/types/stitches';
import { BreakpointsRules } from '../breakpoint';
import defaultTheme from './default';
import purpleTheme from './purple';

export type ThemeProps = Omit<ConfigType.Theme, 'colors' | 'shadows'> & {
  colors: {
    light: ConfigType.Theme['colors'];
    dark: ConfigType.Theme['colors'];
  };
  shadows: {
    light: ConfigType.Theme['shadows'];
    dark: ConfigType.Theme['shadows'];
  };
};
export type Theme = {
  theme: ThemeProps;
  media: BreakpointsRules;
  brand: {
    title: string;
    url: string;
    image: string;
  };
};

export type ThemeScheme = Stitches['theme'] | null;

export type ThemeSchemes = {
  lightTheme?: ThemeScheme;
  darkTheme?: ThemeScheme;
};

export const themes: Record<string, { label: string; value: Theme }> = {
  default: { label: 'Default', value: defaultTheme },
  purple: { label: 'Purple', value: purpleTheme }
};
