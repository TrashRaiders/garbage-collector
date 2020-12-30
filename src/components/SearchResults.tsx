import { ListItem, createStyles, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { useMeasure } from 'react-use'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

import { ShopSearchContext } from '../lib/shop-search'

import ShopCard from './SearchResults/ShopCard'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  }),
)

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props

  return (
    <ListItem style={style} key={index}>
      <ShopCard name={`${index}`} tags={[]} />
    </ListItem>
  )
}

function SearchResults(): React.ReactElement {
  const [shopSearch] = useContext(ShopSearchContext)
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
      >
        {renderRow}
      </FixedSizeList>
    </div>
  )
}

export default SearchResults
