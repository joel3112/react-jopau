import { ReactNode } from 'react';
import classes from 'classnames';
import ReactJson from 'react-json-view';

/**
 * Component custom tailwindcss classes
 */

/* ==== container ============================================================== */

export const TWContainer = ({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={classes('p-3 flex flex-col gap-6 w-3/5 bg-background', className)}>
      {children}
    </div>
  );
};

/* ==== item =================================================================== */

export const TWItem = ({
  children,
  label,
  column
}: {
  children: ReactNode;
  label: string;
  column?: boolean;
}) => {
  return (
    <div className={classes('flex gap-2', column ? 'flex-col' : 'flex-row')}>
      <TWHighlight>{`${label}:`}</TWHighlight>
      <div className="font-code flex items-center text-text">{children}</div>
    </div>
  );
};

/* ==== highlight ============================================================== */

export const TWHighlight = ({ children }: { children: string }) => {
  return (
    <div className="font-code text-black text-sm w-fit h-[22px] flex items-center px-1 rounded-md bg-[#ccc]">
      {children}
    </div>
  );
};

/* ==== text =================================================================== */

export const TWText = ({
  children,
  size = 'base',
  font = 'base'
}: {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  font?: 'base' | 'code';
}) => {
  return (
    <span className={`w-fit flex items-center text-text text-${size} font-${font}`}>
      {children}
    </span>
  );
};

/* ==== input ================================================================== */

export const TWInput = ({
  label,
  value,
  onInput
}: {
  label: string;
  value: string;
  onInput: (value: string) => void;
}) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-text text-sm font-medium">{label}</span>
      <input
        className="w-[400px] p-2 border border-border border-solid font-light bg-background text-text focus:border-gray-600 outline-none"
        value={value}
        onInput={(e) => onInput(e.currentTarget.value)}
      />
    </label>
  );
};

/* ==== button ================================================================= */

export const TWButton = ({
  children,
  disabled,
  onClick
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="text-white bg-secondary hover:opacity-80 py-3 px-4 w-fit text-md disabled:bg-border"
      disabled={disabled}
      onClick={() => {
        onClick();
      }}>
      {children}
    </button>
  );
};

/* ==== json-preview =========================================================== */

export const TWJSONPreview = ({ code }: { code: unknown }) => {
  if (!code) return <span className="flex items-center font-code text-text">null</span>;

  return (
    <div className="bg-[#272822] font-code p-5 mt-2 border border-border border-solid">
      <ReactJson
        style={{ backgroundColor: 'transparent', fontSize: '0.8rem' }}
        name={false}
        displayObjectSize={false}
        displayDataTypes={false}
        enableClipboard={false}
        src={code}
        theme="monokai"
        iconStyle="square"
      />
    </div>
  );
};
