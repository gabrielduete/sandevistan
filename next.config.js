/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'cdn.discordapp.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
  pageExtensions: ['page.jsx', 'page.js', 'page.tsx', 'page.ts'],
}

module.exports = nextConfig
