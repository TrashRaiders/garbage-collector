import React, { useEffect, useMemo, useState } from 'react'
import { createStateContext, useDebounce } from 'react-use'

import shopsMock from './__fixtures__/shops'

type ShopTag = string

interface ShopResult {
  id?: string | null
  name?: string | null
  description?: string | null
  pictures?: (string | null)[] | null
  tags?: ShopTag[] | null
  address?: {
    city?: string | null
    street?: string | null
    zipcode?: number | null
  }

  [key: string]: unknown
}

const [useShopSearch, ShopSearchInnerProvider] = createStateContext({
  searchTerm: '',
  filter: {},
  result: shopsMock.shops?.values as ShopResult[],
})

function ShopSearchConsumer(props: {
  children?: React.ReactNode
}): React.ReactElement {
  const [shopSearch, setShopSearch] = useShopSearch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...initialDebouncedSearchOptions } = shopSearch

  const [debouncedSearchOptions, setDebouncedSearchOptions] = useState(
    initialDebouncedSearchOptions,
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, cancel] = useDebounce(
    () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { result: newResult, ...newDebouncedSearchOptions } = shopSearch
      setDebouncedSearchOptions(newDebouncedSearchOptions)
    },
    500,
    [shopSearch.searchTerm],
  )

  useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result: newResult, ...newDebouncedSearchOptions } = shopSearch
    setDebouncedSearchOptions(newDebouncedSearchOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopSearch.filter])

  useEffect(() => {
    const searchResult = mockFetchResults(debouncedSearchOptions.searchTerm)

    setShopSearch((prevOptions) => ({
      ...prevOptions,
      result: searchResult,
    }))
  }, [debouncedSearchOptions, setShopSearch])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <React.Fragment {...props} />
}

function ShopSearchProvider(props: {
  children?: React.ReactNode
}): React.ReactElement {
  return (
    <ShopSearchInnerProvider>
      <ShopSearchConsumer {...props} />
    </ShopSearchInnerProvider>
  )
}

function mockFetchResults(searchTerm: string): ShopResult[] {
  const shops = shopsMock.shops?.values || []

  return searchTerm.length > 0
    ? shops.filter((shop) =>
        shop?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : shops
}

export { useShopSearch, ShopSearchProvider }
