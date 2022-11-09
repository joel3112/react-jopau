import { ComponentMeta, ComponentStory } from '@storybook/react';
import defaultTheme from '@react-jopau/styles/themes/default';
import { ThemeProvider } from './theme-context';
import docs from './readme.mdx';
import { AppExample } from '../../app';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    children: <AppExample />,
    darkMode: false,
    config: defaultTheme
  },
  argTypes: {
    children: {
      control: false
    }
  }
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  return <ThemeProvider {...args} />;
};

export const Default = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true
};
