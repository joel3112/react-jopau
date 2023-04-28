import { ReactNode } from 'react';
import type { ElementHTML, WithFlex, WithGap } from '@/components/shared';

export type StackProps = ElementHTML &
  WithFlex<'row' | 'column'> &
  WithGap & {
    /**
     * Defines the children of the component.
     */
    children?: ReactNode;
    /**
     * Changes which tag component outputs
     */
    as?: keyof HTMLElementTagNameMap;
  };

export const defaultProps = {
  as: 'div'
};
