import { classes } from '@react-jopau/shared/utils';
import { defaultProps, TextProps } from './text-props';
import { StyledText } from './text.styled';

/**
 * Text component is the used to render text and paragraphs within an interface using well-defined typographic styles.
 *
 * @param   {TextProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Text } from '@react-jopau/components/ui';
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
