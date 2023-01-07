import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@react-jopau/components/contexts';
import themeConfig from '../theme.config';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider config={themeConfig}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
