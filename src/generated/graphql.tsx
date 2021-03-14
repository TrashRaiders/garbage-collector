import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
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
  notEq?: Maybe<Scalars['Float32']>
  gt?: Maybe<Scalars['Float32']>
  gte?: Maybe<Scalars['Float32']>
  lt?: Maybe<Scalars['Float32']>
  lte?: Maybe<Scalars['Float32']>
  in?: Maybe<Array<Maybe<Scalars['Float32']>>>
}

export type ListStringFilterInput = {
  eq?: Maybe<Array<Maybe<Scalars['String']>>>
  notEq?: Maybe<Array<Maybe<Scalars['String']>>>
  gt?: Maybe<Array<Maybe<Scalars['String']>>>
  gte?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Array<Maybe<Scalars['String']>>>
  lte?: Maybe<Array<Maybe<Scalars['String']>>>
  in?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>
  contains?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  deleteshops?: Maybe<ShopsMutationResult>
  insertshops?: Maybe<ShopsMutationResult>
  updateshops?: Maybe<ShopsMutationResult>
  deleteshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  insertshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  updateshops_by_location?: Maybe<Shops_By_LocationMutationResult>
  deleteuser?: Maybe<UserMutationResult>
  insertuser?: Maybe<UserMutationResult>
  updateuser?: Maybe<UserMutationResult>
}

export type MutationDeleteshopsArgs = {
  value: ShopsInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<ShopsFilterInput>
  options?: Maybe<MutationOptions>
}

export type MutationInsertshopsArgs = {
  value: ShopsInput
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
}

export type MutationUpdateshopsArgs = {
  value: ShopsInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<ShopsFilterInput>
  options?: Maybe<MutationOptions>
}

export type MutationDeleteshops_By_LocationArgs = {
  value: Shops_By_LocationInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<Shops_By_LocationFilterInput>
  options?: Maybe<MutationOptions>
}

export type MutationInsertshops_By_LocationArgs = {
  value: Shops_By_LocationInput
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
}

export type MutationUpdateshops_By_LocationArgs = {
  value: Shops_By_LocationInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<Shops_By_LocationFilterInput>
  options?: Maybe<MutationOptions>
}

export type MutationDeleteuserArgs = {
  value: UserInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<UserFilterInput>
  options?: Maybe<MutationOptions>
}

export type MutationInsertuserArgs = {
  value: UserInput
  ifNotExists?: Maybe<Scalars['Boolean']>
  options?: Maybe<MutationOptions>
}

export type MutationUpdateuserArgs = {
  value: UserInput
  ifExists?: Maybe<Scalars['Boolean']>
  ifCondition?: Maybe<UserFilterInput>
  options?: Maybe<MutationOptions>
}

export enum MutationConsistency {
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM',
  All = 'ALL',
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
  value?: Maybe<ShopsInput>
  filter?: Maybe<ShopsFilterInput>
  orderBy?: Maybe<Array<Maybe<ShopsOrder>>>
  options?: Maybe<QueryOptions>
}

export type QueryShopsFilterArgs = {
  filter?: Maybe<ShopsFilterInput>
  orderBy?: Maybe<Array<Maybe<ShopsOrder>>>
  options?: Maybe<QueryOptions>
}

export type QueryShops_By_LocationArgs = {
  value?: Maybe<Shops_By_LocationInput>
  filter?: Maybe<Shops_By_LocationFilterInput>
  orderBy?: Maybe<Array<Maybe<Shops_By_LocationOrder>>>
  options?: Maybe<QueryOptions>
}

export type QueryShops_By_LocationFilterArgs = {
  filter?: Maybe<Shops_By_LocationFilterInput>
  orderBy?: Maybe<Array<Maybe<Shops_By_LocationOrder>>>
  options?: Maybe<QueryOptions>
}

export type QueryUserArgs = {
  value?: Maybe<UserInput>
  filter?: Maybe<UserFilterInput>
  orderBy?: Maybe<Array<Maybe<UserOrder>>>
  options?: Maybe<QueryOptions>
}

export type QueryUserFilterArgs = {
  filter?: Maybe<UserFilterInput>
  orderBy?: Maybe<Array<Maybe<UserOrder>>>
  options?: Maybe<QueryOptions>
}

export enum QueryConsistency {
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM',
  All = 'ALL',
  Serial = 'SERIAL',
  LocalSerial = 'LOCAL_SERIAL',
}

export type QueryOptions = {
  consistency?: Maybe<QueryConsistency>
  limit?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  pageState?: Maybe<Scalars['String']>
}

export enum SerialConsistency {
  Serial = 'SERIAL',
  LocalSerial = 'LOCAL_SERIAL',
}

export type StringFilterInput = {
  eq?: Maybe<Scalars['String']>
  notEq?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Address_TypeUdt = {
  __typename?: 'address_typeUdt'
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  houseNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
}

export type Address_TypeUdtFilterInput = {
  eq?: Maybe<Address_TypeUdtInput>
  notEq?: Maybe<Address_TypeUdtInput>
  gt?: Maybe<Address_TypeUdtInput>
  gte?: Maybe<Address_TypeUdtInput>
  lt?: Maybe<Address_TypeUdtInput>
  lte?: Maybe<Address_TypeUdtInput>
  in?: Maybe<Array<Maybe<Address_TypeUdtInput>>>
}

export type Address_TypeUdtInput = {
  city: Scalars['String']
  country: Scalars['String']
  street: Scalars['String']
  houseNumber: Scalars['String']
  postalCode: Scalars['String']
}

export type Contact_TypeUdt = {
  __typename?: 'contact_typeUdt'
  phone?: Maybe<Scalars['String']>
  whatsapp?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
}

export type Contact_TypeUdtFilterInput = {
  eq?: Maybe<Contact_TypeUdtInput>
  notEq?: Maybe<Contact_TypeUdtInput>
  gt?: Maybe<Contact_TypeUdtInput>
  gte?: Maybe<Contact_TypeUdtInput>
  lt?: Maybe<Contact_TypeUdtInput>
  lte?: Maybe<Contact_TypeUdtInput>
  in?: Maybe<Array<Maybe<Contact_TypeUdtInput>>>
}

export type Contact_TypeUdtInput = {
  phone?: Maybe<Scalars['String']>
  whatsapp?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
}

export type Coordinates_TypeUdt = {
  __typename?: 'coordinates_typeUdt'
  latitude?: Maybe<Scalars['Float32']>
  longitude?: Maybe<Scalars['Float32']>
}

export type Coordinates_TypeUdtFilterInput = {
  eq?: Maybe<Coordinates_TypeUdtInput>
  notEq?: Maybe<Coordinates_TypeUdtInput>
  gt?: Maybe<Coordinates_TypeUdtInput>
  gte?: Maybe<Coordinates_TypeUdtInput>
  lt?: Maybe<Coordinates_TypeUdtInput>
  lte?: Maybe<Coordinates_TypeUdtInput>
  in?: Maybe<Array<Maybe<Coordinates_TypeUdtInput>>>
}

export type Coordinates_TypeUdtInput = {
  latitude: Scalars['Float32']
  longitude: Scalars['Float32']
}

export type Shops = {
  __typename?: 'shops'
  shop_id?: Maybe<Scalars['String']>
  address?: Maybe<Address_TypeUdt>
  contact?: Maybe<Contact_TypeUdt>
  coordinates?: Maybe<Coordinates_TypeUdt>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  type?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export type ShopsFilterInput = {
  shop_id: StringFilterInput
  address?: Maybe<Address_TypeUdtFilterInput>
  contact?: Maybe<Contact_TypeUdtFilterInput>
  coordinates?: Maybe<Coordinates_TypeUdtFilterInput>
  description?: Maybe<StringFilterInput>
  name?: Maybe<StringFilterInput>
  pictures?: Maybe<ListStringFilterInput>
  tags?: Maybe<ListStringFilterInput>
  type?: Maybe<StringFilterInput>
  website?: Maybe<StringFilterInput>
}

export type ShopsInput = {
  shop_id: Scalars['String']
  address?: Maybe<Address_TypeUdtInput>
  contact?: Maybe<Contact_TypeUdtInput>
  coordinates?: Maybe<Coordinates_TypeUdtInput>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>
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
  ShopIdDesc = 'shop_id_DESC',
  ShopIdAsc = 'shop_id_ASC',
  AddressDesc = 'address_DESC',
  AddressAsc = 'address_ASC',
  ContactDesc = 'contact_DESC',
  ContactAsc = 'contact_ASC',
  CoordinatesDesc = 'coordinates_DESC',
  CoordinatesAsc = 'coordinates_ASC',
  DescriptionDesc = 'description_DESC',
  DescriptionAsc = 'description_ASC',
  NameDesc = 'name_DESC',
  NameAsc = 'name_ASC',
  PicturesDesc = 'pictures_DESC',
  PicturesAsc = 'pictures_ASC',
  TagsDesc = 'tags_DESC',
  TagsAsc = 'tags_ASC',
  TypeDesc = 'type_DESC',
  TypeAsc = 'type_ASC',
  WebsiteDesc = 'website_DESC',
  WebsiteAsc = 'website_ASC',
}

export type ShopsResult = {
  __typename?: 'shopsResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<Shops>>
}

export type Shops_By_Location = {
  __typename?: 'shops_by_location'
  longitude?: Maybe<Scalars['Float32']>
  latitude?: Maybe<Scalars['Float32']>
  shop_id?: Maybe<Scalars['String']>
}

export type Shops_By_LocationFilterInput = {
  longitude?: Maybe<Float32FilterInput>
  latitude?: Maybe<Float32FilterInput>
  shop_id: StringFilterInput
}

export type Shops_By_LocationInput = {
  longitude?: Maybe<Scalars['Float32']>
  latitude?: Maybe<Scalars['Float32']>
  shop_id: Scalars['String']
}

export type Shops_By_LocationMutationResult = {
  __typename?: 'shops_by_locationMutationResult'
  applied?: Maybe<Scalars['Boolean']>
  value?: Maybe<Shops_By_Location>
}

export enum Shops_By_LocationOrder {
  LongitudeDesc = 'longitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LatitudeAsc = 'latitude_ASC',
  ShopIdDesc = 'shop_id_DESC',
  ShopIdAsc = 'shop_id_ASC',
}

export type Shops_By_LocationResult = {
  __typename?: 'shops_by_locationResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<Shops_By_Location>>
}

export type User = {
  __typename?: 'user'
  user_id?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type UserFilterInput = {
  user_id: StringFilterInput
  email?: Maybe<StringFilterInput>
  name?: Maybe<StringFilterInput>
}

export type UserInput = {
  user_id: Scalars['String']
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type UserMutationResult = {
  __typename?: 'userMutationResult'
  applied?: Maybe<Scalars['Boolean']>
  value?: Maybe<User>
}

export enum UserOrder {
  UserIdDesc = 'user_id_DESC',
  UserIdAsc = 'user_id_ASC',
  EmailDesc = 'email_DESC',
  EmailAsc = 'email_ASC',
  NameDesc = 'name_DESC',
  NameAsc = 'name_ASC',
}

export type UserResult = {
  __typename?: 'userResult'
  pageState?: Maybe<Scalars['String']>
  values?: Maybe<Array<User>>
}

export type CreateShopMutationVariables = Exact<{
  value: ShopsInput
}>

export type CreateShopMutation = { __typename?: 'Mutation' } & {
  insertshops?: Maybe<
    { __typename?: 'shopsMutationResult' } & {
      value?: Maybe<{ __typename?: 'shops' } & Pick<Shops, 'shop_id'>>
    }
  >
}

export type GetShopsQueryVariables = Exact<{ [key: string]: never }>

export type GetShopsQuery = { __typename?: 'Query' } & {
  shops?: Maybe<
    { __typename?: 'shopsResult' } & {
      values?: Maybe<
        Array<
          { __typename?: 'shops' } & Pick<Shops, 'name' | 'type' | 'tags'> & {
              id: Shops['shop_id']
            }
        >
      >
    }
  >
}

export type GetShopQueryVariables = Exact<{
  id: Scalars['String']
}>

export type GetShopQuery = { __typename?: 'Query' } & {
  shops?: Maybe<
    { __typename?: 'shopsResult' } & {
      values?: Maybe<
        Array<
          { __typename?: 'shops' } & Pick<
            Shops,
            'name' | 'description' | 'pictures'
          > & { id: Shops['shop_id'] }
        >
      >
    }
  >
}

export type CreateUserMutationVariables = Exact<{
  value: UserInput
}>

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  insertuser?: Maybe<
    { __typename?: 'userMutationResult' } & {
      value?: Maybe<
        { __typename?: 'user' } & Pick<User, 'user_id' | 'name' | 'email'>
      >
    }
  >
}

export type GetUserQueryVariables = Exact<{
  value: UserInput
}>

export type GetUserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'userResult' } & {
      values?: Maybe<
        Array<{ __typename?: 'user' } & Pick<User, 'name' | 'email'>>
      >
    }
  >
}

export const CreateShopDocument = gql`
  mutation CreateShop($value: shopsInput!) {
    insertshops(value: $value) {
      value {
        shop_id
      }
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
  return Apollo.useMutation<CreateShopMutation, CreateShopMutationVariables>(
    CreateShopDocument,
    baseOptions,
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
  return Apollo.useQuery<GetShopsQuery, GetShopsQueryVariables>(
    GetShopsDocument,
    baseOptions,
  )
}
export function useGetShopsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopsQuery,
    GetShopsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetShopsQuery, GetShopsQueryVariables>(
    GetShopsDocument,
    baseOptions,
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
  return Apollo.useQuery<GetShopQuery, GetShopQueryVariables>(
    GetShopDocument,
    baseOptions,
  )
}
export function useGetShopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopQuery,
    GetShopQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetShopQuery, GetShopQueryVariables>(
    GetShopDocument,
    baseOptions,
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
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    baseOptions,
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
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions,
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions,
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
