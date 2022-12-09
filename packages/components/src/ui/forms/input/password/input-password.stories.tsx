import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../../layout';
import { Input } from '../input';
import docs from './readme.mdx';

export default {
  title: 'Forms/Input',
  component: Input.Password,
  parameters: prepareParameters(docs),
  args: {
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
    autoComplete: 'off',
    hotKey: '',
    rounded: false,
    autoWidth: false,
    clearable: false,
    readOnly: false,
    disabled: false,
    required: false,
    hideToggle: false
  },
  argTypes: prepareArgTypes(Input.Password, {
    onClearClick: { action: 'cleared' },
    onIconClick: { action: 'icon clicked' }
  })
} as ComponentMeta<typeof Input.Password>;

const Template: ComponentStory<typeof Input.Password> = (args) => {
  return <Input.Password {...args} />;
};

export const PasswordDocs = Template.bind({});
PasswordDocs.storyName = '[Password] Docs';

export const PasswordDefault = Template.bind({});
PasswordDefault.storyName = '[Password] Playground';
PasswordDefault.parameters = { viewMode: 'story' };

export const PasswordVariants = () => (
  <Space direction="column" gap={10}>
    <Input.Password variant="default" label="Default" placeholder="placeholder" />
    <Input.Password variant="bordered" label="Bordered" placeholder="placeholder" />
    <Input.Password variant="underlined" label="Underlined" placeholder="placeholder" />
  </Space>
);

export const PasswordStatus = () => (
  <Space gap={10} wrap>
    <Input.Password labelPlaceholder="Default" />
    <Input.Password status="primary" labelPlaceholder="Primary" />
    <Input.Password status="secondary" labelPlaceholder="Secondary" />
    <Input.Password status="tertiary" labelPlaceholder="Tertiary" />
    <Input.Password status="info" labelPlaceholder="Info" />
    <Input.Password status="success" labelPlaceholder="Success" />
    <Input.Password status="error" labelPlaceholder="Error" />
    <Input.Password status="warning" labelPlaceholder="Warning" />
  </Space>
);

export const PasswordCustomIcon = () => (
  <Space direction="column" gap={10}>
    <Input.Password visibleIcon={<VscEyeClosed />} hiddenIcon={<VscEye />} label="Custom Icon" />
  </Space>
);

export const PasswordHideToggle = () => (
  <Input.Password label="Label" placeholder="placeholder" hideToggle />
);
