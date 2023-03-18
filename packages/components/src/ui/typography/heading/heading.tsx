import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { defaultProps, HeadingProps } from './heading-props';
import { StyledHeading } from './heading.styled';

/**
 * Heading component is the used to render headings within an interface using well-defined typographic styles.
 *
 * @param   {HeadingProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Heading } from '@react-jopau/components';
 * @example
 * <Heading as="h2">Title</Heading>
 */
export const Heading = withDefaults<HeadingProps>((props: HeadingProps) => {
  const { className, style, children, as, color } = props;

  return (
    <StyledHeading
      as={as}
      className={classes(prefixClass + '-heading', className)}
      css={{
        ...style
      }}
      color={color}>
      {children}
    </StyledHeading>
  );
}, defaultProps);
