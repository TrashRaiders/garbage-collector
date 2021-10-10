import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'

import environment from 'lib/environment'

const options: NextAuthOptions = {
  secret: environment.AUTH_SECRET,
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
): ReturnType<NextApiHandler> => NextAuth(request, response, options)
