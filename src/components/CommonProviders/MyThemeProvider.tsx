import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import React from 'react'

import { useDarkMode } from 'contexts/dark-mode'
import { theme as darkTheme } from 'lib/themes/dark'
import { theme as lightTheme } from 'lib/themes/light'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

// Light Theme example: https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=455A64&primary.color=7CB342

function MyThemeProvider(props: {
  children: React.ReactNode
}): React.ReactElement {
  const { children } = props

  const [darkMode] = useDarkMode()
  const theme = React.useMemo(() => {
    const { isDarkMode } = darkMode
    return createTheme(isDarkMode ? darkTheme : lightTheme)
  }, [darkMode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MyThemeProvider
