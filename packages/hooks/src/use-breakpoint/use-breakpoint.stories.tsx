import { TWHighlight } from '@react-jopau/styles/components';
import { Container, Space } from '@react-jopau/components/ui/layout';
import { Text } from '@react-jopau/components/ui/typography';
import { prepareParameters } from '../story-helpers';
import { useBreakpoint } from './use-breakpoint';
import docs from './readme.mdx';

export default {
  title: 'useBreakpoint',
  parameters: prepareParameters(docs)
};
export const Docs = () => {};

export const Default = () => {
  const { key, isMobile, isTablet, isDesktop, isSmallDesktop, isLargeDesktop } = useBreakpoint();

  return (
    <Container maxWidth={450}>
      <Text size="lg">{`Target width: ${window.innerWidth}px`}</Text>

      <Space className="mt-10" direction="column" gap={10}>
        <Space align="center" gap={10}>
          <TWHighlight>key:</TWHighlight>
          {key && (
            <code>
              <Text>{key}</Text>
            </code>
          )}
        </Space>
        <Space align="center" gap={10}>
          <TWHighlight>isMobile:</TWHighlight>
          {isMobile ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <TWHighlight>isTablet:</TWHighlight>
          {isTablet ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <TWHighlight>isSmallDesktop:</TWHighlight>
          {isSmallDesktop ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <TWHighlight>isDesktop:</TWHighlight>
          {isDesktop ? '✅' : '❌'}
        </Space>
        <Space align="center" gap={10}>
          <TWHighlight>isLargeDesktop:</TWHighlight>
          {isLargeDesktop ? '✅' : '❌'}
        </Space>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
