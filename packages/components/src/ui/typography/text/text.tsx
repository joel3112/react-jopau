import classes from 'classnames';
import { ElementHTML } from '../../../../types';
import { TextWrapper } from './text.styled';

type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Defines the tag of the component.
   */
  tag?: 'p' | 'span';
  /**
   * Defines the variant color of the component.
   */
  variant?: 'default' | 'primary' | 'secondary' | 'disabled' | 'error' | 'success' | 'warning';
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
  variant: 'default',
  tag: 'p',
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
 * <Text size="md" tag="span">Content</Text>
 */
export const Text = ({ className, style, children, variant, tag, size, maxLines }: TextProps) => {
  const Wrapper = TextWrapper[tag];

  return (
    <Wrapper
      className={classes('text-wrapper', className)}
      css={{
        ...style,
        lineClamp: maxLines
      }}
      variant={variant}
      size={size}>
      {children}
    </Wrapper>
  );
};

Text.defaultProps = defaultProps;
