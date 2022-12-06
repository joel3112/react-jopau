import { ReactNode, useState } from 'react';
import { TbPalette } from 'react-icons/tb';
import { IconButton, TooltipLinkList, WithTooltip } from '@storybook/components';

/**
 * Component custom tailwindcss classes
 */

/* ==== selector-container ===================================================== */

type SelectorItem = { label: string; value: string };
export const TWSelectorContainer = ({
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

  return (
    <>
      <div className="pl-10 absolute top-4 left-4 right-4 pr-[17px] border border-gray-800 flex items-center gap-10 h-[44px] bg-white font-bold text-[13px]">
        {items.map((innerItems, index) => (
          <WithTooltip
            key={index}
            placement="bottom"
            trigger="click"
            closeOnClick
            tooltip={({ onHide }) => (
              <TooltipLinkList
                links={innerItems.map((item) => ({
                  id: item.value,
                  title: item.label,
                  onClick: () => {
                    setSelected((prev) => {
                      const newSelected = [...prev];
                      newSelected[index] = item;
                      return newSelected;
                    });
                    onHide();
                  }
                }))}
              />
            )}>
            <IconButton className="!mt-0 !text-gray-700 hover:!text-secondary hover:!bg-secondary-100 gap-2">
              <TbPalette className="!w-auto text-lg" />
              <span className="text-inherit">
                {label[index]}: {selected[index].value}
              </span>
            </IconButton>
          </WithTooltip>
        ))}
      </div>
      <div className="mt-15">{children(selected.map((item) => item.value as never))}</div>
    </>
  );
};
