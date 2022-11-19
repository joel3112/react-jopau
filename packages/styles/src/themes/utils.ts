type PositionConfig = Record<'top' | 'left' | 'bottom' | 'right', number>;

const position = (position: string, { top, left, bottom, right }: PositionConfig) => ({
  position: 'fixed',
  ...(top !== undefined && { top }),
  ...(left !== undefined && { left }),
  ...(bottom !== undefined && { bottom }),
  ...(right !== undefined && { right })
});

export default {
  /* ==== size ================================================================= */
  size: (value: number) => ({
    width: value,
    height: value
  }),
  sizeMin: (value: number) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value
  }),
  sizeMax: (value: number) => ({
    maxWidth: value,
    maxHeight: value
  }),
  rem: (value: number) => `${value / 16}rem`,

  /* ==== position ============================================================= */
  absolutePosition: (config: PositionConfig) => position('absolute', config),
  fixedPosition: (config: PositionConfig) => position('fixed', config),

  /* ==== spacing ============================================================== */
  m: (value: number) => ({
    margin: value
  }),
  mt: (value: number) => ({
    marginTop: value
  }),
  mr: (value: number) => ({
    marginRight: value
  }),
  mb: (value: number) => ({
    marginBottom: value
  }),
  ml: (value: number) => ({
    marginLeft: value
  }),
  mx: (value: number) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: number) => ({
    marginTop: value,
    marginBottom: value
  }),
  p: (value: number) => ({
    padding: value
  }),
  pt: (value: number) => ({
    paddingTop: value
  }),
  pr: (value: number) => ({
    paddingRight: value
  }),
  pb: (value: number) => ({
    paddingBottom: value
  }),
  pl: (value: number) => ({
    paddingLeft: value
  }),
  px: (value: number) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: number) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  /* ==== flexbox ============================================================== */
  alignBetween: (direction: 'row' | 'column') => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  alignCenterX: (direction: 'row' | 'column') => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: 'center'
  }),
  alignCenterY: (direction: 'row' | 'column') => ({
    display: 'flex',
    flexDirection: direction,
    justifyContent: 'center'
  }),

  /* ==== typography =========================================================== */
  lineClamp: (lines: number) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': lines,
    '-webkit-box-orient': 'vertical'
  }),
  truncateText: (maxWidth: number) => ({
    maxWidth: maxWidth,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),

  /* ==== border =============================================================== */
  noOutline: () => ({
    outline: 'none',
    boxShadow: 'none'
  }),

  /* ==== background =========================================================== */
  linearGradient: (value: string) => ({
    backgroundImage: value
  }),
  backgroundColorLighter: (opacity: number) => ({
    backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))`
  }),
  backgroundColorDarker: (opacity: number) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity}))`
  }),
  backgroundImageUrl: (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat'
  }),
  backgroundBlur: (value: string) => ({
    backdropFilter: 'saturate(180%) blur(10px)',
    background: value
  }),

  /* ==== transform ============================================================ */
  scale: (value: number) => ({
    transform: `scale(${value})`
  })
};
