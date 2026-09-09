import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16's Cache Components architecture enables Partial Prerendering.
  // Static JSX outside Suspense ships in the shell; uncached work inside
  // Suspense streams in after.
  cacheComponents: true,
};

export default nextConfig;
