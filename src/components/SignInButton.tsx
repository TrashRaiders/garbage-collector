import { Box, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { IconBaseProps, IconType } from 'react-icons/lib'

// const useStyles = makeStyles((theme: Theme) => ({
//   button: {
//     margin: theme.spacing(2),
//   },
// }))

export interface ISignInButtonProps {
  className: string
  icon: IconBaseProps
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
