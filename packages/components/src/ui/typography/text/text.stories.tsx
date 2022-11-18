import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './text';
import docs from './readme.mdx';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    as: 'p',
    color: 'default',
    size: 'md'
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Default = Template.bind({});

export const Colors = () => {
  return (
    <>
      <Text color="default">Default</Text>
      <Text color="primary">Primary</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="disabled">Disabled</Text>
      <Text color="info">Info</Text>
      <Text color="error">Error</Text>
      <Text color="success">Success</Text>
      <Text color="warning">Warning</Text>
    </>
  );
};

export const Sizes = () => {
  return (
    <>
      <Text size="xs">Text xs: Lorem ipsum dolor sit amet</Text>
      <Text size="sm">Text sm: Lorem ipsum dolor sit amet</Text>
      <Text size="md">Text md: Lorem ipsum dolor sit amet</Text>
      <Text size="lg">Text lg: Lorem ipsum dolor sit amet</Text>
      <Text size="xl">Text xl: Lorem ipsum dolor sit amet</Text>
      <Text size="2xl">Text 2xl: Lorem ipsum dolor sit amet</Text>
      <Text size="3xl">Text 3xl: Lorem ipsum dolor sit amet</Text>
    </>
  );
};

export const Tags = () => {
  return (
    <>
      <Text as="p">p. Lorem ipsum dolor sit amet</Text>
      <Text as="span">span. Lorem ipsum dolor sit amet</Text>
    </>
  );
};

export const MaxLines = Template.bind({});
MaxLines.args = {
  children:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  maxLines: 3
};
