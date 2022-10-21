import { ReactNode } from 'react';
import { globalCss } from '@stitches/react';
import { lightTheme, darkTheme } from './themes';

const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$text'
  },
  '*, button, input': {
    fontFamily: '$base !important'
  },
  'pre *, code *': {
    fontFamily: '$code !important'
  }
});

export const GlobalStyles = ({
  children,
  darkMode
}: {
  children: ReactNode;
  darkMode: boolean;
}) => {
  if (darkMode) {
    globalStyles();
    return <div className={darkTheme}>{children}</div>;
  }
  globalStyles();
  return <div className={lightTheme}>{children}</div>;
};
