import { styledTheme } from '../../../index';

export const StyledHeading = styledTheme('h1', {
  display: 'block',
  fontWeight: '$fontWeights$semibold',
  letterSpacing: '$letterSpacings$normal',
  color: 'inherit',

  variants: {
    as: {
      h1: { fontSize: '$fontSizes$4xl' },
      h2: { fontSize: '$fontSizes$3xl' },
      h3: { fontSize: '$fontSizes$2xl' },
      h4: { fontSize: '$fontSizes$xl' },
      h5: { fontSize: '$fontSizes$lg' },
      h6: { fontSize: '$fontSizes$base' }
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
    }
  }
});
