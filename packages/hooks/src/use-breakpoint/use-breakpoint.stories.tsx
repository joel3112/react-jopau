import { TWContainer, TWItem } from '@react-jopau/styles/components';
import { Space } from '@react-jopau/components/ui/layout';
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
    <TWContainer>
      <Text size="lg">{`Target width: ${window.innerWidth}px`}</Text>

      <Space direction="column" gap={10}>
        <TWItem label="key">{key}</TWItem>
        <TWItem label="isMobile">{isMobile ? '✅' : '❌'}</TWItem>
        <TWItem label="isTablet">{isTablet ? '✅' : '❌'}</TWItem>
        <TWItem label="isSmallDesktop">{isSmallDesktop ? '✅' : '❌'}</TWItem>
        <TWItem label="isDesktop">{isDesktop ? '✅' : '❌'}</TWItem>
        <TWItem label="isLargeDesktop">{isLargeDesktop ? '✅' : '❌'}</TWItem>
      </Space>
    </TWContainer>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
