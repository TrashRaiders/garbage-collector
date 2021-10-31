import { Button } from '@mui/material'
import React from 'react'

export interface ISignInButtonProps {
  className: string
  icon: React.ReactNode
  buttonText: string
}

export function SignInButton(props: ISignInButtonProps): React.ReactElement {
  const { className, icon, buttonText } = props

  return (
    <Button className={className} startIcon={icon} fullWidth>
      {buttonText}
    </Button>
  )
}
