/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.daisyui.com' },
      { protocol: 'https', hostname: 'ibb.co' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
};

export default nextConfig;