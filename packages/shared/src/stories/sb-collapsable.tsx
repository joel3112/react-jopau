import { ReactNode, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { styled } from '@stitches/react';
import { classes } from '@react-jopau/utils';
import { SBSubTitle } from './sb-text';

const CollapsableChevronStyled = styled(BsChevronLeft, {
  position: 'absolute',
  top: 0,
  right: 4,
  fontSize: 20,
  color: '#6c6c6c',
  transform: 'rotateZ(0deg)',
  transition: 'transform 200ms ease 0s',

  variants: {
    opened: {
      true: { transform: 'rotateZ(-90deg)' }
    }
  }
});

const CollapsableContentStyled = styled('div', {
  height: 0,
  opacity: 0,
  overflow: 'hidden',
  transition: 'height 200ms ease 0ms, opacity 300ms ease 0ms',

  variants: {
    opened: {
      true: { height: 'auto', opacity: 1 }
    }
  }
});

export const SBCollapsable = ({
  title,
  opened,
  className,
  children
}: {
  title: string;
  children: ReactNode;
  className?: string;
  opened?: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(!!opened);

  return (
    <div className="mb-10 flex flex-col sb-collapsable">
      <div
        role="button"
        className={classes('sb-collapsable__header relative', {
          'cursor-pointer': !!children
        })}
        onClick={() => setOpen((prev) => !prev)}>
        <SBSubTitle>{title}</SBSubTitle>
        {children && <CollapsableChevronStyled opened={open} className="sb-collapsable__arrow" />}
      </div>

      <CollapsableContentStyled
        opened={open}
        className={classes('sb-collapsable__content', className)}>
        {children}
      </CollapsableContentStyled>
    </div>
  );
};
