import { useContext } from 'react';
import type { BreakpointsRules } from '@react-jopau/styles/types';
import { classes } from '../../../utils/system';
import { ThemeContext } from '../../../contexts';
import { ContainerProps, defaultProps } from './container-props';
import { StyledContainer } from './container.styled';

const spacing = (gap?: number | Array<number>): string => {
  if (Array.isArray(gap) && gap.length === 2) {
    return gap.map((s: number) => `${s}px`).join(' ');
  } else if (typeof gap === 'number') {
    return [`${gap}px`, `${gap}px`].join(' ');
  }
  return '0';
};

const computeMaxWidth = (
  breakpoints: BreakpointsRules,
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
): number => {
  if (typeof maxWidth === 'number') {
    return maxWidth;
  }
  if (typeof maxWidth === 'string' && breakpoints[maxWidth]) {
    return breakpoints[maxWidth] as number;
  }
  return 1500;
};

/**
 * Containers are used to constrain a content's width to the current breakpoint.
 *
 * @param   {ContainerProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Container } from '@react-jopau/components/ui';
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
  const { config } = useContext(ThemeContext);

  return (
    <StyledContainer
      className={classes('container', className)}
      css={{
        ...(gap && { padding: spacing(gap) }),
        maxWidth: `${computeMaxWidth(config?.media, maxWidth)}px !important`,
        ...style
      }}
      centered={centered}>
      {children}
    </StyledContainer>
  );
};

Container.defaultProps = defaultProps;
