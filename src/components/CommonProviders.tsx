import { CssBaseline } from '@material-ui/core'
import React from 'react'

import { AuthProvider } from '../contexts/auth'
import { DarkModeProvider } from '../contexts/dark-mode'

import MyThemeProvider from './CommonProviders/MyThemeProvider'

function CommonProviders({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  return (
    <DarkModeProvider>
      <MyThemeProvider>
        <AuthProvider>
          <CssBaseline />

          {children}
        </AuthProvider>
      </MyThemeProvider>
    </DarkModeProvider>
  )
}

export default CommonProviders
