import { Box, Button } from '@material-ui/core'
import React from 'react'

export interface ISignInButtonProps {
  className: string
  icon: React.ReactNode
  buttonText: string
}

export function SignInButton(props: ISignInButtonProps): React.ReactElement {
  const { className, icon, buttonText } = props

  return (
    <Box className={className} clone>
      <Button startIcon={icon} fullWidth>
        {buttonText}
      </Button>
    </Box>
  )
}
