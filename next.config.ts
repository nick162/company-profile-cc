import type { NextConfig } from "next";
const withOptimizedImages = require("next-optimized-images");
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  /* config options here */
};

module.exports = withOptimizedImages({
  images: {
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
  },
});

export default nextConfig;
