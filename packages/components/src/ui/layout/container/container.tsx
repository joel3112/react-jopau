import { classes } from '@react-jopau/utils';
import { useMaxWidth, useSpacing } from '@/components/shared';
import { ContainerProps, defaultProps } from './container-props';
import { StyledContainer } from './container.styled';

/**
 * Containers are used to constrain a content's width to the current breakpoint.
 *
 * @param   {ContainerProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Container } from '@react-jopau/components';
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
  const breakpointMaxWidth = useMaxWidth(maxWidth);
  const spacing = useSpacing(gap);

  return (
    <StyledContainer
      className={classes('container', className)}
      css={{
        ...(gap && { padding: spacing }),
        maxWidth: `${breakpointMaxWidth}px !important`,
        ...style
      }}
      centered={centered}>
      {children}
    </StyledContainer>
  );
};

Container.defaultProps = defaultProps;
