import { Breakpoint, createBreakpoints } from '@react-jopau/styles';
import { breakpoints } from './theme';

export const useCurrentBreakpoint = (): Breakpoint | null => {
  const { current } = createBreakpoints({ rules: breakpoints });

  return current;
};
