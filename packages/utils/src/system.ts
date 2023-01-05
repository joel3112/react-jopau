import classes from 'classnames';

export { classes };

export const isClient = typeof window !== 'undefined';
export const isMacLike = isClient
  ? true
  : typeof navigator !== 'undefined' && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
