import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tipsfilms.in",
      },
      {
        protocol: "https",
        hostname: "tips.in",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
    ],
  },
};

export default nextConfig;
