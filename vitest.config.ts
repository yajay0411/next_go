import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: ['src/e2e/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    alias: {
      '@': resolve(__dirname, './src'),
      '@context': resolve(__dirname, './src/context'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
      '@services': resolve(__dirname, './src/services'),
      '@pages': resolve(__dirname, './src/pages'),
      '@core': resolve(__dirname, './src/core'),
      '@styles': resolve(__dirname, './src/assets/styles'),
      '@images': resolve(__dirname, './src/assets/images'),
    },
  },
  esbuild: {
    target: 'esnext',
  },
});
