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
    isMobile: config.between('xs', 'sm'),
    isTablet: config.between('sm', 'md'),
    isSmallDesktop: config.between('md', 'lg'),
    isDesktop: config.between('lg', 'xl'),
    isLargeDesktop: config.up('xl')
  };
};
