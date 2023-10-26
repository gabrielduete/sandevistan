/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.jsx', 'page.js', 'page.tsx', 'page.ts'],
}

module.exports = nextConfig
