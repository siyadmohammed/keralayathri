import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbo: {
    enabled: false,
  },
  devServer: {
    allowedDevOrigins: ["http://192.168.1.21:3000"],
  },
};

export default nextConfig;
