import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { CollapseContext } from '../collapse-context';
import { StyledCollapseGroup } from '../collapse.styled';
import { CollapseGroupProps, defaultProps } from './collapse-group.props';

/**
 * Group of collapse components that can be expanded/collapsed to reveal more information.
 *
 * @param   {CollapseGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { CollapseGroup } from '@react-jopau/components';
 * @example
 * <CollapseGroup divider>
 *    <Collapse title="Title 1">
 *      lorem ipsum dolor sit amet, consectetur adipiscing elit
 *    </Collapse>
 *    <Collapse title="Title 2">
 *      lorem ipsum dolor sit amet, consectetur adipiscing elit
 *    </Collapse>
 * </CollapseGroup>
 */
export const CollapseGroup = withDefaults<CollapseGroupProps>((props: CollapseGroupProps) => {
  const { className, style, children, accordion, divider, shadow, splitted, bordered, onChange } =
    props;

  return (
    <CollapseContext.Provider value={{ divider: !!divider, shadow: splitted }}>
      <StyledCollapseGroup
        className={classes(prefixClass + '-collapse-group', className)}
        css={{
          ...style
        }}
        accordion={accordion}
        divider={divider}
        shadow={shadow}
        splitted={splitted}
        bordered={bordered}
        onChange={onChange}>
        {children}
      </StyledCollapseGroup>
    </CollapseContext.Provider>
  );
}, defaultProps);
