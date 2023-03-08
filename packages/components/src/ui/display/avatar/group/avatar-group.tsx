import { classes } from '@react-jopau/utils';
import { prefixClass } from '@/components/shared';
import { AvatarGroupProps, defaultProps } from './avatar-group-props';
import { StyledAvatarGroup } from '../avatar.styled';

/**
 * If you need to make a group of avatars you can use the compound component Avatar.Group and inside the avatars you want to group.
 *
 * @param   {AvatarGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { AvatarGroup } from '@react-jopau/components';
 * @example
 * <AvatarGroup>
 *    <Avatar>Jun</Avatar>
 *    <Avatar>Jane</Avatar>
 *    <Avatar>John</Avatar>
 *    <Avatar>JR</Avatar>
 * </AvatarGroup>
 */
export const AvatarGroup = ({ className, style, children, count, animated }: AvatarGroupProps) => {
  return (
    <StyledAvatarGroup
      className={classes(prefixClass + '-avatar-group', className)}
      css={{
        ...style
      }}
      count={count}
      animated={!!animated}>
      {children}
    </StyledAvatarGroup>
  );
};

AvatarGroup.defaultProps = defaultProps;
