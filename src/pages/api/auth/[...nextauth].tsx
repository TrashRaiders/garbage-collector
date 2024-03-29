import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const environment: { [key: string]: string } = (function local() {
  const variables = {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || '',
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '',
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || '',
  }

  Object.entries(variables).forEach(([key, value]) => {
    if (!value) {
      // eslint-disable-next-line no-console
      console.warn(`${key} is not defined`)
    }
  })

  return variables
})()

const options: NextAuthOptions = {
  secret: environment.AUTH_SECRET || undefined,
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: environment.GOOGLE_CLIENT_ID,
      clientSecret: environment.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.GitHub({
      clientId: environment.GITHUB_CLIENT_ID,
      clientSecret: environment.GITHUB_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: environment.FACEBOOK_APP_ID,
      clientSecret: environment.FACEBOOK_APP_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin', // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
}

export default (
  request: NextApiRequest,
  response: NextApiResponse<unknown>,
  // @ts-expect-error next-auth types are wrong
): ReturnType<NextApiHandler> => NextAuth(request, response, options)
