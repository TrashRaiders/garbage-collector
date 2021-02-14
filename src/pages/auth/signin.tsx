import { Button } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/client'
import React from 'react'

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

export default function SignIn(props: ISignInProps): React.ReactNode {
  const { providers } = props

  if (!providers) {
    return null
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Signiiiiiiii in with {provider.name}
          </Button>
        </div>
      ))}
    </>
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
