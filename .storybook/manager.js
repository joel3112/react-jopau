import { addons } from '@storybook/addons';
import { createStorybookTheme } from './theme';

addons.setConfig({
  theme: createStorybookTheme()
});
