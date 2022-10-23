import { useEffect, useState } from 'react';
import {
  Breakpoint,
  BreakpointsHelper,
  BreakpointsRules,
  createBreakpoints
} from '@react-jopau/utils/breakpoint';

export type UseBreakpoint = {
  key: Breakpoint | null;
  isMobile: boolean;
  isTablet: boolean;
  isSmallDesktop: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
};

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
    isLargeDesktop: config.between('lg', 'xl')
  };
};
