/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
    path: '/portfolio',
  },
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
