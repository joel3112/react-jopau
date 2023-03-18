import { classes } from '@react-jopau/utils';
import { prefixClass, useMaxWidth, useSpacing, withDefaults } from '@/components/shared';
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
export const Container = withDefaults<ContainerProps>((props: ContainerProps) => {
  const { className, children, style, gap, maxWidth, centered } = props;

  const breakpointMaxWidth = useMaxWidth(maxWidth);
  const [spacingX, spacingY] = useSpacing(gap);

  return (
    <StyledContainer
      className={classes(prefixClass + '-container', className)}
      css={{
        ...(gap && { padding: `${spacingX} ${spacingY}` }),
        maxWidth: `${breakpointMaxWidth}px !important`,
        ...style
      }}
      hasGap={!!gap}
      centered={centered}>
      {children}
    </StyledContainer>
  );
}, defaultProps);
