import { CSSProperties } from 'react';

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'info'
  | 'error'
  | 'success'
  | 'warning';

export type ElementHTML = {
  /**
   * Classnames applied to root element
   */
  className?: string;
  /**
   * Styles applied to root element
   */
  style?: CSSProperties;
};
