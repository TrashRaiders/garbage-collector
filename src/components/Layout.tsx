import {
  Container,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

import Topbar from './Layout/Topbar'

const drawerWidth = 160

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  nav: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  container: {
    flexGrow: 1,
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}))

function Layout({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Topbar />

      <Container className={classes.container} maxWidth="lg">
        <main className={classes.main}>
          <div className={classes.toolbar} />
          {children}
        </main>
        <footer className={classes.footer} />
      </Container>
    </div>
  )
}

export default Layout
