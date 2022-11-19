import { styledTheme } from '../../../index';

export const ContainerWrapper = styledTheme('div', {
  display: 'block',
  boxSizing: 'border-box',
  px: '$space$2xl',

  variants: {
    centered: {
      true: {
        margin: '0 auto'
      }
    }
  },

  '@xs': {
    px: '$space$lg'
  }
});
