import { ComponentStory, ComponentMeta } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { multiply } from '@react-jopau/utils';
import { classes } from '../../../utils/system';
import { Space } from './space';
import docs from './readme.mdx';

const Items = (size: number, percentage30 = false) => {
  const classNames = classes({
    'text-text font-medium underline underline-offset-4': true,
    'px-10 py-6 border border-secondary border-solid': true,
    'flex-[0_0_30%]': percentage30
  });

  return multiply([null], size).map((_, index) => (
    <div key={index} className={classNames}>
      Item {index + 1}
    </div>
  ));
};

export default {
  title: 'Layout/Space',
  component: Space,
  parameters: prepareParameters(docs),
  args: {
    direction: 'row',
    children: Items(3),
    wrap: false
  },
  argTypes: prepareArgTypes(Space)
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => {
  return <Space {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const As = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>div</SBTextSeparator>
    <Space as="div" direction="row">
      {Items(3)}
    </Space>
    <SBTextSeparator>form</SBTextSeparator>
    <Space as="form" direction="row">
      {Items(3)}
    </Space>
  </div>
);

export const Direction = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>row</SBTextSeparator>
    <Space direction="row">{Items(3)}</Space>
    <SBTextSeparator>column</SBTextSeparator>
    <Space direction="column">{Items(3)}</Space>
    <SBTextSeparator>row-reverse</SBTextSeparator>
    <Space direction="row-reverse">{Items(3)}</Space>
    <SBTextSeparator>column-reverse</SBTextSeparator>
    <Space direction="column-reverse">{Items(3)}</Space>
  </div>
);

export const Align = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>start</SBTextSeparator>
    <Space direction="column" align="start">
      {Items(3)}
    </Space>
    <SBTextSeparator>center</SBTextSeparator>
    <Space direction="column" align="center">
      {Items(3)}
    </Space>
    <SBTextSeparator>end</SBTextSeparator>
    <Space direction="column" align="end">
      {Items(3)}
    </Space>
    <SBTextSeparator>stretch</SBTextSeparator>
    <Space direction="column" align="stretch">
      {Items(3)}
    </Space>
    <SBTextSeparator>baseline</SBTextSeparator>
    <Space direction="column" align="baseline">
      {Items(3)}
    </Space>
  </div>
);

export const Justify = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>start</SBTextSeparator>
    <Space justify="start">{Items(3)}</Space>
    <SBTextSeparator>center</SBTextSeparator>
    <Space justify="center">{Items(3)}</Space>
    <SBTextSeparator>end</SBTextSeparator>
    <Space justify="end">{Items(3)}</Space>
    <SBTextSeparator>between</SBTextSeparator>
    <Space justify="between">{Items(3)}</Space>
    <SBTextSeparator>around</SBTextSeparator>
    <Space justify="around">{Items(3)}</Space>
  </div>
);

export const Gap = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>Unique</SBTextSeparator>
    <Space wrap gap={20}>
      {Items(6, true)}
    </Space>
    <SBTextSeparator>Multiple</SBTextSeparator>
    <Space wrap gap={[60, 40]}>
      {Items(6, true)}
    </Space>
  </div>
);

export const Wrap = () => (
  <div className="flex flex-col gap-8">
    <SBTextSeparator>false</SBTextSeparator>
    <Space direction="row" wrap={false}>
      {Items(5, true)}
    </Space>
    <SBTextSeparator>true</SBTextSeparator>
    <Space direction="row" wrap>
      {Items(5, true)}
    </Space>
  </div>
);
