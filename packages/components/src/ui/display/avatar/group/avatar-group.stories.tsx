import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Stack } from '../../../layout';
import { Avatar } from '../avatar';
import docs from './readme.mdx';

export default {
  title: 'Display/Avatar',
  component: Avatar.Group,
  parameters: prepareParameters(docs),
  args: {
    children: [],
    count: undefined,
    animated: false
  },
  argTypes: prepareArgTypes(Avatar.Group, {
    children: { control: false }
  })
} as ComponentMeta<typeof Avatar.Group>;

const Avatars = [
  <Avatar key="1" pointer>
    Jun
  </Avatar>,
  <Avatar key="2" pointer>
    Jane
  </Avatar>,
  <Avatar key="3" pointer>
    John
  </Avatar>,
  <Avatar key="4" pointer>
    JR
  </Avatar>
];
const ImageAvatars = [
  <Avatar key="1" src="https://picsum.photos/200/300" />,
  <Avatar key="2" src="https://picsum.photos/200/300" />,
  <Avatar key="3" src="https://picsum.photos/200/300" />,
  <Avatar key="4" src="https://picsum.photos/200/300" />
];

const Template: ComponentStory<typeof Avatar.Group> = (args) => {
  return <Avatar.Group {...args}>{Avatars}</Avatar.Group>;
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupCount = () => (
  <Stack direction="column" gap={2}>
    <Avatar.Group count={12}>{Avatars}</Avatar.Group>
    <Avatar.Group count={5}>{ImageAvatars}</Avatar.Group>
  </Stack>
);

export const GroupAnimated = Template.bind({});
GroupAnimated.args = {
  animated: true
};
