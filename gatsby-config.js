module.exports = {
  siteMetadata: {
    title: 'Progate Journey',
    description:
      'Progate JourneyはWebプロダクトを開発するための学習ロードマップです。ロードマップを活用して学習の不安を自信に変えよう。',
    author: 'Progate, Inc.',
    siteURL: 'https://journey.prog-8.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'journey-deploy-test',
        protocol: "https",
        hostname: "d1j0casclmtpq3.cloudfront.net",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Progate Journey',
        short_name: 'Journey',
        description: 'Webプロダクト開発学習ロードマップ',
        lang: 'ja',
        start_url: '/scenes',
        background_color: '#f9fbfe',
        theme_color: '#f9fbfe',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: 'maskable',
        },
      },
    },
    'gatsby-plugin-offline',
    // 'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
  ],
}
