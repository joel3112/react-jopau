import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-jopau/utils': path.resolve(__dirname, '../../packages/utils/src/'),
      '@react-jopau/styles': path.resolve(__dirname, '../../packages/styles/src/'),
      '@react-jopau/hooks': path.resolve(__dirname, '../../packages/hooks/src/'),
      '@react-jopau/components': path.resolve(__dirname, '../../packages/components/src/')
    }
  }
});
