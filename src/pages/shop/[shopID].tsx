/* eslint-disable unicorn/filename-case */
import { useRouter } from 'next/router'
import React from 'react'

import Map from 'components/Map'
import SearchResults from 'components/SearchResults'
import ShopDetails from 'components/ShopDetails'
import ShopDetailsLayout from 'components/ShopDetailsLayout'
import { ShopSearchProvider } from 'contexts/shop-search'

function ShopDetailsPage(): React.ReactNode {
  const {
    query: { shopID },
  } = useRouter()

  return (
    <ShopSearchProvider>
      <ShopDetailsLayout
        left={<SearchResults />}
        center={<ShopDetails id={shopID as string} />}
        right={<Map />}
      />
    </ShopSearchProvider>
  )
}

export default ShopDetailsPage

/* eslint-enable unicorn/filename-case */
