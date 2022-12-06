import { classes } from '../../../utils/system';
import type { ElementHTML, NormalSize, TextColor } from '../../../../types';
import { StyledText } from './text.styled';

export type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Changes which tag component outputs
   */
  as?: 'p' | 'span';
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
  return (
    <StyledText
      as={as}
      className={classes('text', className)}
      css={{
        ...(maxLines && { lineClamp: maxLines }),
        ...style
      }}
      color={color}
      size={size}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = defaultProps;
