const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/peace', // replace 'peace' with your repository name
  images: {
    unoptimized: true
  }
};

module.exports = withNextIntl(nextConfig);
