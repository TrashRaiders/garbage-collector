/**
 * Here is an explanation of the basic approach we are using to setup the Apollo Client:
 * https://youtu.be/y34ym0-KZ8A
 */

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { RetryLink } from '@apollo/client/link/retry'
import merge from 'deepmerge'

import { createErrorLink } from './apollo/error-link'

let apolloClient: ApolloClient<NormalizedCacheObject>

let token: string

export function initApolloClient({
  initialState = {},
  useMock = false,
  setAuthToken = false,
} = {}): ApolloClient<NormalizedCacheObject> {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient =
    apolloClient ?? createApolloClient({ useMock, setAuthToken })

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

function createApolloClient({
  useMock = false,
  setAuthToken = false,
} = {}): ApolloClient<NormalizedCacheObject> {
  let link: ApolloLink

  const noEndpointInDevelopment =
    process.env.NODE_ENV === 'development' && !process.env.GRAPHQL_API_ENDPOINT

  if (useMock || noEndpointInDevelopment) {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    link = require('./apollo-mock').createMockLink()
  } else if (setAuthToken) {
    link = ApolloLink.from([
      createErrorLink(),
      createRetryLink(),
      createAuthLink(),
      createIsomorphLink(),
    ])
  } else {
    link = ApolloLink.from([createErrorLink(), createIsomorphLink()])
  }

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: typeof window === 'undefined',
    connectToDevTools: process.env.NODE_ENV === 'development',
  })
}

function createIsomorphLink(): ApolloLink {
  const uri =
    typeof window === 'undefined' ? process.env.GRAPHQL_API_ENDPOINT : '/api'

  return new HttpLink({
    uri,
    credentials: 'same-origin',
  })
}

function createAuthLink(): ApolloLink {
  const authLink = setContext(async (req, previousContext) => {
    const { headers } = previousContext
    token = token || (await getNewToken())

    return {
      headers: {
        ...headers,
        'x-cassandra-token': token,
      },
    }
  })
  return authLink
}

function createRetryLink(): ApolloLink {
  return new RetryLink({
    delay: {
      initial: 300,
      max: Number.POSITIVE_INFINITY,
      jitter: true,
    },
    attempts: {
      max: 2,
      retryIf: async (error) => {
        // TODO maybe there are some error cases which should be just retried
        // eslint-disable-next-line no-console
        console.log('Error got in RetryLink:', error)
        if (/.*authorization failed/g.test(error.message)) {
          // fetch a new token here, if authentication fails
          token = token || (await getNewToken())
          return true
        }

        return false
      },
    },
  })
}

export async function getNewToken(): Promise<string> {
  const tokenPath = '/api/get-token'
  const url =
    typeof window === 'undefined'
      ? `${process.env.BASE_URL}${tokenPath}`
      : tokenPath

  const res = await fetch(url)
  const data = await res.json()

  return data.authToken
}
