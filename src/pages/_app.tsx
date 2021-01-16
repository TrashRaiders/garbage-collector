// https://github.com/mui-org/material-ui/tree/master/examples/nextjs

import App from 'next/app'
import React from 'react'

import CommonHead from '../components/CommonHead'
import CommonProviders from '../components/CommonProviders'
import PageTransition from '../components/PageTransition'

/* eslint-disable react/jsx-props-no-spreading */
class MyApp extends App {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.remove()
    }
  }

  render(): React.ReactElement {
    const { Component, pageProps, router } = this.props

    return (
      <CommonHead>
        <CommonProviders>
          <PageTransition pageID={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </CommonProviders>
      </CommonHead>
    )
  }
}
/* eslint-enable react/jsx-props-no-spreading */

// const didMountRef = React.useRef(false);
// React.useLayoutEffect(() => {
//   if (!didMountRef.current) {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles?.parentElement) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//     didMountRef.current = true;
//   }
// });

export default MyApp
