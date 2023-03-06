import { Children, ReactElement, ReactNode, useState } from 'react';
import { classes } from '@react-jopau/utils';
import { SBDescription, SBTitle } from './sb-text';

export const SBDocTabStateItem = ({
  description,
  active,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
  active: boolean;
}) => {
  return (
    <div
      className={classes('flex flex-col', {
        'opacity-0 h-0 overflow-hidden': !active
      })}>
      <SBDescription>{description}</SBDescription>
      {children}
    </div>
  );
};

export const SBDocTabState = ({
  children
}: { children: Array<ReactNode> } & {
  Item: typeof SBDocTabStateItem;
}) => {
  const childrenArray = Children.toArray(children);
  const titles = childrenArray.map((child) => (child as ReactElement).props.title);
  const [activeTab, setActiveTab] = useState(titles[0]);

  return (
    <div className="flex flex-col sb-doc-tab-state">
      <div className="-mt-6 mb-8 flex flex-row gap-8 sb-doc-tab-state__tabs">
        {titles.map((title) => (
          <div
            key={title}
            role="button"
            className="cursor-pointer b-doc-tab-state__tab-item"
            onClick={() => setActiveTab(title)}>
            <SBTitle
              className={classes({
                'text-black': activeTab === title,
                'text-gray-500': activeTab !== title
              })}>
              {title}
            </SBTitle>
          </div>
        ))}
      </div>

      {childrenArray.map((child) => {
        const props = (child as ReactElement).props;
        return (
          // eslint-disable-next-line react/prop-types
          <SBDocTabStateItem active={props.title === activeTab} key={props.title} {...props} />
        );
      })}
    </div>
  );
};
