import { ComponentType } from 'react';
import { Badge as BadgeNextUI, BadgeProps as BadgePropsNextUI } from '@nextui-org/react';
import { styledTheme } from '@/components/shared';
import { BadgeProps } from './badge.props';

enum NextUIEl {
  BADGE = '.nextui-badge'
}

const colorTokens = (color: NonNullable<BadgeProps['color']>) => {
  return {
    default: {
      $$badgeBackgroundColor: '$colors$border',
      $$badgeFlatBackgroundColor: '$colors$accent1',
      $$badgeColor: '$colors$text',
      $$badgeFlatColor: '$colors$placeholder'
    },
    primary: {
      $$badgeBackgroundColor: '$colors$primary500',
      $$badgeFlatBackgroundColor: '$colors$primary100',
      $$badgeColor: '$colors$primaryText',
      $$badgeFlatColor: '$colors$primary600'
    },
    secondary: {
      $$badgeBackgroundColor: '$colors$secondary500',
      $$badgeFlatBackgroundColor: '$colors$secondary100',
      $$badgeColor: '$colors$secondaryText',
      $$badgeFlatColor: '$colors$secondary600'
    },
    tertiary: {
      $$badgeBackgroundColor: '$colors$tertiary500',
      $$badgeFlatBackgroundColor: '$colors$tertiary100',
      $$badgeColor: '$colors$tertiaryText',
      $$badgeFlatColor: '$colors$tertiary600'
    },
    success: {
      $$badgeBackgroundColor: '$colors$green500',
      $$badgeFlatBackgroundColor: '$colors$green100',
      $$badgeColor: '$colors$white',
      $$badgeFlatColor: '$colors$green600'
    },
    warning: {
      $$badgeBackgroundColor: '$colors$yellow500',
      $$badgeFlatBackgroundColor: '$colors$yellow100',
      $$badgeColor: '$colors$white',
      $$badgeFlatColor: '$colors$yellow600'
    },
    error: {
      $$badgeBackgroundColor: '$colors$red500',
      $$badgeFlatBackgroundColor: '$colors$red100',
      $$badgeColor: '$colors$white',
      $$badgeFlatColor: '$colors$red600'
    },
    info: {
      $$badgeBackgroundColor: '$colors$blue500',
      $$badgeFlatBackgroundColor: '$colors$blue100',
      $$badgeColor: '$colors$white',
      $$badgeFlatColor: '$colors$blue600'
    }
  }[color];
};

export const StyledBadge = styledTheme(
  BadgeNextUI as ComponentType<Omit<BadgePropsNextUI, keyof BadgeProps> & BadgeProps>,
  {
    boxSizing: 'border-box',
    display: 'block',
    width: '$space$fit',

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
          [NextUIEl.BADGE]: {
            backgroundColor: '$colors$background',
            color: '$$badgeBackgroundColor',
            borderColor: '$$badgeBackgroundColor'
          }
        },
        false: {
          [NextUIEl.BADGE]: {
            backgroundColor: '$$badgeBackgroundColor',
            color: '$$badgeColor'
          }
        }
      },
      flat: {
        true: {
          [NextUIEl.BADGE]: {
            backgroundColor: '$$badgeFlatBackgroundColor',
            color: '$$badgeFlatColor'
          }
        }
      },
      contentIsReactElement: {
        true: {
          [NextUIEl.BADGE]: { p: '$space$0' }
        }
      }
    }
  }
);
