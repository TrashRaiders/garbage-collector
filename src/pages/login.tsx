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
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Animate from 'components/Animate'
import Layout from 'components/Layout'

interface IFormInputs {
  name: string
  password: string
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
  },
  errorMessage: {
    paddingLeft: theme.spacing(2),
  },
}))

function LoginPage(): React.ReactElement {
  const classes = useStyles()

  const { t } = useTranslation('common')

  const formSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: IFormInputs): Promise<void> => {
    // eslint-disable-next-line no-console
    console.info('Here the user should be logged in', { data })
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
              {t('login')}
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
                render={({ message }) => (
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
                variant="outlined"
                type="password"
                name="password"
                autoComplete="current-password"
                label={t('password')}
                margin="normal"
                fullWidth
                error={!!errors.password}
              />

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
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
                  {t('logIn')}
                </Button>
              </Box>

              <Box mt={2} mb={1} fontSize="body2.fontSize">
                {`${t('dontHaveAnAccount?')} `}

                <Link href="/signup" passHref>
                  <MuiLink component="a" color="primary">
                    {t('createAnAccount')}
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

export default LoginPage
