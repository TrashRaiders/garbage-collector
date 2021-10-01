import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Animate from 'components/Animate'
import Layout from 'components/ShopDetailsLayout/Layout'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    width: '100%',
  },
  errorMessage: {
    paddingLeft: theme.spacing(2),
  },
}))

const FORM_SCHEMA = yup
  .object({
    name: yup
      .string()
      .required()
      .matches(/^[\w-]+$/)
      .min(6)
      .max(64),
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .matches(/^[\u0020-\u007E]+$/)
      .min(8)
      .max(64),
  })
  .required()

interface IFormInputs {
  name: string
  email: string
  password: string
}

function SignUpPage(): React.ReactElement {
  const classes = useStyles()

  const { t } = useTranslation('common')

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(FORM_SCHEMA),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  // const [signUp, result] = useSignUpMutation({ errorPolicy: 'all' })

  const onSubmit = async (data: IFormInputs): Promise<void> => {
    // eslint-disable-next-line no-console
    console.info('Here the user should be signed up', { data })
    Router.push('/')
  }

  const result = {
    loading: false,
    error: null,
  }

  const { loading, error } = result

  return (
    <Layout>
      <Container className={classes.container} maxWidth="xs">
        <Animate variant="zoomInOut">
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              {t('createYourAccount')}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                inputRef={register}
                type="text"
                name="name"
                autoComplete="name"
                label={t('name')}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors.name}
              />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }: { message: string }) => (
                  <Typography
                    className={classes.errorMessage}
                    variant="body2"
                    color="error"
                  >
                    {message}
                  </Typography>
                )}
              />

              <TextField
                inputRef={register}
                type="text"
                name="email"
                autoComplete="email"
                label={t('email')}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors.email}
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }: { message: string }) => (
                  <Typography
                    className={classes.errorMessage}
                    variant="body2"
                    color="error"
                  >
                    {message}
                  </Typography>
                )}
              />

              <TextField
                inputRef={register}
                type="password"
                name="password"
                autoComplete="current-password"
                label={t('password')}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!errors.password}
              />

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }: { message: string }) => (
                  <Typography
                    className={classes.errorMessage}
                    variant="body2"
                    color="error"
                  >
                    {message}
                  </Typography>
                )}
              />

              <Box mt={2} mb={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                >
                  {t('createAccount')}
                </Button>
              </Box>

              <Box mt={2} mb={1} fontSize="body2.fontSize">
                {`${t('alreadyHaveAnAccount?')} `}

                <Link href="/login" passHref>
                  <MuiLink component="a" color="primary">
                    {t('logIn')}
                  </MuiLink>
                </Link>
              </Box>

              <Typography variant="body2">
                {loading && `${t('loading')}...`}
              </Typography>

              <Typography variant="body2" color="error">
                {error}
              </Typography>
            </form>
          </Paper>
        </Animate>
      </Container>
    </Layout>
  )
}

export default SignUpPage
