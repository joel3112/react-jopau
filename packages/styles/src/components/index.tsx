import { ReactNode } from 'react';
import classes from 'classnames';
import ReactJson from 'react-json-view';

/**
 * Component custom tailwindcss classes
 */

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

export const TWHighlight = ({ children }: { children: string }) => {
  return (
    <div className="font-code text-black text-sm w-fit h-[22px] flex items-center px-1 rounded-md bg-[#ccc]">
      {children}
    </div>
  );
};

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

export const TWInput = ({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-text text-sm font-medium">{label}</span>
      <input
        className="w-[400px] p-2 border border-border border-solid font-light bg-background text-text focus:border-gray-dark outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

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

/**
 * Component story mdx
 */

export const SBTitle = ({ children }: { children: string }) => {
  return <h1 className="text-2xl border-0 font-bold mb-5">{children}</h1>;
};

export const SBDescription = ({
  children,
  className,
  tag
}: {
  children: string;
  className?: string;
  tag?: 'span' | 'p';
}) => {
  const Tag = tag || 'p';

  return <Tag className={classes('text-base font-light', className)}>{children}</Tag>;
};

export const SBSubTitle = ({ children }: { children: string }) => {
  return (
    <h4 className="text-xl font-semibold underline decoration-4 underline-offset-8">{children}</h4>
  );
};

export const SBDemo = ({ children }: { children: ReactNode }) => {
  return <div className="text-text border rounded p-3 mb-4 bg-background">{children}</div>;
};
