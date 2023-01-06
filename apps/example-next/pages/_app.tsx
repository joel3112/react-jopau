import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@react-jopau/components/contexts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
