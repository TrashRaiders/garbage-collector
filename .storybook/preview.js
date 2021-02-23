import { addDecorator, addParameters } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import Router from 'next/router'
import I18nProvider from 'next-translate/I18nProvider'

import common from '../locales/en/common.json'

addDecorator((storyFn) => (
  <RouterContext.Provider value={Router}>{storyFn()}</RouterContext.Provider>
))

addDecorator((storyFn) => (
  <I18nProvider lang="en" namespaces={{ common }}>
    {storyFn()}
  </I18nProvider>
))
