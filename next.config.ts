import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/lading-antu-kuyen",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;