import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themes } from '@react-jopau/styles/themes';
import { getThemeStored } from '@react-jopau/styles/theme';
import AppExample from '@apps/example';
import { prepareArgTypes, prepareParameters } from '../../story-helpers';
import { ThemeProvider } from './theme-context';
import docs from './readme.mdx';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
  parameters: prepareParameters(docs),
  args: {
    children: <AppExample />,
    darkMode: false,
    config: themes[getThemeStored() || 'default'].value
  },
  argTypes: prepareArgTypes(ThemeProvider, {
    children: {
      control: false
    }
  })
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  return <ThemeProvider {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true
};
