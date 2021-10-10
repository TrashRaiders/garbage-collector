const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')
const nextBuildId = require('next-build-id')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
  },
  target: 'serverless', // use 'experimental-serverless-trace' as an alternative
  rewrites,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
}

async function rewrites() {
  const resultingRewrites = []

  if (process.env.GRAPHQL_API_ENDPOINT) {
    resultingRewrites.push({
      source: '/api',
      destination: process.env.GRAPHQL_API_ENDPOINT,
    })
  }

  return resultingRewrites
}

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        env: {
          MOCK_GRAPHQL_API: process.env.NODE_ENV === 'test' ? 'true' : '',
        },
      },
    ],
    [nextTranslate],
  ],
  nextConfig,
)
