import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [50, 75, 85, 100],
  },
  reactCompiler: true,
};

export default nextConfig;
