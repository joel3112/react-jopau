import { styledTheme } from '@/components/shared';

export const StyleGridItem = styledTheme('div', {
  margin: 0,
  boxSizing: 'border-box',
  padding: '$$gridGapUnitY $$gridGapUnitX'
});

export const StyledGrid = styledTheme('div', {
  display: 'flex',
  boxSizing: 'border-box'
});
