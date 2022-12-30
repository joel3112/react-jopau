import '/packages/styles/src/styles.css';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer } from '@storybook/addon-docs';
import { DocsPage } from './components';
import { globalDecorators } from './decorators';
import { createStorybookTheme } from './theme';
import { anysort } from '/packages/utils/src/function';

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
    theme: createStorybookTheme(),
    container: DocsContainer,
    components: {
      wrapper: DocsPage
    }
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
        'Context Providers/About',
        'Context Providers/**/**/Docs',
        'Context Providers/**/**/Playground',
        'Hooks/About',
        'Hooks/**/**/Docs',
        'Hooks/**/**/Playground'
      ]);
    }
  }
};

export const decorators = globalDecorators;
