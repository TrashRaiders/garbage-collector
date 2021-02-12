import { CssBaseline } from '@material-ui/core'
import React from 'react'

import MyThemeProvider from './CommonProviders/MyThemeProvider'

import { DarkModeProvider } from 'contexts/dark-mode'

function CommonProviders({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  return (
    <DarkModeProvider>
      <MyThemeProvider>
        <CssBaseline />

        {children}
      </MyThemeProvider>
    </DarkModeProvider>
  )
}

export default CommonProviders
