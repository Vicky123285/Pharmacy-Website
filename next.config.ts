/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true, // Temporarily disable Next.js optimization for testing
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-image-domain.com", // Replace with your actual image domain
      },
    ],
  },
};
