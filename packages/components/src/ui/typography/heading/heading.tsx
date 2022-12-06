import { classes } from '../../../utils/system';
import type { ElementHTML, TextColor } from '../../../../types';
import { StyledHeading } from './heading.styled';

type HeadingProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Changes which tag component outputs
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Defines the color of the heading.
   */
  color?: TextColor;
} & Partial<typeof defaultProps>;

const defaultProps = {
  as: 'h1',
  color: 'inherit'
};

/**
 * Heading component is the used to render headings within an interface using well-defined typographic styles.
 *
 * @param   {HeadingProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Heading } from '@react-jopau/components/ui/typography';
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
