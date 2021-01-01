import { InputBase, Theme, fade, makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import { ShopSearchContext } from '../../../lib/shop-search'

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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

  const classes = useStyles()
  const { t } = useTranslation('common')

  const [, setShopSearch] = React.useContext(ShopSearchContext)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setShopSearch((prevOptions) => ({
      ...prevOptions,
      searchTerm: e.target.value,
    }))
  }

  return (
    <div className={[classes.search, className].join(' ')}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        placeholder={`${t('search')}...`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': t('search') }}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search