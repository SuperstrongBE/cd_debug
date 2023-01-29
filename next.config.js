/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'external-preview.redd.it',
      'preview.redd.it',
      'i.redd.it',
      'media.mymind.host',
      'pbs.twimg.com',
      'cyberdeckmoney.s3.us-west-1.amazonaws.com',
      'res.cloudinary.com',
      'proton.mypinata.cloud',
      'i.imgur.com',
      'cdn2.onlyfans.com',
      'drscdn.500px.org',
      'c10.patreonusercontent.com',
      'file-examples.com',
      'dl8.webmfiles.org',
      'i.giphy.com',
      'wallpapers.hector.me',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }

    return config
  },
}
