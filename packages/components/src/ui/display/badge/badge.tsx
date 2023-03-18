import { isValidElement } from 'react';
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { BadgeProps, defaultProps } from './badge-props';
import { StyledBadge } from './badge.styled';

/**
 * Badges are used as a small numerical value or status descriptor for UI elements.
 *
 * @param   {BadgeProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Badge } from '@react-jopau/components';
 * @example
 * <Badge color="primary" size="md">new</Badge>
 */
export const Badge = withDefaults<BadgeProps>((props: BadgeProps) => {
  const {
    className,
    style,
    children,
    content,
    variant,
    size,
    color,
    shape,
    squared,
    horizontalOffset,
    verticalOffset,
    placement
  } = props;

  return (
    <StyledBadge
      className={classes(prefixClass + '-badge', className)}
      css={{
        ...style
      }}
      content={content}
      variant={variant}
      bordered={variant === 'bordered'}
      flat={variant === 'flat'}
      size={size}
      color={color}
      shape={shape}
      isSquared={squared}
      horizontalOffset={horizontalOffset}
      verticalOffset={verticalOffset}
      placement={placement}
      disableOutline
      contentIsReactElement={isValidElement(content)}>
      {children}
    </StyledBadge>
  );
}, defaultProps);
