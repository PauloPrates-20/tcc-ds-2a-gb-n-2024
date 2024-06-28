/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/addevento:id',
        destination: '/addevento/:id'
      }
    ]
  }
};

export default nextConfig;
