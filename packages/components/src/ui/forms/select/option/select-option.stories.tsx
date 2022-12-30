import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Select } from '../select';
import docs from './readme.mdx';

export default {
  title: 'Forms/Select',
  component: Select.Option,
  parameters: prepareParameters(docs),
  args: {
    children: 'Option 1',
    value: '1',
    label: '',
    disabled: false
  },
  argTypes: prepareArgTypes(Select.Option, {
    children: { control: { type: 'text' } }
  })
} as ComponentMeta<typeof Select.Option>;

const Template: ComponentStory<typeof Select.Option> = (args) => {
  return (
    <Select label="Options" placeholder="Select option" defaultValue="1">
      <Select.Option {...args} />
    </Select>
  );
};

export const OptionDocs = Template.bind({});
OptionDocs.storyName = '[Option] Docs';

export const OptionDefault = Template.bind({});
OptionDefault.storyName = '[Option] Playground';
OptionDefault.parameters = { viewMode: 'story' };

export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  disabled: true
};
