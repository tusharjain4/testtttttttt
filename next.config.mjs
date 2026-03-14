/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.everypixel.com',
      },
    ],
  },
};

export default nextConfig;