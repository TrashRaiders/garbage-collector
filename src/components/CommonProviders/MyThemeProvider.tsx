import { blueGrey, grey, lightGreen } from '@material-ui/core/colors'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'

import { DarkModeContext } from '../../contexts/dark-mode'

// Light Theme example: https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=455A64&primary.color=7CB342

function MyThemeProvider(props: {
  children: React.ReactNode
}): React.ReactElement {
  const { children } = props

  const [darkMode] = React.useContext(DarkModeContext)
  const theme = React.useMemo(() => {
    const { isDarkMode } = darkMode
    const themeProps: ThemeOptions = {
      palette: {
        type: isDarkMode ? 'dark' : 'light',
        primary: {
          main: isDarkMode ? lightGreen[200] : lightGreen[900],
          contrastText: isDarkMode ? '#030303' : '#FEFEFE',
        },
        secondary: {
          main: isDarkMode ? blueGrey[400] : blueGrey[700],
        },
        text: {
          primary: isDarkMode ? grey[100] : grey[900],
          secondary: isDarkMode ? grey[200] : grey[800],
        },
      },
    }
    if (isDarkMode && themeProps.palette) {
      themeProps.palette.background = {
        default: '#202020',
        paper: '#303030',
      }
    }
    return createMuiTheme(themeProps)
  }, [darkMode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MyThemeProvider
