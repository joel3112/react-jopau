/**
 * Reference css base:
 * - next-ui: https://github.com/nextui-org/nextui/blob/main/packages/react/src/css-baseline/css-baseline.tsx
 * - tailwind: https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css
 */

export default {
  '*': {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
  },
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'solid'
  },
  html: {
    fontSize: '$base'
  },
  body: {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    fontSize: '$base',
    lineHeight: '$md',
    fontFamily: '$base'
  },
  'html, body': {
    backgroundColor: '$background',
    color: '$text'
  },
  'p, small': {
    color: 'inherit',
    letterSpacing: '$tighter',
    fontWeight: '$normal',
    fontFamily: '$base'
  },
  p: {
    fontSize: '$base',
    lineHeight: '$lg'
  },
  small: {
    margin: 0,
    lineHeight: '$xs',
    fontSize: '$xs'
  },
  b: {
    fontWeight: '$semibold'
  },
  span: {
    fontSize: 'inherit',
    color: 'inherit',
    fontWeight: 'inherit'
  },
  img: {
    maxWidth: '100%'
  },
  a: {
    cursor: 'pointer',
    fontSize: 'inherit',
    WebkitTouchCallout: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    color: '$link',
    textDecoration: 'none'
  },
  'a:hover': {
    textDecoration: 'none'
  },
  'ul, ol': {
    padding: 0,
    listStyleType: 'none',
    margin: '$sm $sm $sm $lg',
    color: '$foreground'
  },
  ol: {
    listStyleType: 'decimal'
  },
  li: {
    marginBottom: '$5',
    fontSize: '$base',
    lineHeight: '$lg'
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'inherit',
    margin: '0 0 $5 0'
  },
  h1: {
    letterSpacing: '$tighter',
    fontSize: '$5xl',
    lineHeight: '$md',
    fontWeight: '$bold'
  },
  h2: {
    letterSpacing: '$tighter',
    fontSize: '$4xl',
    fontWeight: '$semibold'
  },
  h3: {
    letterSpacing: '$tighter',
    fontSize: '$2xl',
    fontWeight: '$semibold'
  },
  h4: {
    letterSpacing: '$tighter',
    fontSize: '$xl',
    fontWeight: '$semibold'
  },
  h5: {
    letterSpacing: '$tight',
    fontSize: '$md',
    fontWeight: '$semibold'
  },
  h6: {
    letterSpacing: '$tight',
    fontSize: '$sm',
    fontWeight: '$semibold'
  },
  'button, input, select, textarea': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    WebkitAppearance: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    cursor: 'pointer',
    border: 'none'
  },
  'button:focus, input:focus, select:focus, textarea:focus': {
    outline: 'none'
  },
  code: {
    color: '$code',
    padding: '$1 $2',
    borderRadius: '$xs',
    bg: '$codeLight',
    fontFamily: '$code',
    fontSize: '$sm',
    whiteSpace: 'pre-wrap',
    transition: 'opacity 0.25s ease 0s'
  },
  'code:hover': {
    opacity: 0.8
  },
  pre: {
    overflow: 'auto',
    whiteSpace: 'pre',
    textAlign: 'left',
    fontSize: '$sm',
    borderRadius: '$lg',
    padding: '$md $lg',
    margin: '$lg 0',
    fontFamily: '$code',
    lineHeight: '$md',
    webkitOverflowScrolling: 'touch'
  },
  'pre code': {
    color: '$foreground',
    fontSize: '$sm',
    lineHeight: '$sm',
    whiteSpace: 'pre'
  },
  'pre code:before,pre code:after': {
    display: 'none'
  },
  'pre p': {
    margin: 0
  },
  'pre::-webkit-scrollbar': {
    display: 'none',
    width: 0,
    height: 0,
    background: 'transparent'
  },
  hr: {
    background: '$border',
    borderColor: 'transparent',
    borderWidth: '0px',
    borderStyle: 'none',
    height: '1px'
  },
  details: {
    backgroundColor: '$accents1',
    border: 'none'
  },
  'details:focus, details:hover, details:active': {
    outline: 'none'
  },
  summary: {
    cursor: 'pointer',
    userSelect: 'none',
    listStyle: 'none',
    outline: 'none'
  },
  'summary::-webkit-details-marker, summary::before': {
    display: 'none'
  },
  'summary::-moz-list-bullet': {
    fontSize: 0
  },
  'summary:focus, summary:hover, summary:active': {
    outline: 'none',
    listStyle: 'none'
  },
  '::selection': {
    backgroundColor: '$selection'
  },
  blockquote: {
    padding: '$md $lg',
    color: '$accents7',
    backgroundColor: '$accents0',
    borderRadius: '$lg',
    margin: '$10 0'
  },
  'blockquote *:first-child': {
    marginTop: 0
  },
  'blockquote *:last-child': {
    marginBottom: 0
  },
  kbd: {
    width: 'fit-content',
    textAlign: 'center',
    display: 'inline-block',
    color: '$accents8',
    bg: '$accents0',
    border: '1px solid $border',
    boxShadow: '0 0 1px 0 rgb(0 0 0 / 14%)',
    fontFamily: '$base',
    borderRadius: '5px',
    padding: '$1 $3',
    mx: '$1',
    lineHeight: '$sm',
    fontSize: '$sm'
  },
  'kbd + kbd': {
    ml: '$2'
  },
  'dl, dd, hr, figure, p': {
    margin: 0
  }
};
