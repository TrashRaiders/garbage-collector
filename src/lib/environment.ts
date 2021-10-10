import { bool, envsafe, str, url } from 'envsafe'

const environment = envsafe({
  NODE_ENV: str({
    devDefault: 'development',
    default: 'production',
    choices: ['development', 'production', 'test'],
  }),
  BASE_URL: url({
    default: 'http://localhost:3001',
  }),

  // Authentication
  NEXTAUTH_URL: url({
    devDefault: 'http://localhost:3001',
    desc: 'Base url, where the authentication routes will be created on.',
  }),
  AUTH_SECRET: str({
    desc: `
Secret that is used to sign cookies and and generate crytographic keys.
https://next-auth.js.org/configuration/options#secret
    `,
  }),
  GOOGLE_CLIENT_ID: str({
    desc: 'For Google Auth0.',
  }),
  GOOGLE_CLIENT_SECRET: str({
    desc: 'For Google Auth0.',
  }),
  GITHUB_CLIENT_ID: str({
    desc: 'For GitHub Auth0.',
  }),
  GITHUB_CLIENT_SECRET: str({
    desc: 'For GitHub Auth0.',
  }),
  FACEBOOK_APP_ID: str({
    desc: 'For Facebook Auth0.',
  }),
  FACEBOOK_APP_SECRET: str({
    desc: 'For Facebook Auth0.',
  }),

  // GraphQL API
  GRAPHQL_API_ENDPOINT: str({
    devDefault: '',
  }),
  GRAPHQL_API_LOGIN_URL: url(),
  GRAPHQL_API_USERNAME: str(),
  GRAPHQL_API_PASSWORD: str(),
  MOCK_GRAPHQL_API: bool({
    default: false,
    devDefault: true,
    desc: 'Use mock GraphQL API for development.',
  }),

  // Google API
  NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY: str({
    desc: 'API key for using static google maps',
  }),
})

export default environment
