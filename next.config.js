/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  output: 'standalone',
  
  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Enable gzip compression
  compress: true,
  
  // Note: Experimental features disabled to avoid build issues
  // experimental: {
  //   optimizeCss: true, // Requires 'critters' dependency
  // },
};

module.exports = nextConfig;
