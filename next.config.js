/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['jmlakshmisagar.vercel.app'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  headers: async () => {
    return [];  // Add your custom headers here if needed
  },
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
};

module.exports = nextConfig;