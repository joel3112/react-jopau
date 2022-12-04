import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdSearch } from 'react-icons/md';
import { TWSelectorContainer } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '../../../utils/story-helpers';
import { Space } from '../../layout';
import { Button } from '../../forms';
import { Input } from './input';
import docs from './readme.mdx';

export default {
  title: 'Forms/Input',
  component: Input,
  parameters: prepareParameters(docs),
  args: {
    type: 'text',
    value: '',
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder',
    labelPlaceholder: '',
    helperText: '',
    labelLeft: '',
    labelRight: '',
    size: 'md',
    variant: 'default',
    status: 'default',
    color: 'default',
    iconPosition: 'left',
    autoComplete: 'off',
    hotKey: '',
    rounded: false,
    autoWidth: false,
    clearable: false,
    readOnly: false,
    disabled: false,
    required: false
  },
  argTypes: prepareArgTypes(Input, {
    onClearClick: { action: 'cleared' },
    onContentClick: { action: 'content clicked' }
  })
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Types = () => (
  <Space direction="column" gap={10}>
    <Input type="text" label="Text" />
    <Input type="password" label="Password" />
    <Input type="email" label="Email" />
    <Input type="number" label="Number" />
    <Input type="tel" label="Telephone" />
    <Input type="url" label="URL" />
  </Space>
);

export const LabelAndPlaceholder = () => (
  <Space direction="column" gap={10}>
    <p>Same Label and placeholder</p>
    <Input labelPlaceholder="Name" />
    <p>Label and placeholder are different</p>
    <Input label="Email" placeholder="example@mail.com" />
    <p>Only placeholder</p>
    <Input placeholder="Your name" />
  </Space>
);

export const Sizes = () => (
  <Space direction="column" gap={10}>
    <Input size="xs" label="Mini" />
    <Input size="sm" label="Small" />
    <Input size="md" label="Medium" />
    <Input size="lg" label="Large" />
    <Input size="xl" label="XLarge" />
  </Space>
);

export const Variants = () => (
  <Space direction="column" gap={10}>
    <Input variant="default" label="Default" />
    <Input variant="bordered" label="Bordered" />
    <Input variant="underlined" label="Underlined" />
  </Space>
);

export const Color = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Default', value: 'default' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Underlined', value: 'underlined' }
    ]}
    value="default">
    {(variant) => (
      <Space gap={10} wrap>
        <Input variant={variant} label="Default" />
        <Input variant={variant} color="primary" label="Primary" />
        <Input variant={variant} color="secondary" label="Secondary" />
        <Input variant={variant} color="tertiary" label="Tertiary" />
        <Input variant={variant} color="info" label="Info" />
        <Input variant={variant} color="success" label="Success" />
        <Input variant={variant} color="error" label="Error" />
        <Input variant={variant} color="warning" label="Warning" />
      </Space>
    )}
  </TWSelectorContainer>
);

export const Status = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Default', value: 'default' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Underlined', value: 'underlined' }
    ]}
    value="default">
    {(variant) => (
      <Space gap={10} wrap>
        <Input variant={variant} label="Default" />
        <Input variant={variant} status="primary" label="Primary" />
        <Input variant={variant} status="secondary" label="Secondary" />
        <Input variant={variant} status="tertiary" label="Tertiary" />
        <Input variant={variant} status="info" label="Info" />
        <Input variant={variant} status="success" label="Success" />
        <Input variant={variant} status="error" label="Error" />
        <Input variant={variant} status="warning" label="Warning" />
      </Space>
    )}
  </TWSelectorContainer>
);

export const HelperText = () => (
  <Space direction="column" gap={20}>
    <p>1. Variants</p>
    <Space gap={10}>
      <Input helperText="Helper text" label="Name" />
      <Input variant="underlined" helperText="Helper text" label="Name" />
    </Space>
    <p>2. Status</p>
    <Space gap={10}>
      <Input helperText="Helper text" status="success" label="Success" />
      <Input helperText="Helper text" status="error" label="Error" />
    </Space>
  </Space>
);

export const Content = () => (
  <Space direction="column" gap={10}>
    <p>1. Position</p>
    <Input icon={<MdSearch />} placeholder="Search" />
    <Input iconPosition="right" icon={<MdSearch />} placeholder="Search" />
    <p>2. Size</p>
    <Input size="xs" icon={<MdSearch />} placeholder="Search Mini" />
    <Input size="sm" icon={<MdSearch />} placeholder="Search Small" />
    <Input size="md" icon={<MdSearch />} placeholder="Search Medium" />
    <Input size="lg" icon={<MdSearch />} placeholder="Search Large" />
  </Space>
);

export const LabelLeftAndRight = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Default', value: 'default' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Underlined', value: 'underlined' }
    ]}
    value="default">
    {(variant) => (
      <Space direction="column" gap={10}>
        <p>1. Label left</p>
        <Input variant={variant} labelLeft="https://" placeholder="example" />
        <p>2. Label right</p>
        <Input variant={variant} labelRight=".com" placeholder="example" />
        <p>2. Label left and right</p>
        <Input variant={variant} labelLeft="https://" labelRight=".com" placeholder="example" />
      </Space>
    )}
  </TWSelectorContainer>
);

export const HotKey = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Default', value: 'default' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Underlined', value: 'underlined' }
    ]}
    value="default">
    {(variant) => (
      <Space gap={10} wrap>
        <Input variant={variant} hotKey="⌘⇧D" label="Default" status="default" />
        <Input variant={variant} hotKey="⌘⇧P" label="Primary" status="primary" />
        <Input variant={variant} hotKey="⌘⇧S" label="Success" status="success" />
        <Input variant={variant} hotKey="⌘⇧E" label="Error" status="error" />
      </Space>
    )}
  </TWSelectorContainer>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  value: 'John Doe'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  label: 'Read Only',
  value: 'John Doe'
};

export const Rounded = () => (
  <Space gap={10}>
    <Input variant="default" rounded placeholder="Rounded default" />
    <Input variant="bordered" rounded placeholder="Rounded bordered" />
  </Space>
);

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true
};

export const AutoWidth = Template.bind({});
AutoWidth.args = {
  autoWidth: true
};

export const Ref = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <Space direction="column" gap={10}>
      <p>Click the "handler" button below to trigger focus event on the input</p>
      <Space gap={10}>
        <Button onClick={handleClick}>handler</Button>
        <Input placeholder="Enter name" ref={ref} />
      </Space>
    </Space>
  );
};
