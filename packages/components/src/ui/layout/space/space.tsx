import { ReactNode } from 'react';
import { classes } from '../../../utils/system';
import type { ElementHTML } from '../../../../types';
import { SpaceWrapper } from './space.styled';

type BasicPosition = 'start' | 'center' | 'end';
export type DirectionSpace = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifySpace = BasicPosition | 'between' | 'around';
export type AlignSpace = BasicPosition | 'baseline' | 'stretch';

type SpaceProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Defines the direction of the flex container.
   */
  direction?: Required<DirectionSpace>;
  /**
   * Defines if the flex container is wrapped or not.
   */
  wrap?: boolean;
  /**
   * Defines the gap between the flex container's children.
   */
  gap?: number | Array<number>;
  /**
   * Defines the justify-content style property.
   */
  justify?: JustifySpace;
  /**
   * Defines the align-items style property.
   */
  align?: AlignSpace;
} & Partial<typeof defaultProps>;

const defaultProps = {
  direction: 'row'
};

const spacing = (gap?: number | Array<number>): string =>
  gap
    ? [gap]
        .flat()
        .map((s: number) => `${s}px`)
        .join(' ')
    : '';

/**
 * Component flexbox-based spacing.
 *
 * @param   {SpaceProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Space } from '@react-jopau/components/ui/layout';
 * @example
 * <Space direction="row" align="center" justify="center" gap={10}>
 *    <div>Item 1</div>
 *    <div>Item 2</div>
 * </Space>
 */
export const Space = ({
  className,
  style,
  children,
  direction,
  wrap,
  gap,
  justify,
  align
}: SpaceProps) => {
  return (
    <SpaceWrapper
      className={classes('space-wrapper', className)}
      css={{
        flexDirection: direction,
        gap: spacing(gap),
        ...style
      }}
      justify={justify}
      align={align}
      wrap={wrap}>
      {children}
    </SpaceWrapper>
  );
};

Space.defaultProps = defaultProps;
