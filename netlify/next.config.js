/** @type {import('next').NextConfig} */
module.exports = {
  // Otras configuraciones
  trailingSlash: true, // Importante para Netlify
  images: {
    domains: [],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  // Esto es crucial para el correcto funcionamiento en Netlify
  target: 'serverless'
}; 