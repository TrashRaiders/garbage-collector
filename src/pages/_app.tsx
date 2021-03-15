import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Error from 'next/error'
import { Provider as AuthProvider } from 'next-auth/client'
import React from 'react'
import { useMount } from 'react-use'

import CommonHead from 'components/CommonHead'
import CommonProviders from 'components/CommonProviders'
import PageTransition from 'components/PageTransition'
import { useApollo } from 'lib/next-with-apollo'

function MyApp({ Component, pageProps, router }: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState)
  useMount(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.remove()
    }
  })

  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    )
  }

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider session={pageProps.session}>
        <CommonHead>
          <CommonProviders>
            <PageTransition pageID={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </CommonProviders>
        </CommonHead>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
