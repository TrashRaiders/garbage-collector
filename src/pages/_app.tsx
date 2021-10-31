import { ApolloProvider } from '@apollo/client'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import Error from 'next/error'
import { Provider as AuthProvider } from 'next-auth/client'
import React from 'react'

import CommonHead from 'components/CommonHead'
import CommonProviders from 'components/CommonProviders'
import PageTransition from 'components/PageTransition'
import createEmotionCache from 'lib/create-emotion-cache'
import { useApollo } from 'lib/next-with-apollo'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
}

function MyApp(props: MyAppProps): React.ReactElement {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    router,
    pageProps,
  } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  if (pageProps.error) {
    return (
      <CacheProvider value={emotionCache}>
        <Error
          statusCode={pageProps.error.statusCode}
          title={pageProps.error.message}
        />
      </CacheProvider>
    )
  }

  return (
    <CacheProvider value={emotionCache}>
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
    </CacheProvider>
  )
}

export default MyApp
