import classes from 'classnames';
import type { ElementHTML, NormalSize, TextColor } from '../../../../types';
import { TextWrapper } from './text.styled';

export type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Defines the variant of the component.
   */
  variant?: 'p' | 'span';
  /**
   * Defines the color of the text.
   */
  color?: TextColor;
  /**
   * Defines the size of the component.
   */
  size?: NormalSize | '2xl' | '3xl';
  /**
   * Defines the line clamp of the component.
   */
  maxLines?: number;
} & Partial<typeof defaultProps>;

const defaultProps = {
  variant: 'p',
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
 * <Text size="md" variant="span">Content</Text>
 */
export const Text = ({ className, style, children, color, variant, size, maxLines }: TextProps) => {
  return (
    <TextWrapper
      as={variant}
      className={classes('text-wrapper', className)}
      css={{
        ...(maxLines && { lineClamp: maxLines }),
        ...style
      }}
      variant={variant}
      color={color}
      size={size}>
      {children}
    </TextWrapper>
  );
};

Text.defaultProps = defaultProps;
