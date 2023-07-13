const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },

  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: true,
  },
  // typescript: {
  //   // Set this to false if you want production builds to abort if there's type errors
  //   ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  // },
  // eslint: {
  //   /// Set this to false if you want production builds to abort if there's lint errors
  //   ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  // },
}

module.exports = withContentlayer(nextConfig)
