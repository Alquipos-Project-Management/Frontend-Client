/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript during the build
    ignoreBuildErrors: true, 
  },
  output: 'standalone',
}

module.exports = nextConfig 