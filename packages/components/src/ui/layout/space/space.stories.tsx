import { ReactNode } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { classes } from '@react-jopau/utils';
import { Space } from './space';
import docs from './readme.mdx';

export default {
  title: 'Layout/Space',
  component: Space,
  parameters: prepareParameters(docs),
  args: {
    x: 4,
    y: 4,
    inline: false
  },
  argTypes: prepareArgTypes(Space)
} as ComponentMeta<typeof Space>;

const Item = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={classes('border border-secondary rounded-sm', className)}>{children}</div>
);

const Template: ComponentStory<typeof Space> = (args) => {
  return (
    <Item className="w-fit">
      <Space {...args} />
    </Item>
  );
};
export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Vertical = () => (
  <>
    <Item>
      <Space y={2} />
    </Item>
    <Space y={2} />
    <Item>
      <Space y={3} />
    </Item>
    <Space y={2} />
    <Item>
      <Space y={4} />
    </Item>
  </>
);

export const Horizontal = () => (
  <div className="flex">
    <Item className="flex-auto">
      <Space y={2} />
    </Item>
    <Space x={2} />
    <Item className="flex-auto">
      <Space y={2} />
    </Item>
  </div>
);
