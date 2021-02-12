import React, { useEffect, useMemo, useState } from 'react'
import { createStateContext, useDebounce } from 'react-use'

type ShopTag = string

interface ShopResult {
  id: string
  name: string
  tags: ShopTag[]
}

const [useShopSearch, ShopSearchInnerProvider] = createStateContext({
  searchTerm: '',
  filter: {},
  result: [] as ShopResult[],
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
  const chars = searchTerm.split('')

  return chars.map((char, index) => {
    return {
      id: `${index}`,
      name: char,
      tags: [],
    }
  })
}

export { useShopSearch, ShopSearchProvider }
