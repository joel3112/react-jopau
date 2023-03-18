import { useContext } from 'react';
import { classes, numberId } from '@react-jopau/utils';
import { cleanedProps, prefixClass, withCompoundComponents } from '@/components/shared';
import { CollapseContext } from './collapse-context';
import { CollapseGroup } from './group/collapse-group';
import { CollapseProps, defaultProps } from './collapse-props';
import { StyledCollapse } from './collapse.styled';

/**
 * Collapse display a list of high-level options that can expand/collapse to reveal more information.
 *
 * @param   {CollapseProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Collapse } from '@react-jopau/components';
 * @example
 * <Collapse title="Title">
 *    lorem ipsum dolor sit amet, consectetur adipiscing elit
 * </Collapse>
 */
export const Collapse = withCompoundComponents<CollapseProps, { Group: typeof CollapseGroup }>(
  (props: CollapseProps) => {
    const {
      className,
      style,
      children,
      title,
      subtitle,
      arrowIcon,
      contentLeft,
      hideArrow,
      disabled,
      expanded,
      index,
      disableArrowAnimation,
      bordered,
      onChange
    } = props;
    const contextProps = useContext(CollapseContext);

    const { divider, shadow } = {
      ...props,
      ...cleanedProps(contextProps)
    };

    return (
      <StyledCollapse
        className={classes(prefixClass + '-collapse', className)}
        css={{
          ...style
        }}
        title={title}
        subtitle={subtitle}
        arrowIcon={arrowIcon}
        divider={!!divider}
        shadow={shadow}
        contentLeft={contentLeft}
        showArrow={!hideArrow}
        disabled={disabled}
        expanded={expanded}
        bordered={!!bordered}
        index={index || numberId()}
        disableArrowAnimation={disableArrowAnimation}
        onChange={onChange}>
        {children}
      </StyledCollapse>
    );
  },
  defaultProps,
  { Group: CollapseGroup }
);
