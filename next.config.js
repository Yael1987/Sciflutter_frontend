/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/sciflutter/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/user',
        destination: '/',
        permanent: true,
      },
      {
        source: '/article',
        destination: '/',
        permanent: true,
      },
      {
        source: '/confirm',
        destination: '/',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig
