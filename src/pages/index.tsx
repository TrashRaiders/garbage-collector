import { Paper, Theme, makeStyles } from '@material-ui/core'
import React from 'react'

import Layout from '../components/Layout'

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    height: 200,
  },
}))

function IndexPage(): React.ReactElement {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.page}>
        <Paper className={classes.paper} />
        <Paper className={classes.paper} />
        <Paper className={classes.paper} />
        <Paper className={classes.paper} />
      </div>
    </Layout>
  )
}

export default IndexPage
