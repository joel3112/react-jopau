import { ThemeConfig, ThemeProps, ThemePropValue, themes, ThemeSchemes } from './themes';
import { THEME_SELECTOR_STORAGE_KEY } from './ThemeBuilder';

export const getThemeStored = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_SELECTOR_STORAGE_KEY);
  return storedTheme ? JSON.parse(storedTheme) : 'default';
};

export const getThemeInstance = (config?: ThemeConfig | string) => {
  if (!config) {
    return themes[getThemeStored() || 'default'].value;
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
