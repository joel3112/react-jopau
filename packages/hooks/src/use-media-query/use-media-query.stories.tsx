import { Container, Stack } from '@react-jopau/components';
import { prepareParameters, SBCard, SBCode } from '@react-jopau/shared/stories';
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
        <SBCard title={<SBCode>(min-width: 1024px)</SBCode>}>
          isLargeScreen: {isLargeScreen ? 'true' : 'false'}
        </SBCard>

        <SBCard title={<SBCode>(prefers-color-scheme: dark)</SBCode>}>
          prefersDark: {prefersDark ? 'true' : 'false'}
        </SBCard>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
