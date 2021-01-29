import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/link-context'

import { authInstances } from './auth'

const URL_SSR = `${process.env.BASE_URL}/api`
const URL_CSR = `${process.env.BASE_URL}/api`

export const clientInstances: {
  [key: string]: ApolloClient<NormalizedCacheObject>
} = {}

export function initApolloClient({
  clientName = 'default',
  initialState = {},
  useMock = false,
  setAuthToken = false,
  authName = 'default',
} = {}): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    const client = createApolloClient({ initialState, useMock })
    return client
  }

  if (!(clientName in clientInstances)) {
    clientInstances[clientName] = createApolloClient({
      initialState,
      useMock,
      setAuthToken,
      authName,
    })
  }

  return clientInstances[clientName]
}

export function createApolloClient({
  initialState = {},
  useMock = false,
  setAuthToken = false,
  authName = 'default',
} = {}): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache().restore(initialState)

  let link: ApolloLink

  if (useMock) {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    link = require('./apollo-mock').createMockLink()
  } else if (setAuthToken) {
    link = ApolloLink.from([
      createErrorLink(),
      createAuthLink({ authName }),
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

export function createIsomorphLink(): ApolloLink {
  const uri = typeof window === 'undefined' ? URL_SSR : URL_CSR

  return new HttpLink({
    uri,
    credentials: 'same-origin',
  })
}

export function createAuthLink({ authName = 'default' } = {}): ApolloLink {
  const authLink = setContext((_, { headers }) => {
    const token = authInstances[authName].getToken()

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })
  return authLink
}

/**
 * Catches Apollo client errors to we don't have these ugly next.js error windows,
 * if there is an error with the connection to the Backend API.
 *
 * TODO doesn't work as intendet yet. Should show the error page, if there is no connection.
 */
export function createErrorLink(): ApolloLink {
  return onError(({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.info(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      )
    }

    if (networkError) {
      // Check if error response is JSON
      if (networkError.message === 'Internal Server Error' && response) {
        response.errors = undefined
      }

      if (networkError.name === 'FetchError' && response) {
        response.errors = undefined
      }

      console.info('[Network error]:', networkError)
    }
  })
}
