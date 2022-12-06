import { styledTheme } from '../../../index';

export const StyledText = styledTheme('p', {
  display: 'block',
  fontWeight: '$fontWeights$normal',
  letterSpacing: '$letterSpacings$normal',
  color: 'inherit',

  variants: {
    as: {
      span: { width: '$space$max' },
      p: {}
    },
    color: {
      inherit: { color: 'inherit' },
      primary: { color: '$colors$primary500' },
      secondary: { color: '$colors$secondary500' },
      tertiary: { color: '$colors$tertiary500' },
      disabled: { color: '$colors$gray500' },
      info: { color: '$colors$blue500' },
      success: { color: '$colors$green500' },
      warning: { color: '$colors$yellow500' },
      error: { color: '$colors$red500' }
    },
    size: {
      xs: { fontSize: '$fontSizes$xs', lineHeight: '$lineHeights$xs' },
      sm: { fontSize: '$fontSizes$sm', lineHeight: '$lineHeights$sm' },
      md: { fontSize: '$fontSizes$md', lineHeight: '$lineHeights$md' },
      lg: { fontSize: '$fontSizes$lg', lineHeight: '$lineHeights$lg' },
      xl: { fontSize: '$fontSizes$xl', lineHeight: '$lineHeights$xl' },
      '2xl': { fontSize: '$fontSizes$2xl', lineHeight: '$lineHeights$2xl' },
      '3xl': { fontSize: '$fontSizes$3xl', lineHeight: '$lineHeights$3xl' }
    }
  }
});
