import { BreakpointValue, NormalSize } from './types';
import { useCurrentBreakpoint } from './use-current-breakpoint';

const computeSpacing = <T>(gap: T | BreakpointValue<T> | undefined): [string, string] => {
  let gapArray = [0, 0];
  if (typeof gap === 'number') {
    gapArray = [gap, gap];
  }
  if (Array.isArray(gap)) {
    gapArray = gap.slice(0, 2);
  }

  return gapArray.map((value) => `calc(${value} * $space$3)`) as [string, string];
};

export const useSpacing = <T>(gap?: T | BreakpointValue<T>): [string, string] => {
  const key = useCurrentBreakpoint();

  if (!gap) {
    return computeSpacing<T>(gap);
  }
  if (typeof gap === 'number' || Array.isArray(gap)) {
    return computeSpacing<T>(gap);
  }

  return key ? computeSpacing<T>((gap as Record<NormalSize, never>)[key]) : computeSpacing(gap);
};
