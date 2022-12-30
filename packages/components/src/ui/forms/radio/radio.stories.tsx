import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Radio } from './radio';
import docs from './readme.mdx';

export default {
  title: 'Forms/Radio',
  component: Radio,
  parameters: prepareParameters(docs),
  args: {
    children: 'Option',
    description: '',
    value: 'option',
    size: 'md',
    color: 'primary',
    status: 'default',
    disabled: false,
    autoFocus: false,
    squared: false
  },
  argTypes: prepareArgTypes(Radio)
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <Radio.Group defaultValue={args.value}>
      <Radio {...args} />
    </Radio.Group>
  );
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <Radio.Group defaultValue="xs">
    <Radio value="xs" size="xs">
      Mini
    </Radio>
    <Radio value="sm" size="sm">
      Small
    </Radio>
    <Radio value="md" size="md">
      Medium
    </Radio>
    <Radio value="lg" size="lg">
      Large
    </Radio>
    <Radio value="xl" size="xl">
      XLarge
    </Radio>
  </Radio.Group>
);

export const Color = () => (
  <Radio.Group defaultValue="primary">
    <Radio value="primary" color="primary">
      Primary
    </Radio>
    <Radio value="secondary" color="secondary">
      Secondary
    </Radio>
    <Radio value="tertiary" color="tertiary">
      Tertiary
    </Radio>
    <Radio value="info" color="info">
      Info
    </Radio>
    <Radio value="success" color="success">
      Success
    </Radio>
    <Radio value="error" color="error">
      Error
    </Radio>
    <Radio value="warning" color="warning">
      Warning
    </Radio>
  </Radio.Group>
);

export const Status = () => (
  <Radio.Group value="default">
    <Radio value="default" status="default">
      Default
    </Radio>
    <Radio value="primary" status="primary">
      Primary
    </Radio>
    <Radio value="secondary" status="secondary">
      Secondary
    </Radio>
    <Radio value="tertiary" status="tertiary">
      Tertiary
    </Radio>
    <Radio value="info" status="info">
      Info
    </Radio>
    <Radio value="success" status="success">
      Success
    </Radio>
    <Radio value="error" status="error">
      Error
    </Radio>
    <Radio value="warning" status="warning">
      Warning
    </Radio>
  </Radio.Group>
);

export const Description = () => (
  <Radio.Group defaultValue="xs">
    <Radio value="xs" size="xs" description="lore ipsum dolor sit amet">
      Mini
    </Radio>
    <Radio value="sm" size="sm" description="lore ipsum dolor sit amet">
      Small
    </Radio>
    <Radio value="md" size="md" description="lore ipsum dolor sit amet">
      Medium
    </Radio>
    <Radio value="lg" size="lg" description="lore ipsum dolor sit amet">
      Large
    </Radio>
    <Radio value="xl" size="xl" description="lore ipsum dolor sit amet">
      XLarge
    </Radio>
  </Radio.Group>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Squared = Template.bind({});
Squared.args = {
  squared: true
};
