import classes from 'classnames';
import { SpaceWrapper } from './space.styled';

type BasicPosition = 'start' | 'center' | 'end';
export type DirectionSpace = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifySpace = BasicPosition | 'between' | 'around';
export type AlignSpace = BasicPosition | 'baseline' | 'stretch';

export type SpaceProps = ElementHTML &
  ElementChildren & {
    direction?: DirectionSpace;
    wrap?: boolean;
    gap?: number | Array<number>;
    justify?: JustifySpace;
    align?: AlignSpace;
  } & typeof defaultProps;

const defaultProps = {
  direction: 'row'
};

const spacing = (gap?: number | Array<number>): string =>
  gap
    ? [gap]
        .flat()
        .map((s: number) => `${s}px`)
        .join(' ')
    : '';

export const Space = ({
  className,
  children,
  style,
  direction,
  wrap,
  gap,
  justify,
  align
}: SpaceProps) => {
  return (
    <SpaceWrapper
      className={classes('space-wrapper', className)}
      css={{
        flexDirection: direction,
        gap: spacing(gap),
        ...style
      }}
      justify={justify}
      align={align}
      wrap={wrap}>
      {children}
    </SpaceWrapper>
  );
};

Space.defaultProps = defaultProps;
