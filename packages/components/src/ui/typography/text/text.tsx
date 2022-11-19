import classes from 'classnames';
import { Color, ElementHTML } from '../../../../types';
import { TextWrapper } from './text.styled';

type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Defines the tag of the component.
   */
  as?: 'p' | 'span';
  /**
   * Defines the color of the text.
   */
  color?: 'inherit' | Color;
  /**
   * Defines the size of the component.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * Defines the line clamp of the component.
   */
  maxLines?: number;
} & typeof defaultProps;

const defaultProps = {
  as: 'p',
  color: 'inherit',
  size: 'md'
};

/**
 * Text component is the used to render text and paragraphs within an interface using well-defined typographic styles.
 *
 * @param   {TextProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Text } from '@react-jopau/components/ui/typography';
 * @example
 * <Text size="md" as="span">Content</Text>
 */
export const Text = ({ className, style, children, color, as, size, maxLines }: TextProps) => {
  const Wrapper = TextWrapper[as];

  return (
    <Wrapper
      className={classes('text-wrapper', className)}
      css={{
        ...style,
        ...(maxLines && { lineClamp: maxLines })
      }}
      color={color}
      size={size}>
      {children}
    </Wrapper>
  );
};

Text.defaultProps = defaultProps;
