/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for better performance
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
