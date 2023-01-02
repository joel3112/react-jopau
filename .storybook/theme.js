import { create } from '@storybook/theming';
import { getColors, getProps, getTheme, getThemeStored } from '/packages/styles/src/utils/theme';

export const createStorybookTheme = (themeKey = 'default', scheme = 'light') => {
  const currentTheme = getThemeStored() || themeKey;
  const colors = getColors(currentTheme, scheme);
  const { fonts } = getTheme(currentTheme);
  const { brand } = getProps(currentTheme);

  return create({
    base: scheme,

    colorPrimary: colors.secondary,
    colorSecondary: colors.secondary,

    // UI
    appBg: colors.backgroundContrast,
    appContentBg: colors.backgroundContrast,
    appBorderColor: colors.gray700,
    appBorderRadius: 4,

    // Typography
    fontBase: fonts.base,
    fontCode: fonts.code,

    // Text colors
    textColor: colors.text,
    textInverseColor: colors.backgroundContrast,

    // Toolbar default and active colors
    barTextColor: colors.gray700,
    barSelectedColor: colors.secondary,
    barBg: colors.backgroundContrast,

    // Form colors
    inputBg: colors.backgroundContrast,
    inputBorder: colors.gray700,
    inputTextColor: colors.text,
    inputBorderRadius: 4,

    brandTitle: brand.title,
    brandUrl: brand.url,
    brandImage: (scheme === 'dark' && brand.darkImage) || brand.image
  });
};
