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
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: '@storybook/react',
  staticDirs: ['./public']
};
