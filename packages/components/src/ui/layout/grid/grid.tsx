import { classes } from '@react-jopau/utils';
import {
  computedFlexPosition,
  prefixClass,
  useSpacing,
  withCompoundComponents
} from '@/components/shared';
import { GridContext } from './grid-context';
import { GridItem } from './item/grid-item';
import { defaultProps, GridProps } from './grid-props';
import { StyledGrid } from './grid.styled';

/**
 * The layout Grid adapts to screen size and orientation, ensuring consistency across layouts.
 *
 * @param   {GridProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Grid } from '@react-jopau/components';
 * @example
 * <Grid gap={2}>
 *    <Grid.Item>1 of 2</Grid.Item>
 *    <Grid.Item>2 of 2</Grid.Item>
 * </Grid>
 */
export const Grid = withCompoundComponents<GridProps, { Item: typeof GridItem }>(
  (props: GridProps) => {
    const { className, style, children, as, gap, wrap, direction, justify, align, columns } = props;

    const [gapUnitX, gapUnitY] = useSpacing(gap);

    return (
      <GridContext.Provider value={{ columns }}>
        <StyledGrid
          as={as}
          className={classes(prefixClass + '-grid', className)}
          css={{
            flexDirection: direction,
            flexWrap: wrap,
            $$gridGapUnitX: gapUnitX,
            $$gridGapUnitY: gapUnitY,
            margin: 'calc(-1 * $$gridGapUnitY) calc(-1 * $$gridGapUnitX)',
            width: 'calc(100% + $$gridGapUnitX * 2)',
            ...(justify && { justifyContent: computedFlexPosition(justify) }),
            ...(align && { alignItems: computedFlexPosition(align) }),
            ...style
          }}>
          {children}
        </StyledGrid>
      </GridContext.Provider>
    );
  },
  defaultProps,
  { Item: GridItem }
);
