import { styledTheme } from '@/components/shared';

export const StyledContainer = styledTheme('div', {
  display: 'block',
  boxSizing: 'border-box',
  color: '$colors$text',

  variants: {
    centered: {
      true: { margin: '0 auto' }
    },
    hasGap: {
      false: {
        px: '$space$2xl',

        '@xs': {
          px: '$space$lg'
        }
      }
    }
  }
});
