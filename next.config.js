/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        domains: [
            'i.ibb.co',
            'www.canva.com',
            'youtube.com'
          ]
    },
}

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  }

module.exports = nextConfig
