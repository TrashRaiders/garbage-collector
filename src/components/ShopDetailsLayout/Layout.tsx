import { Box, Container, Theme } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import clsx from 'clsx'
import React from 'react'

import Topbar from './Layout/Topbar'

const PREFIX = 'Layout'

const classes = {
  container: `${PREFIX}-container`,
  filledContainer: `${PREFIX}-filledContainer`,
  main: `${PREFIX}-main`,
  toolbar: `${PREFIX}-toolbar`,
}

const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  [`& .${classes.container}`]: {
    flexGrow: 1,
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },

  [`& .${classes.filledContainer}`]: {
    padding: 0,
  },

  [`& .${classes.main}`]: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  [`& .${classes.toolbar}`]: theme.mixins.toolbar,
}))

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

  const theme = useTheme()

  return (
    <StyledBox theme={theme} sx={{ display: 'flex', minHeight: '100vh' }}>
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
    </StyledBox>
  )
}

export default Layout
