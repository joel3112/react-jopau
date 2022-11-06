import { styledTheme } from '../index';

export const ContainerWrapper = styledTheme('div', {
  display: 'block',
  boxSizing: 'border-box',
  padding: '0 50px',
  variants: {
    centered: {
      true: {
        margin: '0 auto'
      }
    }
  },

  // Breakpoints
  '@xs': {
    padding: '0 20px'
  }
});
