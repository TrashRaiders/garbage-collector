import React from 'react'

import Map from 'components/Map'

interface ShopPositionProps {
  latitude: number
  longitude: number
}

/**
 * Shows the position of the shop on a map
 *
 * @returns {React.ReactElement}
 */
function ShopPosition(props: ShopPositionProps): React.ReactElement {
  const { latitude, longitude } = props

  return <Map latitude={latitude} longitude={longitude} />
}

export default ShopPosition
