import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { getThemeStored, themes } from '@react-jopau/styles';
import { MockApp } from '../mock-app';
import { ThemeProvider } from './theme-context';
import docs from './readme.mdx';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
  parameters: prepareParameters(docs),
  args: {
    children: <MockApp />,
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
