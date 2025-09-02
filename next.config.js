/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
  
  // Improve build stability
  experimental: {
    // Modern experimental features
  },
  
  // Webpack configuration for better module resolution
  webpack: (config, { isServer }) => {
    // Improve module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
