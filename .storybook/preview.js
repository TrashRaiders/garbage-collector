import { addDecorator, addParameters } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import Router from 'next/router'

addDecorator((storyFn) => (
  <RouterContext.Provider value={Router}>{storyFn()}</RouterContext.Provider>
))
