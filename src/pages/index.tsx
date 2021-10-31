import { styled } from '@mui/material/styles'
import React from 'react'

import SearchResults from 'components/SearchResults'
import Layout from 'components/ShopDetailsLayout/Layout'
import { ShopSearchProvider } from 'contexts/shop-search'

const StyledSearchResultsContainer = styled('div')(() => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}))

function IndexPage(): React.ReactElement {
  return (
    <ShopSearchProvider>
      <Layout withSearch fillContent>
        <StyledSearchResultsContainer>
          <SearchResults />
        </StyledSearchResultsContainer>
      </Layout>
    </ShopSearchProvider>
  )
}

export default IndexPage
