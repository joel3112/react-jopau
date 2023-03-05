import { ReactNode } from 'react';
import type { ElementHTML, WithFlex } from '@/components/shared';

export type StackProps = ElementHTML &
  WithFlex<'row' | 'column', number> & {
    /**
     * Defines the children of the component.
     */
    children?: ReactNode;
    /**
     * Changes which tag component outputs
     */
    as?: keyof HTMLElementTagNameMap;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  gap: 0
};
