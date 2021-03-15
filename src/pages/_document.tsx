import { ServerStyleSheets } from '@material-ui/core/styles'
import {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  DocumentContext,
  DocumentInitialProps,
  NextComponentType,
  RenderPageResult,
} from 'next/dist/next-server/lib/utils'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { NextRouter } from 'next/router'
import React from 'react'

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html>
        <Head />

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
MyDocument.getInitialProps = async (
  context: DocumentContext,
): Promise<DocumentInitialProps> => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage

  context.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp: (
        App: NextComponentType<
          AppContextType<NextRouter>,
          AppInitialProps,
          AppPropsType<NextRouter, Record<string, unknown>>
        >,
      ) => (
        props: React.PropsWithChildren<
          AppPropsType<NextRouter, Record<string, unknown>>
        >,
      ): React.ReactElement => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(context)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
