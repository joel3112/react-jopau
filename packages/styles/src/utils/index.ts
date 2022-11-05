import { Theme, ThemeProps, themes, ThemeSchemes } from '../themes';
import { ConfigType } from '@stitches/react/types/config';

const getThemeInstance = (themeConfig: Theme | string) => {
  if (typeof themeConfig === 'string') {
    return themes[themeConfig].value;
  }

  return themeConfig;
};

export const getProps = (themeConfig: Theme | string): Theme => {
  return getThemeInstance(themeConfig);
};

export const getTheme = (themeConfig: Theme | string): ThemeProps => {
  return getProps(themeConfig).theme;
};

export const getColors = (themeConfig: Theme | string, scheme: 'light' | 'dark' = 'light') => {
  return getTheme(themeConfig).colors[scheme] as ConfigType.Theme<ThemeProps>['colors'];
};

export const getBreakpoints = (themeConfig: Theme | string) => {
  return getProps(themeConfig).media;
};

export const computeScheme = (schemes: ThemeSchemes, darkMode: boolean) => {
  if (schemes.lightTheme && schemes.darkTheme) {
    return darkMode ? schemes.darkTheme : schemes.lightTheme;
  }
};
