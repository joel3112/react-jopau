import classes from 'classnames';
import { Color, ElementHTML } from '../../../../types';
import { HeadingWrapper } from './heading.styled';

type HeadingProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Defines the tag of the component.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Defines the color of the heading.
   */
  color?: Color;
} & typeof defaultProps;

const defaultProps = {
  as: 'h1',
  color: 'default'
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
  const Wrapper = HeadingWrapper[as];

  return (
    <Wrapper
      className={classes('heading-wrapper', className)}
      css={{
        ...style
      }}
      color={color}>
      {children}
    </Wrapper>
  );
};

Heading.defaultProps = defaultProps;
