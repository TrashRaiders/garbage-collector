import { Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

import Layout from './ShopDetailsLayout/Layout'

const PREFIX = 'ShopDetailsLayout'

const classes = {
  container: `${PREFIX}-container`,
  grid: `${PREFIX}-grid`,
}

const StyledLayout = styled(Layout)(() => ({
  [`& .${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.grid}`]: {
    height: '100%',
  },
}))

interface SearchDetailsLayoutProps {
  left: React.ReactNode
  center: React.ReactNode
  right: React.ReactNode
}

function ShopDetailsLayout(
  props: SearchDetailsLayoutProps,
): React.ReactElement {
  const { left, center, right } = props

  return (
    <StyledLayout withSearch>
      <Container
        className={classes.container}
        data-testid="shop-details-layout"
      >
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={4}>
            {left}
          </Grid>

          <Grid item xs={4}>
            {center}
          </Grid>

          <Grid item xs={4}>
            {right}
          </Grid>
        </Grid>
      </Container>
    </StyledLayout>
  )
}

export default ShopDetailsLayout
