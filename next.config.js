/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors
  },

  reactStrictMode: true,
  images: {
    domains: ['i.playground.ru',
      'lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
