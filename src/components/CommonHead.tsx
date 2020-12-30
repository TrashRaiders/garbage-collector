import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function CommonHead({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('appTitle')}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content={t('appTitle')} />
      </Head>
      {children}
    </>
  )
}

export default CommonHead
