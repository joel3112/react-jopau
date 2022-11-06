import { styledTheme } from '../index';

export const HeaderWrapper = styledTheme('div', {
  boxShadow: '$boxShadow',
  height: 58,
  '.container': {
    alignBetween: 'row',
    size: '100%',
    maxWidth: 'inherit'
  },
  '.link': {
    textDecoration: 'none',
    color: '$text',
    width: 'fit-content',
    alignCenterX: 'row',
    gap: 8,
    height: '100%'
  },
  '.logo': {
    display: 'block',
    height: '100%'
  },
  '.title': {
    fontSize: 20,
    fontWeight: 500
  },

  // Breakpoints
  '@xs': {
    height: 50,
    '.logo': {
      height: 40
    }
  }
});
