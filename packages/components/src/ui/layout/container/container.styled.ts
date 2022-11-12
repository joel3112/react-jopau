import { styledTheme } from '../../../index';

export const ContainerWrapper = styledTheme('div', {
  display: 'block',
  boxSizing: 'border-box',
  px: 50,
  variants: {
    centered: {
      true: {
        margin: '0 auto'
      }
    }
  },

  // Breakpoints
  '@xs': {
    px: 20
  }
});
