import { act, renderHook } from '@testing-library/react';
import { BreakpointsRules } from '@react-jopau/utils/breakpoint';
import { UseBreakpoint, useBreakpoint } from '../src/useBreakpoint';

const rules: BreakpointsRules = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200
};
const MOCK_HEIGHT = 500;

describe('useBreakpoint hook', () => {
  Object.entries(rules).forEach(([key, width]) => {
    test(`works hook with ${key} viewport correctly`, () => {
      const { result } = renderHook(() => useBreakpoint());

      act(() => {
        window.resizeTo(width + 100, MOCK_HEIGHT);
      });

      expect(result.current).toHaveProperty('key', key);
    });
  });

  [
    { width: 400, key: 'isMobile', label: 'mobile' },
    { width: 700, key: 'isTablet', label: 'tablet' },
    { width: 1000, key: 'isSmallDesktop', label: 'small-desktop' },
    { width: 1400, key: 'isDesktop', label: 'desktop' },
    { width: 1700, key: 'isLargeDesktop', label: 'large-desktop' }
  ].forEach(({ width, key, label }) => {
    test(`returns true in ${label} viewport`, () => {
      const { result } = renderHook(() => useBreakpoint());

      act(() => {
        window.resizeTo(width, MOCK_HEIGHT);
      });

      expect(result.current[key as keyof UseBreakpoint]).toBeTruthy();
    });
  });
});
