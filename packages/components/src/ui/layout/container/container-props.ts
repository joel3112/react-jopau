import { ReactNode } from 'react';
import type { ElementHTML, WithGap } from '@/components/shared';

export type ContainerProps = ElementHTML &
  WithGap<number | Array<number>> & {
    /**
     * Defines the children of the component.
     */
    children: ReactNode;
    /**
     * Maximum width of the container or breakpoint.
     */
    maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Centered horizontally the container.
     */
    centered?: boolean;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  centered: false
};
