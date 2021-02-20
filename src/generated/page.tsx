import * as Types from './graphql'

import * as Operations from './graphql'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type React from 'react'
import { getApolloClient } from '../lib/next-with-apollo'

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
export async function getServerPageGetShop(
  options: Omit<Apollo.QueryOptions<Types.GetShopQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetShopQuery>({
    ...options,
    query: Operations.GetShopDocument,
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
export const useGetShop = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetShopQuery, Types.GetShopQueryVariables>,
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.GetShopDocument, options)
}
export type PageGetShopComp = React.FC<{
  data?: Types.GetShopQuery
  error?: Apollo.ApolloError
}>
export const ssrGetShop = {
  getServerPage: getServerPageGetShop,

  usePage: useGetShop,
}

export async function getServerPageGetUser(
  options: Omit<Apollo.QueryOptions<Types.GetUserQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetUserQuery>({
    ...options,
    query: Operations.GetUserDocument,
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
export const useGetUser = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.GetUserDocument, options)
}
export type PageGetUserComp = React.FC<{
  data?: Types.GetUserQuery
  error?: Apollo.ApolloError
}>
export const ssrGetUser = {
  getServerPage: getServerPageGetUser,

  usePage: useGetUser,
}
