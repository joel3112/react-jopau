import { classes } from '@react-jopau/utils';
import { prefixClass } from '@/components/shared';
import { CollapseContext } from '../collapse-context';
import { StyledCollapseGroup } from '../collapse.styled';
import { CollapseGroupProps, defaultProps } from './collapse-group-props';

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
 *      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *    </Collapse>
 *    <Collapse title="Title 2">
 *      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *    </Collapse>
 * </CollapseGroup>
 */
export const CollapseGroup = ({
  className,
  style,
  children,
  accordion,
  divider,
  shadow,
  splitted,
  bordered,
  onChange
}: CollapseGroupProps) => {
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
};

CollapseGroup.defaultProps = defaultProps;
