import { act, renderHook } from '@testing-library/react';
import { useBreakpoint } from './use-breakpoint';

const rules = {
  xs: 650,
  sm: 960,
  md: 1280,
  lg: 1400
};
const MOCK_HEIGHT = 500;

describe('useBreakpoint hook', () => {
  Object.entries(rules).forEach(([key, width]) => {
    test(`works hook with ${key} viewport correctly`, () => {
      const { result } = renderHook(() => useBreakpoint());

      act(() => {
        window.resizeTo(width - 100, MOCK_HEIGHT);
      });

      expect(result.current).toHaveProperty('key', key);
    });
  });

  [
    { width: 400, key: 'isMobile', label: 'mobile' },
    { width: 700, key: 'isTablet', label: 'tablet' },
    { width: 1000, key: 'isSmallDesktop', label: 'small-desktop' },
    { width: 1300, key: 'isDesktop', label: 'desktop' },
    { width: 1600, key: 'isLargeDesktop', label: 'large-desktop' }
  ].forEach(({ width, key, label }: { width: number; key: string; label: string }) => {
    test(`returns true in ${label} viewport`, () => {
      const { result } = renderHook(() => useBreakpoint());

      act(() => {
        window.resizeTo(width, MOCK_HEIGHT);
      });

      expect(
        result.current[
          key as 'isMobile' | 'isTablet' | 'isSmallDesktop' | 'isDesktop' | 'isLargeDesktop'
        ]
      ).toBeTruthy();
    });
  });
});
