import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Layout from '../components/Layout'
import SearchResults from '../components/SearchResults'
import { ShopSearchProvider } from '../lib/shop-search'

const useStyles = makeStyles(() => ({
  page: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}))

function IndexPage(): React.ReactElement {
  const classes = useStyles()

  return (
    <ShopSearchProvider>
      <Layout fillContent>
        <div className={classes.page}>
          <SearchResults />
        </div>
      </Layout>
    </ShopSearchProvider>
  )
}

export default IndexPage
