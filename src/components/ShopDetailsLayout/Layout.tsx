import { Box, Container, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx'
import React from 'react'

import Topbar from './Layout/Topbar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    filledContainer: {
      padding: 0,
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    toolbar: theme.mixins.toolbar,
  }),
)

interface LayoutProps {
  withSearch?: boolean
  fillContent?: boolean
  children?: React.ReactNode
  withBackButton?: boolean
}

Layout.defaultProps = {
  withSearch: false,
  fillContent: false,
  children: null,
  withBackButton: false,
}

function Layout(props: LayoutProps): React.ReactElement {
  const { children, withSearch, fillContent, withBackButton } = props
  const classes = useStyles()

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Topbar withSearch={withSearch} withBackButton={withBackButton} />

      <Container
        className={clsx(classes.container, {
          [classes.filledContainer]: fillContent,
        })}
        maxWidth={fillContent ? false : 'lg'}
      >
        <main className={classes.main}>
          <div className={classes.toolbar} />

          {children}
        </main>
      </Container>
    </Box>
  )
}

export default Layout
