import { defineConfig } from 'umi';
import routeConfig from './routeConfig';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/Loading.tsx',
  },
  hash: true,
  outputPath: 'build',
  routes: routeConfig,
  metas: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_2066285_ku0x53lsm3.css',
    },
  ],
  chunks: ['antd', 'vendors', 'umi'],
  chainWebpack(config) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 1,
          automaticNameDelimiter: '.',
          cacheGroups: {
            antd: {
              name: 'antd',
              test({ resource }) {
                return /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/.test(
                  resource,
                );
              },
              priority: -9,
            },
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: -10,
            },
          },
        },
      },
    });
  },
});
