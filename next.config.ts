import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The standalone skills page was folded into About in the 2026 redesign.
      { source: "/skills", destination: "/about#toolkit", permanent: true },
    ];
  },
};

export default nextConfig;
