/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    images: {
      unoptimized: true,
      remotePatterns: []
    },
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

export default nextConfig;
