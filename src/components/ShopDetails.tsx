import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'
import { Box, Button, CardMedia, Link, Theme, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import { useShopSearch } from 'contexts/shop-search'

const PREFIX = 'ShopDetails'

const classes = {
  distance: `${PREFIX}-distance`,
  locationIcon: `${PREFIX}-locationIcon`,
  media: `${PREFIX}-media`,
  mapButton: `${PREFIX}-mapButton`,
  shopName: `${PREFIX}-shopName`,
}

const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  [`& .${classes.distance}`]: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
  },

  [`& .${classes.locationIcon}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.media}`]: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  [`& .${classes.mapButton}`]: {
    marginTop: theme.spacing(3),
  },

  [`& .${classes.shopName}`]: {
    marginTop: theme.spacing(2),
  },
}))

interface ShopDetailsProps {
  id: string
}

function ShopDetails(props: ShopDetailsProps): React.ReactElement {
  const { t } = useTranslation('common')
  const { id } = props

  const theme = useTheme()
  const {
    query: { shopID },
  } = useRouter()

  const [shopSearch] = useShopSearch()
  const { result: shops } = shopSearch
  const shop = shops.find((s) => s.id === id)

  const titlePic = Array.isArray(shop?.pictures)
    ? (shop?.pictures[0] as string)
    : ''

  return (
    <StyledBox theme={theme}>
      <CardMedia className={classes.media} image={titlePic} />
      <Typography className={classes.shopName} variant="h6">
        {shop?.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {`${shop?.address?.street} ${shop?.address?.postalCode} ${shop?.address?.city}`}
      </Typography>
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
      <Link href={`/shop/${shopID}/map`}>
        <Button
          className={classes.mapButton}
          startIcon={<MapIcon />}
          variant="contained"
          color="secondary"
        >
          {t('showOnMapButton')}
        </Button>
      </Link>
    </StyledBox>
  )
}

export default ShopDetails
