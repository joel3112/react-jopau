import { ComponentType } from 'react';
import {
  Collapse as CollapseNextUI,
  CollapseGroupProps as CollapseGroupPropsNextUI,
  CollapseProps as CollapsePropsNextUI
} from '@nextui-org/react';
import { styledTheme } from '@/components/shared';
import { CollapseGroupProps } from './group/collapse-group.props';
import { CollapseProps } from './collapse.props';

enum NextUIEl {
  COLLAPSE = '.nextui-collapse',
  TITLE = '.nextui-collapse-title',
  CONTENT_RIGHT = '.nextui-collapse-title-content-right'
}

export const StyledCollapseGroup = styledTheme(
  CollapseNextUI.Group as ComponentType<
    Partial<Omit<CollapseGroupPropsNextUI, keyof CollapseGroupProps> & CollapseGroupProps>
  >,
  {
    [`&[class*="bordered-true"]`]: { borderColor: '$colors$border' },
    [`&[class*="shadow-true"]`]: { background: '$colors$backgroundContrast' }
  }
);

export const StyledCollapse = styledTheme(
  CollapseNextUI as ComponentType<
    Partial<Omit<CollapsePropsNextUI, keyof CollapseProps> & CollapseProps>
  >,
  {
    boxSizing: 'border-box',
    display: 'block',

    [`&[class*="bordered-true"]`]: { borderColor: '$colors$border' },
    [`&[class*="divider-true"]`]: { borderColor: '$colors$border' },
    [`&[class*="shadow-true"]`]: { background: '$colors$backgroundContrast' },
    [NextUIEl.TITLE]: { color: '$colors$text' },

    variants: {
      disableArrowAnimation: {
        true: {
          [`${NextUIEl.CONTENT_RIGHT} svg`]: {
            transform: 'none !important'
          }
        }
      }
    }
  }
);
