/* eslint-disable unicorn/filename-case */
import { useRouter } from 'next/router'
import React from 'react'

import ShopDetails from 'components/ShopDetails'
import Layout from 'components/ShopDetailsLayout/Layout'
import { ShopSearchProvider } from 'contexts/shop-search'

function ShopDetailsPage(): React.ReactNode {
  const {
    query: { shopID },
  } = useRouter()

  return (
    <ShopSearchProvider>
      <Layout withBackToSearchButton>
        <ShopDetails id={shopID as string} />
      </Layout>
    </ShopSearchProvider>
  )
}

export default ShopDetailsPage

/* eslint-enable unicorn/filename-case */
