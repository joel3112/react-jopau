import { Container, Space } from '../../layout';
import { styledTheme } from '../../../index';

export const StyledHeaderContent = styledTheme(Container, {
  display: 'flex !important',
  alignItems: 'center',
  justifyContent: 'space-between',
  size: '$space$full',
  maxWidth: 'inherit'
});

export const StyledHeaderLogo = styledTheme(Space, {
  width: '$space$fit',
  height: '$space$full'
});

export const StyledHeader = styledTheme('div', {
  boxShadow: '$shadows$boxShadow',
  height: '$space$18',
  color: '$colors$text',

  '@xs': {
    height: '$space$17'
  }
});
