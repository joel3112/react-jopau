module.exports = {
  stories: [
    {
      directory: '../packages/components',
      titlePrefix: 'Components',
      files: 'src/**/*.stories.*'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  staticDirs: ['../public']
};
