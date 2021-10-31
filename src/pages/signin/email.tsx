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
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Animate from 'components/Animate'
import Layout from 'components/ShopDetailsLayout/Layout'

const PREFIX = 'LoginPage'

const classes = {
  container: `${PREFIX}-container`,
  paper: `${PREFIX}-paper`,
  errorMessage: `${PREFIX}-errorMessage`,
}

const StyledLayout = styled(Layout)(({ theme }: { theme: Theme }) => ({
  [`& .${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.paper}`]: {
    padding: theme.spacing(4),
  },

  [`& .${classes.errorMessage}`]: {
    paddingLeft: theme.spacing(2),
  },
}))

interface FormValues {
  name: string
  password: string
}

const FORM_SCHEMA = yup
  .object({
    name: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

function LoginPage(): React.ReactElement {
  const { t } = useTranslation('common')
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: yupResolver(FORM_SCHEMA),
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: FormValues): Promise<void> => {
    // eslint-disable-next-line no-console
    console.info('Here the user should be logged in', { data })
    // TODO should not be here and use the read website URL
    signIn('github', { callbackUrl: 'http://localhost:3001/' })
  }

  const result = {
    loading: false,
    error: null,
  }

  const { loading, error } = result

  return (
    <StyledLayout theme={theme}>
      <Container className={classes.container} maxWidth="xs">
        <Animate variant="zoomInOut">
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              {t('login')}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('name')}
                type="text"
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
                {...register('password')}
                variant="outlined"
                type="password"
                autoComplete="current-password"
                label={t('password')}
                margin="normal"
                fullWidth
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
    </StyledLayout>
  )
}

export default LoginPage
