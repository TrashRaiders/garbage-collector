import { CssBaseline } from '@material-ui/core'
import React from 'react'

import { DarkModeProvider } from 'contexts/dark-mode'

import MyThemeProvider from './CommonProviders/MyThemeProvider'

interface CommonProviderProps {
  children?: React.ReactNode
}

CommonProviders.defaultProps = {
  children: null,
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
