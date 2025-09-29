/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "services.larsa.io",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
