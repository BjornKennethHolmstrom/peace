const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/peace' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/peace/' : ''
};

module.exports = withNextIntl(nextConfig);
