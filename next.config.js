/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'index.tsx',
    'index.jsx',
  ],
}

module.exports = nextConfig
