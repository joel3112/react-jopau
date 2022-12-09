import { Container, Space } from '@react-jopau/components/ui/layout';
import { Text } from '@react-jopau/components/ui/typography';
import { SBCode } from '@react-jopau/styles/components';
import { prepareParameters } from '@react-jopau/styles/utils';
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
    <Container maxWidth={450}>
      <Text size="lg">{`Target width: ${window.innerWidth}px`}</Text>

      <Space className="mt-10" direction="column" gap={10}>
        <Space align="center" gap={10}>
          <SBCode>key:</SBCode>
          {key && (
            <code>
              <Text>{key}</Text>
            </code>
          )}
        </Space>
        <Space align="center" gap={10}>
          <SBCode>isMobile:</SBCode>
          {isMobile ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <SBCode>isTablet:</SBCode>
          {isTablet ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <SBCode>isSmallDesktop:</SBCode>
          {isSmallDesktop ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <SBCode>isDesktop:</SBCode>
          {isDesktop ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <SBCode>isLargeDesktop:</SBCode>
          {isLargeDesktop ? '✅' : '❌'}
        </Space>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
