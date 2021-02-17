import React from 'react'

import CommonHead from './CommonHead'
import CommonProviders from './CommonProviders'
import SignInForm from './SignInForm'

export default { title: 'Components/SignInForm' }

export function Initial(): React.ReactElement {
  return (
    <CommonHead>
      <CommonProviders>
        <SignInForm />
      </CommonProviders>
    </CommonHead>
  )
}
