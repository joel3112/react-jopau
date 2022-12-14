import { styledTheme } from '@/components/shared';

const basicPositionStyles = (key: string) => ({
  start: { [key]: 'flex-start' },
  center: { [key]: 'center' },
  end: { [key]: 'flex-end' }
});

export const StyledSpace = styledTheme('div', {
  display: 'flex',

  variants: {
    justify: {
      ...basicPositionStyles('justifyContent'),
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' }
    },
    align: {
      ...basicPositionStyles('alignItems'),
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' }
    },
    wrap: {
      true: { flexWrap: 'wrap' },
      false: { flexWrap: 'nowrap' }
    }
  }
});
