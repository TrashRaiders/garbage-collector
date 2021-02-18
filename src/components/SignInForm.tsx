import { Container, Divider, Paper, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
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
  divider: {
    margin: theme.spacing(1),
  },
  typography: {
    margin: theme.spacing(1),
  },
  emailButton: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid',
    '&:hover': {
      backgroundColor: '#e5e5e5',
    },
  },
  googleButton: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid',
    '&:hover': {
      backgroundColor: '#e5e5e5',
    },
  },
  facebookButton: {
    margin: theme.spacing(1),
    backgroundColor: '#3b5998', // facebook blue
    color: 'white',
    '&:hover': {
      backgroundColor: ' #6d84b4', // facebook medium blue
    },
  },
  githubButton: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#191919',
    },
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
  providers: GetProvidersResponse
}

function SignInForm(props: ISignInFormProps): React.ReactElement {
  const { providers } = props
  const classes = useStyles()
  const { t } = useTranslation('common')

  const emailButtonProps: ISignInButtonProps = {
    className: classes.emailButton,
    icon: <MdEmail />,
    buttonText: t('SignEmailButton'),
  }

  const githubButtonProps: ISignInButtonProps = {
    className: classes.githubButton,
    icon: <FaGithub />,
    buttonText: t('SignGithubButton'),
  }

  const googleButtonProps: ISignInButtonProps = {
    className: classes.googleButton,
    icon: <FcGoogle />,
    buttonText: t('SignGoogleButton'),
  }

  const facebookButtonProps: ISignInButtonProps = {
    className: classes.facebookButton,
    icon: <FaFacebookF />,
    buttonText: t('SignFacebookButton'),
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography
          component="p"
          variant="body1"
          className={classes.typography}
        >
          {t('SignFormText')}{' '}
          <span role="img" aria-label="smiling face with sunglasses">
            😎
          </span>
        </Typography>

        <SignInButton {...emailButtonProps} />

        <Divider variant="middle" className={classes.divider} />

        {'google' in providers && <SignInButton {...googleButtonProps} />}

        {'facebook' in providers && <SignInButton {...facebookButtonProps} />}

        {'github' in providers && <SignInButton {...githubButtonProps} />}
      </Paper>
    </Container>
  )
}

export default SignInForm
