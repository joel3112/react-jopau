import { styled } from '@stitches/react';

const basicPositionStyles = {
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' }
};

export const SpaceWrapper = styled('div', {
  display: 'flex',
  variants: {
    justify: {
      ...basicPositionStyles,
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' }
    },
    align: {
      ...basicPositionStyles,
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' }
    },
    wrap: {
      true: { flexWrap: 'wrap' },
      false: { flexWrap: 'nowrap' }
    }
  }
});
