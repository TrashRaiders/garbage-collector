import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

import createEmotionCache from 'lib/create-emotion-cache'

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (context: DocumentContext) => {
  const originalRenderPage = context.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  context.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      enhanceApp: (App: any) => (props: any) =>
        <App emotionCache={cache} {...props} />,
    })

  const initialProps = await Document.getInitialProps(context)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(
    (style: { key: string; ids: string[]; css: string }) => {
      return (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      )
    },
  )

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  }
}
