import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '../../../utils/story-helpers';
import { Heading } from './heading';
import docs from './readme.mdx';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: prepareParameters(docs),
  args: {
    children: 'Lorem Ipsum',
    as: 'h1',
    color: 'inherit'
  },
  argTypes: prepareArgTypes(Heading)
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return <Heading {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const As = () => (
  <>
    <Heading as="h1">h1. Heading 1</Heading>
    <Heading as="h2">h2. Heading 2</Heading>
    <Heading as="h3">h3. Heading 3</Heading>
    <Heading as="h4">h4. Heading 4</Heading>
    <Heading as="h5">h5. Heading 5</Heading>
    <Heading as="h6">h6. Heading 6</Heading>
  </>
);

export const Colors = () => (
  <>
    <Heading color="inherit">Inherit</Heading>
    <Heading color="primary">Primary</Heading>
    <Heading color="secondary">Secondary</Heading>
    <Heading color="tertiary">Tertiary</Heading>
    <Heading color="disabled">Disabled</Heading>
    <Heading color="info">Info</Heading>
    <Heading color="error">Error</Heading>
    <Heading color="success">Success</Heading>
    <Heading color="warning">Warning</Heading>
  </>
);
