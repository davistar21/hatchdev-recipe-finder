import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net", // For potential external assets if needed, but mainly specific to Google currently
      },
    ],
  },
};

export default nextConfig;
