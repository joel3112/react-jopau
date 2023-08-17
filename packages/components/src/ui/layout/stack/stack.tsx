import { classes } from '@react-jopau/utils';
import { computedFlexPosition, prefixClass, useSpacing, withDefaults } from '@/components/shared';
import { StackProps, defaultProps } from './stack.props';
import { StyledStack } from './stack.styled';

/**
 * Stack is a layout component used to group elements together and apply a space between them.
 *
 * @param   {StackProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Stack } from '@react-jopau/components';
 * @example
 * <Stack direction="column" gap={2}>
 *    <div>Item 1</div>
 *    <div>Item 2</div>
 *    <div>Item 3</div>
 * </Stack>
 */
export const Stack = withDefaults<StackProps>((props: StackProps) => {
  const { className, style, children, as, direction, gap, justify, align } = props;

  const [gapUnit] = useSpacing(gap);

  return (
    <StyledStack
      as={as}
      className={classes(prefixClass + '-stack', className)}
      css={{
        flexDirection: direction,
        gap: `${gapUnit}`,
        ...(justify && { justifyContent: computedFlexPosition(justify) }),
        ...(align && { alignItems: computedFlexPosition(align) }),
        ...style
      }}>
      {children}
    </StyledStack>
  );
}, defaultProps);
