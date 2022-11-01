import { TWContainer, TWItem, TWText } from '@react-jopau/styles/components';
import { Space } from '@react-jopau/components/space';
import { useBreakpoint } from './useBreakpoint';
import docs from './useBreakpoint.mdx';

export default {
  title: 'useBreakpoint',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => {
  const { key, isMobile, isTablet, isDesktop, isSmallDesktop, isLargeDesktop } = useBreakpoint();

  return (
    <TWContainer>
      <TWText size="lg">Target width: {window.innerWidth}px</TWText>

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
