import * as Types from './graphql'

import * as Operations from './graphql'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type React from 'react'
import { getApolloClient } from '../lib/next-with-apollo'
import type { NormalizedCacheObject } from '@apollo/client'

export async function getServerPageGetShops(
  options: Omit<Apollo.QueryOptions<Types.GetShopsQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetShopsQuery>({
    ...options,
    query: Operations.GetShopsDocument,
  })

  const apolloState = apolloClient.cache.extract()

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  }
}
export const useGetShops = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetShopsQuery, Types.GetShopsQueryVariables>,
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.GetShopsDocument, options)
}
export type PageGetShopsComp = React.FC<{
  data?: Types.GetShopsQuery
  error?: Apollo.ApolloError
}>
export const ssrGetShops = {
  getServerPage: getServerPageGetShops,

  usePage: useGetShops,
}
