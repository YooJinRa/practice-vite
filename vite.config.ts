import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPluginImport from 'eslint-plugin-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPluginImport()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
});
