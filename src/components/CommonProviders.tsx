import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import { Provider as AuthProvider } from 'next-auth/client'
import React from 'react'

import MyThemeProvider from './CommonProviders/MyThemeProvider'

import { DarkModeProvider } from 'contexts/dark-mode'
import { useApollo } from 'lib/next-with-apollo'

interface CommonProviderProps {
  children?: React.ReactNode

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps?: any
}

function CommonProviders(props: CommonProviderProps): React.ReactElement {
  const { children, pageProps } = props
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider session={pageProps.session}>
        <DarkModeProvider>
          <MyThemeProvider>
            <CssBaseline />

            {children}
          </MyThemeProvider>
        </DarkModeProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default CommonProviders
