import { globalDecorators } from './decorators';
import { createStorybookTheme } from './theme';
import '/packages/styles/src/styles.css';

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
    theme: createStorybookTheme()
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true
    }
  }
};

export const decorators = globalDecorators;
