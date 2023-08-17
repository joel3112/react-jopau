import { useEffect, useState } from 'react';
import { classes } from '@react-jopau/utils';
import { prefixClass, useBreakpointValue, withCompoundComponents } from '@/components/shared';
import { AvatarGroup } from './group/avatar-group';
import { AvatarProps, defaultProps } from './avatar.props';
import { StyledAvatar, StyledAvatarIcon } from './avatar.styled';

/**
 * The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.
 *
 * @param   {AvatarProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Avatar } from '@react-jopau/components';
 * @example
 * <Avatar size="xl" src="https://via.placeholder.com/150" />
 */
export const Avatar = withCompoundComponents<AvatarProps, { Group: typeof AvatarGroup }>(
  (props: AvatarProps) => {
    const {
      className,
      style,
      children,
      size,
      color,
      src,
      icon,
      squared,
      bordered,
      zoomed,
      pointer
    } = props;

    const [numberSize, setNumberSize] = useState<number>(0);
    const breakpointValue = useBreakpointValue<number>(typeof size === 'object' ? size : {});

    useEffect(() => {
      if (typeof size === 'number') {
        setNumberSize(size);
        return;
      }
      if (typeof size === 'object') {
        breakpointValue && setNumberSize(breakpointValue);
      }
    }, [size, breakpointValue]);

    return (
      <StyledAvatar
        className={classes(prefixClass + '-avatar', className)}
        css={{
          ...style,
          ...(numberSize && {
            size: numberSize,
            minWidth: numberSize
          })
        }}
        text={children}
        {...(size && !numberSize && { size })}
        color={color}
        {...(!children && { src })}
        {...(!children && { icon: <StyledAvatarIcon>{icon}</StyledAvatarIcon> })}
        squared={squared}
        zoomed={zoomed}
        bordered={!!bordered}
        pointer={pointer}
        hasImage={children ? false : !!src}
        hasNumberSize={!!numberSize}
      />
    );
  },
  defaultProps,
  { Group: AvatarGroup }
);
