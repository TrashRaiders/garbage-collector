import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material'
import { styled, Theme, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React from 'react'

import { Shops } from 'generated/graphql'

const PREFIX = 'ShopCard'

const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  details: `${PREFIX}-details`,
  distance: `${PREFIX}-distance`,
  locationIcon: `${PREFIX}-locationIcon`,
  thumbnail: `${PREFIX}-thumbnail`,
}

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },

  [`& .${classes.content}`]: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },

  [`& .${classes.details}`]: {
    marginTop: theme.spacing(1),
  },

  [`& .${classes.distance}`]: {
    display: 'flex',
    flexDirection: 'row',
  },

  [`& .${classes.locationIcon}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.thumbnail}`]: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: '50%',
    bottom: 0,
    filter: 'grayscale(100%)',
  },
}))

export interface ShopCardProps extends Omit<Shops, '__typename'> {
  className?: string
  id: Shops['shop_id']
}

function ShopCard(props: ShopCardProps): React.ReactElement {
  const { className, id, name, tags, address, pictures } = props
  const titlePic = Array.isArray(pictures) ? (pictures[0] as string) : ''

  const router = useRouter()
  const theme = useTheme()

  const onListItemClick = () => {
    router.push(`/shop/${id}`)
  }

  return (
    <StyledCard
      theme={theme}
      className={[classes.root, className].join(' ')}
      onClick={onListItemClick}
    >
      <Grid item xs={12}>
        {titlePic && (
          <div>
            <CardMedia className={classes.thumbnail} image={titlePic} />
          </div>
        )}

        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>

          <div>
            {tags?.map((value) => (
              <Chip label={value} size="small" key={`tag-${value}`} />
            ))}
          </div>

          <div className={classes.details}>
            <div className={classes.distance}>
              <LocationOnIcon
                className={classes.locationIcon}
                fontSize="small"
              />
              <Typography variant="body2">123m entfernt (PH)</Typography>
            </div>

            <Typography variant="body2">{`${address?.street}, ${address?.postalCode} ${address?.city}`}</Typography>
          </div>
        </CardContent>
      </Grid>
    </StyledCard>
  )
}

export default ShopCard
