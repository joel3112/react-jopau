import { ThemeConfig, ThemeProps, ThemePropValue } from './themes/types';
import { themes, ThemeSchemes } from './themes';

const getQueryParam = (key: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
};

export const getThemeQueryParam = (): string | null => {
  return getQueryParam('theme');
};

export const getSchemeQueryParam = (): boolean => {
  return !!getQueryParam('darkMode');
};

export const getThemeInstance = (config?: ThemeConfig | string) => {
  if (!config) {
    return themes[getThemeQueryParam() || 'default'].value;
  }
  if (typeof config === 'string') {
    return themes[config].value;
  }

  return config;
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
