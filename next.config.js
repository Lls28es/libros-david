/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["educomlab.com", "firebasestorage.googleapis.com", "localhost"],
  },
};

module.exports = nextConfig;
