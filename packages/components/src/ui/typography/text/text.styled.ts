import { styledTheme, utilsTheme } from '../../../index';

const composers = {
  boxSizing: 'border-box',
  display: 'block',
  variants: {
    variant: {
      default: {
        color: '$text'
      },
      primary: {
        color: '$primary'
      },
      secondary: {
        color: '$secondary'
      },
      disabled: {
        color: '$gray500'
      },
      info: {
        color: '$blue500'
      },
      success: {
        color: '$green500'
      },
      warning: {
        color: '$yellow500'
      },
      error: {
        color: '$red500'
      }
    },
    size: {
      xs: {
        fontSize: utilsTheme.rem(12),
        lineHeight: 1.5
      },
      sm: {
        fontSize: utilsTheme.rem(14),
        lineHeight: 1.5
      },
      md: {
        fontSize: utilsTheme.rem(16),
        lineHeight: 1.75
      },
      lg: {
        fontSize: utilsTheme.rem(18),
        lineHeight: 1.75
      },
      xl: {
        fontSize: utilsTheme.rem(20),
        lineHeight: 2
      },
      '2xl': {
        fontSize: utilsTheme.rem(24),
        lineHeight: 2
      },
      '3xl': {
        fontSize: utilsTheme.rem(30),
        lineHeight: 2
      }
    }
  }
};

export const TextWrapper = {
  span: styledTheme('span', { ...composers, width: 'max-content' }),
  p: styledTheme('p', composers)
};
