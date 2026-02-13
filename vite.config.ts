import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
    base: './',
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src'),
        '@app': resolve(__dirname, 'src/app'),
        '@components': resolve(__dirname, 'src/components'),
        '@hooks': resolve(__dirname, 'src/hooks'),
      },
    },
  };
});
