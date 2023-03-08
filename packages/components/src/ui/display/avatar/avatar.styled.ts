import { ComponentType } from 'react';
import {
  Avatar as AvatarNextUI,
  AvatarGroupProps as AvatarGroupPropsNextUI,
  AvatarProps as AvatarPropsNextUI
} from '@nextui-org/react';
import { styledTheme } from '@/components/shared';
import { AvatarProps } from './avatar-props';

enum NextUIEl {
  BACKGROUND = '.nextui-avatar-bg',
  IMAGE = '.nextui-avatar-img',
  TEXT = '.nextui-avatar-text'
}

const colorTokens = (color: NonNullable<AvatarProps['color']>) => {
  return {
    default: {
      $$avatarBackgroundColor: '$colors$input',
      $$avatarColor: '$colors$text'
    },
    primary: {
      $$avatarBackgroundColor: '$colors$primary500',
      $$avatarColor: '$colors$primaryText'
    },
    secondary: {
      $$avatarBackgroundColor: '$colors$secondary500',
      $$avatarColor: '$colors$secondaryText'
    },
    tertiary: {
      $$avatarBackgroundColor: '$colors$tertiary500',
      $$avatarColor: '$colors$tertiaryText'
    },
    success: { $$avatarBackgroundColor: '$colors$green500', $$avatarColor: '$colors$white' },
    warning: { $$avatarBackgroundColor: '$colors$yellow500', $$avatarColor: '$colors$white' },
    error: { $$avatarBackgroundColor: '$colors$red500', $$avatarColor: '$colors$white' },
    info: { $$avatarBackgroundColor: '$colors$blue500', $$avatarColor: '$colors$white' }
  }[color];
};

export const StyledAvatarGroup = styledTheme(
  AvatarNextUI.Group as ComponentType<AvatarGroupPropsNextUI>,
  {
    '.nextui-avatar-group-count': {
      color: '$colors$text'
    }
  }
);

export const StyledAvatarIcon = styledTheme('div', {
  boxSizing: 'border-box',
  color: '$$avatarColor'
});

export const StyledAvatar = styledTheme(
  AvatarNextUI as ComponentType<Omit<AvatarPropsNextUI, keyof AvatarProps> & AvatarProps>,
  {
    boxSizing: 'border-box',
    display: 'block',
    padding: '$$avatarBorderWidth',

    [`${NextUIEl.BACKGROUND}`]: {
      backgroundColor: '$$avatarBackgroundColor',
      zIndex: '$zIndices$hide'
    },
    [`${NextUIEl.IMAGE}`]: {
      borderWidth: '$$avatarBorderWidth',
      borderColor: '$$avatarBorderColor'
    },
    [`${NextUIEl.TEXT}`]: { color: '$$avatarColor', fontSize: '$$avatarFontSize' },

    variants: {
      color: {
        default: colorTokens('default'),
        primary: colorTokens('primary'),
        secondary: colorTokens('secondary'),
        tertiary: colorTokens('tertiary'),
        success: colorTokens('success'),
        warning: colorTokens('warning'),
        error: colorTokens('error'),
        info: colorTokens('info')
      },
      bordered: {
        true: {
          $$avatarBorderWidth: '$borderWidths$normal',
          $$avatarBorderColor: '$colors$background'
        },
        false: { $$avatarBorderWidth: 0 }
      },
      hasNumberSize: {
        true: { $$avatarFontSize: 'inherit' }
      },
      hasImage: { false: {} }
    },

    compoundVariants: [
      {
        bordered: false,
        hasImage: true,
        css: {
          $$avatarBackgroundColor: 'transparent'
        }
      }
    ]
  }
);
