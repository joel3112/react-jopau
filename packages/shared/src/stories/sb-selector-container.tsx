import { ReactNode, useMemo, useState } from 'react';
import { uniqueId, toKebabCase } from '@react-jopau/utils';

type SelectorItem = { label: string; value: string };

export const SBSelectorContainer = ({
  label,
  items,
  value,
  children
}: {
  label: string[];
  items: SelectorItem[][];
  value: string[];
  children: (value: never[]) => ReactNode;
}) => {
  const [selected, setSelected] = useState<SelectorItem[]>(
    items.map((item, index) => item.find((i) => i.value === value[index]) || item[0])
  );
  const names = useMemo(() => label.map((name) => `${toKebabCase(name)}-${uniqueId()}`), [label]);

  return (
    <>
      <div
        className="border-b px-6 py-6 font-bold border-b-border bg-background-contrast text-[13px]"
        style={{
          margin: '-30px -20px',
          width: 'calc(100% + 40px)',
          marginBottom: '20px'
        }}>
        {items.map((innerItems, index) => (
          <form className="flex flex-wrap gap-2" key={index}>
            <label className="font-semibold text-gray-700 flex-[0_0_100%]">{label[index]}</label>
            {innerItems.map((item) => (
              <label
                key={item.value}
                className="mr-10 flex cursor-pointer items-center font-semibold">
                <input
                  className="mr-2 appearance-none text-secondary checked:bg-secondary"
                  style={{ boxShadow: 'none' }}
                  type="radio"
                  name={names[index]}
                  checked={item.value === selected[index].value}
                  onChange={() => {
                    setSelected((prev) => {
                      const newSelected = [...prev];
                      newSelected[index] = item;
                      return newSelected;
                    });
                  }}
                />
                {item.label}
              </label>
            ))}
          </form>
        ))}
      </div>
      <div className="mt-10">{children(selected.map((item) => item.value as never))}</div>
    </>
  );
};
