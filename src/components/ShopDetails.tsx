import {
  GridList,
  GridListTile,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import ShopCard, { ShopCardProps } from './SearchResults/ShopCard'

import mockShops from 'contexts/__fixtures__/shops'
import { useShopSearch } from 'contexts/shop-search'
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

  const [shopSearch] = useShopSearch()
  const { result: shops } = shopSearch
  const shop = shops.find((s) => s.id === id)

  const shopCardprops: ShopCardProps = {
    id: shop?.id ?? '',
    name: shop?.name ?? '',
    address: shop?.address,
    tags: shop?.tags,
    pictures: shop?.pictures,
  }

  return <ShopCard {...shopCardprops} />
}

export default ShopDetails
