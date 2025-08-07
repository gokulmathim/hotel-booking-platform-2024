import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Disable Next.js image optimization for compatibility with static export
    unoptimized: true,
  },
};

export default nextConfig;
