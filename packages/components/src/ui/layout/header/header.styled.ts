import { Container } from '../container/container';
import { Space } from '../space/space';
import { styledTheme } from '../../../index';

export const HeaderContainer = styledTheme(Container, {
  alignBetween: 'row',
  size: '$space$full',
  maxWidth: 'inherit'
});

export const HeaderSpaceLogo = styledTheme(Space, {
  width: '$space$fit',
  height: '$space$full'
});

export const HeaderWrapper = styledTheme('div', {
  boxShadow: '$shadows$boxShadow',
  height: '$space$18',
  color: '$colors$text',

  '@xs': {
    height: '$space$17'
  }
});
