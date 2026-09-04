import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/antu-kuyen-landing",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;