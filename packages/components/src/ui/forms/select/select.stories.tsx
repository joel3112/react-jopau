import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  prepareArgTypes,
  prepareParameters,
  SBSelectorContainer,
  SBTextSeparator
} from '@react-jopau/shared/stories';
import { Space } from '../../layout';
import { Select } from './select';
import docs from './readme.mdx';

export default {
  title: 'Forms/Select',
  component: Select,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    value: '',
    defaultValue: '',
    name: 'select-name',
    label: 'Label',
    placeholder: 'Select option',
    helperText: '',
    size: 'md',
    variant: 'default',
    status: 'default',
    color: 'default',
    shape: 'default',
    fullWidth: false,
    disabled: false,
    autoFocus: false,
    required: false
  },
  argTypes: prepareArgTypes(Select)
} as ComponentMeta<typeof Select>;

const Options = [
  <Select.Option key="1" value="1">
    Option 1
  </Select.Option>,
  <Select.Option key="2" value="2">
    Option 2
  </Select.Option>,
  <Select.Option key="3" value="3">
    Option 3
  </Select.Option>
];

const variantItems = [
  { label: 'Default', value: 'default' },
  { label: 'Bordered', value: 'bordered' },
  { label: 'Underlined', value: 'underlined' }
];

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args}>{Options}</Select>;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const LabelAndPlaceholder = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Label and placeholder</SBTextSeparator>
    <Select label="Label" placeholder="Select option">
      {Options}
    </Select>
    <SBTextSeparator>No placeholder</SBTextSeparator>
    <Select>{Options}</Select>
  </Space>
);

export const Sizes = () => (
  <Space direction="column" gap={10}>
    <Select size="xs" label="Mini">
      {Options}
    </Select>
    <Select size="sm" label="Small">
      {Options}
    </Select>
    <Select size="md" label="Medium">
      {Options}
    </Select>
    <Select size="lg" label="Large">
      {Options}
    </Select>
    <Select size="xl" label="XLarge">
      {Options}
    </Select>
  </Space>
);

export const Variants = () => (
  <Space direction="column" gap={10}>
    <Select variant="default" label="Default" placeholder="Select option">
      {Options}
    </Select>
    <Select variant="bordered" label="Bordered" placeholder="Select option">
      {Options}
    </Select>
    <Select variant="underlined" label="Underlined" placeholder="Select option">
      {Options}
    </Select>
  </Space>
);

export const Color = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Space gap={10} wrap>
        <Select variant={variant} label="Default">
          {Options}
        </Select>
        <Select variant={variant} color="primary" label="Primary">
          {Options}
        </Select>
        <Select variant={variant} color="secondary" label="Secondary">
          {Options}
        </Select>
        <Select variant={variant} color="tertiary" label="Tertiary">
          {Options}
        </Select>
        <Select variant={variant} color="info" label="Info">
          {Options}
        </Select>
        <Select variant={variant} color="success" label="Success">
          {Options}
        </Select>
        <Select variant={variant} color="error" label="Error">
          {Options}
        </Select>
        <Select variant={variant} color="warning" label="Warning">
          {Options}
        </Select>
      </Space>
    )}
  </SBSelectorContainer>
);

export const Status = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Space gap={10} wrap>
        <Select variant={variant} label="Default">
          {Options}
        </Select>
        <Select variant={variant} status="primary" label="Primary">
          {Options}
        </Select>
        <Select variant={variant} status="secondary" label="Secondary">
          {Options}
        </Select>
        <Select variant={variant} status="tertiary" label="Tertiary">
          {Options}
        </Select>
        <Select variant={variant} status="info" label="Info">
          {Options}
        </Select>
        <Select variant={variant} status="success" label="Success">
          {Options}
        </Select>
        <Select variant={variant} status="error" label="Error">
          {Options}
        </Select>
        <Select variant={variant} status="warning" label="Warning">
          {Options}
        </Select>
      </Space>
    )}
  </SBSelectorContainer>
);

export const HelperText = () => (
  <Space direction="column" gap={30}>
    <Space direction="column" gap={0}>
      <SBTextSeparator>With Variants</SBTextSeparator>
      <Space gap={10}>
        <Select helperText="Helper text" label="Name">
          {Options}
        </Select>
        <Select variant="underlined" helperText="Helper text" label="Name">
          {Options}
        </Select>
      </Space>
    </Space>
    <Space direction="column" gap={0}>
      <SBTextSeparator>With Status</SBTextSeparator>
      <Space gap={10}>
        <Select helperText="Helper text" status="secondary" label="Secondary">
          {Options}
        </Select>
        <Select helperText="Helper text" status="success" label="Success">
          {Options}
        </Select>
        <Select helperText="Helper text" status="error" label="Error">
          {Options}
        </Select>
      </Space>
    </Space>
  </Space>
);

export const Shape = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Default</SBTextSeparator>
    <Space gap={10}>
      <Select variant="default" placeholder="Default">
        {Options}
      </Select>
      <Select variant="bordered" placeholder="Bordered">
        {Options}
      </Select>
    </Space>
    <SBTextSeparator>Round</SBTextSeparator>
    <Space gap={10}>
      <Select variant="default" shape="round" placeholder="Round">
        {Options}
      </Select>
      <Select variant="bordered" shape="round" placeholder="Bordered">
        {Options}
      </Select>
    </Space>
    <SBTextSeparator>Square</SBTextSeparator>
    <Space gap={10}>
      <Select variant="default" shape="square" placeholder="Square">
        {Options}
      </Select>
      <Select variant="bordered" shape="square" placeholder="Bordered">
        {Options}
      </Select>
    </Space>
  </Space>
);

export const Required = Template.bind({});
Required.args = {
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  value: '2'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  label: 'Full Width',
  value: '1'
};
