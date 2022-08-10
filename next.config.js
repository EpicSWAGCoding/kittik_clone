/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true;
  },

  reactStrictMode: true,
  images: {
    domains: ['i.playground.ru',
      'lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
