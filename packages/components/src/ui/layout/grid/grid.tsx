import { ForwardRefExoticComponent, useCallback } from 'react';
import { classes } from '@react-jopau/utils';
import { useSpacing } from '@/components/shared';
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
export const Grid = (({
  className,
  style,
  children,
  as,
  gap,
  wrap,
  direction,
  justify,
  align,
  columns
}: GridProps) => {
  const [gapUnitX, gapUnitY] = useSpacing(gap);

  const computePosition = useCallback((key: string): never => {
    return ({
      start: 'flex-start',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly'
    }[key] || key) as never;
  }, []);

  return (
    <GridContext.Provider value={{ columns }}>
      <StyledGrid
        as={as}
        className={classes('rjopau-grid', className)}
        css={{
          display: 'flex',
          flexDirection: direction,
          ...(justify && { justifyContent: computePosition(justify) }),
          ...(align && { alignItems: computePosition(align) }),
          flexWrap: wrap,
          $$gridGapUnitX: gapUnitX,
          $$gridGapUnitY: gapUnitY,
          boxSizing: 'border-box',
          margin: 'calc(-1 * $$gridGapUnitY) calc(-1 * $$gridGapUnitX)',
          width: 'calc(100% + $$gridGapUnitX * 2)',
          ...style
        }}>
        {children}
      </StyledGrid>
    </GridContext.Provider>
  );
}) as ForwardRefExoticComponent<GridProps & Partial<typeof defaultProps>> & {
  Item: typeof GridItem;
};

Grid.defaultProps = defaultProps as Partial<GridProps>;
Grid.Item = GridItem;
