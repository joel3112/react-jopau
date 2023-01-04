import classnames from 'classnames';

export const classes = classnames;

export const isClient = typeof window !== 'undefined';
export const isMacLike = isClient
  ? true
  : typeof navigator !== 'undefined' && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
