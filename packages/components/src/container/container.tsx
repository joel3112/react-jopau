import { ReactNode } from 'react';
import classes from 'classnames';
import { ElementHTML } from '../../types';
import { ContainerWrapper } from './container.styled';

type ContainerProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Defines the gap horizontally and vertically in the container.
   */
  gap?: number | Array<number>;
  /**
   * Maximum width of the container.
   */
  maxWidth?: number;
  /**
   * Centered horizontally the container.
   */
  centered?: boolean;
} & typeof defaultProps;

const defaultProps = {
  maxWidth: 1500,
  centered: false
};

const spacing = (gap?: number | Array<number>): string => {
  if (Array.isArray(gap) && gap.length === 2) {
    return gap.map((s: number) => `${s}px`).join(' ');
  } else if (typeof gap === 'number') {
    return [`${gap}px`, `${gap}px`].join(' ');
  }
  return '0';
};

/**
 * Containers are used to constrain a content's width to the current breakpoint.
 *
 * @import import { Container } from '@react-jopau/components/container';
 * @example
 * <Container gap={10} maxWidth={1000} centered>
 *    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 * </Container>
 */
export const Container = ({
  className,
  children,
  style,
  gap,
  maxWidth,
  centered
}: ContainerProps) => {
  return (
    <ContainerWrapper
      className={classes('container-wrapper', className)}
      css={{
        padding: spacing(gap),
        maxWidth: `${!isNaN(maxWidth) ? maxWidth : 0}px`,
        ...style
      }}
      centered={centered}>
      {children}
    </ContainerWrapper>
  );
};

Container.defaultProps = defaultProps;
