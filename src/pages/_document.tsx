import { ServerStyleSheets } from '@material-ui/core/styles'
import { NextComponentType } from 'next'
import { AppInitialProps } from 'next/app'
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { NextRouter } from 'next/router'
import React from 'react'

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
MyDocument.getInitialProps = async (
  context: DocumentContext,
): Promise<DocumentInitialProps> => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp:
        (
          App: NextComponentType<
            AppContextType<NextRouter>,
            AppInitialProps,
            AppPropsType<NextRouter, Record<string, unknown>>
          >,
        ) =>
        (
          props: React.PropsWithChildren<
            AppPropsType<NextRouter, Record<string, unknown>>
          >,
        ): React.ReactElement =>
          sheets.collect(<App {...props} />),
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
