import { ReactElement } from 'react';
import type { ElementHTML } from '@/components/shared';
import { AvatarProps } from '../avatar-props';

export type AvatarGroupProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  /**
   * Total count of avatars.
   */
  count?: number;
  /**
   * Display animation on hover.
   */
  animated?: boolean;
} & Partial<typeof defaultProps>;

export const defaultProps = {};
