import { Container, Stack, Text } from '@react-jopau/components';
import { prepareParameters, SBCode } from '@react-jopau/shared/stories';
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
          <SBCode>key:</SBCode>
          {key && <Text as="code">{key}</Text>}
        </Stack>
        <Stack align="center" gap={1}>
          <SBCode>isMobile:</SBCode>
          {isMobile ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <SBCode>isTablet:</SBCode>
          {isTablet ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <SBCode>isSmallDesktop:</SBCode>
          {isSmallDesktop ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <SBCode>isDesktop:</SBCode>
          {isDesktop ? '✅' : '❌'}
        </Stack>
        <Stack align="center" gap={1}>
          <SBCode>isLargeDesktop:</SBCode>
          {isLargeDesktop ? '✅' : '❌'}
        </Stack>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
