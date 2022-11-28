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

export type ThemeConfig = {
  theme: ThemeTokens;
  darkTheme?: ThemeTokens;
  media: BreakpointsRules;
  brand: {
    title: string;
    url: string;
    image: string;
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

/* ==== constants ============================================================== */

export const THEME_SELECTOR_STORAGE_KEY = 'key-theme-selector';
export const DARK_MODE_STORAGE_KEY = 'key-dark-mode';

/* ==== helpers ================================================================ */

const mergeTheme = <T = {}>(theme1: T, theme2: T): T => {
  const a = { ...theme1 };
  const b = { ...theme2 } as Object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(b).reduce((o: any, [k, v]: [string, unknown]) => {
    o[k] =
      v && typeof v === 'object'
        ? mergeTheme<T>((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v as T)
        : v;
    return o;
  }, a);
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
    return mergeTheme<ThemeConfig>(defaultConfig, themes[config].value as ThemeConfig);
  }

  return mergeTheme<ThemeConfig>(defaultConfig, config);
};

export const getProps = (config: ThemeConfig | string): ThemeConfig => {
  return getThemeInstance(config);
};

export const getTheme = (config: ThemeConfig | string): ThemeTokens => {
  return getProps(config).theme;
};

export const normalizeThemeByScheme = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark'
): ThemeTokens => {
  const theme = getProps(config).theme;
  const darkTheme = getProps(config).darkTheme;

  if (scheme === 'dark' && darkTheme) {
    return mergeTheme<ThemeTokens>(theme, darkTheme);
  }
  return theme;
};

export const getColors = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark' = 'light'
): ConfigType.Theme['colors'] => {
  const colors = (normalizeThemeByScheme(config, scheme) || {}).colors || {};
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
  }, {});
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
