import { BreakpointValue } from '@/components/shared/types';
import { useCurrentBreakpoint } from './use-current-breakpoint';

export const useBreakpointValue = <T>(values: BreakpointValue<T>): T | undefined => {
  const current = useCurrentBreakpoint();

  return current ? values[current] : undefined;
};
