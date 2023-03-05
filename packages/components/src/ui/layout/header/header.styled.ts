import { styledTheme } from '@/components/shared';
import { Container } from '../../layout';

export const StyledHeaderContent = styledTheme(Container, {
  display: 'flex !important',
  alignItems: 'center',
  justifyContent: 'space-between',
  size: '$space$full',
  maxWidth: 'inherit'
});

export const StyledHeaderLogo = styledTheme('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$space$3',
  width: '$space$fit',
  height: '$space$full'
});

export const StyledHeader = styledTheme('div', {
  boxShadow: '$shadows$box',
  height: '$space$18',
  color: '$colors$text',

  '@xs': {
    height: '$space$17'
  }
});
