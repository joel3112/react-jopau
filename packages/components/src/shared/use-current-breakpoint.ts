import { useEffect, useState } from 'react';
import { Breakpoint, createBreakpoints } from '@react-jopau/styles';
import { breakpoints } from './theme';

export const useCurrentBreakpoint = (): Breakpoint | null => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const { current } = createBreakpoints({ rules: breakpoints });
      setCurrentBreakpoint(current);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return currentBreakpoint;
};
