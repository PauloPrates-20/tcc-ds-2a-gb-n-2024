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
        source: '/relatorio:id',
        destination: '/relatorio/:id'
      }
    ]
  }
};

export default nextConfig;
