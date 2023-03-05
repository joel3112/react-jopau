import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdCalendarToday, MdCreditCard, MdPhone, MdSearch } from 'react-icons/md';
import {
  prepareArgTypes,
  prepareParameters,
  SBTextSeparator,
  SBSelectorContainer,
  SBCode
} from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Input } from './input';
import docs from './readme.mdx';

export default {
  title: 'Forms/Input',
  component: Input,
  parameters: prepareParameters(docs),
  args: {
    type: 'text',
    value: '',
    defaultValue: '',
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
    shape: 'default',
    iconPosition: 'left',
    autoComplete: 'off',
    hotKey: '',
    mask: false,
    fullWidth: false,
    clearable: false,
    readOnly: false,
    autoFocus: false,
    disabled: false,
    required: false
  },
  argTypes: prepareArgTypes(Input, {
    as: { table: { disable: true } },
    onClearClick: { action: 'cleared' },
    onIconClick: { action: 'icon clicked' }
  })
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
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

export const Types = () => (
  <Stack direction="column" gap={1}>
    <Input type="text" label="Text" />
    <Input type="password" label="Password" />
    <Input type="email" label="Email" />
    <Input type="number" label="Number" />
    <Input type="tel" label="Telephone" />
    <Input type="url" label="URL" />
  </Stack>
);

export const LabelAndPlaceholder = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Same Label and placeholder</SBTextSeparator>
    <Input labelPlaceholder="Name" />
    <SBTextSeparator>Label and placeholder are different</SBTextSeparator>
    <Input label="Email" placeholder="example@mail.com" />
    <SBTextSeparator>Only placeholder</SBTextSeparator>
    <Input placeholder="Your name" />
  </Stack>
);

export const Sizes = () => (
  <Stack direction="column" gap={1}>
    <Input size="xs" label="Mini" />
    <Input size="sm" label="Small" />
    <Input size="md" label="Medium" />
    <Input size="lg" label="Large" />
    <Input size="xl" label="XLarge" />
  </Stack>
);

export const Variants = () => (
  <Stack direction="column" gap={1}>
    <Input variant="default" label="Default" placeholder="placeholder" />
    <Input variant="bordered" label="Bordered" placeholder="placeholder" />
    <Input variant="underlined" label="Underlined" placeholder="placeholder" />
  </Stack>
);

export const Color = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Stack gap={1} className="flex-wrap">
        <Input variant={variant} label="Default" />
        <Input variant={variant} color="primary" label="Primary" />
        <Input variant={variant} color="secondary" label="Secondary" />
        <Input variant={variant} color="tertiary" label="Tertiary" />
        <Input variant={variant} color="info" label="Info" />
        <Input variant={variant} color="success" label="Success" />
        <Input variant={variant} color="error" label="Error" />
        <Input variant={variant} color="warning" label="Warning" />
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Status = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Stack gap={1} className="flex-wrap">
        <Input variant={variant} labelPlaceholder="Default" />
        <Input variant={variant} status="primary" labelPlaceholder="Primary" />
        <Input variant={variant} status="secondary" labelPlaceholder="Secondary" />
        <Input variant={variant} status="tertiary" labelPlaceholder="Tertiary" />
        <Input variant={variant} status="info" labelPlaceholder="Info" />
        <Input variant={variant} status="success" labelPlaceholder="Success" />
        <Input variant={variant} status="error" labelPlaceholder="Error" />
        <Input variant={variant} status="warning" labelPlaceholder="Warning" />
      </Stack>
    )}
  </SBSelectorContainer>
);

export const HelperText = () => (
  <Stack direction="column" gap={5}>
    <Stack direction="column">
      <SBTextSeparator>With Variants</SBTextSeparator>
      <Stack gap={1}>
        <Input helperText="Helper text" label="Name" />
        <Input variant="underlined" helperText="Helper text" label="Name" />
      </Stack>
    </Stack>
    <Stack direction="column">
      <SBTextSeparator>With Status</SBTextSeparator>
      <Stack gap={1}>
        <Input helperText="Helper text" status="secondary" label="Secondary" />
        <Input helperText="Helper text" status="success" label="Success" />
        <Input helperText="Helper text" status="error" label="Error" />
      </Stack>
    </Stack>
    <Stack direction="column">
      <SBTextSeparator>With Size</SBTextSeparator>
      <Stack gap={1} align="start">
        <Input helperText="Helper text" size="xs" label="Size xs" />
        <Input helperText="Helper text" size="sm" label="Size sm" />
        <Input helperText="Helper text" size="md" label="Size md" />
        <Input helperText="Helper text" size="lg" label="Size lg" />
        <Input helperText="Helper text" size="xl" label="Size xl" />
      </Stack>
    </Stack>
  </Stack>
);

export const Content = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Stack direction="column" gap={1}>
        <SBTextSeparator>Position</SBTextSeparator>
        <Stack gap={1}>
          <Input variant={variant} icon={<MdSearch />} label="Label" placeholder="Search" />
          <Input
            variant={variant}
            iconPosition="right"
            icon={<MdSearch />}
            label="Label"
            placeholder="Search"
          />
        </Stack>
        <SBTextSeparator>With Size</SBTextSeparator>
        <Input variant={variant} size="xs" icon={<MdSearch />} placeholder="Search Mini" />
        <Input variant={variant} size="sm" icon={<MdSearch />} placeholder="Search Small" />
        <Input variant={variant} size="md" icon={<MdSearch />} placeholder="Search Medium" />
        <Input variant={variant} size="lg" icon={<MdSearch />} placeholder="Search Large" />
        <SBTextSeparator>With Status</SBTextSeparator>
        <Stack gap={1}>
          <Input
            variant={variant}
            status="secondary"
            icon={<MdSearch />}
            placeholder="Search Secondary"
          />
          <Input
            variant={variant}
            status="success"
            icon={<MdSearch />}
            placeholder="Search Success"
          />
          <Input variant={variant} status="error" icon={<MdSearch />} placeholder="Search Error" />
        </Stack>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const LabelLeftAndRight = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Stack direction="column" gap={1}>
        <SBTextSeparator>Label left</SBTextSeparator>
        <Input variant={variant} labelLeft="https://" placeholder="example" />
        <SBTextSeparator>Label right</SBTextSeparator>
        <Input variant={variant} labelRight=".com" placeholder="example" />
        <SBTextSeparator>Label left and right</SBTextSeparator>
        <Input variant={variant} labelLeft="https://" labelRight=".com" placeholder="example" />
        <SBTextSeparator>With Status</SBTextSeparator>
        <Stack gap={1}>
          <Input variant={variant} status="secondary" labelLeft="https://" placeholder="example" />
          <Input variant={variant} status="success" labelLeft="https://" placeholder="example" />
          <Input variant={variant} status="error" labelLeft="https://" placeholder="example" />
        </Stack>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Shape = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Default</SBTextSeparator>
    <Stack gap={1}>
      <Input variant="default" placeholder="Default" />
      <Input variant="bordered" placeholder="Bordered" />
      <Input labelLeft="https://" labelRight=".com" placeholder="example" />
    </Stack>
    <SBTextSeparator>Round</SBTextSeparator>
    <Stack gap={1}>
      <Input variant="default" shape="round" placeholder="Round" />
      <Input variant="bordered" shape="round" placeholder="Bordered" />
      <Input shape="round" labelLeft="https://" labelRight=".com" placeholder="example" />
    </Stack>
    <SBTextSeparator>Square</SBTextSeparator>
    <Stack gap={1}>
      <Input variant="default" shape="square" placeholder="Square" />
      <Input variant="bordered" shape="square" placeholder="Bordered" />
      <Input shape="square" labelLeft="https://" labelRight=".com" placeholder="example" />
    </Stack>
  </Stack>
);

export const HotKey = () => (
  <SBSelectorContainer label={['Select variant']} items={[variantItems]} value={['default']}>
    {([variant]) => (
      <Stack direction="column" gap={1} className="flex-wrap">
        <Stack gap={1}>
          <Input variant={variant} hotKey="ctrl+k+1" label="Size xs" size="xs" />
          <Input variant={variant} hotKey="ctrl+k+2" label="Size sm" size="sm" />
          <Input variant={variant} hotKey="ctrl+k+3" label="Size lg" size="lg" />
        </Stack>
        <Stack gap={1}>
          <Input variant={variant} hotKey="ctrl+shift+1" label="Secondary" color="secondary" />
          <Input variant={variant} hotKey="ctrl+shift+2" label="Info" color="info" />
          <Input variant={variant} hotKey="meta+j" label="Success" status="success" />
          <Input variant={variant} hotKey="meta+k" label="Error" status="error" />
        </Stack>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Required = Template.bind({});
Required.args = {
  required: true
};

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

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const Mask = () => (
  <Stack direction="column" gap={1}>
    <Input
      label="Date mask"
      placeholder="dd/mm/yyyy"
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      icon={<MdCalendarToday />}
    />
    <Input
      label="Credit card mask"
      placeholder="0000 0000 0000 0000"
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      icon={<MdCreditCard />}
    />
    <Input
      label="Phone mask"
      placeholder="+34 000 000 000"
      mask={['+', '3', '4', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
      icon={<MdPhone />}
    />
  </Stack>
);

export const UncontrolledVSControlled = () => {
  const refUncontrolled = useRef<HTMLInputElement>(null);
  const [valueControlled, setValueControlled] = useState('John Doe');

  return (
    <Stack direction="column" gap={1}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Input labelPlaceholder="Name" defaultValue="John Doe" ref={refUncontrolled} />

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Input
        labelPlaceholder="Name"
        value={valueControlled}
        onChange={(e) => setValueControlled(e.target.value)}
      />
      <span>
        Value input: <SBCode>{valueControlled}</SBCode>
      </span>
    </Stack>
  );
};
