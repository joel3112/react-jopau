export const prepareParameters = (docs: unknown) => ({
  docs: {
    page: docs,
    source: {
      language: 'tsx'
    }
  },
  controls: {
    disable: true
  },
  actions: {
    disable: true
  },
  viewMode: 'docs',
  options: {
    showPanel: true,
    selectedPanel: 'storybook/source-loader/panel'
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    },
    canvas: {
      hidden: true
    }
  }
});

export const ComponentMockStory = ({}) => null;
