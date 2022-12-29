import {
  StyledSwitch as StyledSwitchNextUI,
  StyledSwitchCircle as StyledSwitchCircleNextUI,
  StyledSwitchContainer as StyledSwitchContainerNextUI,
  StyledSwitchInput as StyledSwitchInputNextUI
} from '@nextui-org/react';
import { NextUIOverrideCSS } from '../../../utils/override';
import { styledTheme } from '../../../index';

enum NextUIEl {
  SWITCH = '.nextui-switch',
  SWITCH_CIRCLE = '.nextui-switch-circle'
}

export const StyledSwitchWrapper = styledTheme(
  StyledSwitchContainerNextUI,
  {
    '&[class*="size"]': {
      display: 'inline-flex',
      userSelect: 'none',
      alignItems: 'center',
      p: 0,
      maxWidth: 'initial',
      width: '$space$fit'
    },
    [`${NextUIEl.SWITCH}`]: { minWidth: '$$switchControlWidth' },
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

    '--nextui--switchWidth': '$$switchControlWidth',
    '--nextui--switchHeight': '$$switchControlHeight',
    '--nextui--switchBorderW': '$borderWidths$normal',

    variants: {
      size: {
        xs: {
          $$switchLabelFontSize: '$space$7',
          $$switchControlWidth: '$space$12',
          $$switchControlHeight: '$space$9'
        },
        sm: {
          $$switchLabelFontSize: '$space$8',
          $$switchControlWidth: '$space$14',
          $$switchControlHeight: '$space$10'
        },
        md: {
          $$switchLabelFontSize: '$space$9',
          $$switchControlWidth: '$space$15',
          $$switchControlHeight: '$space$11'
        },
        lg: {
          $$switchLabelFontSize: '$space$10',
          $$switchControlWidth: '$space$17',
          $$switchControlHeight: '$space$12'
        },
        xl: {
          $$switchLabelFontSize: '$space$11',
          $$switchControlWidth: '$space$18',
          $$switchControlHeight: '$space$13'
        }
      },
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
      },
      status: {
        default: {
          $$switchControlColor: '$colors$primary500',
          $$switchHoverControlColor: '$colors$primary700',
          $$switchLabelColor: '$colors$text'
        },
        primary: {
          $$switchControlColor: '$colors$primary500',
          $$switchHoverControlColor: '$colors$primary700',
          $$switchLabelColor: '$colors$primary500'
        },
        secondary: {
          $$switchControlColor: '$colors$secondary500',
          $$switchHoverControlColor: '$colors$secondary700',
          $$switchLabelColor: '$colors$secondary500'
        },
        tertiary: {
          $$switchControlColor: '$colors$tertiary500',
          $$switchHoverControlColor: '$colors$tertiary700',
          $$switchLabelColor: '$colors$tertiary500'
        },
        info: {
          $$switchControlColor: '$colors$blue500',
          $$switchHoverControlColor: '$colors$blue700',
          $$switchLabelColor: '$colors$blue500'
        },
        success: {
          $$switchControlColor: '$colors$green500',
          $$switchHoverControlColor: '$colors$green700',
          $$switchLabelColor: '$colors$green500'
        },
        error: {
          $$switchControlColor: '$colors$red500',
          $$switchHoverControlColor: '$colors$red700',
          $$switchLabelColor: '$colors$red500'
        },
        warning: {
          $$switchControlColor: '$colors$yellow500',
          $$switchHoverControlColor: '$colors$yellow700',
          $$switchLabelColor: '$colors$yellow500'
        }
      },
      bordered: {
        true: {
          [`${NextUIEl.SWITCH}-checked`]: { borderColor: 'transparent' }
        }
      },
      checked: {
        true: {
          '&:hover': {
            [`${NextUIEl.SWITCH}`]: { background: '$$switchHoverControlColor' }
          }
        }
      }
    }
  },
  NextUIOverrideCSS
);

export const StyledSwitchInput = StyledSwitchInputNextUI;

export const StyledSwitch = StyledSwitchNextUI;

export const StyledSwitchLabel = styledTheme('label', {
  cursor: 'pointer',
  whiteSpace: 'normal',
  fontSize: '$$switchLabelFontSize',
  pl: 'calc($$switchLabelFontSize * 0.57)',
  color: '$$switchLabelColor'
});

export const StyledSwitchCircle = StyledSwitchCircleNextUI;
