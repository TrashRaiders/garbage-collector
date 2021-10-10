/* istanbul ignore file */

import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import {
  NextApiRequestCookies,
  /* eslint-disable import/no-unresolved */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This path is generated at build time and conflicts otherwise
} from 'next-server/server/api-utils'
import { IncomingMessage } from 'node:http'
/* eslint-enable import/no-unresolved */
import { useMemo } from 'react'

import { initApolloClient } from './apollo'
import environment from './environment'

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies
  }
}

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
        setAuthToken: environment.NODE_ENV !== 'test',
        useMock: environment.MOCK_GRAPHQL_API === true,
      }),
    [initialState],
  )
}

/**
 * Client used by 'graphql-codegen-apollo-next-ssr' through 'codegen.yml'.
 */
export const getApolloClient = (
  context?: ApolloClientContext,
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> =>
  initApolloClient({
    initialState,
    setAuthToken: environment.NODE_ENV !== 'test',
    useMock: environment.MOCK_GRAPHQL_API === true,
  })
