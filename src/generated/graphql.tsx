import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Float32: any
}

export type Float32FilterInput = {
  eq?: Maybe<Scalars['Float32']>
  gt?: Maybe<Scalars['Float32']>
  gte?: Maybe<Scalars['Float32']>
  in?: Maybe<Array<Maybe<Scalars['Float32']>>>
  lt?: Maybe<Scalars['Float32']>
  lte?: Maybe<Scalars['Float32']>
  notEq?: Maybe<Scalars['Float32']>
}

export type ListStringFilterInput = {
  contains?: Maybe<Scalars['String']>
  eq?: Maybe<Array<Maybe<Scalars['String']>>>
  gt?: Maybe<Array<Maybe<Scalars['String']>>>
  gte?: Maybe<Array<Maybe<Scalars['String']>>>
  in?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>
  lt?: Maybe<Array<Maybe<Scalars['String']>>>
  lte?: Maybe<Array<Maybe<Scalars['String']>>>
  notEq?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Mutation = {
  __typename?: 'Mutation'
  deleteshops?: Maybe<ShopsMutationResult>
  deleteshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  deleteuser?: Maybe<UserMutationResult>
  insertshops?: Maybe<ShopsMutationResult>
  insertshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  insertuser?: Maybe<UserMutationResult>
  updateshops?: Maybe<ShopsMutationResult>
  updateshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  updateuser?: Maybe<UserMutationResult>
}

export type MutationDeleteshopsArgs = {
  ifCondition?: Maybe<ShopsFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: ShopsInput
}

export type MutationDeleteshops_By_LocationArgs = {
  ifCondition?: Maybe<Shops_By_LocationFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: Shops_By_LocationInput
}

export type MutationDeleteuserArgs = {
  ifCondition?: Maybe<UserFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: UserInput
}

export type MutationInsertshopsArgs = {
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: ShopsInput
}

export type MutationInsertshops_By_LocationArgs = {
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: Shops_By_LocationInput
}

export type MutationInsertuserArgs = {
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: UserInput
}

export type MutationUpdateshopsArgs = {
  ifCondition?: Maybe<ShopsFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: ShopsInput
}

export type MutationUpdateshops_By_LocationArgs = {
  ifCondition?: Maybe<Shops_By_LocationFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: Shops_By_LocationInput
}

export type MutationUpdateuserArgs = {
  ifCondition?: Maybe<UserFilterInput>
  ifExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
  value: UserInput
}

export enum MutationConsistency {
  All = 'ALL',
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM',
}

export type MutationOptions = {
  consistency?: Maybe<MutationConsistency>
  serialConsistency?: Maybe<SerialConsistency>
  ttl?: Maybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  shops?: Maybe<ShopsResult>
  /** @deprecated No longer supported. Use root type instead. */
  shopsFilter?: Maybe<ShopsResult>
  shops_by_location?: Maybe<Shops_By_LocationResult>
  /** @deprecated No longer supported. Use root type instead. */
  shops_by_locationFilter?: Maybe<Shops_By_LocationResult>
  user?: Maybe<UserResult>
  /** @deprecated No longer supported. Use root type instead. */
  userFilter?: Maybe<UserResult>
}

export type QueryShopsArgs = {
  filter?: Maybe<ShopsFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<ShopsOrder>>>
  value?: Maybe<ShopsInput>
}

export type QueryShopsFilterArgs = {
  filter?: Maybe<ShopsFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<ShopsOrder>>>
}

export type QueryShops_By_LocationArgs = {
  filter?: Maybe<Shops_By_LocationFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<Shops_By_LocationOrder>>>
  value?: Maybe<Shops_By_LocationInput>
}

export type QueryShops_By_LocationFilterArgs = {
  filter?: Maybe<Shops_By_LocationFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<Shops_By_LocationOrder>>>
}

export type QueryUserArgs = {
  filter?: Maybe<UserFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<UserOrder>>>
  value?: Maybe<UserInput>
}

export type QueryUserFilterArgs = {
  filter?: Maybe<UserFilterInput>
  options?: Maybe<QueryOptions>
  orderBy?: Maybe<Array<Maybe<UserOrder>>>
}

export enum QueryConsistency {
  All = 'ALL',
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM',
  LocalSerial = 'LOCAL_SERIAL',
  Serial = 'SERIAL',
}

export type QueryOptions = {
  consistency?: Maybe<QueryConsistency>
  limit?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  pageState?: Maybe<Scalars['String']>
}

export enum SerialConsistency {
  LocalSerial = 'LOCAL_SERIAL',
  Serial = 'SERIAL',
}

export type StringFilterInput = {
  eq?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  notEq?: Maybe<Scalars['String']>
}

export type Address_TypeUdt = {
  __typename?: 'address_typeUdt'
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  houseNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
}

export type Address_TypeUdtFilterInput = {
  eq?: Maybe<Address_TypeUdtInput>
  gt?: Maybe<Address_TypeUdtInput>
  gte?: Maybe<Address_TypeUdtInput>
  in?: Maybe<Array<Maybe<Address_TypeUdtInput>>>
  lt?: Maybe<Address_TypeUdtInput>
  lte?: Maybe<Address_TypeUdtInput>
  notEq?: Maybe<Address_TypeUdtInput>
}

export type Address_TypeUdtInput = {
  city: Scalars['String']
  country: Scalars['String']
  houseNumber: Scalars['String']
  postalCode: Scalars['String']
  street: Scalars['String']
}

export type Contact_TypeUdt = {
  __typename?: 'contact_typeUdt'
  facebook?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  whatsapp?: Maybe<Scalars['String']>
}

export type Contact_TypeUdtFilterInput = {
  eq?: Maybe<Contact_TypeUdtInput>
  gt?: Maybe<Contact_TypeUdtInput>
  gte?: Maybe<Contact_TypeUdtInput>
  in?: Maybe<Array<Maybe<Contact_TypeUdtInput>>>
  lt?: Maybe<Contact_TypeUdtInput>
  lte?: Maybe<Contact_TypeUdtInput>
  notEq?: Maybe<Contact_TypeUdtInput>
}

export type Contact_TypeUdtInput = {
  facebook?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  whatsapp?: Maybe<Scalars['String']>
}

export type Coordinates_TypeUdt = {
  __typename?: 'coordinates_typeUdt'
  latitude?: Maybe<Scalars['Float32']>
  longitude?: Maybe<Scalars['Float32']>
}

export type Coordinates_TypeUdtFilterInput = {
  eq?: Maybe<Coordinates_TypeUdtInput>
  gt?: Maybe<Coordinates_TypeUdtInput>
  gte?: Maybe<Coordinates_TypeUdtInput>
  in?: Maybe<Array<Maybe<Coordinates_TypeUdtInput>>>
  lt?: Maybe<Coordinates_TypeUdtInput>
  lte?: Maybe<Coordinates_TypeUdtInput>
  notEq?: Maybe<Coordinates_TypeUdtInput>
}

export type Coordinates_TypeUdtInput = {
  latitude: Scalars['Float32']
  longitude: Scalars['Float32']
}

export type Shops = {
  __typename?: 'shops'
  address?: Maybe<Address_TypeUdt>
  contact?: Maybe<Contact_TypeUdt>
  coordinates?: Maybe<Coordinates_TypeUdt>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>
  shop_id?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  type?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export type ShopsFilterInput = {
  address?: Maybe<Address_TypeUdtFilterInput>
  contact?: Maybe<Contact_TypeUdtFilterInput>
  coordinates?: Maybe<Coordinates_TypeUdtFilterInput>
  description?: Maybe<StringFilterInput>
  name?: Maybe<StringFilterInput>
  pictures?: Maybe<ListStringFilterInput>
  shop_id: StringFilterInput
  tags?: Maybe<ListStringFilterInput>
  type?: Maybe<StringFilterInput>
  website?: Maybe<StringFilterInput>
}

export type ShopsInput = {
  address?: Maybe<Address_TypeUdtInput>
  contact?: Maybe<Contact_TypeUdtInput>
  coordinates?: Maybe<Coordinates_TypeUdtInput>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>
  shop_id: Scalars['String']
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  type?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export type ShopsMutationResult = {
  __typename?: 'shopsMutationResult'
  applied?: Maybe<Scalars['Boolean']>
  value?: Maybe<Shops>
}

export enum ShopsOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CoordinatesAsc = 'coordinates_ASC',
  CoordinatesDesc = 'coordinates_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PicturesAsc = 'pictures_ASC',
  PicturesDesc = 'pictures_DESC',
  ShopIdAsc = 'shop_id_ASC',
  ShopIdDesc = 'shop_id_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
}

export type ShopsResult = {
  __typename?: 'shopsResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<Shops>>
}

export type Shops_By_Location = {
  __typename?: 'shops_by_location'
  latitude?: Maybe<Scalars['Float32']>
  longitude?: Maybe<Scalars['Float32']>
  shop_id?: Maybe<Scalars['String']>
}

export type Shops_By_LocationFilterInput = {
  latitude?: Maybe<Float32FilterInput>
  longitude?: Maybe<Float32FilterInput>
  shop_id: StringFilterInput
}

export type Shops_By_LocationInput = {
  latitude?: Maybe<Scalars['Float32']>
  longitude?: Maybe<Scalars['Float32']>
  shop_id: Scalars['String']
}

export type Shops_By_LocationMutationResult = {
  __typename?: 'shops_by_locationMutationResult'
  applied?: Maybe<Scalars['Boolean']>
  value?: Maybe<Shops_By_Location>
}

export enum Shops_By_LocationOrder {
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  ShopIdAsc = 'shop_id_ASC',
  ShopIdDesc = 'shop_id_DESC',
}

export type Shops_By_LocationResult = {
  __typename?: 'shops_by_locationResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<Shops_By_Location>>
}

export type User = {
  __typename?: 'user'
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

export type UserFilterInput = {
  email?: Maybe<StringFilterInput>
  name?: Maybe<StringFilterInput>
  user_id: StringFilterInput
}

export type UserInput = {
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  user_id: Scalars['String']
}

export type UserMutationResult = {
  __typename?: 'userMutationResult'
  applied?: Maybe<Scalars['Boolean']>
  value?: Maybe<User>
}

export enum UserOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UserIdAsc = 'user_id_ASC',
  UserIdDesc = 'user_id_DESC',
}

export type UserResult = {
  __typename?: 'userResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<User>>
}

export type CreateShopMutationVariables = Exact<{
  value: ShopsInput
}>

export type CreateShopMutation = {
  __typename?: 'Mutation'
  insertshops?:
    | {
        __typename?: 'shopsMutationResult'
        applied?: boolean | null | undefined
      }
    | null
    | undefined
}

export type GetShopsQueryVariables = Exact<{ [key: string]: never }>

export type GetShopsQuery = {
  __typename?: 'Query'
  shops?:
    | {
        __typename?: 'shopsResult'
        values?:
          | Array<{
              __typename?: 'shops'
              name?: string | null | undefined
              type?: string | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              id?: string | null | undefined
            }>
          | null
          | undefined
      }
    | null
    | undefined
}

export type GetShopQueryVariables = Exact<{
  id: Scalars['String']
}>

export type GetShopQuery = {
  __typename?: 'Query'
  shops?:
    | {
        __typename?: 'shopsResult'
        values?:
          | Array<{
              __typename?: 'shops'
              name?: string | null | undefined
              description?: string | null | undefined
              pictures?: Array<string | null | undefined> | null | undefined
              id?: string | null | undefined
            }>
          | null
          | undefined
      }
    | null
    | undefined
}

export type CreateUserMutationVariables = Exact<{
  value: UserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  insertuser?:
    | {
        __typename?: 'userMutationResult'
        value?:
          | {
              __typename?: 'user'
              user_id?: string | null | undefined
              name?: string | null | undefined
              email?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type GetUserQueryVariables = Exact<{
  value: UserInput
}>

export type GetUserQuery = {
  __typename?: 'Query'
  user?:
    | {
        __typename?: 'userResult'
        values?:
          | Array<{
              __typename?: 'user'
              name?: string | null | undefined
              email?: string | null | undefined
            }>
          | null
          | undefined
      }
    | null
    | undefined
}

export const CreateShopDocument = gql`
  mutation CreateShop($value: shopsInput!) {
    insertshops(value: $value, ifNotExists: true) {
      applied
    }
  }
`
export type CreateShopMutationFn = Apollo.MutationFunction<
  CreateShopMutation,
  CreateShopMutationVariables
>

/**
 * __useCreateShopMutation__
 *
 * To run a mutation, you first call `useCreateShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopMutation, { data, loading, error }] = useCreateShopMutation({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateShopMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateShopMutation,
    CreateShopMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateShopMutation, CreateShopMutationVariables>(
    CreateShopDocument,
    options,
  )
}
export type CreateShopMutationHookResult = ReturnType<
  typeof useCreateShopMutation
>
export type CreateShopMutationResult = Apollo.MutationResult<CreateShopMutation>
export type CreateShopMutationOptions = Apollo.BaseMutationOptions<
  CreateShopMutation,
  CreateShopMutationVariables
>
export const GetShopsDocument = gql`
  query GetShops {
    shops {
      values {
        id: shop_id
        name
        type
        tags
      }
    }
  }
`

/**
 * __useGetShopsQuery__
 *
 * To run a query within a React component, call `useGetShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShopsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetShopsQuery, GetShopsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetShopsQuery, GetShopsQueryVariables>(
    GetShopsDocument,
    options,
  )
}
export function useGetShopsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopsQuery,
    GetShopsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetShopsQuery, GetShopsQueryVariables>(
    GetShopsDocument,
    options,
  )
}
export type GetShopsQueryHookResult = ReturnType<typeof useGetShopsQuery>
export type GetShopsLazyQueryHookResult = ReturnType<
  typeof useGetShopsLazyQuery
>
export type GetShopsQueryResult = Apollo.QueryResult<
  GetShopsQuery,
  GetShopsQueryVariables
>
export const GetShopDocument = gql`
  query GetShop($id: String!) {
    shops(value: { shop_id: $id }) {
      values {
        id: shop_id
        name
        description
        pictures
      }
    }
  }
`

/**
 * __useGetShopQuery__
 *
 * To run a query within a React component, call `useGetShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShopQuery(
  baseOptions: Apollo.QueryHookOptions<GetShopQuery, GetShopQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetShopQuery, GetShopQueryVariables>(
    GetShopDocument,
    options,
  )
}
export function useGetShopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopQuery,
    GetShopQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetShopQuery, GetShopQueryVariables>(
    GetShopDocument,
    options,
  )
}
export type GetShopQueryHookResult = ReturnType<typeof useGetShopQuery>
export type GetShopLazyQueryHookResult = ReturnType<typeof useGetShopLazyQuery>
export type GetShopQueryResult = Apollo.QueryResult<
  GetShopQuery,
  GetShopQueryVariables
>
export const CreateUserDocument = gql`
  mutation CreateUser($value: userInput!) {
    insertuser(value: $value) {
      value {
        user_id
        name
        email
      }
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const GetUserDocument = gql`
  query GetUser($value: userInput!) {
    user(value: $value) {
      values {
        name
        email
      }
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
