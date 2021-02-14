import type { AppProps } from 'next/app'
import Error from 'next/error'
import React from 'react'
import { useMount } from 'react-use'

import CommonHead from 'components/CommonHead'
import CommonProviders from 'components/CommonProviders'
import PageTransition from 'components/PageTransition'

function MyApp({ Component, pageProps, router }: AppProps): React.ReactElement {
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
    <CommonHead>
      <CommonProviders pageProps={pageProps}>
        <PageTransition pageID={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </CommonProviders>
    </CommonHead>
  )
}

export default MyApp
