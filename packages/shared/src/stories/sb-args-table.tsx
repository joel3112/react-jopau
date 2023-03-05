import { ComponentType, ElementType, ReactNode } from 'react';
import { styled } from '@stitches/react';
import { ArgTypes } from '@storybook/addons';
import { useTheme } from '@storybook/theming';
import { ArgsTable as PureArgsTable, TabsState } from '@storybook/components';
import { disableArgTypes, prepareArgTypesWithContext, sortedArgTypes } from './utils';
import { SBCollapsable } from './sb-collapsable';

const ArgsTableStyled = styled('div', {
  margin: '25px 0 30px 0',
  borderRadius: '4px',
  overflow: 'hidden',
  borderWidth: '1px',

  variants: {
    darkMode: {
      true: {
        borderColor: 'rgba(255,255,255,.1)',
        boxShadow: 'rgb(0 0 0 / 20%) 0 2px 5px 0'
      },
      false: {
        borderColor: 'rgba(0,0,0,.1)',
        boxShadow: 'rgb(0 0 0 / 10%) 0 1px 3px 0'
      }
    },
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
  const { base } = useTheme();

  return (
    <SBCollapsable title={heading} opened>
      <ArgsTableStyled noDefaults={noDefaults} darkMode={base === 'dark'}>
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

const getTabComponentItem = (
  label: ComponentType['displayName'],
  component: ComponentType,
  exclude: string[]
) => {
  return {
    label,
    component,
    argTypes: sortedArgTypes(disableArgTypes(prepareArgTypesWithContext(component), exclude))
  };
};

export const SBArgsTable = ({
  component,
  subcomponents,
  exclude = []
}: {
  component: ComponentType;
  subcomponents?: Record<string, ComponentType>;
  exclude?: string[];
}) => {
  const { base } = useTheme();

  const allComponents = [
    getTabComponentItem(component.displayName, component, exclude),
    ...(Object.entries(subcomponents || {}).map(([label, component]) => {
      return getTabComponentItem(label, component, exclude);
    }) || [])
  ];
  const tabs = allComponents.reduce((acc, { label, argTypes: a }) => {
    return { ...acc, ...{ [label as never]: { rows: a } } };
  }, {});
  const entries = Object.entries(tabs) as [string, { rows: ArgTypes }][];

  if (entries.length === 1) {
    return (
      <SBCollapsable title="Properties" opened>
        <ArgsTableStyled darkMode={base === 'dark'}>
          <PureArgsTable rows={entries[0][1].rows} sort="requiredFirst" inAddonPanel />
        </ArgsTableStyled>
      </SBCollapsable>
    );
  }

  return (
    <SBCollapsable title="Properties" opened>
      <ArgsTableStyled darkMode={base === 'dark'}>
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
