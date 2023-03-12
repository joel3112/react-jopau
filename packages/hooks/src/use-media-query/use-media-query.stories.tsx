import { Container, Stack, Text } from '@react-jopau/components';
import { prepareParameters, SBCard } from '@react-jopau/shared/stories';
import { useMediaQuery } from './use-media-query';
import docs from './readme.mdx';

export default {
  title: 'useMediaQuery',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <Container className="py-10" maxWidth={450}>
      <Stack direction="column" gap={1}>
        <SBCard title={<Text as="code">(min-width: 1024px)</Text>}>
          isLargeScreen: {isLargeScreen ? 'true' : 'false'}
        </SBCard>

        <SBCard title={<Text as="code">(prefers-color-scheme: dark)</Text>}>
          prefersDark: {prefersDark ? 'true' : 'false'}
        </SBCard>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
