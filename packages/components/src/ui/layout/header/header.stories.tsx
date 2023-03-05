import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Header } from './header';
import docs from './readme.mdx';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: prepareParameters(docs),
  args: {
    title: 'Title',
    maxWidth: 'lg'
  },
  argTypes: prepareArgTypes(Header)
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Logo = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Logo and Title</SBTextSeparator>
    <Header title="Title" logo={<img src="./images/logo.png" alt="Logo" className="h-[45px]" />} />
    <SBTextSeparator>Only Logo</SBTextSeparator>
    <Header
      logo={
        <Stack align="center" gap={1}>
          <img src="./images/logo.png" alt="Logo" className="h-[45px]" />
          <h5 className="bg-secondary-300">Header</h5>
        </Stack>
      }
    />
  </Stack>
);

export const MaxWidth = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>xs</SBTextSeparator>
    <Header title="Title" maxWidth="xs" />
    <SBTextSeparator>sm</SBTextSeparator>
    <Header title="Title" maxWidth="sm" />
    <SBTextSeparator>md</SBTextSeparator>
    <Header title="Title" maxWidth="md" />
    <SBTextSeparator>lg</SBTextSeparator>
    <Header title="Title" maxWidth="lg" />
    <SBTextSeparator>xl</SBTextSeparator>
    <Header title="Title" maxWidth="xl" />
    <SBTextSeparator>400px</SBTextSeparator>
    <Header title="Title" maxWidth={400} />
  </Stack>
);

export const WithActions = Template.bind({});
WithActions.args = {
  children: (
    <div className="flex gap-4">
      <a href="#" className="text-secondary">
        Action 1
      </a>
      <a href="#" className="text-secondary">
        Action 2
      </a>
    </div>
  )
};
