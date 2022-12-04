import classes from 'classnames';
import type { ElementHTML, TextColor } from '../../../../types';
import { HeadingWrapper } from './heading.styled';

type HeadingProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Defines the variant of the component.
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Defines the color of the heading.
   */
  color?: TextColor;
} & Partial<typeof defaultProps>;

const defaultProps = {
  variant: 'h1',
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
 * <Heading variant="h2">Title</Heading>
 */
export const Heading = ({ className, style, children, variant, color }: HeadingProps) => {
  return (
    <HeadingWrapper
      as={variant}
      className={classes('heading-wrapper', className)}
      css={{
        ...style
      }}
      variant={variant}
      color={color}>
      {children}
    </HeadingWrapper>
  );
};

Heading.defaultProps = defaultProps;
