import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Text } from './text';
import docs from './readme.mdx';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: prepareParameters(docs),
  args: {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    as: 'p',
    color: 'inherit',
    size: 'md'
  },
  argTypes: prepareArgTypes(Text)
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const As = () => (
  <Stack direction="column" gap={1}>
    <Text as="p">p. Lorem ipsum dolor sit amet</Text>
    <Text as="div">div. Lorem ipsum dolor sit amet</Text>
    <Text as="span">span. Lorem ipsum dolor sit amet</Text>
    <Text as="strong">strong. Lorem ipsum dolor sit amet</Text>
    <Text as="code">code. Lorem ipsum dolor sit amet</Text>
    <Text as="kbd">kbd. Lorem ipsum dolor sit amet</Text>
    <Text as="mark">mark. Lorem ipsum dolor sit amet</Text>
    <Text as="u">u. Lorem ipsum dolor sit amet</Text>
    <Text as="i">i. Lorem ipsum dolor sit amet</Text>
    <Text as="del">del. Lorem ipsum dolor sit amet</Text>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="column" gap={1}>
    <Text size="xs">Text xs: Lorem ipsum dolor sit amet</Text>
    <Text size="sm">Text sm: Lorem ipsum dolor sit amet</Text>
    <Text size="md">Text md: Lorem ipsum dolor sit amet</Text>
    <Text size="lg">Text lg: Lorem ipsum dolor sit amet</Text>
    <Text size="xl">Text xl: Lorem ipsum dolor sit amet</Text>
    <Text size="2xl">Text 2xl: Lorem ipsum dolor sit amet</Text>
    <Text size="3xl">Text 3xl: Lorem ipsum dolor sit amet</Text>
  </Stack>
);

export const Colors = () => (
  <Stack direction="column" gap={1}>
    <Text color="inherit">Inherit</Text>
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
    <Text color="tertiary">Tertiary</Text>
    <Text color="disabled">Disabled</Text>
    <Text color="info">Info</Text>
    <Text color="error">Error</Text>
    <Text color="success">Success</Text>
    <Text color="warning">Warning</Text>
  </Stack>
);

export const MaxLines = Template.bind({});
MaxLines.args = {
  children:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  maxLines: 3
};
