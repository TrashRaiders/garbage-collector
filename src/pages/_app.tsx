import { ApolloProvider } from '@apollo/client'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import Error from 'next/error'
import { Provider as AuthProvider } from 'next-auth/client'
import React from 'react'
import { useMount } from 'react-use'

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
    pageProps,
    router,
    emotionCache = clientSideEmotionCache,
  } = props

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
        <CacheProvider value={emotionCache}>
          <CommonHead>
            <CommonProviders>
              <PageTransition pageID={router.route}>
                <Component {...pageProps} />
              </PageTransition>
            </CommonProviders>
          </CommonHead>
        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
