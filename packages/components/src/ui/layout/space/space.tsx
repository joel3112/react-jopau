import { classes } from '../../../utils/system';
import { defaultProps, SpaceProps } from './space-props';
import { StyledSpace } from './space.styled';

const spacing = (gap?: number | Array<number>): string =>
  gap
    ? [gap]
        .flat()
        .map((s: number) => `${s}px`)
        .join(' ')
    : '';

/**
 * Component flexbox-based spacing.
 *
 * @param   {SpaceProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Space } from '@react-jopau/components/ui';
 * @example
 * <Space direction="row" align="center" justify="center" gap={10}>
 *    <div>Item 1</div>
 *    <div>Item 2</div>
 * </Space>
 */
export const Space = ({
  className,
  style,
  children,
  as,
  direction,
  wrap,
  gap,
  justify,
  align
}: SpaceProps) => {
  return (
    <StyledSpace
      as={as}
      className={classes('space', className)}
      css={{
        flexDirection: direction,
        gap: spacing(gap),
        ...style
      }}
      justify={justify}
      align={align}
      wrap={wrap}>
      {children}
    </StyledSpace>
  );
};

Space.defaultProps = defaultProps;
