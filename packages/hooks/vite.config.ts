import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-jopau/utils': path.resolve(__dirname, '../utils/src'),
      '@react-jopau/utils/*': path.resolve(__dirname, '../utils/src/*'),
      '@react-jopau/hooks/*': path.resolve(__dirname, '../hooks/src/*')
    }
  }
});
