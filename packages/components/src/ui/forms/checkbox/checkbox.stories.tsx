import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../layout';
import { Checkbox } from './checkbox';
import docs from './readme.mdx';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: prepareParameters(docs),
  args: {
    children: 'Option',
    value: 'option',
    name: 'checkbox-name',
    label: 'Label',
    size: 'md',
    color: 'primary',
    status: 'default',
    selected: true,
    disabled: false,
    required: false,
    rounded: false,
    readOnly: false,
    indeterminate: false,
    throughed: false
  },
  argTypes: prepareArgTypes(Checkbox)
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <Space direction="column" gap={10}>
    <Checkbox selected size="xs">
      Mini
    </Checkbox>
    <Checkbox selected size="sm">
      Small
    </Checkbox>
    <Checkbox selected size="md">
      Medium
    </Checkbox>
    <Checkbox selected size="lg">
      Large
    </Checkbox>
    <Checkbox selected size="xl">
      XLarge
    </Checkbox>
  </Space>
);

export const Color = () => (
  <Space direction="column" gap={10}>
    <Checkbox selected color="primary">
      Primary
    </Checkbox>
    <Checkbox selected color="secondary">
      Secondary
    </Checkbox>
    <Checkbox selected color="tertiary">
      Tertiary
    </Checkbox>
    <Checkbox selected color="info">
      Info
    </Checkbox>
    <Checkbox selected color="success">
      Success
    </Checkbox>
    <Checkbox selected color="error">
      Error
    </Checkbox>
    <Checkbox selected color="warning">
      Warning
    </Checkbox>
  </Space>
);

export const Status = () => (
  <Space direction="column" gap={10}>
    <Checkbox selected status="default">
      Default
    </Checkbox>
    <Checkbox selected status="primary">
      Primary
    </Checkbox>
    <Checkbox selected status="secondary">
      Secondary
    </Checkbox>
    <Checkbox selected status="tertiary">
      Tertiary
    </Checkbox>
    <Checkbox selected status="info">
      Info
    </Checkbox>
    <Checkbox selected status="success">
      Success
    </Checkbox>
    <Checkbox selected status="error">
      Error
    </Checkbox>
    <Checkbox selected status="warning">
      Warning
    </Checkbox>
  </Space>
);

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
};

export const Throughed = Template.bind({});
Throughed.args = {
  throughed: true,
  onChange: (e: boolean) => console.log(e)
};
