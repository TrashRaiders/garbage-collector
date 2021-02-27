import { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'

import Page from '../pages'

Router.router = {
  /* eslint-disable @typescript-eslint/no-empty-function */
  prefetch: async () => {},
  push: async () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
} as never

export default { title: 'Pages/Index' }

// eslint-disable-next-line react/function-component-definition
export const page: NextPage = () => <Page />
