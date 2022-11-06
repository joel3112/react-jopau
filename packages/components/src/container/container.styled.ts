import { styled } from '@stitches/react';

export const ContainerWrapper = styled('div', {
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
