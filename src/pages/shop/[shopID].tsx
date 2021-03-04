/* eslint-disable unicorn/filename-case */
import { useRouter } from 'next/router'
import React from 'react'

import Map from 'components/Map'
import SearchResults from 'components/SearchResults'
import ShopDetails from 'components/ShopDetails'
import ShopDetailsLayout from 'components/ShopDetailsLayout'
import Layout from 'components/ShopDetailsLayout/Layout'
import { ShopSearchProvider } from 'contexts/shop-search'

function ShopDetailsPage(): React.ReactNode {
  const {
    query: { shopID },
  } = useRouter()

  return (
    <ShopSearchProvider>
      <Layout>
        <ShopDetails id={shopID as string} />
      </Layout>
    </ShopSearchProvider>
  )
}

export default ShopDetailsPage

/* eslint-enable unicorn/filename-case */
