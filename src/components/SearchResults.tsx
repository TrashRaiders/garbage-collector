import { ListItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useMeasure } from 'react-use'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

import { useShopSearch } from 'contexts/shop-search'

import ShopCard from './SearchResults/ShopCard'

const PREFIX = 'SearchResults'

const classes = {
  root: `${PREFIX}-root`,
}

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    width: '100%',
    height: '100%',
  },
}))

function renderRow(props: ListChildComponentProps) {
  const { index, style, data: shops } = props

  return (
    <ListItem style={style} key={index}>
      <ShopCard
        id={shops[index].id}
        name={shops[index].name}
        address={shops[index].address}
        pictures={shops[index].pictures[0]}
        tags={shops[index].tags}
      />
    </ListItem>
  )
}

function SearchResults(): React.ReactElement {
  const [shopSearch] = useShopSearch()
  const { result: shops } = shopSearch

  const [ref, { height }] = useMeasure()

  return (
    <Root
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      className={classes.root}
    >
      <FixedSizeList
        height={height}
        itemSize={175}
        width="100%"
        itemCount={shops.length}
        itemData={shops}
      >
        {renderRow}
      </FixedSizeList>
    </Root>
  )
}

export default SearchResults
