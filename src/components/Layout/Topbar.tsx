import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
  Theme,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import {
  AccountCircle,
  Brightness4,
  Menu as MenuIcon,
} from '@material-ui/icons'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

import { AuthContext } from '../../lib/auth'
import { DarkModeContext } from '../../lib/mui'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    backgroundColor: theme.palette.background.paper,
  },
  menuTitle: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

function Topbar(): React.ReactElement {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const [darkMode, setDarkMode] = React.useContext(DarkModeContext)
  const handleDarkMode = (): void => {
    setDarkMode({
      isDarkMode: !darkMode.isDarkMode,
      auto: false,
    })
  }

  const [auth] = React.useContext(AuthContext)
  const isSignedIn = auth.default.getToken() !== ''
  const handleSignOut = (): void => {
    auth.default.setToken('')
    Router.push('/')
  }

  const [
    accountIconAnchorEl,
    setAccountIconAnchorEl,
  ] = React.useState<HTMLElement | null>(null)
  const handleAccountMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    setAccountIconAnchorEl(event.currentTarget)
  }
  const handleAccountMenuClose = (): void => {
    setAccountIconAnchorEl(null)
  }

  return (
    <AppBar className={classes.appBar} color="default">
      <Toolbar>
        <Link href="/" passHref>
          <MuiLink
            className={classes.menuTitle}
            variant="h5"
            color="textPrimary"
            underline="none"
            noWrap
          >
            {t('appTitle')}
          </MuiLink>
        </Link>
        <IconButton onClick={handleDarkMode} aria-label="Dark mode">
          <Brightness4 />
        </IconButton>
        <IconButton
          onClick={handleAccountMenuOpen}
          aria-label="Account menu"
          data-test-id="account-icon"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={accountIconAnchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!accountIconAnchorEl}
          onClose={handleAccountMenuClose}
          keepMounted
        >
          {isSignedIn ? (
            <MenuItem onClick={handleSignOut}>{t('logout')}</MenuItem>
          ) : (
            <div>
              <Link href="/login" passHref>
                <MenuItem component="a">{t('login')}</MenuItem>
              </Link>
              <Link href="/signup" passHref>
                <MenuItem component="a">{t('signup')}</MenuItem>
              </Link>
            </div>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
