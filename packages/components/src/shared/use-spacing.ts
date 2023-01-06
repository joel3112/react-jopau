const spacing = (gap?: number | Array<number>): string => {
  if (Array.isArray(gap) && gap.length === 2) {
    return gap.map((s: number) => `${s}px`).join(' ');
  } else if (typeof gap === 'number') {
    return [`${gap}px`, `${gap}px`].join(' ');
  }
  return '0';
};

export const useSpacing = (gap?: number | Array<number>) => {
  return spacing(gap);
};
