/** @type {import('next').NextConfig} */
const path = require('path');

const cookieObj = {
  type: 'cookie',
  key: 'token_sciflutter'
}

const adminCookie = {
  type: 'cookie',
  key: 'sciflutter_admin'
}

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
        source: "/user",
        destination: "/",
        permanent: true,
      },
      {
        source: "/article",
        destination: "/",
        permanent: true,
      },
      {
        source: "/confirm",
        destination: "/",
        permanent: true,
      },
      {
        source: "/restablecer",
        destination: "/",
        permanent: true,
      },
      {
        source: "/login",
        has: [cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/recuperar",
        has: [cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/registrarse",
        has: [cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/restablecer/:token*",
        has: [cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/settings",
        missing: [cookieObj],
        destination: "/login",
        permanent: true,
      },
      {
        source: "/drafts",
        missing: [cookieObj],
        destination: "/login",
        permanent: true,
      },
      {
        source: "/saves",
        missing: [cookieObj],
        destination: "/login",
        permanent: true,
      },
      {
        source: "/settings/(.*)",
        missing: [cookieObj],
        destination: "/login",
        permanent: true,
      },
      {
        source: "/requests",
        missing: [adminCookie, cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/request",
        destination: "/",
        permanent: true,
      },
      {
        source: "/request/:requestId",
        missing: [adminCookie, cookieObj],
        destination: "/",
        permanent: true,
      },
      {
        source: "/settings/((?!seguridad).*)",
        destination: "/settings/",
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig
