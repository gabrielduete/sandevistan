/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
  pageExtensions: ['page.jsx', 'page.js', 'page.tsx', 'page.ts'],
}

module.exports = nextConfig
