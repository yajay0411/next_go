import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
    prependData: `
    @use "_variables" as *;
    @use "_mixins" as *;
  `,
  },
  images: {
    domains: ['example.com'], // Allow external images from example.com
  },
};

export default nextConfig;
