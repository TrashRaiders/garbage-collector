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

import { createErrorLink, token } from './apollo/error-link'

export const clientInstances: {
  [key: string]: ApolloClient<NormalizedCacheObject>
} = {}

export function initApolloClient({
  clientName = 'default',
  initialState = {},
  useMock = false,
  setAuthToken = false,
} = {}): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    const client = createApolloClient({ initialState, useMock, setAuthToken })
    return client
  }

  if (!(clientName in clientInstances)) {
    clientInstances[clientName] = createApolloClient({
      initialState,
      useMock,
      setAuthToken,
    })
  }

  return clientInstances[clientName]
}

function createApolloClient({
  initialState = {},
  useMock = false,
  setAuthToken = false,
} = {}): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache().restore(initialState)

  let link: ApolloLink

  if (useMock || !process.env.GRAPHQL_API_ENDPOINT) {
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
    cache,
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
    fetch,
  })
}

function createAuthLink(): ApolloLink {
  const authLink = setContext((_, previousContext) => {
    const { headers } = previousContext

    return {
      headers: {
        ...headers,
        'x-cassandra-token': token.auth,
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
      max: 5,
      retryIf: (error) => {
        // TODO maybe there are some error cases which should be just retried
        // eslint-disable-next-line no-console
        console.log('Error got in RetryLink:', error)
        return false
      },
    },
  })
}
