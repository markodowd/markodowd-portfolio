import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Generate files in directory structure for S3 direct access
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
