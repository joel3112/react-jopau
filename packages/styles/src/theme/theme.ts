import Stitches from '@stitches/react/types/stitches';
import { ConfigType } from '@stitches/react/types/config';
import { BreakpointsRules } from '../breakpoint';
import { themes } from '../themes';
import defaultConfig from '../themes/default';

/* ==== types ================================================================== */

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type ThemeProp = { [token in number | string]: boolean | number | string };
export type ThemePropWithSchemes = Record<'@light' | '@dark', ThemeProp>;
export type ThemeProps<T = {}> = {
  borderStyles?: ThemeProp;
  borderWidths?: ThemeProp;
  colors: ThemeProp | ThemePropWithSchemes;
  fonts?: ThemeProp;
  fontSizes?: ThemeProp;
  fontWeights?: ThemeProp;
  letterSpacings?: ThemeProp;
  lineHeights?: ThemeProp;
  radii?: ThemeProp;
  shadows: ThemeProp | ThemePropWithSchemes;
  sizes?: ThemeProp;
  space?: ThemeProp;
  transitions?: ThemeProp;
  zIndices?: ThemeProp;
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

const mergeTheme = (theme1: ThemeConfig, theme2: PartialThemeConfig): ThemeConfig => {
  const a = { ...theme1 };
  const b = { ...theme2 };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(b).reduce((o: any, [k, v]: [string, unknown]) => {
    o[k] =
      v && typeof v === 'object' ? mergeTheme((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v) : v;
    return o;
  }, a);
};

const getValuesByThemeProp = (
  config: ThemeConfig | string,
  prop: keyof ThemeProps,
  scheme: 'light' | 'dark' = 'light'
): ThemeProp => {
  const values = getTheme(config)[prop];
  return Object.keys({ ...values }).reduce((acc, key) => {
    if (key.includes('@')) {
      if (key === `@${scheme}`) {
        return { ...acc, ...(values as ThemePropWithSchemes)[key as '@light' | '@dark'] };
      } else {
        return acc;
      }
    }
    return { ...acc, [key]: (values as ThemeProp)[key] };
  }, {} as ThemeProp);
};

export const getSchemeStore = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedScheme = window.localStorage.getItem(DARK_MODE_STORAGE_KEY);
  return storedScheme ? JSON.parse(storedScheme) : 'light';
};

export const getThemeStored = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_SELECTOR_STORAGE_KEY);
  return storedTheme ? JSON.parse(storedTheme) : 'default';
};

export const getThemeInstance = (config?: ThemeConfig | string): ThemeConfig => {
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

export const normalizeThemeByScheme = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark'
): ConfigType.Theme => {
  return Object.keys(getTheme(config)).reduce((acc, key) => {
    return {
      ...acc,
      [key]: getValuesByThemeProp(config, key as keyof ThemeProps, scheme)
    };
  }, {}) as ConfigType.Theme;
};

export const getColors = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark' = 'light'
): ThemeProp => {
  const colors = getValuesByThemeProp(config, 'colors', scheme);
  return Object.keys(colors).reduce((acc, key) => {
    if (key.endsWith('00')) {
      if (key.endsWith('500')) {
        return { ...acc, [key.replace('500', '')]: colors[key] };
      }
    }

    return {
      ...acc,
      [key]: colors[key]
    };
  }, {}) as ThemeProp;
};

export const getBreakpoints = (config: ThemeConfig | string): BreakpointsRules => {
  return getProps(config).media;
};

export const computeScheme = (schemes: ThemeSchemes, darkMode?: boolean) => {
  if (schemes.lightTheme && schemes.darkTheme) {
    return darkMode ? schemes.darkTheme : schemes.lightTheme;
  }
  return '';
};
