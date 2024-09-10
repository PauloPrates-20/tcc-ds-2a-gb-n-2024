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
      },
      {
        source: '/evento:id',
        destination: '/evento/:id'
      }
    ]
  }
};

export default nextConfig;
