import { ReactNode, useState } from 'react';
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
    <div className="font-code text-black text-sm w-fit h-[21px] flex items-center px-2 rounded-[5px] bg-[#ccc]">
      {children}
    </div>
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

/* ==== selector-button ======================================================== */

export const TWSelectorContainer = ({
  label,
  items,
  value,
  children
}: {
  label: string;
  items: { label: string; value: string }[];
  value: string;
  children: (value: never) => ReactNode;
}) => {
  const [selected, setSelected] = useState<string>(value);

  return (
    <>
      <div className="pl-10 absolute top-4 left-4 right-4 pr-[17px] border border-gray-800 flex items-center gap-10 h-[44px] bg-white font-bold text-[13px]">
        <p className="text-black">{label}:</p>
        <div className="h-full flex">
          {items.map((item) => (
            <button
              key={item.value}
              className={classes('px-8 font-bold text-center text-gray-700 border-0 border-solid', {
                '!border-t-2 !border-b-2 !border-t-white !border-b-secondary !text-secondary':
                  selected === item.value
              })}
              onClick={() => setSelected(item.value as never)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-15">{children(selected as never)}</div>
    </>
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
