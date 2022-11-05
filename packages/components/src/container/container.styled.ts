import { styled } from '@stitches/react';

export const ContainerWrapper = styled('div', {
  display: 'block',
  boxSizing: 'border-box',
  variants: {
    centered: {
      true: {
        margin: '0 auto'
      }
    }
  }
});
