import { CssBaseline } from '@material-ui/core'
import React from 'react'

import { AuthProvider } from '../lib/auth'
import { DarkModeProvider } from '../lib/dark-mode'

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
