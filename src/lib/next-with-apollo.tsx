import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

import { createApolloClient, initApolloClient } from './apollo'

/**
 * Hook that returns the apollo client instance
 */
export function useApollo(
  initialState: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> {
  return useMemo(
    () =>
      initApolloClient({
        initialState,
        setAuthToken: process.env.APP_ENV !== 'test',
        useMock: process.env.USE_GRAPHQL_MOCK === 'true',
      }),
    [initialState],
  )
}

/**
 * Client used by 'graphql-codegen-apollo-next-ssr' through 'codegen.yml'.
 *
 * TODO: context is unused... maybe it should be used for more performance
 */
export const getApolloClient = (
  context?: unknown,
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> => {
  return initApolloClient({
    initialState,
    setAuthToken: process.env.APP_ENV !== 'test',
    useMock: process.env.USE_GRAPHQL_MOCK === 'true',
  })
}
