import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { defaultProps, TextProps } from './text-props';
import { StyledText } from './text.styled';

/**
 * Text component is the used to render text and paragraphs within an interface using well-defined typographic styles.
 *
 * @param   {TextProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Text } from '@react-jopau/components';
 * @example
 * <Text size="md" as="span">Content</Text>
 */
export const Text = withDefaults<TextProps>((props: TextProps) => {
  const { className, style, children, color, as, size, maxLines } = props;

  return (
    <StyledText
      as={as}
      className={classes(prefixClass + '-text', className)}
      css={{
        ...(maxLines && { lineClamp: maxLines }),
        ...style
      }}
      color={color}
      size={size}>
      {children}
    </StyledText>
  );
}, defaultProps);
