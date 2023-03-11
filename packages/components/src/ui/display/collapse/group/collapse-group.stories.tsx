import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Collapse } from '../collapse';
import docs from './readme.mdx';

export default {
  title: 'Display/Collapse',
  component: Collapse.Group,
  parameters: prepareParameters(docs),
  args: {
    accordion: false,
    divider: true,
    shadow: false,
    splitted: false,
    bordered: false
  },
  argTypes: prepareArgTypes(Collapse.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Collapse.Group>;

const Collapses = [
  <Collapse key="1" title="Option 1">
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Collapse>,
  <Collapse key="2" title="Option 2">
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Collapse>,
  <Collapse key="3" title="Option 3">
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Collapse>
];

const Template: ComponentStory<typeof Collapse.Group> = (args) => {
  return <Collapse.Group {...args}>{Collapses}</Collapse.Group>;
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupAccordion = Template.bind({});
GroupAccordion.args = {
  accordion: true
};

export const GroupNoDivider = Template.bind({});
GroupNoDivider.args = {
  divider: false
};

export const GroupShadow = Template.bind({});
GroupShadow.args = {
  shadow: true
};

export const GroupSplitted = Template.bind({});
GroupSplitted.args = {
  splitted: true
};

export const GroupBordered = Template.bind({});
GroupBordered.args = {
  bordered: true
};
