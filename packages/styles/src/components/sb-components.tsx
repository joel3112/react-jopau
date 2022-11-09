import { ReactNode } from 'react';
import { styled } from '@stitches/react';
import { ArgsTable as PureArgsTable } from '@storybook/components';
import LinkTo from '@storybook/addon-links/react';
import { BiLinkExternal } from 'react-icons/bi';
import classes from 'classnames';

/**
 * Component story mdx
 */

/* ----------------------------------------------------------- */

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

/* ----------------------------------------------------------- */

export const SBSubTitle = ({ children }: { children: string }) => {
  return (
    <h4 className="text-xl font-semibold underline decoration-4 underline-offset-8">{children}</h4>
  );
};

/* ----------------------------------------------------------- */

export const SBCard = ({
  children,
  title,
  kind
}: {
  children: ReactNode;
  title: string;
  kind: string;
}) => {
  return (
    <LinkTo kind={kind} story="default">
      <div className="h-[150px] group relative p-4 flex flex-col gap-3 bg-background hover:bg-[#eee] border border-primary border-solid shadow-md cursor-pointer">
        <div className="text-secondary font-semibold text-[18px]">{title}</div>
        <span className="text-text text-[15px] line-clamp-2">{children}</span>

        <BiLinkExternal className="text-secondary text-[20px] absolute top-[10px] right-[10px] hidden group-hover:flex" />
      </div>
    </LinkTo>
  );
};

/* ----------------------------------------------------------- */

export const SBDemo = ({ children }: { children: ReactNode }) => {
  return <div className="text-text border rounded p-3 mb-4 bg-background">{children}</div>;
};

/* ----------------------------------------------------------- */

export const SBArgsTable = ({
  rows,
  noDefaults
}: {
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
  const PureArgsTableStyled = styled('div', {
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

  return (
    <PureArgsTableStyled noDefaults={noDefaults}>
      <PureArgsTable
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
    </PureArgsTableStyled>
  );
};