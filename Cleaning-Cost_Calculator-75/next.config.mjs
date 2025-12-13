/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for Cloudflare Pages
  output: 'export',
  
  // Base path for subdirectory deployment
  basePath: '/cal',
  
  // Asset prefix must match basePath for static exports
  assetPrefix: '/cal',
  
  // Trailing slash for clean URLs in static hosting
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  // Disable x-powered-by header
  poweredByHeader: false,
}

export default nextConfig
