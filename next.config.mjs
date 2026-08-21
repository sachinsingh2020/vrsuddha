/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tatanutrikorner.com",
      },
      {
        protocol: "https",
        hostname: "www.srisritattva.com",
      },
    ],
  },
};

export default nextConfig;
