/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
};