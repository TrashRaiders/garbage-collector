import React from 'react'

import SignInForm from './SignInForm'

export default { title: 'Components/SignInForm' }

export function Initial(): React.ReactElement {
  const signInFormProps = {
    providers: {
      google: {
        id: 'google',
        name: 'Google',
        type: 'oauth',
        signinUrl: 'http://localhost:3001/api/auth/signin/google',
        callbackUrl: 'http://localhost:3001/api/auth/callback/google',
      },
      github: {
        id: 'github',
        name: 'GitHub',
        type: 'oauth',
        signinUrl: 'http://localhost:3001/api/auth/signin/github',
        callbackUrl: 'http://localhost:3001/api/auth/callback/github',
      },
      facebook: {
        id: 'facebook',
        name: 'Facebook',
        type: 'oauth',
        signinUrl: 'http://localhost:3001/api/auth/signin/facebook',
        callbackUrl: 'http://localhost:3001/api/auth/callback/facebook',
      },
    },
  }

  return <SignInForm {...signInFormProps} />
}
