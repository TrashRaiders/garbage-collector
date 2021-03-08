import { Box, Button, CardMedia, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MapIcon from '@material-ui/icons/Map'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import { useShopSearch } from 'contexts/shop-search'

const useStyles = makeStyles((theme: Theme) => ({
  distance: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
  },
  locationIcon: {
    marginRight: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mapButton: {
    marginTop: theme.spacing(3),
  },
  shopName: {
    marginTop: theme.spacing(2),
  },
}))

interface ShopDetailsProps {
  id: string
}

function ShopDetails(props: ShopDetailsProps): React.ReactElement {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const { id } = props

  const [shopSearch] = useShopSearch()
  const { result: shops } = shopSearch
  const shop = shops.find((s) => s.id === id)

  const titlePic = Array.isArray(shop?.pictures)
    ? (shop?.pictures[0] as string)
    : ''

  return (
    <Box>
      <CardMedia className={classes.media} image={titlePic} />
      <Typography className={classes.shopName} variant="h6">
        {shop?.name}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
      >{`${shop?.address?.street} ${shop?.address?.postalCode} ${shop?.address?.city}`}</Typography>
      <div className={classes.distance}>
        <LocationOnIcon
          className={classes.locationIcon}
          fontSize="small"
          color="secondary"
        />
        <Typography variant="body2" color="textSecondary">
          123m entfernt (PH)
        </Typography>
      </div>
      <Button
        className={classes.mapButton}
        startIcon={<MapIcon />}
        variant="contained"
        color="secondary"
      >
        {t('showOnMapButton')}
      </Button>
    </Box>
  )
}

export default ShopDetails
