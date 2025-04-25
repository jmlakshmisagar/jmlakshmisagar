import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'jmlakshmisagar.vercel.app',
      'jmlakshmisagar-git-main-lakshmisagar-j-ms-projects.vercel.app',
      'jmlakshmisagar-5nrxn7pbs-lakshmisagar-j-ms-projects.vercel.app'
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  headers: async () => [
    {
      source: '/sw.js',
      headers: [
        {
          key: 'Service-Worker-Allowed',
          value: '/'
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate'
        }
      ]
    },
    {
      source: '/manifest.json',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate'
        }
      ]
    },
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ],
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Enable source maps in development
    if (dev) {
      config.devtool = 'source-map';
    }

    return config;
  },
  // Enable compression
  compress: true,
  // Add powered by header
  poweredByHeader: false,
  // Enable React strict mode
  reactStrictMode: true,
  // Enable experimental features
  experimental: {
    // optimizeCss: true,
    scrollRestoration: true
  }
};

export default nextConfig;
