import { themes } from '@storybook/theming';
import { globalDecorators } from './decorators';
import { customTheme } from './theme';

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
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' }
      ],
      showName: true,
      dynamicTitle: true
    }
  }
};

export const decorators = globalDecorators;
