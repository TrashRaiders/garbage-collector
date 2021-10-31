import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Theme } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import { useShopSearch } from 'contexts/shop-search'

const PREFIX = 'Search'

const classes = {
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
}

const Root = styled('div')(({ theme }: { theme: Theme }) => ({
  [`&.${classes.search}`]: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxWidth: 400,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  [`& .${classes.searchIcon}`]: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [`& .${classes.inputRoot}`]: {
    color: 'inherit',
    width: '100%',
  },

  [`& .${classes.inputInput}`]: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

interface SearchProps {
  className: string
}

function Search(props: SearchProps): React.ReactElement {
  const { className } = props

  const { t } = useTranslation('common')
  const theme = useTheme()

  const [, setShopSearch] = useShopSearch()

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setShopSearch((previousOptions) => ({
      ...previousOptions,
      searchTerm: event.target.value,
    }))
  }

  return (
    <Root theme={theme} className={[classes.search, className].join(' ')}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        placeholder={`${t('search')}...`}
        classes={{
          // root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': t('search') }}
        onChange={handleChange}
      />
    </Root>
  )
}

export default Search
