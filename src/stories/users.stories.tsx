import { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'

import CommonHead from '../components/CommonHead'
import CommonProviders from '../components/CommonProviders'
import { authInstances } from '../lib/auth'
import withApollo from '../lib/next-with-apollo'
import Users from '../pages/users'

Router.router = {
  /* eslint-disable @typescript-eslint/no-empty-function */
  prefetch: async () => {},
  push: async () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
} as never
authInstances.default.setToken('dummy')
const Page = withApollo(Users, { useMock: true, setAuthToken: true })

export default { title: 'Pages/Users' }

export const page: NextPage = () => (
  <CommonHead>
    <CommonProviders>
      <Page />
    </CommonProviders>
  </CommonHead>
)
