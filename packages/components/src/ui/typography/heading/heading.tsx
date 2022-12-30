import { classes } from '../../../utils/system';
import { defaultProps, HeadingProps } from './heading-props';
import { StyledHeading } from './heading.styled';

/**
 * Heading component is the used to render headings within an interface using well-defined typographic styles.
 *
 * @param   {HeadingProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Heading } from '@react-jopau/components/ui';
 * @example
 * <Heading as="h2">Title</Heading>
 */
export const Heading = ({ className, style, children, as, color }: HeadingProps) => {
  return (
    <StyledHeading
      as={as}
      className={classes('heading', className)}
      css={{
        ...style
      }}
      color={color}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = defaultProps;
