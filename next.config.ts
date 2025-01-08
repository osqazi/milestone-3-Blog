import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add the domain(s) you need
  },
};

export default nextConfig;
