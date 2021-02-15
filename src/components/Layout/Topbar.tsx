import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
  Theme,
  Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle, AddLocation, Brightness4 } from '@material-ui/icons'
import { signOut, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { useCookie } from 'react-use'

import Search from './Topbar/Search'

import { THEME_COOKIE, useDarkMode } from 'contexts/dark-mode'

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
    backgroundColor: theme.palette.background.paper,
  },
}))

interface TopbarProps {
  withSearch?: boolean
}

function handleSignOut(): void {
  signOut()
}

function Topbar(props: TopbarProps): React.ReactElement {
  const { withSearch = false } = props

  const classes = useStyles()
  const { t } = useTranslation('common')
  const [session] = useSession()

  const [, updateThemeCookie] = useCookie(THEME_COOKIE)
  const [darkMode, setDarkMode] = useDarkMode()
  const handleDarkMode = (): void => {
    updateThemeCookie(!darkMode.isDarkMode ? 'dark' : 'light')
    setDarkMode({
      isDarkMode: !darkMode.isDarkMode,
      auto: false,
    })
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
          <MuiLink variant="h5" color="textPrimary" underline="none" noWrap>
            {t('appTitle')}
          </MuiLink>
        </Link>

        {withSearch && <Search className={classes.grow} />}

        <div className={classes.grow} />

        <Link href="/shop/new" passHref>
          <IconButton aria-label={t('addNewShop')}>
            <AddLocation />
          </IconButton>
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
          {session ? (
            <MenuItem onClick={handleSignOut}>{t('logout')}</MenuItem>
          ) : (
            <div>
              <Link href="/api/auth/signin" passHref>
                <MenuItem component="a">{t('login')}</MenuItem>
              </Link>
            </div>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
