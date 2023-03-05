import { useBreakpoint } from '@react-jopau/hooks';
import { NormalSize, WithGap } from './types';

const computeSpacing = (gap: WithGap['gap']): [string, string] => {
  let gapArray = [0, 0];
  if (typeof gap === 'number') {
    gapArray = [gap, gap];
  }
  if (Array.isArray(gap)) {
    gapArray = gap.slice(0, 2);
  }

  return gapArray.map((value) => `calc(${value} * $space$3)`) as [string, string];
};

export const useSpacing = (gap?: WithGap['gap']): [string, string] => {
  const { key } = useBreakpoint();

  if (!gap) {
    return computeSpacing(gap);
  }
  if (typeof gap === 'number' || Array.isArray(gap)) {
    return computeSpacing(gap);
  }

  return key ? computeSpacing((gap as Record<NormalSize, never>)[key]) : computeSpacing(gap);
};
