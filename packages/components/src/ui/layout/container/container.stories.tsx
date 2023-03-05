import { ComponentStory, ComponentMeta } from '@storybook/react';
import { prepareArgTypes, prepareParameters, SBTextSeparator } from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Container } from './container';
import docs from './readme.mdx';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: prepareParameters(docs),
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores autem, blanditiis ducimus excepturi fugiat inventore ipsum nam nesciunt nobis odit quae quas repellendus sequi, sit suscipit! Enim, ratione.',
    maxWidth: 1500,
    centered: false
  },
  argTypes: prepareArgTypes(Container, {
    children: { control: false }
  })
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return <Container {...args} className="border border-solid border-secondary text-text" />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

const className = 'border border-solid border-secondary text-text';
const children =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores autem, blanditiis ducimus excepturi fugiat inventore ipsum nam nesciunt nobis odit quae quas repellendus sequi, sit suscipit! Enim, ratione.';

export const Gap = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>Unique</SBTextSeparator>
    <Container className={className} gap={15}>
      {children}
    </Container>
    <SBTextSeparator>Multiple</SBTextSeparator>
    <Container className={className} gap={[30, 50]}>
      {children}
    </Container>
  </Stack>
);

export const MaxWidth = () => (
  <Stack direction="column" gap={1}>
    <SBTextSeparator>xs</SBTextSeparator>
    <Container className={className} maxWidth="xs">
      {children}
    </Container>
    <SBTextSeparator>sm</SBTextSeparator>
    <Container className={className} maxWidth="sm">
      {children}
    </Container>
    <SBTextSeparator>md</SBTextSeparator>
    <Container className={className} maxWidth="md">
      {children}
    </Container>
    <SBTextSeparator>lg</SBTextSeparator>
    <Container className={className} maxWidth="lg">
      {children}
    </Container>
    <SBTextSeparator>xl</SBTextSeparator>
    <Container className={className} maxWidth="xl">
      {children}
    </Container>
    <SBTextSeparator>600px</SBTextSeparator>
    <Container className={className} maxWidth={600}>
      {children}
    </Container>
  </Stack>
);

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
  maxWidth: 500
};
