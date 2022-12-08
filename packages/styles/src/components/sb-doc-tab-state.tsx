import { Children, ReactElement, ReactNode, useState } from 'react';
import classes from 'classnames';
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
    <div className="sb-doc-tab-state flex flex-col">
      <div className="sb-doc-tab-state__tabs flex flex-row gap-8 -mt-6 mb-8">
        {titles.map((title) => (
          <div
            key={title}
            role="button"
            className="b-doc-tab-state__tab-item cursor-pointer"
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
