import { styledTheme } from '../../../index';

const composers = {
  display: 'block',
  fontWeight: 500,
  variants: {
    color: {
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
    }
  }
};

export const HeadingWrapper = {
  h1: styledTheme('h1', { ...composers, fontSize: '2rem' }),
  h2: styledTheme('h2', { ...composers, fontSize: '1.5rem' }),
  h3: styledTheme('h3', { ...composers, fontSize: '1.17rem' }),
  h4: styledTheme('h4', { ...composers, fontSize: '1rem' }),
  h5: styledTheme('h5', { ...composers, fontSize: '0.83rem' }),
  h6: styledTheme('h6', { ...composers, fontSize: '0.67rem' })
};
