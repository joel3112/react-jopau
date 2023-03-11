import { ReactElement } from 'react';
import type { ElementHTML } from '@/components/shared';
import { CollapseProps } from '../collapse-props';

export type CollapseGroupProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactElement<CollapseProps> | ReactElement<CollapseProps>[];
  /**
   * Expand children collapse like an accordion.
   */
  accordion?: boolean;
  /**
   * Defines if the group is bordered or not.
   */
  bordered?: boolean;
  /**
   * Defines if the group is splitted or not.
   */
  splitted?: boolean;
  /**
   * Defines if the group is shadowed or not.
   */
  shadow?: boolean;
  /**
   * Show or hide the divider of the component.
   */
  divider?: boolean;
  /**
   * Function to be called when the value is changed.
   */
  onChange?: (index: number, value: boolean) => void;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  divider: true
};
