import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@atoms', replacement: '/src/components/atoms' },
      { find: '@molecules', replacement: '/src/components/molecules' },
      { find: '@organisms', replacement: '/src/components/organisms' },
      { find: '@templates', replacement: '/src/components/templates' },
      { find: '@pages', replacement: '/src/components/pages' },
      { find: '@views', replacement: '/src/components/views' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
});
