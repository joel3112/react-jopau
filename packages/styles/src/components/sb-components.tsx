import { ReactNode } from 'react';
import classes from 'classnames';
import ReactJson from 'react-json-view';
import { BiLinkExternal } from 'react-icons/bi';
import { styled } from '@stitches/react';
import {
  ArgsTable as PureArgsTable,
  PreviewProps as PurePreviewProps
} from '@storybook/components';
import { ArgsTable as DocsArgsTable, Canvas, SourceState, Story } from '@storybook/addon-docs';
import LinkTo from '@storybook/addon-links/react';

/**
 * Component story mdx
 */

/* ==== code =================================================================== */

export const SBCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-code text-black text-sm w-fit flex py-1 items-center px-2 rounded-[5px] bg-[#ccc]">
      {children}
    </div>
  );
};

/* ==== title ================================================================== */

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

/* ==== subtitle =============================================================== */

export const SBSubTitle = ({ children }: { children: string }) => {
  return <h4 className="w-full text-lg font-semibold border-b pb-2 border-gray-900">{children}</h4>;
};

/* ==== text-separator ========================================================= */

export const SBTextSeparator = ({ children }: { children: string }) => {
  return (
    <p className="border-t border-b py-3 my-3 border-text text-[13px] font-semibold text-text first:mt-0">
      {children}
    </p>
  );
};

/* ==== card =================================================================== */

export const SBCard = ({
  className,
  children,
  title,
  kind
}: {
  className?: string;
  children: string | ReactNode;
  title: ReactNode;
  kind?: string;
}) => {
  const childrenTmpl =
    typeof children === 'string' ? (
      <span className="text-text text-[15px] line-clamp-2">{children}</span>
    ) : (
      children
    );

  if (!kind) {
    return (
      <div
        className={classes(
          'h-[150px] group relative p-8 flex flex-col gap-3 bg-background border border-gray-700 border-solid shadow-md rounded-sm',
          className
        )}>
        <div className="text-secondary font-semibold text-[18px]">{title}</div>
        {childrenTmpl}
      </div>
    );
  }

  return (
    <LinkTo kind={kind} story="docs">
      <div
        className={classes(
          'h-[150px] group relative p-8 flex flex-col gap-3 bg-background hover:bg-[#eee] border border-gray-700 border-solid shadow-md rounded-sm cursor-pointer',
          className
        )}>
        <div className="text-secondary font-semibold text-[18px]">{title}</div>
        {childrenTmpl}

        <BiLinkExternal className="text-secondary text-[20px] absolute top-[10px] right-[10px] hidden group-hover:flex" />
      </div>
    </LinkTo>
  );
};

/* ==== stories ================================================================ */

const SBStory = ({
  id,
  label,
  canvasProps
}: {
  id: string;
  label?: string;
  canvasProps?: PurePreviewProps & {
    withSource?: SourceState;
    mdxSource?: string;
  };
}) => {
  return (
    <div className="flex gap-1 flex-col">
      {label && <span className="!text-lg font-medium">{label}</span>}

      <Canvas {...(canvasProps || {})}>
        <Story id={id} />
      </Canvas>
    </div>
  );
};

export const SBStories = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col mt-8">{children}</div>;
};

SBStories.Item = SBStory;

export const SBThemeStories = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="invisible h-0">
        <Story id="providers-themeprovider--default" />
      </div>
      {children}
    </>
  );
};

/* ==== args-table ============================================================= */

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

export const SBDocsArgsTable = ({ story, noControls }: { story: string; noControls?: boolean }) => {
  const DocsArgsTableStyled = styled('div', {
    variants: {
      noControls: {
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
    <DocsArgsTableStyled noControls={noControls}>
      <DocsArgsTable story={story} />
    </DocsArgsTableStyled>
  );
};

/* ==== json-preview =========================================================== */

export const SBSONPreview = ({ code }: { code: unknown }) => {
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
