import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Error from 'next/error'
import React, { useEffect } from 'react'

import CommonHead from '../components/CommonHead'
import CommonProviders from '../components/CommonProviders'
import PageTransition from '../components/PageTransition'
import { useApollo } from '../lib/next-with-apollo'

/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps, router }: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.remove()
    }
  }, [])

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
      <CommonHead>
        <CommonProviders>
          <PageTransition pageID={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </CommonProviders>
      </CommonHead>
    </ApolloProvider>
  )
}
/* eslint-enable react/jsx-props-no-spreading */

export default MyApp
