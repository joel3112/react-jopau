import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './container';
import docs from './readme.mdx';

export default {
  title: 'Container',
  component: Container,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores autem, blanditiis ducimus excepturi fugiat inventore ipsum nam nesciunt nobis odit quae quas repellendus sequi, sit suscipit! Enim, ratione.',
    maxWidth: 1500,
    gap: [0, 0]
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return <Container className="border border-solid border-secondary text-text" {...args} />;
};

export const Default = Template.bind({});

export const GapUnique = Template.bind({});
GapUnique.args = {
  gap: 15
};

export const GapMultiple = Template.bind({});
GapMultiple.args = {
  gap: [30, 50]
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  maxWidth: 500
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
  maxWidth: 500,
  gap: 20
};
