import { styledTheme } from '../../../index';

export const HeaderWrapper = styledTheme('div', {
  boxShadow: '$boxShadow',
  height: 58,
  '.container': {
    alignBetween: 'row',
    size: '100%',
    maxWidth: 'inherit'
  },
  '.logo': {
    width: 'fit-content',
    height: '100%',
    alignCenterX: 'row',
    gap: 8
  },
  '.title': {
    fontSize: 20,
    fontWeight: 500,
    color: '$text'
  },

  // Breakpoints
  '@xs': {
    height: 50,
    '.logo': {
      height: 40
    }
  }
});
