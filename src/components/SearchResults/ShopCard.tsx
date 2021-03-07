import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { useRouter } from 'next/router'
import React from 'react'

import { Shops } from 'generated/graphql'

export interface ShopCardProps extends Omit<Shops, '__typename'> {
  className?: string
  id: Shops['shop_id']
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  details: {
    marginTop: theme.spacing(1),
  },
  distance: {
    display: 'flex',
    flexDirection: 'row',
  },
  locationIcon: {
    marginRight: theme.spacing(1),
  },
  thumbnail: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: '50%',
    bottom: 0,
    filter: 'grayscale(100%)',
  },
}))

function ShopCard(props: ShopCardProps): React.ReactElement {
  const { className, id, name, tags, address, pictures } = props
  const titlePic = Array.isArray(pictures) ? (pictures[0] as string) : ''

  const classes = useStyles()
  const router = useRouter()

  function onListItemClick() {
    router.push(`/shop/${id}`)
  }

  return (
    <Card
      className={[classes.root, className].join(' ')}
      onClick={onListItemClick}
    >
      <Grid item xs={12}>
        <div>
          <CardMedia className={classes.thumbnail} image={titlePic} />
        </div>

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

            <Typography variant="body2">{`${address?.street}, ${address?.zipcode} ${address?.city}`}</Typography>
          </div>
        </CardContent>
      </Grid>
    </Card>
  )
}

export default ShopCard
