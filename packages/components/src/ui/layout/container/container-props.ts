import { ReactNode } from 'react';
import type { ElementHTML } from '@/components/shared';
import { WithGap } from '@/components/shared';

export type ContainerProps = ElementHTML &
  WithGap & {
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
