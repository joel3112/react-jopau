import { ConfigType } from '@stitches/react/types/config';
import type { BreakpointsRules, ThemeConfig, ThemeSchemes, ThemeTokens } from '../types';
import { themes } from '../themes';
import defaultConfig from '../themes/default';

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
  let mergedTheme = theme;

  if (scheme === 'dark' && darkTheme) {
    mergedTheme = mergeTheme<ThemeTokens>(theme, darkTheme);
  }

  const normalizedTheme = Object.entries(mergedTheme as Object).reduce((acc, [key, value]) => {
    if (key === 'colors') {
      const colors: ConfigType.Theme['colors'] = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(value).forEach(([colorKey, colorValue]: any[]) => {
        if (colorKey.endsWith('00')) {
          if (colorKey.endsWith('500')) {
            colors[colorKey.replace('500', '')] = colorValue;
          }
        }
        colors[colorKey] = colorValue;
      });
      return { ...acc, colors };
    }
    return { ...acc, [key]: value };
  }, {});

  return normalizedTheme;
};

export const getColors = (
  config: ThemeConfig | string,
  scheme: 'light' | 'dark' = 'light'
): ConfigType.Theme['colors'] => {
  return (normalizeThemeByScheme(config, scheme) || {}).colors || {};
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
