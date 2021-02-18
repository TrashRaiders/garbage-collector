import { GetServerSideProps } from 'next'
import { getProviders } from 'next-auth/client'
import React from 'react'

import Layout from 'components/Layout'
import SignInForm from 'components/SignInForm'

// ---------------------
// copied from types in import('next-auth/client').getProviders()
interface GetProvidersResponse {
  [provider: string]: SessionProvider
}

interface SessionProvider {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string

  [key: string]: unknown
}
// ---------------------

interface ISignInProps {
  providers: GetProvidersResponse
}

// TODO currently not reachable... need to override api/auth/[...nextauth].tsx
function SigninPage(props: ISignInProps): React.ReactNode {
  const { providers } = props
  if (!providers) {
    return null
  }

  return (
    <Layout>
      <SignInForm {...props} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default SigninPage
