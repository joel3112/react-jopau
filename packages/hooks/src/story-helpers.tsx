export const prepareParameters = (docs: unknown) => ({
  docs: {
    page: docs,
    source: {
      language: 'tsx'
    }
  },
  viewMode: 'docs',
  controls: {
    disable: true
  },
  actions: {
    disable: true
  },
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
