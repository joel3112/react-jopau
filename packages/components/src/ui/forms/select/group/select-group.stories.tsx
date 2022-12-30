import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Select } from '../select';
import docs from './readme.mdx';

export default {
  title: 'Forms/Select',
  component: Select.Group,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    label: 'Group 1',
    disabled: false
  },
  argTypes: prepareArgTypes(Select.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Select.Group>;

const Options = [
  <Select.Option key="1" value="1">
    Option 1
  </Select.Option>,
  <Select.Option key="2" value="2">
    Option 2
  </Select.Option>,
  <Select.Option key="3" value="3">
    Option 3
  </Select.Option>
];

const Template: ComponentStory<typeof Select.Group> = (args) => {
  return (
    <Select label="Options" placeholder="Select option" value="1">
      <Select.Group {...args}>{Options}</Select.Group>
    </Select>
  );
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupDisabled = Template.bind({});
GroupDisabled.args = {
  disabled: true
};
