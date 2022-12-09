const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    {
      directory: '../packages/components',
      titlePrefix: 'Components',
      files: 'src/ui/**/*.stories.*'
    },
    {
      directory: '../packages/hooks',
      titlePrefix: 'Hooks',
      files: 'src/**/*.stories.*'
    },
    {
      directory: '../packages/components',
      titlePrefix: 'Providers',
      files: 'src/contexts/**/*.stories.*'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have split your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss')
        }
      }
    },
    './expand-all-addon/register',
    './theme-selector-addon/register',
    './dark-mode-addon/register'
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: config.resolve.extensions
      })
    ];
    return config;
  },
  framework: '@storybook/react',
  staticDirs: ['../public']
};
