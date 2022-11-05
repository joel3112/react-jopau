import classes from 'classnames';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { multiply } from '@react-jopau/utils/array';
import { Space } from './space';
import docs from './readme.mdx';

const Items = (size: number, percentage30 = false) => {
  const classNames = classes({
    'px-8 py-3 border border-secondary border-solid': true,
    'flex-[0_0_30%]': percentage30
  });

  return multiply([null], size).map((_, index) => (
    <div key={index} className={classNames}>
      Item {index + 1}
    </div>
  ));
};

export default {
  title: 'Space',
  component: Space,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    direction: 'row',
    children: Items(3)
  },
  argTypes: {
    children: {
      control: false
    }
  }
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => {
  return <Space {...args} className="text-text font-medium underline underline-offset-4" />;
};

export const Default = Template.bind({
  direction: 'row',
  gap: 0,
  justify: 'flex-start'
});

export const DirectionRow = Template.bind({});
DirectionRow.args = {
  direction: 'row'
};

export const DirectionColumn = Template.bind({});
DirectionColumn.args = {
  direction: 'column'
};

export const WrapFalse = Template.bind({});
WrapFalse.args = {
  wrap: false,
  children: Items(5)
};

export const WrapTrue = Template.bind({});
WrapTrue.args = {
  wrap: true,
  children: Items(5, true)
};

export const GapUnique = Template.bind({});
GapUnique.args = {
  gap: 10,
  wrap: true,
  children: Items(6, true)
};

export const GapMultiple = Template.bind({});
GapMultiple.args = {
  gap: [40, 10],
  wrap: true,
  children: Items(6, true)
};
