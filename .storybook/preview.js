import customTheme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    sort: 'requiredFirst',
    expanded: true
  },
  docs: {
    theme: customTheme
  }
};
