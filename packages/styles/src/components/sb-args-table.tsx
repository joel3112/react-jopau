import { ComponentType, ElementType, ReactNode } from 'react';
import { styled } from '@stitches/react';
import { ArgTypes } from '@storybook/addons';
import { ArgsTable as PureArgsTable, TabsState } from '@storybook/components';
import { prepareArgTypesWithContext, sortedArgTypes } from '../utils';
import { SBCollapsable } from './sb-collapsable';

const ArgsTableStyled = styled('div', {
  margin: '25px 0 30px 0',
  border: '1px solid #7e868c',
  borderRadius: '4px',
  overflow: 'hidden',

  variants: {
    noDefaults: {
      true: {
        'th:nth-of-type(2), td:nth-of-type(2)': {
          width: '60% !important'
        },
        'th:last-of-type, td:last-of-type': {
          display: 'none'
        }
      }
    }
  }
});

export const SBPureArgsTable = ({
  heading,
  rows,
  noDefaults
}: {
  heading: string;
  rows: Record<
    string,
    {
      name: string;
      description: string;
      type: string;
      required?: string;
      defaultValue?: string;
    }
  >;
  noDefaults?: boolean;
}) => {
  return (
    <SBCollapsable title={heading} opened>
      <ArgsTableStyled noDefaults={noDefaults}>
        <PureArgsTable
          inAddonPanel
          sort="requiredFirst"
          rows={Object.keys(rows).reduce((acc, key) => {
            const { name, description, required, type, defaultValue } = rows[key];

            return {
              ...acc,
              ...{
                [key]: {
                  name,
                  ...(description && { description }),
                  type: { required },
                  table: {
                    type: { summary: type },
                    ...(defaultValue && !noDefaults
                      ? { defaultValue: { summary: String(defaultValue) } }
                      : {})
                  }
                }
              }
            };
          }, {})}
        />
      </ArgsTableStyled>
    </SBCollapsable>
  );
};

const getTabComponentItem = (label: ComponentType['displayName'], component: ComponentType) => {
  return { label, component, argTypes: sortedArgTypes(prepareArgTypesWithContext(component)) };
};

export const SBArgsTable = ({
  component,
  subcomponents
}: {
  component: ComponentType;
  subcomponents?: Record<string, ComponentType>;
}) => {
  const allComponents = [
    getTabComponentItem(component.displayName, component),
    ...(Object.entries(subcomponents || {}).map(([label, component]) => {
      return getTabComponentItem(label, component);
    }) || [])
  ];
  const tabs = allComponents.reduce((acc, { label, argTypes: a }) => {
    return { ...acc, ...{ [label as never]: { rows: a } } };
  }, {});
  const entries = Object.entries(tabs) as [string, { rows: ArgTypes }][];

  if (entries.length === 1) {
    return (
      <SBCollapsable title="Properties" opened>
        <ArgsTableStyled>
          <PureArgsTable rows={entries[0][1].rows} sort="requiredFirst" inAddonPanel />
        </ArgsTableStyled>
      </SBCollapsable>
    );
  }

  return (
    <SBCollapsable title="Properties" opened>
      <ArgsTableStyled>
        <TabsState>
          {entries.map((entry) => {
            const [label, table] = entry;
            const id = `prop_table_div_${label}`;
            const Component = 'div' as unknown as ElementType<
              Omit<JSX.IntrinsicElements['div'], 'children'> & {
                children: ({ active }: { active: boolean }) => ReactNode;
              }
            >;
            return (
              <Component key={id} id={id} title={label}>
                {({ active }) =>
                  active ? (
                    <PureArgsTable
                      key={`prop_table_${label}`}
                      {...table}
                      sort="requiredFirst"
                      inAddonPanel
                    />
                  ) : null
                }
              </Component>
            );
          })}
        </TabsState>
      </ArgsTableStyled>
    </SBCollapsable>
  );
};
