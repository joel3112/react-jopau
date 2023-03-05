import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Stack } from '../../../layout';
import { Button } from '../button';
import docs from './readme.mdx';

export default {
  title: 'Forms/Button',
  component: Button.Group,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    color: 'primary',
    size: 'md',
    variant: 'solid',
    shape: 'default',
    orientation: 'horizontal',
    disabled: false,
    fullWidth: false
  },
  argTypes: prepareArgTypes(Button.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Button.Group>;

const Buttons = [
  <Button key="1">Button 1</Button>,
  <Button key="2">Button 2</Button>,
  <Button key="3">Button 3</Button>
];

const Template: ComponentStory<typeof Button.Group> = (args) => {
  return <Button.Group {...args}>{Buttons}</Button.Group>;
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupSizes = () => (
  <Stack direction="column" gap={1}>
    <Button.Group size="xs">{Buttons}</Button.Group>
    <Button.Group size="sm">{Buttons}</Button.Group>
    <Button.Group size="md">{Buttons}</Button.Group>
    <Button.Group size="lg">{Buttons}</Button.Group>
    <Button.Group size="xl">{Buttons}</Button.Group>
  </Stack>
);

export const GroupVariants = () => (
  <Stack direction="column" gap={1}>
    <Button.Group variant="solid">{Buttons}</Button.Group>
    <Button.Group variant="bordered">{Buttons}</Button.Group>
    <Button.Group variant="flat">{Buttons}</Button.Group>
    <Button.Group variant="ghost">{Buttons}</Button.Group>
    <Button.Group variant="clear">{Buttons}</Button.Group>
  </Stack>
);

export const GroupColors = () => (
  <Stack direction="column" gap={1}>
    <Button.Group color="primary">{Buttons}</Button.Group>
    <Button.Group color="secondary">{Buttons}</Button.Group>
    <Button.Group color="tertiary">{Buttons}</Button.Group>
    <Button.Group color="info">{Buttons}</Button.Group>
    <Button.Group color="error">{Buttons}</Button.Group>
    <Button.Group color="success">{Buttons}</Button.Group>
    <Button.Group color="warning">{Buttons}</Button.Group>
    <Button.Group color="light">{Buttons}</Button.Group>
    <Button.Group color="dark">{Buttons}</Button.Group>
  </Stack>
);

export const GroupShape = () => (
  <Stack direction="column" gap={1}>
    <Button.Group>{Buttons}</Button.Group>
    <Button.Group shape="round">{Buttons}</Button.Group>
    <Button.Group shape="square">{Buttons}</Button.Group>
  </Stack>
);

export const GroupOrientation = () => (
  <Stack direction="column" gap={1}>
    <Button.Group orientation="horizontal">{Buttons}</Button.Group>
    <Stack gap={5}>
      <Button.Group orientation="vertical">{Buttons}</Button.Group>
      <Button.Group variant="bordered" orientation="vertical">
        {Buttons}
      </Button.Group>
      <Button.Group variant="flat" color="success" orientation="vertical">
        {Buttons}
      </Button.Group>
    </Stack>
  </Stack>
);

export const GroupDisabled = Template.bind({});
GroupDisabled.args = {
  disabled: true
};

export const GroupFullWidth = Template.bind({});
GroupFullWidth.args = {
  fullWidth: true
};
