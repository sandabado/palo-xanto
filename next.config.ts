import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umoapqrkcabmdvkmdnqv.supabase.co",
        pathname: "/storage/v1/object/public/records-public/**",
      },
    ],
  },
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source:"/kit", destination:"/press", permanent:true },
      { source:"/epk", destination:"/press", permanent:true },
      { source:"/media-kit", destination:"/press", permanent:true },
      { source:"/artists/palo-xanto", destination:"/about", permanent:true },
      { source:"/artists/palo-xanto/press", destination:"/press", permanent:true },
    ]
  },
}

export default nextConfig
