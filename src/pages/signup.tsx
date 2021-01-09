import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Paper,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { TextField } from 'formik-material-ui'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import * as yup from 'yup'

import Layout from '../components/Layout'
import { useSignUpMutation } from '../graphql/generated/graphql'
import withApollo from '../lib/next-with-apollo'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
  },
}))

function SignUpPage(): React.ReactElement {
  const classes = useStyles()

  const { t } = useTranslation('common')

  const formSchema = yup
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
  type FormValues = yup.InferType<typeof formSchema>
  const initialFormValues: FormValues = {
    name: '',
    email: '',
    password: '',
  }

  const [signUp, result] = useSignUpMutation({ errorPolicy: 'all' })
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    await signUp({
      variables: { input: { ...values } },
    })
    setSubmitting(false)
  }

  const { loading, error, data } = result
  if (data) {
    Router.push('/login')
  }
  const errorMessages = error
    ? error.graphQLErrors.map((v) => JSON.stringify(v.message))
    : ''

  return (
    <Layout>
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            {t('createYourAccount')}
          </Typography>

          <Formik
            initialValues={initialFormValues}
            validationSchema={formSchema}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }): React.ReactElement => (
              <Form>
                <Field
                  component={TextField}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  label={t('name')}
                  required
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />

                <Field
                  component={TextField}
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  label={t('email')}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />

                <Field
                  component={TextField}
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  label={t('password')}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />

                <Box mt={1} mb={1}>
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
                  {error && errorMessages}
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Layout>
  )
}

const MyPage = withApollo(SignUpPage, {
  setAuthToken: process.env.APP_ENV !== 'test',
  useMock: process.env.USE_GRAPHQL_MOCK === 'true',
})

export default MyPage
