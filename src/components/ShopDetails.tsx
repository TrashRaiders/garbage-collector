import {
  GridList,
  GridListTile,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import mockShops from 'contexts/__fixtures__/shops'
import { useGetShopQuery } from 'generated/graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    flexDirection: 'column',
    width: '100%',
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

interface ShopDetailsProps {
  id: string
}

function ShopDetails(props: ShopDetailsProps): React.ReactElement {
  const classes = useStyles()
  const { id } = props

  const { loading, error, data } = useGetShopQuery({ variables: { id } })

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>`Error!! ${error.message}`</div>
  }
  // just get mock data, remove
  const mockShop = mockShops.shops?.values?.find((shop) => shop.id === id)
  const shop = mockShop || data?.shops?.values?.[0]

  // TODO: create git
  const tileData =
    shop?.pictures?.map((url: string | null) => ({
      img: url,
      title: 'Image',
      author: 'author',
      cols: 2,
    })) || []

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5">
        <pre>{JSON.stringify(shop, null, 2)}</pre>
      </Typography>

      <Typography variant="body1">Id: {id}</Typography>

      <Typography variant="body1" />

      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => {
          if (tile.img) {
            return (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            )
          }
          return null
        })}
      </GridList>
    </Paper>
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

export default ShopDetails
