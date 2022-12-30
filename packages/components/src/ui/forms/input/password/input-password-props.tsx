import { ReactNode } from 'react';
import { InputProps } from '../input-props';

const PasswordIcon = ({ visible }: { visible: boolean }) => {
  return (
    <svg
      className="nextui-input-password-icon"
      fill="none"
      height="16"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      style={{ color: 'currentColor' }}
      viewBox="0 0 24 24"
      width="16">
      {!visible ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
          <path d="M1 1l22 22" />
        </>
      )}
    </svg>
  );
};

export type InputPasswordProps = Omit<InputProps, 'type' | 'icon' | 'iconPosition'> & {
  /**
   * Defines if the toggle icon is visible.
   */
  hideToggle?: boolean;
  /**
   * Custom icon for the visible password.
   * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
   */
  visibleIcon?: ReactNode;
  /**
   * Custom icon for the hidden password.
   * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
   */
  hiddenIcon?: ReactNode;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  size: 'md',
  variant: 'default',
  color: 'default',
  status: 'default',
  autoComplete: 'off',
  visibleIcon: (<PasswordIcon visible />) as ReactNode,
  hiddenIcon: (<PasswordIcon visible={false} />) as ReactNode
};
