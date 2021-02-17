import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { ISignInButtonProps, SignInButton } from './SignInButton'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(2),
  },
}))

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

interface ISignInFormProps {
  providers: GetProvidersResponse | null
}

function SignInForm(props: ISignInFormProps): React.ReactElement {
  const { providers } = props
  console.log(providers)
  const classes = useStyles()
  const { t } = useTranslation('common')

  const buttonProps = {
    className: classes.button,
  }

  const emailButtonProps: ISignInButtonProps = {
    ...buttonProps,
    icon: <MdEmail />,
    buttonText: t('SignEmailButton'),
  }

  const githubButtonProps: ISignInButtonProps = {
    ...buttonProps,
    icon: <FaGithub />,
    buttonText: t('SignGithubButton'),
  }

  const googleButtonProps: ISignInButtonProps = {
    ...buttonProps,
    icon: <FaGoogle />,
    buttonText: t('SignGoogleButton'),
  }

  const facebookButtonProps: ISignInButtonProps = {
    ...buttonProps,
    icon: <FaFacebookF />,
    buttonText: t('SignFacebookButton'),
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography component="p" variant="body1">
          Damit du den vollen Umfang unseres Systems nutzen kannst , müssen wir
          sicherstellen, dass Du Du bist.
        </Typography>

        <SignInButton {...emailButtonProps} />

        <Divider variant="middle" />

        <SignInButton {...googleButtonProps} />

        <SignInButton {...facebookButtonProps} />

        <SignInButton {...githubButtonProps} />
      </Paper>
    </Container>
  )
}

export default SignInForm
