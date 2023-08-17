import { styledTheme } from '@/components/shared';

export const StyledText = styledTheme('p', {
  display: 'inline-block',
  color: '$$textColor',
  width: '$space$max',
  fontSize: '$$textFontSize',
  lineHeight: '$$textLineHeight',
  fontWeight: '$fontWeights$normal',
  letterSpacing: '$letterSpacings$normal',

  variants: {
    as: {
      p: { display: 'block', width: '$space$full' },
      div: { display: 'block', width: '$space$full' },
      span: {},
      code: {
        $$textColor: '$colors$text !important',
        borderRadius: '$space$2',
        fontFamily: '$fonts$code',
        fontSize: 'calc($$textFontSize * 0.85)',
        padding: '0 $space$2',
        background: '$colors$borderContrast',
        border: '1px solid $colors$borderContrast'
      },
      kbd: {
        $$textColor: '$colors$text !important',
        borderRadius: '$space$2',
        fontFamily: '$fonts$code',
        fontSize: 'calc($$textFontSize * 0.9)',
        padding: '0 $space$2',
        background: '$colors$borderContrast',
        border: '$borderWidths$light solid $colors$borderContrast',
        borderBottomWidth: '$borderWidths$normal'
      },
      mark: {
        $$textColor: '$colors$black !important',
        background: '$colors$mark'
      },
      strong: { fontWeight: '$fontWeights$semibold' },
      i: { fontStyle: 'italic' },
      u: { textDecoration: 'underline' },
      del: { textDecoration: 'line-through' }
    },
    color: {
      inherit: { $$textColor: 'inherit' },
      primary: { $$textColor: '$colors$primary500' },
      secondary: { $$textColor: '$colors$secondary500' },
      tertiary: { $$textColor: '$colors$tertiary500' },
      disabled: { $$textColor: '$colors$gray500' },
      info: { $$textColor: '$colors$blue500' },
      success: { $$textColor: '$colors$green500' },
      warning: { $$textColor: '$colors$yellow500' },
      error: { $$textColor: '$colors$red500' }
    },
    size: {
      xs: { $$textFontSize: '$fontSizes$xs', $$textLineHeight: '$lineHeights$xs' },
      sm: { $$textFontSize: '$fontSizes$sm', $$textLineHeight: '$lineHeights$sm' },
      md: { $$textFontSize: '$fontSizes$md', $$textLineHeight: '$lineHeights$md' },
      lg: { $$textFontSize: '$fontSizes$lg', $$textLineHeight: '$lineHeights$lg' },
      xl: { $$textFontSize: '$fontSizes$xl', $$textLineHeight: '$lineHeights$xl' },
      '2xl': { $$textFontSize: '$fontSizes$2xl', $$textLineHeight: '$lineHeights$2xl' },
      '3xl': { $$textFontSize: '$fontSizes$3xl', $$textLineHeight: '$lineHeights$3xl' }
    }
  }
});
