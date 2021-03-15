/* istanbul ignore file */

import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'

import { initApolloClient } from './apollo'

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
        setAuthToken: process.env.NODE_ENV !== 'test',
        useMock: process.env.MOCK_GRAPHQL_API === 'true',
      }),
    [initialState],
  )
}

/**
 * Client used by 'graphql-codegen-apollo-next-ssr' through 'codegen.yml'.
 */
export const getApolloClient = (
  context?: GetServerSidePropsContext<ParsedUrlQuery>,
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> =>
  initApolloClient({
    initialState,
    setAuthToken: process.env.NODE_ENV !== 'test',
    useMock: process.env.MOCK_GRAPHQL_API === 'true',
  })
