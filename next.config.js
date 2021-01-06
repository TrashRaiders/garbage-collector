/* eslint-disable import/no-extraneous-dependencies */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

const nextConfig = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
  },
  target: 'serverless', // experimental-serverless-trace
}

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        env: {
          USE_GRAPHQL_MOCK: 'true',
          // USE_GRAPHQL_MOCK: process.env.NODE_ENV === 'test' ? 'true' : '',
        },
      },
    ],
    [nextTranslate],
  ],
  nextConfig,
)

/* eslint-enable import/no-extraneous-dependencies */
