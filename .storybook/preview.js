import { RouterContext } from 'next/dist/next-server/lib/router-context'
import Router from 'next/router'
import I18nProvider from 'next-translate/I18nProvider'
import { MockedProvider } from '@apollo/client/testing'

import CommonHead from '../src/components/CommonHead'
import CommonProviders from '../src/components/CommonProviders'
import commonEN from '../locales/en/common.json'
import commonDE from '../locales/de/common.json'

const namespaces = {
  en: {
    common: commonEN,
  },
  de: {
    common: commonDE,
  },
}

export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'US', title: 'English' },
        { value: 'de', right: 'DE', title: 'Deutsch' },
      ],
    },
  },
}

export const decorators = [
  (Story) => (
    <RouterContext.Provider value={Router}>
      <Story />
    </RouterContext.Provider>
  ),
  (Story, { globals: { locale } }) => (
    <I18nProvider
      lang={locale}
      namespaces={{ common: namespaces[locale].common }}
    >
      <Story />
    </I18nProvider>
  ),
  (Story) => (
    <CommonHead>
      <CommonProviders>
        <Story />
      </CommonProviders>
    </CommonHead>
  ),
]
