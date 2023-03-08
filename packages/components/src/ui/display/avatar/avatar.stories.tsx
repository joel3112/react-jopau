import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAdd, MdLight, MdDarkMode, MdImage, MdVideocam } from 'react-icons/md';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Text } from '../../typography';
import { Avatar } from './avatar';
import docs from './readme.mdx';

export default {
  title: 'Display/Avatar',
  component: Avatar,
  parameters: prepareParameters(docs),
  args: {
    size: 'md',
    color: 'default',
    children: 'Joe',
    src: 'https://picsum.photos/200',
    squared: false,
    bordered: false,
    zoomed: false,
    pointer: false
  },
  argTypes: prepareArgTypes(Avatar)
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <>
    <Stack gap={1}>
      <Avatar size="xs">xs</Avatar>
      <Avatar size="sm">sm</Avatar>
      <Avatar size="md">md</Avatar>
      <Avatar size="lg">lg</Avatar>
      <Avatar size="xl">xl</Avatar>
      <Avatar className="text-5xl" size={100}>
        100
      </Avatar>
      <Avatar className="text-4xl" size={{ xs: 50, sm: 100, md: 150, lg: 200, xl: 250 }}>
        br*
      </Avatar>
    </Stack>
    <Text size="xs" className="mt-10">
      * Resize window to see the size changes (xs: 50, sm: 100, md: 150, lg: 200, xl: 250)
    </Text>
  </>
);

export const Colors = () => (
  <Stack gap={1}>
    <Avatar>Joe</Avatar>
    <Avatar color="primary">Joe</Avatar>
    <Avatar color="secondary">Joe</Avatar>
    <Avatar color="tertiary">Joe</Avatar>
    <Avatar color="success">Joe</Avatar>
    <Avatar color="error">Joe</Avatar>
    <Avatar color="warning">Joe</Avatar>
    <Avatar color="info">Joe</Avatar>
  </Stack>
);

export const Images = () => (
  <Stack gap={1}>
    <Avatar src="https://picsum.photos/200" size="xs" />
    <Avatar src="https://picsum.photos/200" size="sm" />
    <Avatar src="https://picsum.photos/200" size="md" />
    <Avatar src="https://picsum.photos/200" size="lg" />
    <Avatar src="https://picsum.photos/200" size="xl" />
  </Stack>
);

export const Icons = () => (
  <Stack gap={1}>
    <Avatar icon={<MdAdd />} size="xs" />
    <Avatar icon={<MdLight />} size="sm" />
    <Avatar icon={<MdDarkMode />} size="md" />
    <Avatar icon={<MdImage />} size="lg" />
    <Avatar icon={<MdVideocam />} size="xl" />
    <Avatar icon={<MdVideocam className="text-5xl" />} size={100} />
  </Stack>
);

export const Squared = () => (
  <Stack gap={1}>
    <Avatar squared color="primary" src="https://picsum.photos/200" />
    <Avatar squared color="secondary">
      Joe
    </Avatar>
    <Avatar squared color="tertiary" icon={<MdAdd />} />
  </Stack>
);

export const Bordered = () => (
  <Stack gap={1}>
    <Avatar bordered src="https://picsum.photos/200" />
    <Avatar bordered color="primary" src="https://picsum.photos/200" />
    <Avatar bordered color="secondary" src="https://picsum.photos/200" />
    <Avatar bordered color="tertiary" src="https://picsum.photos/200" />
    <Avatar bordered color="success" src="https://picsum.photos/200" />
    <Avatar bordered color="error" squared src="https://picsum.photos/200" />
    <Avatar bordered color="warning" squared src="https://picsum.photos/200" />
    <Avatar bordered color="info" squared src="https://picsum.photos/200" />
  </Stack>
);

export const Zoomed = () => (
  <Stack gap={1}>
    <Avatar zoomed src="https://picsum.photos/200" size="xs" />
    <Avatar zoomed src="https://picsum.photos/200" size="sm" />
    <Avatar zoomed src="https://picsum.photos/200" size="md" />
    <Avatar zoomed src="https://picsum.photos/200" size="lg" />
    <Avatar zoomed src="https://picsum.photos/200" size="xl" />
  </Stack>
);
