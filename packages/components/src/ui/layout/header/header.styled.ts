import { styledTheme } from '../../../index';

export const HeaderWrapper = styledTheme('div', {
  boxShadow: '$shadows$boxShadow',
  height: '$space$18',
  color: '$colors$text',

  '.container': {
    alignBetween: 'row',
    size: '$space$full',
    maxWidth: 'inherit'
  },
  '.logo': {
    width: '$space$fit',
    height: '$space$full'
  },

  '@xs': {
    height: '$space$17'
  }
});
