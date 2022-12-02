import { CSSProperties } from 'react';

export type NormalColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning';

export type NormalSize = 'xs' | 'sm' | 'md' | 'lg';

export type ContentPosition = 'left' | 'right';

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
   * Defines the value of the current element.
   */
  value?: string | number | boolean;
  /**
   * Defines the label of the current element.
   */
  label?: string;
  /**
   * Defines the placeholder of the current element.
   */
  placeholder?: string;
  /**
   * Defines the helper text of the current element.
   */
  helperText?: string;
  /**
   * Defines the status of the element and determines the color of the border.
   */
  status?: 'default' | 'error' | 'success';
  /**
   * Defines if the element is read-only.
   */
  readOnly?: boolean;
  /**
   * Defines if the element is disabled and not available for interaction.
   */
  disabled?: boolean;
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
