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
  ellipsis: () => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),

  /* ==== border =============================================================== */
  noOutline: () => ({
    outline: 'none',
    boxShadow: 'none'
  }),

  /* ==== background =========================================================== */
  backgroundImage: (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat'
  })
};
