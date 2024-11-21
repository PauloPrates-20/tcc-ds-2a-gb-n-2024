/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      }
    ];
  },
	experimental: {
		missingSuspenseWithCSRBailout: false,
	}
};

export default nextConfig;
