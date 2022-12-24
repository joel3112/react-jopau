import { ComponentType } from 'react';
import { Switch as SwitchNextUI, SwitchProps as SwitchPropsNextUI } from '@nextui-org/react';
import { NextUIOverrideCSS } from '../../../utils/override';
import { SwitchProps } from './switch-props';
import { styledTheme } from '../../../index';

enum NextUIEl {
  SWITCH = '.nextui-switch',
  SWITCH_CIRCLE = '.nextui-switch-circle'
}

export const StyledSwitch = styledTheme(
  SwitchNextUI as ComponentType<Partial<Omit<SwitchPropsNextUI, keyof SwitchProps> & SwitchProps>>,
  {
    boxSizing: 'border-box',
    width: '$space$fit',

    [`${NextUIEl.SWITCH}--unchecked`]: { background: '$colors$border', opacity: 0.7 },
    [`${NextUIEl.SWITCH}--unchecked ${NextUIEl.SWITCH_CIRCLE}`]: {
      background: '$colors$background'
    },
    [`${NextUIEl.SWITCH}-checked`]: { background: '$$switchControlColor' },
    [`${NextUIEl.SWITCH}-checked:hover:not(${NextUIEl.SWITCH}-checked-true:active)`]: {
      background: '$$switchHoverControlColor'
    },
    [`${NextUIEl.SWITCH}--unchecked[class*="bordered-true"]`]: {
      borderColor: '$$switchControlColor'
    },
    [`${NextUIEl.SWITCH}-disabled`]: { opacity: '$opacity$40' },

    variants: {
      color: {
        primary: {
          $$switchControlColor: '$colors$primary500',
          $$switchHoverControlColor: '$colors$primary700'
        },
        secondary: {
          $$switchControlColor: '$colors$secondary500',
          $$switchHoverControlColor: '$colors$secondary700'
        },
        tertiary: {
          $$switchControlColor: '$colors$tertiary500',
          $$switchHoverControlColor: '$colors$tertiary700'
        },
        info: {
          $$switchControlColor: '$colors$blue500',
          $$switchHoverControlColor: '$colors$blue700'
        },
        success: {
          $$switchControlColor: '$colors$green500',
          $$switchHoverControlColor: '$colors$green700'
        },
        error: {
          $$switchControlColor: '$colors$red500',
          $$switchHoverControlColor: '$colors$red700'
        },
        warning: {
          $$switchControlColor: '$colors$yellow500',
          $$switchHoverControlColor: '$colors$yellow700'
        }
      }
    }
  },
  NextUIOverrideCSS
);
