/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization for better performance
  output: 'standalone',
  
  // Optimize images for production
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
