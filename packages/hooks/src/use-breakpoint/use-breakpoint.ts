import { useEffect, useState } from 'react';
import {
  Breakpoint,
  BreakpointsHelper,
  BreakpointsRules,
  createBreakpoints
} from '@react-jopau/styles/breakpoint';

/**
 * @typedef  {Object} UseBreakpoint
 * @property {("xs"|"sm"|"md"|"lg"|"xl")} key - Current breakpoint key
 * @property {boolean} isMobile - true if the viewport is mobile
 * @property {boolean} isTablet - true if the viewport is tablet
 * @property {boolean} isSmallDesktop - true if the viewport is small desktop
 * @property {boolean} isDesktop - true if the viewport is desktop
 * @property {boolean} isLargeDesktop - true if the viewport is large desktop
 */
/**
 * Get current breakpoint key and boolean values for each breakpoint.
 *
 * @param   {Object} [rules] - Custom breakpoints rules. This rules will be merged with the default ones.
 * @param   {number} [rules.xs] - Extra small breakpoint
 * @param   {number} [rules.sm] - Small breakpoint size
 * @param   {number} [rules.md] - Medium breakpoint size
 * @param   {number} [rules.lg] - Large breakpoint size
 * @param   {number} [rules.xl] - Extra large breakpoint size
 * @returns {UseBreakpoint} Current breakpoint key and boolean values for each breakpoint
 *
 * @imports import { useBreakpoint } from '@react-jopau/hooks';
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
export const useBreakpoint = (
  rules?: BreakpointsRules
): {
  key: Breakpoint | null;
  isMobile: boolean;
  isTablet: boolean;
  isSmallDesktop: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
} => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [config, setConfig] = useState<BreakpointsHelper>(createBreakpoints({ rules }));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
