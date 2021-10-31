import { AccountCircle, AddLocation, Brightness4 } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  AppBar,
  Box,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useCookie } from 'react-use'

import { THEME_COOKIE, useDarkMode } from 'contexts/dark-mode'

import Search from './Topbar/Search'

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
  withBackButton?: boolean
}

Topbar.defaultProps = {
  withSearch: false,
  withBackButton: false,
}
function handleSignOut(): void {
  signOut()
}

function Topbar(props: TopbarProps): React.ReactElement {
  const { withSearch = false, withBackButton = false } = props

  const classes = useStyles()
  const { t } = useTranslation('common')
  const [session] = useSession()
  const router = useRouter()

  const [, updateThemeCookie] = useCookie(THEME_COOKIE)
  const [darkMode, setDarkMode] = useDarkMode()
  const handleDarkMode = (): void => {
    updateThemeCookie(!darkMode.isDarkMode ? 'dark' : 'light')
    setDarkMode({
      isDarkMode: !darkMode.isDarkMode,
      auto: false,
    })
  }

  const [accountIconAnchorElement, setAccountIconAnchorElement] =
    React.useState<HTMLElement | null>(null)
  const handleAccountMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    setAccountIconAnchorElement(event.currentTarget)
  }
  const handleAccountMenuClose = (): void => {
    setAccountIconAnchorElement(null)
  }

  return (
    <AppBar className={classes.appBar} color="default">
      <Toolbar>
        {withBackButton ? (
          <IconButton
            aria-label={t('goBackButton')}
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <Link href="/" passHref>
            <MuiLink variant="h5" color="textPrimary" underline="none" noWrap>
              {t('appTitle')}
            </MuiLink>
          </Link>
        )}

        {withSearch && <Search className={classes.grow} />}

        <Box sx={{ flexGrow: 1 }} />

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
          anchorEl={accountIconAnchorElement}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!accountIconAnchorElement}
          onClose={handleAccountMenuClose}
          keepMounted
        >
          {session ? (
            <MenuItem onClick={handleSignOut}>{t('logout')}</MenuItem>
          ) : (
            <div>
              <Link href="/signin" passHref>
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
