import { styledTheme } from '../../../index';

const composers = {
  display: 'block',
  fontWeight: '$fontWeights$medium',
  letterSpacing: '$letterSpacings$normal',
  color: 'inherit',

  variants: {
    color: {
      inherit: {
        color: 'inherit'
      },
      primary: {
        color: '$colors$primary500'
      },
      secondary: {
        color: '$colors$secondary500'
      },
      tertiary: {
        color: '$colors$tertiary500'
      },
      disabled: {
        color: '$colors$gray500'
      },
      info: {
        color: '$colors$blue500'
      },
      success: {
        color: '$colors$green500'
      },
      warning: {
        color: '$colors$yellow500'
      },
      error: {
        color: '$colors$red500'
      }
    }
  }
};

export const HeadingWrapper = {
  h1: styledTheme('h1', { ...composers, fontSize: '$fontSizes$4xl' }),
  h2: styledTheme('h2', { ...composers, fontSize: '$fontSizes$3xl' }),
  h3: styledTheme('h3', { ...composers, fontSize: '$fontSizes$2xl' }),
  h4: styledTheme('h4', { ...composers, fontSize: '$fontSizes$xl' }),
  h5: styledTheme('h5', { ...composers, fontSize: '$fontSizes$lg' }),
  h6: styledTheme('h6', { ...composers, fontSize: '$fontSizes$base' })
};
