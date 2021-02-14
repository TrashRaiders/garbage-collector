import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Layout from './ShopDetailsLayout/Layout'

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
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
  const classes = useStyles()

  return (
    <Layout withSearch>
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
    </Layout>
  )
}

export default ShopDetailsLayout
