import { CSSProperties } from 'react';

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

export type ContentPosition = 'left' | 'right';

export type FormControl<TValue = string | number | boolean, TStatus = SimpleColor> = {
  /**
   * Identifies the element that labels the current element.
   */
  id?: string;
  /**
   * Define the name for the current element (used for form submission).
   */
  name?: string;
  /**
   * Defines the value of the current element, used when submitting a form.
   */
  value?: TValue;
  /**
   * Defines the label of the current element.
   */
  label?: string;
  /**
   * Defines the status of the element and determines the color of the border.
   */
  status?: TStatus;
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
