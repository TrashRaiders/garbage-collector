import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { CSSProperties } from 'react'
import GoogleStaticMap from 'react-google-static'
import { useDebounce, useMeasure } from 'react-use'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY

const useStyles = makeStyles(() =>
  createStyles({
    mapWrapper: {
      textAlign: 'center',

      height: '100%',
      width: '100%',
    },
  }),
)

const mapStyle: CSSProperties = {
  height: 'auto',
  width: '100%',

  // without premium plan the image is 640x640 maximum
  maxHeight: 640,
  maxWidth: 640,
}

interface IMapProps {
  latitude: number
  longitude: number
}

function Map(props: IMapProps): React.ReactElement {
  const { latitude, longitude } = props

  const [ref, { height, width }] = useMeasure<HTMLDivElement>()
  const [debouncedSize, setDebouncedSize] = React.useState({ height, width })

  useDebounce(
    () => {
      setDebouncedSize({ height, width })
    },
    2000,
    [height, width],
  )

  const classes = useStyles()

  if (!API_KEY) {
    throw new Error('No API key for Google Static Maps provided')
  }

  return (
    <div ref={ref} className={classes.mapWrapper}>
      <GoogleStaticMap
        apiKey={API_KEY}
        latitude={latitude}
        longitude={longitude}
        style={mapStyle}
        size={debouncedSize}
        zoom={16}
        iconUrl=""
      />
    </div>
  )
}

export default Map
