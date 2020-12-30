import { Theme, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'

import { ShopSearchContext } from '../lib/shop-search'

import ShopCard from './SearchResults/ShopCard'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    height: 200,
    maxHeight: 200,
  },
}))

function SearchResults(): React.ReactElement {
  const classes = useStyles()

  const [shopSearch] = useContext(ShopSearchContext)
  const { result: shops } = shopSearch

  return (
    <>
      {shops.map((shop) => (
        <ShopCard
          key={`shop-card-${shop.id}`}
          className={classes.card}
          name={shop.name}
          tags={shop.tags}
        />
      ))}
    </>
  )
}

export default SearchResults
