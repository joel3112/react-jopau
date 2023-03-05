import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdMic, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Switch } from './switch';
import docs from './readme.mdx';

export default {
  title: 'Forms/Switch',
  component: Switch,
  parameters: prepareParameters(docs),
  args: {
    children: '',
    name: 'switch-name',
    variant: 'default',
    size: 'md',
    color: 'primary',
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
  <Stack direction="column" gap={1}>
    <Switch defaultChecked size="xs">
      xs
    </Switch>
    <Switch defaultChecked size="sm">
      sm
    </Switch>
    <Switch defaultChecked size="md">
      md
    </Switch>
    <Switch defaultChecked size="lg">
      lg
    </Switch>
    <Switch defaultChecked size="xl">
      xl
    </Switch>
  </Stack>
);

export const Color = () => (
  <Stack direction="column" gap={1}>
    <Switch defaultChecked color="primary">
      Primary
    </Switch>
    <Switch defaultChecked color="secondary">
      Secondary
    </Switch>
    <Switch defaultChecked color="tertiary">
      Tertiary
    </Switch>
    <Switch defaultChecked color="info">
      Info
    </Switch>
    <Switch defaultChecked color="success">
      Success
    </Switch>
    <Switch defaultChecked color="error">
      Error
    </Switch>
    <Switch defaultChecked color="warning">
      Warning
    </Switch>
  </Stack>
);

export const Status = () => (
  <Stack direction="column" gap={1}>
    <Switch defaultChecked status="primary">
      Primary
    </Switch>
    <Switch defaultChecked status="secondary">
      Secondary
    </Switch>
    <Switch defaultChecked status="tertiary">
      Tertiary
    </Switch>
    <Switch defaultChecked status="info">
      Info
    </Switch>
    <Switch defaultChecked status="success">
      Success
    </Switch>
    <Switch defaultChecked status="error">
      Error
    </Switch>
    <Switch defaultChecked status="warning">
      Warning
    </Switch>
  </Stack>
);

export const Bordered = () => (
  <Stack direction="column" gap={1}>
    <Switch variant="bordered" />
    <Switch variant="bordered" color="secondary" />
    <Switch variant="bordered" color="tertiary" />
    <Switch variant="bordered" color="info" />
    <Switch variant="bordered" color="success" />
    <Switch variant="bordered" color="error" />
    <Switch variant="bordered" color="warning" />
  </Stack>
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
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Both</SBTextSeparator>
    <Switch defaultChecked size="xl" icon={<MdMic />} />
    <SBTextSeparator>On/Off</SBTextSeparator>
    <Switch
      defaultChecked
      size="xl"
      iconOn={<MdOutlineDarkMode />}
      iconOff={<MdOutlineLightMode />}
    />
  </Stack>
);
