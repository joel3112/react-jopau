import { ComponentStory, ComponentMeta } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '../../../utils/story-helpers';
import { Container } from './container';
import docs from './readme.mdx';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: prepareParameters(docs),
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores autem, blanditiis ducimus excepturi fugiat inventore ipsum nam nesciunt nobis odit quae quas repellendus sequi, sit suscipit! Enim, ratione.',
    maxWidth: 1500,
    centered: false
  },
  argTypes: prepareArgTypes(Container, {
    children: {
      control: false
    }
  })
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return <Container {...args} className="border border-solid border-secondary text-text" />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const GapUnique = Template.bind({});
GapUnique.args = {
  gap: 15
};

export const GapMultiple = Template.bind({});
GapMultiple.args = {
  gap: [30, 50]
};

export const MaxWidthNumber = Template.bind({});
MaxWidthNumber.args = {
  maxWidth: 600
};

export const MaxWidthBreakpoint = Template.bind({});
MaxWidthBreakpoint.args = {
  maxWidth: 'xs'
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
  maxWidth: 500
};
