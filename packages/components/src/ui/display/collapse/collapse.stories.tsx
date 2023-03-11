import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Avatar } from '../../display';
import { Heading, Text } from '../../typography';
import { Collapse } from './collapse';
import docs from './readme.mdx';

export default {
  title: 'Display/Collapse',
  component: Collapse,
  parameters: prepareParameters(docs),
  args: {
    index: 123,
    title: 'Title',
    subtitle: '',
    bordered: false,
    disabled: false,
    expanded: false,
    hideArrow: false,
    divider: false,
    shadow: false,
    contentLeft: null,
    arrowIcon: null,
    children:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  argTypes: prepareArgTypes(Collapse, {
    contentLeft: { control: false }
  })
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => {
  return (
    <Collapse {...args}>
      <Text size="sm">{args.children}</Text>
    </Collapse>
  );
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const InitialExpanded = Template.bind({});
InitialExpanded.args = {
  expanded: true
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: (
    <Heading as="h3" color="info">
      Title
    </Heading>
  ),
  subtitle: (
    <Text size="md" color="success">
      Subtitle
    </Text>
  )
};

export const WithContentLeft = Template.bind({});
WithContentLeft.args = {
  contentLeft: <Avatar src="https://i.pravatar.cc/300" squared bordered color="success" />
};

export const CustomArrowIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const arrowIcon = expanded ? (
    <AiOutlineMinusCircle className="w-10 h-10 text-blue" />
  ) : (
    <AiOutlinePlusCircle className="w-10 h-10 text-blue" />
  );

  return (
    <Collapse
      title="Title"
      disableArrowAnimation
      expanded={expanded}
      arrowIcon={arrowIcon}
      onChange={() => setExpanded(!expanded)}>
      <Text size="sm">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </Text>
    </Collapse>
  );
};

export const HideArrow = Template.bind({});
HideArrow.args = {
  hideArrow: true
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true
};

export const Divider = Template.bind({});
Divider.args = {
  divider: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  subtitle: 'Disabled',
  contentLeft: <Avatar src="https://i.pravatar.cc/300" squared bordered color="success" />
};
