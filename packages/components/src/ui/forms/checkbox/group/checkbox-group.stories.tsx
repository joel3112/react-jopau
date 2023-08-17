import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../../layout';
import { Text } from '../../../typography';
import { Checkbox } from '../checkbox';
import docs from './readme.mdx';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox.Group,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    value: ['1', '2'],
    defaultValue: ['1', '2'],
    name: 'checkbox-name',
    label: 'Options',
    size: 'md',
    color: 'primary',
    status: 'default',
    orientation: 'vertical',
    disabled: false,
    readOnly: false,
    required: false
  },
  argTypes: prepareArgTypes(Checkbox.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Checkbox.Group>;

const Options = [
  <Checkbox key="1" value="1">
    Option 1
  </Checkbox>,
  <Checkbox key="2" value="2">
    Option 2
  </Checkbox>,
  <Checkbox key="3" value="3">
    Option 3
  </Checkbox>
];

const Template: ComponentStory<typeof Checkbox.Group> = (args) => {
  return <Checkbox.Group {...args}>{Options}</Checkbox.Group>;
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
    <Checkbox.Group orientation="vertical" value={['1', '3']}>
      {Options}
    </Checkbox.Group>
    <SBTextSeparator>Horizontal</SBTextSeparator>
    <Checkbox.Group orientation="horizontal" value={['1', '3']}>
      {Options}
    </Checkbox.Group>
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
  const [valueControlled, setValueControlled] = useState(['C']);

  return (
    <Stack direction="column" gap={1}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Checkbox.Group defaultValue={['A']} ref={refUncontrolled}>
        <Checkbox value="A">Option A</Checkbox>
        <Checkbox value="B">Option B</Checkbox>
      </Checkbox.Group>

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Checkbox.Group value={valueControlled} onChange={setValueControlled}>
        <Checkbox value="A">Option A</Checkbox>
        <Checkbox value="B">Option B</Checkbox>
        <Checkbox value="C">Option C</Checkbox>
        <Checkbox value="D">Option D</Checkbox>
      </Checkbox.Group>
      <Stack align="center" gap={1}>
        Selected: {valueControlled.length > 0 && <Text as="code">{valueControlled.join(',')}</Text>}
      </Stack>
    </Stack>
  );
};
