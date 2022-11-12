import Stitches from '@stitches/react/types/stitches';
import { BreakpointsRules } from '../breakpoint';
import { themes } from '../themes';
import defaultConfig from '../themes/default';

/* ==== types ================================================================== */

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type ThemePropValue = { [token in number | string]: boolean | number | string };
export type ThemeProps<T = {}> = {
  borderStyles?: ThemePropValue;
  borderWidths?: ThemePropValue;
  colors: {
    light: ThemePropValue;
    dark: ThemePropValue;
  };
  fonts?: ThemePropValue;
  fontSizes?: ThemePropValue;
  fontWeights?: ThemePropValue;
  letterSpacings?: ThemePropValue;
  lineHeights?: ThemePropValue;
  radii?: ThemePropValue;
  shadows: {
    light?: ThemePropValue;
    dark?: ThemePropValue;
  };
  sizes?: ThemePropValue;
  space?: ThemePropValue;
  transitions?: ThemePropValue;
  zIndices?: ThemePropValue;
} & {
  [Scale in keyof T]: {
    [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
      ? T[Scale][Token]
      : boolean | number | string;
  };
};
export type ThemeConfig = {
  theme: ThemeProps;
  media: BreakpointsRules;
  brand: {
    title: string;
    url: string;
    image: string;
  };
};
export type PartialThemeConfig = DeepPartial<ThemeConfig> | ThemeConfig;

export type ThemeStitches = Stitches['styled'] | null;

export type ThemeScheme = Stitches['theme'] | null;

export type ThemeSchemes = {
  lightTheme?: ThemeScheme;
  darkTheme?: ThemeScheme;
};

/* ==== constants ============================================================== */

export const THEME_SELECTOR_STORAGE_KEY = 'key-theme-selector';
export const DARK_MODE_STORAGE_KEY = 'key-dark-mode';

/* ==== helpers ================================================================ */

const mergeTheme = (theme1: ThemeConfig, theme2: PartialThemeConfig) => {
  const a = { ...theme1 };
  const b = { ...theme2 };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(b).reduce((o: any, [k, v]: [string, unknown]) => {
    o[k] =
      v && typeof v === 'object' ? mergeTheme((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v) : v;
    return o;
  }, a);
};

export const getThemeStored = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_SELECTOR_STORAGE_KEY);
  return storedTheme ? JSON.parse(storedTheme) : 'default';
};

export const getThemeInstance = (config?: ThemeConfig | string) => {
  if (!config) {
    return defaultConfig;
  }
  if (typeof config === 'string') {
    return mergeTheme(defaultConfig, themes[config].value);
  }

  return mergeTheme(defaultConfig, config);
};

export const getProps = (config: ThemeConfig | string): ThemeConfig => {
  return getThemeInstance(config);
};

export const getTheme = (config: ThemeConfig | string): ThemeProps => {
  return getProps(config).theme;
};

export const getColors = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark' = 'light'
): ThemePropValue => {
  return getTheme(config).colors[scheme];
};

export const getBreakpoints = (config: ThemeConfig | string) => {
  return getProps(config).media;
};

export const computeScheme = (schemes: ThemeSchemes, darkMode?: boolean) => {
  if (schemes.lightTheme && schemes.darkTheme) {
    return darkMode ? schemes.darkTheme : schemes.lightTheme;
  }
  return '';
};
