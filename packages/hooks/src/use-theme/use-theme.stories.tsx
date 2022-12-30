import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@react-jopau/components/contexts';
import { Container, Heading, Space, Switch, Text } from '@react-jopau/components/ui';
import { SBCode, SBJSONPreview } from '@react-jopau/styles/components';
import { prepareParameters } from '@react-jopau/styles/utils';
import { useTheme } from './use-theme';
import docs from './readme.mdx';

export default {
  title: 'useTheme',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const { config, darkMode, onToggle } = useTheme();

  return (
    <Container className="bg-background">
      <Space direction="column" gap={10}>
        <Space gap={5}>
          <Heading as="h6">DarkMode?</Heading>
          <SBCode>{String(darkMode)}</SBCode>
        </Space>
        <Space align="center" gap={5}>
          <Text size="sm">Toggle</Text>
          <Switch size="xs" color="secondary" checked={darkMode} onChange={onToggle} />
        </Space>
        <Heading className="mt-6" as="h6">
          Config:
        </Heading>
        <SBJSONPreview code={config} />
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
Default.decorators = [
  (Story: StoryFn) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
