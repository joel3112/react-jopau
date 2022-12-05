import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import anysort from 'anysort';
import { globalDecorators } from './decorators';
import { createStorybookTheme } from './theme';
import '/packages/styles/src/styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    },
    sort: 'requiredFirst',
    expanded: true
  },
  viewMode: 'docs',
  docs: {
    theme: createStorybookTheme()
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true
    }
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS
    }
  },
  options: {
    storySort: (previous, next) => {
      const previousMeta = previous[1];
      const nextMeta = next[1];

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Introduction',
        'Components/About',
        'Components/**/**/Docs',
        'Components/**/**/Playground',
        'Hooks/About',
        'Hooks/**/**/Docs',
        'Hooks/**/**/Playground',
        'Providers/About',
        'Providers/**/**/Docs',
        'Providers/**/**/Playground'
      ]);
    }
  }
};

export const decorators = globalDecorators;
