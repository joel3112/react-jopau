import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdMic, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SBTextSeparator } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../layout';
import { Switch } from './switch';
import docs from './readme.mdx';

export default {
  title: 'Forms/Switch',
  component: Switch,
  parameters: prepareParameters(docs),
  args: {
    name: 'switch-name',
    variant: 'default',
    size: 'md',
    color: 'primary',
    label: '',
    defaultChecked: true,
    checked: true,
    disabled: false,
    autoFocus: false,
    squared: false
  },
  argTypes: prepareArgTypes(Switch)
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <Space direction="column" gap={10}>
    <Switch defaultChecked size="xs" label="Label" />
    <Switch defaultChecked size="sm" label="Label" />
    <Switch defaultChecked size="md" label="Label" />
    <Switch defaultChecked size="lg" label="Label" />
    <Switch defaultChecked size="xl" label="Label" />
  </Space>
);

export const Color = () => (
  <Space direction="column" gap={10}>
    <Switch defaultChecked color="primary" label="Label" />
    <Switch defaultChecked color="secondary" label="Label" />
    <Switch defaultChecked color="tertiary" label="Label" />
    <Switch defaultChecked color="info" label="Label" />
    <Switch defaultChecked color="success" label="Label" />
    <Switch defaultChecked color="error" label="Label" />
    <Switch defaultChecked color="warning" label="Label" />
  </Space>
);

export const Status = () => (
  <Space direction="column" gap={10}>
    <Switch defaultChecked status="primary" label="Label" />
    <Switch defaultChecked status="secondary" label="Label" />
    <Switch defaultChecked status="tertiary" label="Label" />
    <Switch defaultChecked status="info" label="Label" />
    <Switch defaultChecked status="success" label="Label" />
    <Switch defaultChecked status="error" label="Label" />
    <Switch defaultChecked status="warning" label="Label" />
  </Space>
);

export const Bordered = () => (
  <Space direction="column" gap={10}>
    <Switch variant="bordered" />
    <Switch variant="bordered" color="secondary" />
    <Switch variant="bordered" color="tertiary" />
    <Switch variant="bordered" color="info" />
    <Switch variant="bordered" color="success" />
    <Switch variant="bordered" color="error" />
    <Switch variant="bordered" color="warning" />
  </Space>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Squared = Template.bind({});
Squared.args = {
  squared: true
};

export const Icons = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Both</SBTextSeparator>
    <Switch defaultChecked size="xl" icon={<MdMic />} />
    <SBTextSeparator>On/Off</SBTextSeparator>
    <Switch
      defaultChecked
      size="xl"
      iconOn={<MdOutlineDarkMode />}
      iconOff={<MdOutlineLightMode />}
    />
  </Space>
);
