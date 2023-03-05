import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Stack } from '../../../layout';
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
    shape: 'default',
    status: 'default',
    color: 'default',
    autoComplete: 'off',
    hotKey: '',
    fullWidth: false,
    clearable: false,
    readOnly: false,
    autoFocus: false,
    disabled: false,
    required: false,
    hideToggle: false
  },
  argTypes: prepareArgTypes(Input.Password, {
    as: { table: { disable: true } },
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
  <Stack direction="column" gap={1}>
    <Input.Password variant="default" label="Default" placeholder="placeholder" />
    <Input.Password variant="bordered" label="Bordered" placeholder="placeholder" />
    <Input.Password variant="underlined" label="Underlined" placeholder="placeholder" />
  </Stack>
);

export const PasswordStatus = () => (
  <Stack gap={1} className="flex-wrap">
    <Input.Password labelPlaceholder="Default" />
    <Input.Password status="primary" labelPlaceholder="Primary" />
    <Input.Password status="secondary" labelPlaceholder="Secondary" />
    <Input.Password status="tertiary" labelPlaceholder="Tertiary" />
    <Input.Password status="info" labelPlaceholder="Info" />
    <Input.Password status="success" labelPlaceholder="Success" />
    <Input.Password status="error" labelPlaceholder="Error" />
    <Input.Password status="warning" labelPlaceholder="Warning" />
  </Stack>
);

export const PasswordCustomIcon = () => (
  <Stack direction="column" gap={1}>
    <Input.Password visibleIcon={<VscEyeClosed />} hiddenIcon={<VscEye />} label="Custom Icon" />
  </Stack>
);

export const PasswordHideToggle = () => (
  <Input.Password label="Label" placeholder="placeholder" hideToggle />
);
