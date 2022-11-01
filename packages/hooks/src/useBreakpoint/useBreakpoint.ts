import { useEffect, useState } from 'react';
import {
  Breakpoint,
  BreakpointsHelper,
  BreakpointsRules,
  createBreakpoints
} from '@react-jopau/styles/breakpoint';

export type UseBreakpoint = {
  /**
   * Current breakpoint key: `xs`, `sm`, `md`, `lg`, `xl`
   */
  key: Breakpoint | null;
  /**
   * true if the viewport is mobile
   */
  isMobile: boolean;
  /**
   *  true if the viewport is tablet
   */
  isTablet: boolean;
  /**
   * true if the viewport is small desktop
   */
  isSmallDesktop: boolean;
  /**
   * true if the viewport is desktop
   */
  isDesktop: boolean;
  /**
   * true if the viewport is large desktop
   */
  isLargeDesktop: boolean;
};

/**
 * Get current breakpoint key and boolean values for each breakpoint.
 *
 * @param   {BreakpointsRules} [rules] - Custom breakpoints rules
 * @returns {UseBreakpoint}
 *
 * @import import { useBreakpoint } from '@react-jopau/hooks';
 * @example
 * // Default breakpoint rules
 * // By default will use the default values: { xs: 650, sm: 960, md: 1280, lg: 1400, xl: 1920 }
 * const {
 *  key,
 *  isMobile,
 *  isTablet,
 *  isSmallDesktop,
 *  isDesktop,
 *  isLargeDesktop
 * } = useBreakpoint();
 *
 * console.log(key); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * console.log(isMobile); // true | false
 * console.log(isTablet); // true | false
 * console.log(isSmallDesktop); // true | false
 * console.log(isDesktop); // true | false
 * console.log(isLargeDesktop); // true | false
 * @example
 * // With custom breakpoint rules
 * // This rules will be merged with the default rules
 * const rules = { xs:650, sm:960 };
 * const { key } = useBreakpoint(rules);
 */
export const useBreakpoint = (rules?: BreakpointsRules): UseBreakpoint => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [config, setConfig] = useState<BreakpointsHelper>(createBreakpoints({ rules }));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setConfig(createBreakpoints({ rules, targetWidth: windowWidth }));
  }, [windowWidth]);

  return {
    key: config.current,
    isMobile: config.down('xs'),
    isTablet: config.between('xs', 'sm'),
    isSmallDesktop: config.between('sm', 'md'),
    isDesktop: config.between('md', 'lg'),
    isLargeDesktop: config.between('lg', 'xl') || config.up('xl')
  };
};
