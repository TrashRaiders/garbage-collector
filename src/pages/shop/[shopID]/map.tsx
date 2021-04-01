import React from 'react'

import Map from 'components/Map'
import Layout from 'components/ShopDetailsLayout/Layout'

function ShopMapPage(): React.ReactElement {
  return (
    <Layout withBackButton>
      <Map latitude={32.064171} longitude={34.7748068} />
    </Layout>
  )
}

export default ShopMapPage
