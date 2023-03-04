import { CSSProperties, ReactNode } from 'react';

export type NormalColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning';
export type SimpleColor = NormalColor | 'default';
export type TextColor = NormalColor | 'inherit' | 'disabled';
export type ButtonColor = NormalColor | 'light' | 'dark';

export type NormalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Shape = 'default' | 'round' | 'square';

export type ContentPosition = 'left' | 'right';

export type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type WithIcon = {
  /**
   * Defines the render of the icon of the component.
   */
  icon?: ReactNode;
  /**
   * Defines the position of the icon in the component.
   */
  iconPosition?: ContentPosition;
};
export type WithGap = {
  /**
   * Defines the spacing between the items.
   */
  gap?: number | Array<number> | { [key in NormalSize]?: number | Array<number> };
};

export type FormControl = {
  /**
   * Identifies the element that labels the current element.
   */
  id?: string;
  /**
   * Define the name for the current element (used for form submission).
   */
  name?: string;
  /**
   * Defines the label of the current element.
   */
  label?: string;
  /**
   * Defines the status of the element and determines the color of the border.
   */
  status?: SimpleColor;
  /**
   * Defines if the element is read-only.
   */
  readOnly?: boolean;
  /**
   * Defines if the element is disabled and not available for interaction.
   */
  disabled?: boolean;
  /**
   * Defines if the element is required.
   */
  required?: boolean;
  /**
   * Defines the element should receive focus on render.
   */
  autoFocus?: boolean;
};

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
