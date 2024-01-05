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
      {
        source: '/restablecer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        has: [
          {
            type: 'cookie',
            key: 'token_sciflutter'
          }
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/recuperar',
        has: [
          {
            type: 'cookie',
            key: 'token_sciflutter'
          }
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/registrarse',
        has: [
          {
            type: 'cookie',
            key: 'token_sciflutter'
          }
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/restablecer/:token*',
        has: [
          {
            type: 'cookie',
            key: 'token_sciflutter'
          }
        ],
        destination: '/',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig
