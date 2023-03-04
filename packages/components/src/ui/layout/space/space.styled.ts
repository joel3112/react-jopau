import { styledTheme } from '@/components/shared';

export const StyledSpace = styledTheme('span', {
  size: 1,

  variants: {
    inline: {
      true: { display: 'inline-block' },
      false: { display: 'block' }
    }
  }
});
