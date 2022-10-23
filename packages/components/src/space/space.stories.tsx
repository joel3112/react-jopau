import classnames from 'classnames';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { multiply } from '@react-jopau/utils/array';
import { Space } from './space';

const Items = (size: number, percentage50 = false) => {
  const classes = classnames({
    'px-8 py-4 text-text bg-gray border-solid border border-grayBorder': true,
    'flex-[0_0_48%]': percentage50
  });

  return (
    <>
      {multiply([null], size).map((_, index) => (
        <div key={index} className={classes}>
          Item {index + 1}
        </div>
      ))}
    </>
  );
};

export default {
  title: 'Space',
  component: Space,
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
  return <Space {...args} className="border-solid border border-grayBorder" />;
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
  children: Items(5, true)
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
  children: Items(5, true)
};

export const GapMultiple = Template.bind({});
GapMultiple.args = {
  gap: [5, 30],
  wrap: true,
  children: Items(5, true)
};
