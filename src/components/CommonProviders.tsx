import { CssBaseline } from '@material-ui/core'
import React from 'react'

import MyThemeProvider from './CommonProviders/MyThemeProvider'

import { DarkModeProvider } from 'contexts/dark-mode'

interface CommonProviderProps {
  children?: React.ReactNode
}

function CommonProviders(props: CommonProviderProps): React.ReactElement {
  const { children } = props
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
