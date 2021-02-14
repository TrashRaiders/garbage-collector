import { ListItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useMeasure } from 'react-use'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

import ShopCard from './SearchResults/ShopCard'

import { useShopSearch } from 'contexts/shop-search'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  }),
)

function renderRow(props: ListChildComponentProps) {
  const { index, style, data: shops } = props

  return (
    <ListItem style={style} key={index}>
      <ShopCard id={shops[index].id} name={shops[index].name} tags={[]} />
    </ListItem>
  )
}

function SearchResults(): React.ReactElement {
  const [shopSearch] = useShopSearch()
  const { result: shops } = shopSearch

  const classes = useStyles()

  const [ref, { height }] = useMeasure()

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      className={classes.root}
    >
      <FixedSizeList
        height={height}
        itemSize={200}
        width="100%"
        itemCount={shops.length}
        itemData={shops}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  )
}

export default SearchResults
