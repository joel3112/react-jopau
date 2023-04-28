import { CSSProperties, useContext, useMemo } from 'react';
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { GridContext } from '../grid-context';
import { GridItemProps, defaultProps } from './grid-item.props';
import { StyleGridItem } from '../grid.styled';

/**
 * The layout Grid item adapts to screen size and orientation, ensuring consistency across layouts.
 *
 * @param   {GridItemProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Grid } from '@react-jopau/components';
 * @example
 * <Grid.Item>1 of 2</Grid.Item>
 */
export const GridItem = withDefaults<GridItemProps>((props: GridItemProps) => {
  const { className, style, children, as, xs, sm, md, lg, xl } = props;

  const { columns } = useContext(GridContext);

  const breakClasses = useMemo(() => {
    const breaks: { [key: string]: unknown } = {
      xs,
      sm,
      md,
      lg,
      xl
    };
    const classString = Object.keys(breaks).reduce((pre, name) => {
      if (breaks[name] !== undefined && breaks[name] !== false) return `${pre} ${name}`;

      return pre;
    }, '');

    return classString.trim();
  }, [xs, sm, md, lg, xl]);

  const getItemLayout = (val?: number | boolean): CSSProperties => {
    const display = val === 0 ? 'none' : 'inherit';

    if (typeof val === 'number') {
      const width = (100 / (columns || 12)) * val;
      const ratio = width > 100 ? '100%' : width < 0 ? '0' : `${width}%`;

      return { flexGrow: 0, display, maxWidth: ratio, flexBasis: ratio };
    }

    return { flexGrow: 1, display, maxWidth: '100%', flexBasis: '0' };
  };

  return (
    <StyleGridItem
      as={as}
      className={classes(prefixClass + '-grid-item', breakClasses, className)}
      css={{
        '&.xs': { ...getItemLayout(xs) },
        '@xl': {
          '&.xl': { ...getItemLayout(xl) }
        },
        '@lg': {
          '&.lg': { ...getItemLayout(lg) }
        },
        '@md': {
          '&.md': { ...getItemLayout(md) }
        },
        '@sm': {
          '&.sm': { ...getItemLayout(sm) }
        },
        '@xs': {
          '&.xs': { ...getItemLayout(xs) }
        },
        ...style
      }}>
      {children}
    </StyleGridItem>
  );
}, defaultProps);
