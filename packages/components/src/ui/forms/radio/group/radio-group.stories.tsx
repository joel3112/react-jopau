import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../../layout';
import { Text } from '../../../typography';
import { Radio } from '../radio';
import docs from './readme.mdx';

export default {
  title: 'Forms/Radio',
  component: Radio.Group,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    value: '2',
    defaultValue: '2',
    name: 'radio-name',
    label: 'Options',
    size: 'md',
    color: 'primary',
    status: 'default',
    orientation: 'vertical',
    disabled: false,
    readOnly: false,
    required: false
  },
  argTypes: prepareArgTypes(Radio.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Radio.Group>;

const Options = [
  <Radio key="1" value="1">
    Option 1
  </Radio>,
  <Radio key="2" value="2">
    Option 2
  </Radio>,
  <Radio key="3" value="3">
    Option 3
  </Radio>
];

const Template: ComponentStory<typeof Radio.Group> = (args) => {
  return <Radio.Group {...args}>{Options}</Radio.Group>;
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupLabel = Template.bind({});
GroupLabel.args = { label: 'Options' };

export const GroupSize = Template.bind({});
GroupSize.args = {
  label: 'Options Size xs',
  size: 'xs'
};

export const GroupColor = Template.bind({});
GroupColor.args = {
  label: 'Options Color Secondary',
  color: 'secondary'
};

export const GroupStatus = Template.bind({});
GroupStatus.args = {
  label: 'Options Status Success',
  status: 'success'
};

export const GroupOrientation = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Vertical</SBTextSeparator>
    <Radio.Group orientation="vertical" value="2">
      {Options}
    </Radio.Group>
    <SBTextSeparator>Horizontal</SBTextSeparator>
    <Radio.Group orientation="horizontal" value="2">
      {Options}
    </Radio.Group>
  </Stack>
);

export const GroupRequired = Template.bind({});
GroupRequired.args = {
  required: true
};

export const GroupDisabled = Template.bind({});
GroupDisabled.args = {
  disabled: true
};

export const GroupReadOnly = Template.bind({});
GroupReadOnly.args = {
  readOnly: true
};

export const GroupUncontrolledVSControlled = () => {
  const refUncontrolled = useRef<HTMLInputElement>(null);
  const [valueControlled, setValueControlled] = useState('C');

  return (
    <Stack direction="column" gap={1}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Radio.Group defaultValue="A" ref={refUncontrolled}>
        <Radio value="A">Option A</Radio>
        <Radio value="B">Option B</Radio>
      </Radio.Group>

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Radio.Group value={valueControlled} onChange={setValueControlled}>
        <Radio value="A">Option A</Radio>
        <Radio value="B">Option B</Radio>
        <Radio value="C">Option C</Radio>
        <Radio value="D">Option D</Radio>
      </Radio.Group>
      <Stack align="center" gap={1}>
        Selected: <Text as="code">{valueControlled}</Text>
      </Stack>
    </Stack>
  );
};
