import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
    browserToTerminal: false,
  },
  cacheLife: {
    sec: {
      stale: 30,
      revalidate: 30,
      expire: 3600,
    },
  },
};

export default nextConfig;
