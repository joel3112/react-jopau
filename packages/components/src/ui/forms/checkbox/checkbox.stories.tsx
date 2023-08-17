import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Text } from '../../typography';
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
    defaultChecked: true,
    checked: true,
    disabled: false,
    required: false,
    rounded: false,
    readOnly: false,
    autoFocus: false,
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
  <Stack direction="column" gap={1}>
    <Checkbox defaultChecked size="xs">
      Mini
    </Checkbox>
    <Checkbox defaultChecked size="sm">
      Small
    </Checkbox>
    <Checkbox defaultChecked size="md">
      Medium
    </Checkbox>
    <Checkbox defaultChecked size="lg">
      Large
    </Checkbox>
    <Checkbox defaultChecked size="xl">
      XLarge
    </Checkbox>
  </Stack>
);

export const Color = () => (
  <Stack direction="column" gap={1}>
    <Checkbox defaultChecked color="primary">
      Primary
    </Checkbox>
    <Checkbox defaultChecked color="secondary">
      Secondary
    </Checkbox>
    <Checkbox defaultChecked color="tertiary">
      Tertiary
    </Checkbox>
    <Checkbox defaultChecked color="info">
      Info
    </Checkbox>
    <Checkbox defaultChecked color="success">
      Success
    </Checkbox>
    <Checkbox defaultChecked color="error">
      Error
    </Checkbox>
    <Checkbox defaultChecked color="warning">
      Warning
    </Checkbox>
  </Stack>
);

export const Status = () => (
  <Stack direction="column" gap={1}>
    <Checkbox defaultChecked status="default">
      Default
    </Checkbox>
    <Checkbox defaultChecked status="primary">
      Primary
    </Checkbox>
    <Checkbox defaultChecked status="secondary">
      Secondary
    </Checkbox>
    <Checkbox defaultChecked status="tertiary">
      Tertiary
    </Checkbox>
    <Checkbox defaultChecked status="info">
      Info
    </Checkbox>
    <Checkbox defaultChecked status="success">
      Success
    </Checkbox>
    <Checkbox defaultChecked status="error">
      Error
    </Checkbox>
    <Checkbox defaultChecked status="warning">
      Warning
    </Checkbox>
  </Stack>
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
  throughed: true
};

export const UncontrolledVSControlled = () => {
  const refUncontrolled = useRef<HTMLInputElement>(null);
  const [checkedControlled, setCheckedControlled] = useState(true);

  return (
    <Stack direction="column" gap={1}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Checkbox defaultChecked ref={refUncontrolled}>
        Uncontrolled
      </Checkbox>

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Checkbox checked={checkedControlled} onChange={setCheckedControlled}>
        Controlled
      </Checkbox>
      <Stack align="center" gap={1}>
        Checked: <Text as="code">{JSON.stringify(checkedControlled)}</Text>
      </Stack>
    </Stack>
  );
};
