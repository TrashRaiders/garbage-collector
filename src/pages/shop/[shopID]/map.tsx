import React from 'react'

import Map from 'components/Map'
import Layout from 'components/ShopDetailsLayout/Layout'

function ShopMapPage(): React.ReactElement {
  return (
    <Layout withBackButton>
      {/* TODO lat/lng should come from the shop data */}
      <Map latitude={52.520008} longitude={13.404954} />
    </Layout>
  )
}

export default ShopMapPage
