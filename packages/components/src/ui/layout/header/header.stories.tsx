import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';
import docs from './readme.mdx';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    title: 'Title',
    maxWidth: 'lg'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

export const WithLogo = Template.bind({});
WithLogo.args = {
  renderLogo: () => <img src="./images/logo.png" alt="Logo" className="h-[45px]" />
};

export const WithActions = Template.bind({});
WithActions.args = {
  children: (
    <div className="flex gap-4">
      <a href="#" className="text-secondary">
        Action 1
      </a>
      <a href="#" className="text-secondary">
        Action 2
      </a>
    </div>
  )
};

export const MaxWidthNumber = Template.bind({});
MaxWidthNumber.args = {
  maxWidth: 400,
  children: (
    <div className="flex gap-4">
      <a href="#" className="text-secondary">
        Action 1
      </a>
    </div>
  )
};

export const MaxWidthBreakpoint = Template.bind({});
MaxWidthBreakpoint.args = {
  maxWidth: 'xs',
  children: (
    <div className="flex gap-4">
      <a href="#" className="text-secondary">
        Action 1
      </a>
    </div>
  )
};
