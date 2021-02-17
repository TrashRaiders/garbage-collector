import { Button } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/client'
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
  providers: GetProvidersResponse | null
}

// TODO currently not reachable... need to override api/auth/[...nextauth].tsx
function SigninPage(props: ISignInProps): React.ReactNode {
  const { providers } = props

  if (!providers) {
    return null
  }

  return (
    <Layout>
      <SignInForm />
    </Layout>
  )

  // return (
  //   <>
  //     {Object.values(providers).map((provider) => (
  //       <div key={provider.name}>
  //         <Button onClick={() => signIn(provider.id)}>
  //           Signiiiiiiii in with {provider.name}
  //         </Button>
  //       </div>
  //     ))}
  //   </>
  // )
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
