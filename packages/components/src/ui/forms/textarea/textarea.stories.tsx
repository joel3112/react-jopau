import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SBCode, SBSelectorContainer, SBTextSeparator } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../layout';
import { Textarea } from './textarea';
import docs from './readme.mdx';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: prepareParameters(docs),
  args: {
    value: '',
    defaultValue: '',
    name: 'textarea-name',
    label: 'Label',
    placeholder: 'Enter text',
    labelPlaceholder: '',
    helperText: '',
    size: 'md',
    variant: 'default',
    status: 'default',
    color: 'default',
    shape: 'default',
    autoComplete: 'off',
    minRows: 3,
    maxRows: 6,
    fullWidth: false,
    readOnly: false,
    autoFocus: false,
    disabled: false,
    required: false
  },
  argTypes: prepareArgTypes(Textarea, {
    onHeightChange: { action: 'height changed' }
  })
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

const variantItems = [
  { label: 'Default', value: 'default' },
  { label: 'Bordered', value: 'bordered' },
  { label: 'Underlined', value: 'underlined' }
];

export const LabelAndPlaceholder = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Same Label and placeholder</SBTextSeparator>
    <Textarea labelPlaceholder="Name" />
    <SBTextSeparator>Label and placeholder are different</SBTextSeparator>
    <Textarea label="Email" placeholder="example@mail.com" />
    <SBTextSeparator>Only placeholder</SBTextSeparator>
    <Textarea placeholder="Your name" />
  </Space>
);

export const Sizes = () => (
  <Space direction="column" gap={10}>
    <Textarea size="xs" label="Mini" />
    <Textarea size="sm" label="Small" />
    <Textarea size="md" label="Medium" />
    <Textarea size="lg" label="Large" />
    <Textarea size="xl" label="XLarge" />
  </Space>
);

export const Variants = () => (
  <Space direction="column" gap={10}>
    <Textarea variant="default" label="Default" placeholder="placeholder" />
    <Textarea variant="bordered" label="Bordered" placeholder="placeholder" />
    <Textarea variant="underlined" label="Underlined" placeholder="placeholder" />
  </Space>
);

export const Color = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Space gap={10} wrap>
        <Textarea variant={variant} label="Default" />
        <Textarea variant={variant} color="primary" label="Primary" />
        <Textarea variant={variant} color="secondary" label="Secondary" />
        <Textarea variant={variant} color="tertiary" label="Tertiary" />
        <Textarea variant={variant} color="info" label="Info" />
        <Textarea variant={variant} color="success" label="Success" />
        <Textarea variant={variant} color="error" label="Error" />
        <Textarea variant={variant} color="warning" label="Warning" />
      </Space>
    )}
  </SBSelectorContainer>
);

export const Status = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Space gap={10} wrap>
        <Textarea variant={variant} labelPlaceholder="Default" />
        <Textarea variant={variant} status="primary" labelPlaceholder="Primary" />
        <Textarea variant={variant} status="secondary" labelPlaceholder="Secondary" />
        <Textarea variant={variant} status="tertiary" labelPlaceholder="Tertiary" />
        <Textarea variant={variant} status="info" labelPlaceholder="Info" />
        <Textarea variant={variant} status="success" labelPlaceholder="Success" />
        <Textarea variant={variant} status="error" labelPlaceholder="Error" />
        <Textarea variant={variant} status="warning" labelPlaceholder="Warning" />
      </Space>
    )}
  </SBSelectorContainer>
);

export const HelperText = () => (
  <Space direction="column" gap={30}>
    <Space direction="column" gap={0}>
      <SBTextSeparator>With Variants</SBTextSeparator>
      <Space gap={10}>
        <Textarea helperText="Helper text" label="Name" />
        <Textarea variant="underlined" helperText="Helper text" label="Name" />
      </Space>
    </Space>
    <Space direction="column" gap={0}>
      <SBTextSeparator>With Status</SBTextSeparator>
      <Space gap={10}>
        <Textarea helperText="Helper text" status="secondary" label="Secondary" />
        <Textarea helperText="Helper text" status="success" label="Success" />
        <Textarea helperText="Helper text" status="error" label="Error" />
      </Space>
    </Space>
  </Space>
);

export const Shape = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Default</SBTextSeparator>
    <Space gap={10}>
      <Textarea variant="default" placeholder="Default" />
      <Textarea variant="bordered" placeholder="Bordered" />
    </Space>
    <SBTextSeparator>Round</SBTextSeparator>
    <Space gap={10}>
      <Textarea variant="default" shape="round" placeholder="Round" />
      <Textarea variant="bordered" shape="round" placeholder="Bordered" />
    </Space>
    <SBTextSeparator>Square</SBTextSeparator>
    <Space gap={10}>
      <Textarea variant="default" shape="square" placeholder="Square" />
      <Textarea variant="bordered" shape="square" placeholder="Bordered" />
    </Space>
  </Space>
);

export const Rows = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Static</SBTextSeparator>
    <Textarea rows={4} placeholder="Static rows, rows(4)" />
    <SBTextSeparator>Minimum</SBTextSeparator>
    <Textarea minRows={4} placeholder="Min rows (2), write something large..." />
    <SBTextSeparator>Maximum</SBTextSeparator>
    <Textarea
      minRows={1}
      maxRows={10}
      placeholder="Max rows (10), Min rows (1), write something large..."
    />
  </Space>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  value: 'lore ipsum dolor sit amet consectetur adipiscing elit'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  label: 'Read Only',
  value: 'lore ipsum dolor sit amet consectetur adipiscing elit'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const UncontrolledVSControlled = () => {
  const refUncontrolled = useRef<HTMLTextAreaElement>(null);
  const [valueControlled, setValueControlled] = useState(
    'lore ipsum dolor sit amet consectetur adipiscing elit'
  );

  return (
    <Space direction="column" gap={10}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Textarea
        labelPlaceholder="Name"
        defaultValue="lore ipsum dolor sit amet consectetur adipiscing elit"
        ref={refUncontrolled}
      />

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Textarea
        labelPlaceholder="Name"
        value={valueControlled}
        onChange={(e) => setValueControlled(e.target.value)}
      />
      <span>
        Value textarea: <SBCode>{valueControlled}</SBCode>
      </span>
    </Space>
  );
};
