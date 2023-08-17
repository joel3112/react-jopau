import { Container, Stack, Text } from '@react-jopau/components';
import { prepareParameters } from '@react-jopau/shared/stories';
import { useBreakpoint } from './use-breakpoint';
import docs from './readme.mdx';

export default {
  title: 'useBreakpoint',
  parameters: prepareParameters(docs, true)
};
export const Docs = () => {};

export const Default = () => {
  const { key, isMobile, isTablet, isDesktop, isSmallDesktop, isLargeDesktop } = useBreakpoint();

  return (
    <Container className="py-10" maxWidth={450}>
      <Text size="lg">{`Target width: ${window.innerWidth}px`}</Text>

      <Stack className="mt-10" direction="column" gap={1}>
        <Stack align="center" gap={1}>
          <Text as="code">key:</Text>
          {key && <Text as="code">{key}</Text>}
        </Stack>
        <Stack align="center" gap={1}>
          <Text as="code">isMobile:</Text>
          {isMobile ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <Text as="code">isTablet:</Text>
          {isTablet ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <Text as="code">isSmallDesktop:</Text>
          {isSmallDesktop ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <Text as="code">isDesktop:</Text>
          {isDesktop ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <Text as="code">isLargeDesktop:</Text>
          {isLargeDesktop ? '✅' : '❌'}
        </Stack>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
